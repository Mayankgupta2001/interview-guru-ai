import { groq } from '@/lib/groq';
import { NextResponse } from 'next/server';

type EvaluationResult = {
  score: number;
  strengths: string[];
  improvements: string[];
  better_answer: string;
  hindi_tip: string;
};

const SYSTEM_PROMPT = `You are an expert Indian interview coach.\nEvaluate the given interview answer and respond ONLY in this exact JSON format with no other text:\n{\n  'score': <number 1-10>,\n  'strengths': ['strength1', 'strength2'],\n  'improvements': ['improvement1', 'improvement2'],\n  'better_answer': 'A better version of the answer',\n  'hindi_tip': 'Ek helpful tip Hindi mein'\n}`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const question = String(body.question || '').trim();
    const answer = String(body.answer || '').trim();

    if (!question || !answer) {
      return NextResponse.json({ error: 'Question or answer missing' }, { status: 400 });
    }

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        {
          role: 'user',
          content: `Question: ${question}\nAnswer: ${answer}\nEvaluate this answer and give JSON response only.`,
        },
      ],
      max_tokens: 800,
      temperature: 0.3,
    });

    const rawContent = completion.choices?.[0]?.message?.content || '';
    let parsed: EvaluationResult;

    try {
      let cleaned = rawContent.trim();
      const start = cleaned.indexOf('{');
      const end = cleaned.lastIndexOf('}');
      if (start !== -1 && end !== -1 && start < end) {
        cleaned = cleaned.slice(start, end + 1);
      }
      // Normalize single quotes to JSON double quotes for robust parsing of the prompt format
      cleaned = cleaned.replace(/'/g, '"');

      parsed = JSON.parse(cleaned) as EvaluationResult;
      if (typeof parsed.score !== 'number' || !Array.isArray(parsed.strengths)) {
        throw new Error('Invalid structure');
      }
    } catch (parseErr) {
      return NextResponse.json(
        {
          score: 0,
          strengths: [],
          improvements: [],
          better_answer: 'Unable to parse response from AI. Please try again.',
          hindi_tip: 'Response parsing error hui. Dobara try karein.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(parsed);
  } catch (error) {
    return NextResponse.json({ error: 'Kuch gadbad hui! Dobara try karo.' }, { status: 500 });
  }
}
