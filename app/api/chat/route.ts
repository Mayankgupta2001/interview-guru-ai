import { groq, SYSTEM_PROMPT } from '@/lib/groq';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message, category, language } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message required' }, { status: 400 });
    }

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: message }
      ],
      max_tokens: 600,
      temperature: 0.7,
    });

    const reply = completion.choices[0].message.content;

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({ error: 'Kuch gadbad hui! Dobara try karo.' }, { status: 500 });
  }
}