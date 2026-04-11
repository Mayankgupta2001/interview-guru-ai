export interface BlogPost {
  slug: string
  title: string
  description: string
  category: string
  categoryColor: string
  icon: string
  date: string
  readTime: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'interview-mein-kya-poochha-jata-hai',
    title: 'Job Interview में क्या पूछा जाता है — 50 Common Questions और जवाब',
    description: 'HR interview, technical interview और group discussion में सबसे ज्यादा पूछे जाने वाले सवाल और उनके जवाब हिंदी में।',
    category: 'Interview Tips',
    categoryColor: 'bg-purple-100 text-purple-700',
    icon: '🎯',
    date: '8 अप्रैल 2025',
    readTime: '8 मिनट',
    content: `
## Interview में सबसे ज्यादा पूछे जाने वाले सवाल

हर interview में कुछ सवाल जरूर पूछे जाते हैं। इन्हें पहले से तैयार करें।

## HR Interview Questions

### 1. Tell me about yourself

यह सबसे पहला और सबसे important सवाल है।

**बेहतरीन जवाब structure:**
- शुरुआत: नाम, education, background
- मध्य: experience, skills, achievements
- अंत: यह job क्यों चाहते हैं

### 2. What are your strengths?

**अच्छे जवाब:**
- ✅ मैं team में अच्छा काम करता हूँ
- ✅ मैं deadline से पहले काम पूरा करता हूँ
- ✅ मैं नई चीजें जल्दी सीखता हूँ
- ❌ मैं बहुत मेहनती हूँ — यह generic है

### 3. What are your weaknesses?

**Trick:** ऐसी weakness बताएं जो positive भी हो।
- मैं perfectionist हूँ — काम में कोई गलती नहीं चाहता
- मैं कभी-कभी बहुत detail में चला जाता हूँ

### 4. Why do you want this job?

Company के बारे में research करें और specific बताएं।

### 5. Where do you see yourself in 5 years?

- मैं अपने field में expert बनना चाहता हूँ
- मैं team lead की position तक पहुँचना चाहता हूँ

## Technical Interview Tips

### Problem Solving Approach:
1. **Clarify** — सवाल दोबारा पूछें
2. **Think** — 2-3 approaches सोचें
3. **Explain** — बोलते जाएं
4. **Code** — साफ code लिखें
5. **Test** — खुद test करें

## Salary Negotiation

- पहले offer आने दें, खुद मत पूछें
- Market rate research करें — Glassdoor, LinkedIn
- Range दें, fixed number नहीं

## Interview के बाद

- Thank you email भेजें — 24 घंटे के अंदर
- LinkedIn पर connect करें
- Follow up करें — 1 हफ्ते बाद

📞 InterviewGuru AI से practice करें — बिल्कुल मुफ़्त!
    `,
  },
  {
    slug: 'resume-kaise-banaye',
    title: 'Professional Resume कैसे बनाएं — ATS Friendly Format 2025',
    description: 'Job पाने वाला resume कैसे बनाएं। ATS क्या है, format कैसा हो, क्या लिखें क्या नहीं — हिंदी में पूरी गाइड।',
    category: 'Resume Tips',
    categoryColor: 'bg-blue-100 text-blue-700',
    icon: '📄',
    date: '7 अप्रैल 2025',
    readTime: '6 मिनट',
    content: `
## Professional Resume — 2025 Guide

एक अच्छा resume आपको interview तक पहुँचाता है।

## ATS क्या है?

ATS (Applicant Tracking System) — Companies का software जो resumes filter करता है।

**80% resumes ATS में reject हो जाते हैं** — इसलिए ATS-friendly resume जरूरी है।

## ATS-Friendly Resume के Rules

- ✅ Simple font — Arial, Calibri, Times New Roman
- ✅ Standard headings — Experience, Education, Skills
- ✅ Keywords job description से लें
- ❌ Tables, columns, graphics मत डालें
- ❌ Header/Footer में important info मत डालें

## Resume Structure

### 1. Contact Information
नाम, Email, Phone, LinkedIn, City

### 2. Professional Summary (3-4 lines)
5 साल का experience Field में। Key Skills में expertise।

### 3. Work Experience

| Field | Detail |
|-------|--------|
| Company | Company Name |
| Title | Job Title |
| Duration | Start - End |
| Achievement | Numbers के साथ |

### 4. Education
Degree, College, Year, CGPA

### 5. Skills
Technical और Soft Skills दोनों

## Common Resume Mistakes

| गलती | सही तरीका |
|------|-----------|
| Objective statement | Professional Summary |
| References available | Remove करें |
| Photo डालना | India में avoid करें |
| Spelling mistakes | Grammarly use करें |

## Fresher Resume Tips

Experience नहीं है तो:
- ✅ Projects highlight करें
- ✅ Internships डालें
- ✅ Certifications — Coursera, Udemy
- ✅ College achievements
- ✅ Volunteer work

📞 InterviewGuru AI से resume review कराएं — Free!
    `,
  },
  {
    slug: 'government-job-interview-tips',
    title: 'सरकारी नौकरी Interview की तैयारी — SSC, Bank, Railway 2025',
    description: 'SSC CGL, Bank PO, Railway NTPC के interview में क्या पूछा जाता है। GK, current affairs, personality test की तैयारी।',
    category: 'Sarkari Naukri',
    categoryColor: 'bg-green-100 text-green-700',
    icon: '🏛️',
    date: '6 अप्रैल 2025',
    readTime: '7 मिनट',
    content: `
## सरकारी नौकरी Interview — पूरी तैयारी

SSC, Bank, Railway — इन सबके interview की तैयारी अलग होती है।

## SSC CGL Interview

SSC CGL में अब interview नहीं होता — सिर्फ Document Verification होती है।

**जरूरी दस्तावेज:**
- ✅ 10th, 12th, Graduation marksheet
- ✅ Category certificate — OBC/SC/ST
- ✅ आधार कार्ड
- ✅ Passport size photos

## Bank PO Interview

### क्या पूछा जाता है?

**Banking Knowledge:**
- RBI क्या है? Governor कौन हैं?
- Repo Rate, Reverse Repo Rate क्या है?
- NPA क्या होता है?
- UPI, NEFT, RTGS का अंतर?

**Current Affairs:**
- पिछले 6 महीने की banking news
- Budget highlights
- Government schemes

### Bank Interview की तैयारी
- The Hindu और Economic Times पढ़ें
- Banking Awareness की book पढ़ें
- Mock interviews दें

## Common Government Interview Tips

### Dress Code:
- ✅ Formal कपड़े — White shirt, Dark trouser
- ✅ Clean shoes, combed hair
- ❌ Jeans, t-shirt, casual wear

### Body Language:
- ✅ Straight बैठें
- ✅ Eye contact रखें
- ❌ Nervous मत दिखें

### जवाब देते समय:
- हिंदी या English — जो comfortable हो
- Sir/Ma'am से address करें
- I don't know कहना ठीक है

## Important GK 2025

| Topic | Detail |
|-------|--------|
| RBI Governor | Sanjay Malhotra |
| PM India | Narendra Modi |
| Budget 2025 | Key highlights जानें |

📞 InterviewGuru AI से Mock Interview दें — Free!
    `,
  },
  {
    slug: 'fresher-job-interview-tips',
    title: 'Fresher Job Interview Tips — पहली नौकरी के लिए तैयारी',
    description: 'College के बाद पहला interview कैसे crack करें। कोई experience नहीं है तो क्या बोलें। HR को impress करने के तरीके।',
    category: 'Fresher Tips',
    categoryColor: 'bg-yellow-100 text-yellow-700',
    icon: '🎓',
    date: '5 अप्रैल 2025',
    readTime: '6 मिनट',
    content: `
## Fresher Interview — पूरी गाइड

पहली job मिलना मुश्किल लगता है — सही तैयारी से आसान हो जाता है।

## Fresher से ज्यादा पूछे जाने वाले सवाल

### 1. Experience नहीं है — आप क्यों join करें?

College में projects और internship का जिक्र करें। जल्दी सीखने की बात कहें।

### 2. Salary Expectation क्या है?

Industry standard के हिसाब से बताएं। Growth और सीखना ज्यादा important है।

## Fresher के लिए Resume

### Projects Section जरूरी है:
- Project का नाम
- Technologies used
- क्या बनाया — short में
- GitHub link

### Certifications जरूर डालें:
- ✅ Google Digital Marketing
- ✅ Coursera Python
- ✅ HackerRank SQL
- ✅ AWS Cloud Practitioner

## Interview से पहले

### Company Research:
- Website पढ़ें — Products, Services, Mission
- Glassdoor पर reviews देखें
- Recent news Google करें

### Interview के दिन:
- 15 मिनट पहले पहुँचें
- ID proof साथ रखें
- Resume की 3-4 copies
- Notebook और pen

## जो Freshers गलती करते हैं

| गलती | सही तरीका |
|------|-----------|
| Anything is fine | Specific role बताएं |
| बहुत जल्दी बोलना | Slow और clear बोलें |
| Questions नहीं पूछना | 2-3 smart questions पूछें |

## Interview के अंत में पूछें

- इस role में पहले 90 दिन कैसे होंगे?
- Team का size क्या है?
- Growth opportunities क्या हैं?

📞 InterviewGuru AI से mock practice करें — Free!
    `,
  },
  {
    slug: 'group-discussion-tips',
    title: 'Group Discussion कैसे crack करें — Tips और Topics 2025',
    description: 'Group Discussion में कैसे बोलें, कैसे शुरू करें, क्या करें क्या नहीं। MBA, Bank, PSU के GD के लिए complete guide।',
    category: 'GD Tips',
    categoryColor: 'bg-red-100 text-red-700',
    icon: '👥',
    date: '4 अप्रैल 2025',
    readTime: '5 मिनट',
    content: `
## Group Discussion — Complete Guide

GD में आपकी communication, leadership और knowledge evaluate होती है।

## GD में क्या देखा जाता है?

- ✅ Communication skills
- ✅ Leadership quality
- ✅ Knowledge of topic
- ✅ Listening skills
- ✅ Team player behavior
- ✅ Body language

## GD में कैसे शुरू करें?

### Opening के तरीके:

1. **Definition से:** आज हम Topic पर बात करेंगे। इसका मतलब है...
2. **Statistics से:** एक report के अनुसार, भारत में...
3. **Quote से:** जैसा किसी ने कहा था...
4. **Question से:** क्या हमने कभी सोचा है कि...

## GD में क्या करें?

- ✅ शुरुआत में बोलने की कोशिश करें
- ✅ Points numbered form में दें
- ✅ दूसरों की बात सुनें और add करें
- ✅ Group को सही direction दें
- ✅ Summarize करने की कोशिश करें

## GD में क्या नहीं करें?

- ❌ दूसरों को बीच में मत रोकें
- ❌ Aggressive मत हों
- ❌ बहुत ज्यादा dominate मत करें
- ❌ Off-topic मत जाएं
- ❌ चुप मत बैठें

## 2025 के Hot GD Topics

### Technology:
- AI से jobs खत्म होंगी या नहीं?
- Social Media — वरदान या अभिशाप?
- Digital India की सच्चाई

### Economy:
- Make in India कितना सफल?
- Startup India का भविष्य

### Social:
- महिला आरक्षण — जरूरी या नहीं?
- One Nation One Election
- NEP 2020 — शिक्षा में बदलाव

## GD Summary कैसे करें?

हमारी discussion में X, Y, Z points आए। कुल मिलाकर Conclusion।

📞 InterviewGuru AI से GD practice करें — Free!
    `,
  },
  {
    slug: 'linkedin-profile-kaise-banaye',
    title: 'LinkedIn Profile कैसे बनाएं — Job पाने वाली Profile 2025',
    description: 'LinkedIn पर recruiters को attract करने वाली profile कैसे बनाएं। Headline, Summary, Skills — step by step हिंदी में।',
    category: 'Career Tips',
    categoryColor: 'bg-indigo-100 text-indigo-700',
    icon: '💼',
    date: '3 अप्रैल 2025',
    readTime: '5 मिनट',
    content: `
## LinkedIn Profile — Job पाने की चाबी

LinkedIn पर 90% recruiters candidates को search करते हैं।

## Profile Picture

- ✅ Professional photo — formal कपड़े
- ✅ Clear face — smile के साथ
- ✅ Plain background
- ❌ Selfie नहीं
- ❌ Group photo नहीं

## Headline — सबसे important

Default: Student at XYZ College — यह weak है।

**बेहतर headlines:**
- Python Developer — Django — REST API — Open to Work
- MBA Finance — Investment Banking — CFA Level 1
- Digital Marketer — SEO — Google Ads — 3 Years Experience

## About Section

3-5 lines में:
- आप कौन हैं?
- क्या करते हैं या करना चाहते हैं?
- Top 3 skills?
- Contact कैसे करें?

## Experience Section

- Job title, company, duration डालें
- Bullet points में achievements लिखें
- Numbers use करें

## Skills Section

- Top 5 skills profile में दिखती हैं
- Endorsements माँगें colleagues से
- Skill assessments दें — LinkedIn badge मिलता है

## Connections बढ़ाएं

- ✅ College professors, batchmates
- ✅ Internship colleagues
- ✅ Industry professionals
- ✅ Recruiters से directly connect करें

## Job Search Tips

- Open to Work frame लगाएं
- Job alerts set करें
- Easy Apply use करें

## Content Post करें

- Industry articles share करें
- Achievements celebrate करें
- Projects showcase करें

| Action | Result |
|--------|--------|
| Photo add करना | 21x ज्यादा views |
| Active रहना | 2x ज्यादा job offers |
| 500+ connections | ज्यादा credibility |

📞 InterviewGuru AI से interview practice करें — Free!
    `,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}