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
  // Yeh 6 naye articles existing blogPosts array mein ADD karo
// app/blog/_posts/index.ts mein existing array ke end mein paste karo (closing ] se pehle)

  {
    slug: 'data-science-interview-questions',
    title: 'Data Science Interview Questions — Top 50 Questions 2025',
    description: 'Data Science, Machine Learning, Python interview mein kya poochha jaata hai. Statistics, ML algorithms, SQL — puri preparation guide.',
    category: 'Technical Interview',
    categoryColor: 'bg-blue-100 text-blue-700',
    icon: '📊',
    date: '9 अप्रैल 2025',
    readTime: '8 मिनट',
    content: `
## Data Science Interview — पूरी तैयारी

Data Science ek high-paying field hai. Interview mein technical aur practical dono knowledge check hoti hai.

## Statistics Questions

### 1. Mean, Median, Mode mein fark?
- Mean: sabka average
- Median: beech ki value
- Mode: sabse zyada aane wali value

Skewed data mein Median better hai.

### 2. Normal Distribution kya hai?
- Bell curve shape
- Mean = Median = Mode
- 68-95-99.7 rule

### 3. P-value kya hai?
- Null hypothesis reject karne ka probability
- P < 0.05 = statistically significant
- Chhota P-value = strong evidence

## Machine Learning Questions

### 4. Overfitting kaise rokein?
- Cross-validation use karein
- Regularization — L1, L2
- More training data
- Dropout (neural networks mein)

### 5. Bias-Variance Tradeoff?
- High Bias = Underfitting — model simple hai
- High Variance = Overfitting — model complex hai
- Balance banana padta hai

### 6. Classification vs Regression?

| Type | Output | Example |
|------|--------|---------|
| Classification | Category | Spam/Not Spam |
| Regression | Number | House Price |

### 7. Random Forest kya hai?
- Multiple decision trees
- Each tree different data pe train hoti hai
- Voting se final answer

### 8. Gradient Descent?
- Minimum loss dhundne ka method
- Learning rate important hai
- Batch, Stochastic, Mini-batch

## Python Questions

### 9. List vs Tuple vs Set?

| Structure | Mutable | Ordered | Duplicates |
|-----------|---------|---------|-----------|
| List | Yes | Yes | Yes |
| Tuple | No | Yes | Yes |
| Set | Yes | No | No |

### 10. Lambda function?
- Anonymous function
- f = lambda x: x*2
- Map, filter ke saath use hoti hai

## SQL Questions

### 11. INNER JOIN vs LEFT JOIN?
- INNER: dono tables mein match hone wale rows
- LEFT: left table ke sabhi rows + match wale right rows

### 12. GROUP BY vs HAVING?
- GROUP BY: rows group karta hai
- HAVING: groups ko filter karta hai (WHERE groups ke liye)

## Practical Tips

- ✅ Kaggle competitions participate karein
- ✅ Projects GitHub pe rakho
- ✅ Portfolio banao — 3-4 end-to-end projects
- ✅ Business problem samajhne ki koshish karo

📞 InterviewGuru AI se mock practice karein — Free!
    `,
  },
  {
    slug: 'salary-negotiation-tips',
    title: 'Salary Negotiation कैसे करें — Job Offer पर ज्यादा Salary कैसे मांगें',
    description: 'Salary negotiate karna seekho. Pehli naukri se lekar experience ke baad — kitna maangein, kaise maangein, kya na bolein. Hindi mein.',
    category: 'Career Tips',
    categoryColor: 'bg-indigo-100 text-indigo-700',
    icon: '💰',
    date: '9 अप्रैल 2025',
    readTime: '5 मिनट',
    content: `
## Salary Negotiation — क्यों जरूरी है?

Research से पता चला है कि जो लोग negotiate नहीं करते वो जीवन में ₹50 लाख+ कम कमाते हैं।

## Negotiation से पहले Research करें

- Glassdoor.com पर salary check करें
- LinkedIn salary insights देखें
- Naukri.com, AmbitionBox पर research करें
- Same role, same city, same experience

## कब करें Negotiation?

- ✅ Offer letter मिलने के बाद
- ✅ Verbal offer के बाद — लेकिन written से पहले confirm करें
- ❌ Interview के बीच में नहीं
- ❌ पहले round में नहीं

## कैसे करें?

### Step 1: Offer को thank करें
"Thank you for the offer. I'm very excited about this opportunity."

### Step 2: Time माँगें
"Can I have 24-48 hours to review the offer?"

### Step 3: Counter करें
"Based on my research and experience, I was expecting something in the range of X to Y. Is there flexibility?"

### Step 4: Justify करें
- Skills और experience बताएं
- Market rate research share करें
- Unique value proposition बताएं

## कितना माँगें?

- Current salary + 20-30% minimum
- Market rate से ज्यादा नहीं
- Range दें — "15-18 LPA" — fixed नहीं

## Total Package देखें

| Component | Check करें |
|-----------|-----------|
| Base salary | Monthly in-hand |
| Variable/Bonus | कितना guaranteed |
| Stock/ESOP | Vesting schedule |
| Insurance | Health + Life |
| Other benefits | WFH, meals, transport |

## Common Mistakes

- ❌ पहले खुद salary मत बताओ
- ❌ "I need" मत कहो — "I'm expecting" कहो
- ❌ Personal reasons मत बताओ
- ❌ Ultimatum मत दो
- ✅ Written mein confirm karo

## Negotiation Fail हो तो?

- Other benefits माँगो — WFH days, joining bonus
- Early appraisal cycle माँगो — 6 months
- Title upgrade माँगो

📞 InterviewGuru AI se practice karein — Free!
    `,
  },
  {
    slug: 'work-from-home-jobs-india',
    title: 'Work From Home Jobs 2025 — घर बैठे काम कैसे ढूंढें?',
    description: 'Genuine WFH jobs kahan milti hain. Freelancing, remote jobs, online work — scam se kaise bachein. India mein best platforms.',
    category: 'Career Tips',
    categoryColor: 'bg-indigo-100 text-indigo-700',
    icon: '🏠',
    date: '9 अप्रैल 2025',
    readTime: '6 मिनट',
    content: `
## Work From Home — Real Opportunities

India mein genuine WFH jobs hain lekin scams bhi bahut hain. Sahi jagah se dhundo.

## Best Platforms for Remote Jobs

### Indian Platforms:
- Naukri.com — Remote filter lagao
- LinkedIn — Remote jobs search
- Internshala — Freshers ke liye
- Freelancer.in — Freelance work
- Upwork — International clients

### International:
- Remote.co — 100% remote jobs
- We Work Remotely — Tech jobs
- Toptal — High-paying freelance
- Fiverr — Skill-based gigs

## Popular WFH Job Categories

| Category | Skills Needed | Average Pay |
|----------|--------------|-------------|
| Content Writing | Hindi/English writing | ₹15,000-40,000 |
| Data Entry | Typing, Excel | ₹10,000-20,000 |
| Customer Support | Communication | ₹15,000-25,000 |
| Web Development | HTML, CSS, JS | ₹30,000-80,000 |
| Digital Marketing | SEO, Social Media | ₹20,000-50,000 |
| Online Teaching | Subject knowledge | ₹20,000-60,000 |

## Scam से कैसे बचें?

### Red Flags:
- ❌ पहले पैसे देने होंगे
- ❌ "Easy money" promises
- ❌ WhatsApp पर offer
- ❌ Company website नहीं है
- ❌ Upfront registration fee

### Safe Signs:
- ✅ Company Glassdoor पर verified है
- ✅ Official email से contact
- ✅ Interview process है
- ✅ Contract मिलता है
- ✅ Payment terms clear हैं

## Freelancing कैसे शुरू करें?

1. Skill identify करें
2. Portfolio बनाएं — 2-3 sample projects
3. Profile Upwork/Fiverr पर बनाएं
4. छोटे projects से शुरू करें
5. Reviews बढ़ाएं
6. Rate gradually बढ़ाएं

## Online Teaching

- Unacademy, Vedantu — Part-time teaching
- Chegg Tutors — Doubt solving
- YouTube — Long term income
- Udemy — Course बनाओ

## Work From Home Setup

- ✅ Dedicated workspace
- ✅ Good internet — minimum 25 Mbps
- ✅ Headphone with mic
- ✅ Webcam (meetings के लिए)
- ✅ UPS for power cuts

📞 InterviewGuru AI se career guidance lein — Free!
    `,
  },
  {
    slug: 'bank-exam-preparation-guide',
    title: 'Bank Exam की तैयारी — IBPS, SBI PO/Clerk 2025 Complete Guide',
    description: 'Bank PO और Clerk exam ki taiyari kaise karein. Syllabus, best books, daily schedule, mock tests — puri strategy Hindi mein.',
    category: 'Sarkari Naukri',
    categoryColor: 'bg-green-100 text-green-700',
    icon: '🏦',
    date: '9 अप्रैल 2025',
    readTime: '7 मिनट',
    content: `
## Bank Exam — पूरी तैयारी Strategy

Bank PO और Clerk भारत की सबसे popular government jobs हैं।

## Exam Pattern

### IBPS PO:
- Prelims: English, Quantitative, Reasoning — 100 marks
- Mains: 5 sections + Descriptive — 225 marks
- Interview: 100 marks

### SBI PO:
- Prelims: 100 marks — 1 घंटा
- Mains: 250 marks + Descriptive
- GD + Interview: 50 marks

### IBPS Clerk:
- Prelims: English, Reasoning, Maths — 100 marks
- Mains: 5 sections — 190 marks (No Interview)

## Subject-wise Preparation

### Quantitative Aptitude:
- Simplification — रोज practice
- Number Series — patterns याद करें
- Data Interpretation — Speed बढ़ाएं
- Time & Work, Profit-Loss — formulas याद रखें

### Reasoning:
- Puzzle और Seating arrangement — daily practice
- Syllogism — rules याद रखें
- Coding-Decoding — patterns
- Blood relations — chart बनाओ

### English:
- Reading Comprehension — newspaper पढ़ो
- Error Detection — grammar rules
- Fill in the blanks — vocabulary
- Cloze Test — context समझो

### General Awareness:
- Last 6 months current affairs
- Banking awareness — RBI, terms
- Static GK — capitals, currencies

## Daily Study Schedule

| Time | Subject |
|------|---------|
| 6-8 AM | Maths practice |
| 9-11 AM | Reasoning |
| 2-4 PM | English |
| 5-6 PM | Current Affairs |
| 7-8 PM | Mock test review |

## Best Books

- Maths: R.S. Aggarwal
- Reasoning: M.K. Pandey
- English: Wren & Martin
- Banking Awareness: Arihant
- Current Affairs: Monthly magazines

## Mock Tests जरूरी हैं

- हफ्ते में 2-3 full mock test
- Testbook, Oliveboard, Adda247
- Sectional tests भी करें
- Analysis जरूर करें — गलतियाँ सीखें

📞 InterviewGuru AI se mock interview practice karein — Free!
    `,
  },
  {
    slug: 'career-change-tips',
    title: 'Career Change कैसे करें — नई Field में कैसे जाएं? 2025',
    description: 'Career switch karna chahte ho? IT se non-IT, government se private — planning kaise karein, skills kaise seekhein, gap explain kaise karein.',
    category: 'Career Tips',
    categoryColor: 'bg-indigo-100 text-indigo-700',
    icon: '🔄',
    date: '9 अप्रैल 2025',
    readTime: '6 मिनट',
    content: `
## Career Change — कब और कैसे?

Career change scary लगता है लेकिन सही planning से possible है।

## Career Change क्यों करें?

- ✅ Current field grow नहीं कर रही
- ✅ Passion कहीं और है
- ✅ Better salary चाहिए
- ✅ Work-life balance improve करना है
- ✅ Industry decline हो रही है

## Planning करें — 6 Steps

### Step 1: Self Assessment
- क्या skills हैं अभी?
- क्या करने में मजा आता है?
- कौन सी values important हैं?
- Personality test लें — 16Personalities.com

### Step 2: Target Field Research
- Job market कैसा है?
- Salary range क्या है?
- Skills gap क्या है?
- Informational interviews करें

### Step 3: Skills Build करें
- Online courses — Coursera, Udemy
- Certifications — industry recognized
- Projects बनाएं
- Volunteer work करें

### Step 4: Network बनाएं
- LinkedIn पर connect करें
- Industry events attend करें
- Alumni network use करें
- Mentors ढूंढें

### Step 5: Resume Update करें
- Transferable skills highlight करें
- New field के keywords add करें
- Cover letter में story बताएं

### Step 6: Apply करें
- Entry level से शुरू करें
- Startups में आसान है
- Referrals use करें

## Popular Career Switches

| From | To | Path |
|------|----|------|
| Non-IT | IT | Coding bootcamp |
| Engineer | MBA | GMAT + MBA |
| Sales | Marketing | Digital marketing course |
| Teacher | Corporate Training | L&D certification |

## Career Gap Explain करें

"I took time to upskill myself in [new field]. During this time I completed [courses] and built [projects]. I'm now ready to bring both my previous experience and new skills to this role."

## Financial Planning

- 6-12 months emergency fund रखें
- Salary cut के लिए ready रहें
- Part-time काम while transitioning

📞 InterviewGuru AI se interview practice karein — Free!
    `,
  },
  {
    slug: 'upsc-preparation-tips',
    title: 'UPSC की तैयारी कैसे करें — Topper Strategy और Study Plan 2025',
    description: 'UPSC Civil Services exam ki preparation kaise karein. Syllabus, NCERT books, optional subject, answer writing — puri strategy Hindi mein.',
    category: 'Sarkari Naukri',
    categoryColor: 'bg-green-100 text-green-700',
    icon: '🏛️',
    date: '9 अप्रैल 2025',
    readTime: '8 मिनट',
    content: `
## UPSC Civil Services — India का सबसे कठिन Exam

UPSC Prelims, Mains और Interview — तीन stages में होता है।

## Exam Pattern

### Prelims (Qualifying):
- GS Paper 1: 100 questions, 200 marks
- CSAT Paper 2: 80 questions, 200 marks (qualifying — 33%)
- Negative marking: 1/3

### Mains (Merit based):
- 9 papers
- Essay + 4 GS papers + 2 Optional papers
- 2 Language papers (qualifying)
- Total: 1750 marks

### Interview:
- 275 marks
- Personality test

## Preparation Strategy

### Phase 1: Foundation (6 months)
- NCERT Class 6-12 सब subjects पढ़ो
- Basic books: Laxmikant (Polity), Spectrum (History)
- Newspaper daily पढ़ो — The Hindu

### Phase 2: Advanced (6 months)
- Standard books पढ़ो
- Notes बनाओ
- Previous year questions solve करो

### Phase 3: Revision (3 months)
- Mock tests दो
- Answer writing practice
- Weak areas strengthen करो

## Subject-wise Books

| Subject | Book |
|---------|------|
| Polity | Laxmikant |
| History | Spectrum / Old NCERT |
| Geography | G.C. Leong + NCERT |
| Economy | Ramesh Singh |
| Science | NCERT |
| Current Affairs | The Hindu + Vision IAS |

## Optional Subject कैसे चुनें?

- जिसमें interest हो
- Graduation subject — familiar हो
- Scoring subject — past trends देखो
- Popular: PSIR, History, Sociology, Geography

## Answer Writing Practice

- रोज 2-3 questions लिखो
- Word limit follow करो
- Introduction, body, conclusion
- Diagrams और flowcharts use करो
- Peer review करो

## Common Mistakes

- ❌ बहुत ज्यादा sources
- ❌ Notes नहीं बनाना
- ❌ Mock test नहीं देना
- ❌ Current affairs ignore करना
- ❌ Answer writing practice नहीं

## Realistic Timeline

- Minimum 1-2 साल dedicated preparation
- 8-10 घंटे रोज study
- Consistency सबसे जरूरी

📞 InterviewGuru AI se mock interview practice karein — Free!
    `,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}