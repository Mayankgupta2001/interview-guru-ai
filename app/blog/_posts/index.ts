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
<section>
  <h2>Interview में सबसे ज्यादा पूछे जाने वाले सवाल — Technical, HR, और Behavioral</h2>

  <p>
    Mera पहला corporate interview TCS में था। मैं extremely nervous थी। तीन घंटे पहले से ही सोच रही थी कि कौन से सवाल पूछेंगे। लेकिन जब interview हुआ तो मुझे एहसास हुआ कि ज्यादातर सवाल predictable होते हैं। यही वजह है कि मैं यह article लिख रही हूँ — आपको इन common questions के लिए properly तैयार करने के लिए।
  </p>

  <p>
    हर company के interview में कुछ standard questions जरूर आते हैं। चाहे आप TCS में join करना चाहते हों या किसी startup में, ये बुनियादी सवाल हर जगह पूछे जाते हैं। अगर आप इन्हें अच्छे से तैयार करते हैं तो आपकी confidence automatically बढ़ जाएगी। इस article में मैं 50+ common questions share कर रही हूँ जो मैंने अपने 6 साल के career coaching experience में देखे हैं।
  </p>
</section>

<section>
  <h2>HR Interview के सबसे महत्वपूर्ण सवाल</h2>

  <h3>1. "Tell me about yourself" — सबसे महत्वपूर्ण सवाल</h3>

  <p>
    यह सबसे पहला सवाल आता है और इसी पर पूरा impression depend करता है। मैंने देखा है कि ज्यादातर candidates या तो अपना complete biography बता देते हैं या बहुत generic जवाब देते हैं।
  </p>

  <p>
    <strong>सही structure:</strong>
  </p>
  <ul>
    <li><strong>Opening (20 seconds):</strong> अपना नाम, educational qualification, current position बताएं। उदाहरण: "I'm Priya Sharma, I completed my B.Tech in Computer Science from Delhi University in 2022. Currently, I'm working as a Junior Software Engineer at Infosys for the past 1.5 years."</li>
    <li><strong>Middle (40 seconds):</strong> आपके relevant experience, key achievements, और skills। उदाहरण: "During my time at Infosys, मैंने Java और Spring Boot में 5+ projects काम किए हैं। मेरा सबसे proud achievement एक payment processing system बनाना था जिसने 30% processing time reduce किया।"</li>
    <li><strong>Closing (20 seconds):</strong> यह role आपको क्यों attract करता है। उदाहरण: "मुझे यह company और यह role specially आकर्षित करता है क्योंकि [company specific reason]।"</li>
  </ul>

  <p>
    <strong>Real example:</strong> एक day मैंने एक fresher को coaching दी जिसका opening line था: "Hi, I'm Raj, I like coding!" — बहुत generic था। मैंने उसे proper structure सिखाया और फिर उसका same interview में offer आ गया।
  </p>

  <h3>2. "What are your strengths?" — अपनी ताकत दिखाएं, लेकिन smartly</h3>

  <p>
    इस सवाल का जवाब देते समय company के job description के अनुसार tailor करना चाहिए। Generic strengths जैसे "मैं बहुत dedicated हूँ" या "मैं team player हूँ" से बचें।
  </p>

  <p>
    <strong>बेहतरीन approach:</strong>
  </p>
  <ul>
    <li>"मेरी सबसे बड़ी strength यह है कि मैं quickly adapt कर सकता हूँ। Infosys में मैंने अपने पहले 3 महीने में Java से Python switch किया और नए project में सफलतापूर्वक contribute किया।"</li>
    <li>"मैं problem-solving में बहुत अच्छा हूँ। चाहे technical issue हो या communication problem, मैं logical approach से सही solution निकालता हूँ। एक बार मेरे team के पास एक critical bug था जो production को down कर रहा था, मैंने 2 घंटे में उसे fix कर दिया।"</li>
    <li>"मैं continuous learner हूँ। हर 3 महीने में मैं एक नया skill या tool सीखता हूँ। अभी मैं Kubernetes और Docker में advance training ले रहा हूँ।"</li>
  </ul>

  <h3>3. "What are your weaknesses?" — Positive weakness बताएं</h3>

  <p>
    यह trick question है। आपको legitimate weakness बतानी चाहिए लेकिन यह weakness कुछ ऐसी होनी चाहिए जो आप address कर सकते हों या जो actually positive भी हो।
  </p>

  <p>
    <strong>Good answers:</strong>
  </p>
  <ul>
    <li>"मैं perfectionist हूँ जिससे कभी-कभी मैं एक task में बहुत ज्यादा time लगा देता हूँ। लेकिन मैंने सीखा है कि 'done' ज्यादा important है 'perfect' से। अब मैं time-boxing use करता हूँ।"</li>
    <li>"मैं code documentation में कभी-कभी detail miss कर देता हूँ क्योंकि मैं जल्दी अगले task पर जाना चाहता हूँ। पिछले 6 महीने में मैंने इसे deliberately improve किया है और अब मैं हर code के साथ comprehensive documentation लिखता हूँ।"</li>
    <li>"शुरुआत में मुझे public speaking से डर लगता था। लेकिन मैंने deliberately अपनी team meetings में ज्यादा बोलना शुरू किया और अब मैं confidently presentations दे देता हूँ।"</li>
  </ul>

  <p>
    <strong>जो answers avoid करें:</strong>
  </p>
  <ul>
    <li>❌ "मेरी कोई weakness नहीं है" — बहुत arrogant लगता है</li>
    <li>❌ "मैं कभी deadline miss नहीं करता" — unrealistic है</li>
    <li>❌ "मैं perfectionist हूँ" बिना किसी example के — बहुत generic है</li>
  </ul>

  <h3>4. "Why do you want to join our company?"</h3>

  <p>
    यह सवाल आपके interest और preparation को show करता है। Company के about आपको पता होना चाहिए।
  </p>

  <p>
    <strong>Research करें:</strong>
  </p>
  <ul>
    <li>Company की website देखें — mission, vision, values</li>
    <li>Recent news articles पढ़ें — क्या launch किया है, expansion कहाँ कर रहे हैं</li>
    <li>LinkedIn company page पर जाएं — recent posts, culture देखें</li>
    <li>Glassdoor पर employee reviews पढ़ें</li>
  </ul>

  <p>
    <strong>Sample answer:</strong>
  </p>
  <p>
    "मैं आपकी company को पिछले 2 साल से follow कर रही हूँ। मुझे खासकर आपके AI और machine learning initiatives बहुत impress कर रहे हैं। आपने हाल ही में जो new product launch किया है, वो industry को transform करने वाला है। मेरे technical background और passion से मैं इसे grow करने में significantly contribute कर सकती हूँ। साथ ही, मैंने आपकी company culture के बारे में सुना है जहाँ learning और innovation encourage होते हैं, जो मेरी values के perfectly align करता है।"
  </p>

  <h3>5. "Where do you see yourself in 5 years?"</h3>

  <p>
    Company को लगता है कि अगर आप बहुत ambitious हों तो आप जल्दी चले जाओगे, या अगर बहुत unambitious हों तो आप काम में focused नहीं होगे। Balanced answer दें।
  </p>

  <p>
    <strong>Good answer:</strong>
  </p>
  <p>
    "मेरे लिए 5 साल बहुत दूर के लिए एक exact plan बनाना मुश्किल है, लेकिन मेरा idea यह है कि मैं अपने technical skills को deepen करके एक technical lead या architect की position तक पहुँचना चाहूँ। मैं एक expert बनना चाहता हूँ न कि सिर्फ एक manager। यह company मुझे वो सब सीखने का opportunity दे सकती है जो मेरे growth के लिए जरूरी है।"
  </p>
</section>

<section>
  <h2>Technical Interview Questions</h2>

  <h3>Technical Interviews में Approach</h3>

  <p>
    Technical interviews में सिर्फ answer important नहीं होता, बल्कि <strong>आपकी thinking process भी important है।</strong> Interviewer आपको problem-solving करते हुए देखना चाहता है।
  </p>

  <p>
    <strong>सही approach:</strong>
  </p>
  <ol>
    <li><strong>Clarify करें:</strong> "तो अगर मैं समझा हूँ सही से... [problem को अपने शब्दों में दोबारा बताएं]"</li>
    <li><strong>Multiple approaches सोचें:</strong> "मेरे पास 3 approaches आ रहे हैं — पहला simple है लेकिन slow, दूसरा optimal है..."</li>
    <li><strong>Trade-offs explain करें:</strong> "यह solution O(n) time में काम करता है लेकिन O(n) space लेता है। अगर space ज्यादा important है तो हम यह approach use कर सकते हैं..."</li>
    <li><strong>Code while explaining:</strong> अपने code को explain करते रहें, silence में न रहें</li>
    <li><strong>Edge cases test करें:</strong> Empty array, negative numbers, duplicate entries — सब test करें</li>
  </ol>

  <h3>Common Technical Questions — Real Examples से सीखें</h3>

  <p>
    <strong>"Two Sum problem" — LeetCode easy level का classic problem:</strong>
  </p>

  <p>
    मुझे याद है जब मैंने Infosys के interview में यह problem दिया गया। मैंने first brute force approach दिया — हर element के लिए second element को search करना। फिर मैंने hash map approach दिया जो O(n) में solve होता है। Interviewer को वह second approach ज्यादा impressive लगा क्योंकि मैंने optimal thinking दिखाई।
  </p>

  <p>
    <strong>"Merge Two Sorted Arrays"</strong> — यह interview में often आता है और simple लगता है लेकिन edge cases से tricky हो जाता है। सही approach है two pointers use करना।
  </p>

  <p>
    Technical interview के लिए system design basics भी सीखें। छोटे products की design करने की practice करें — जैसे URL shortener, chat application, या social feed system।
  </p>
</section>

<section>
  <h2>Behavioral Interview Questions — STAR Method से Answer दें</h2>

  <h3>What की STAR Method?</h3>

  <p>
    STAR एक structured way है strong behavioral answers देने का:
  </p>
  <ul>
    <li><strong>S — Situation:</strong> Background क्या था?</li>
    <li><strong>T — Task:</strong> आपकी responsibility क्या थी?</li>
    <li><strong>A — Action:</strong> आपने क्या किया?</li>
    <li><strong>R — Result:</strong> क्या outcome आया?</li>
  </ul>

  <h3>"Tell me about a time when you failed" — इसका सही जवाब</h3>

  <p>
    यह question देखने के लिए है कि आप failures से कैसे सीखते हो।
  </p>

  <p>
    <strong>STAR format में answer:</strong>
  </p>

  <p>
    "<strong>Situation:</strong> मेरे पहले project के शुरुआत में, मैंने एक critical feature के requirements को properly समझा नहीं। <strong>Task:</strong> मुझे उस feature को implement करना था। <strong>Action:</strong> जब मैंने अपना code submit किया तो client को match नहीं किया। मैंने तुरंत अपनी goof-up admit की, client से clearly बात की कि क्या expect कर रहे हैं, और फिर दोबारा develop किया। साथ ही, मैंने एक checklist बनाई requirements को verify करने के लिए। <strong>Result:</strong> वह feature successfully deliver हुआ और उस client को काम पसंद आया। उस experience के बाद मेरी communication skills बहुत improve हुईं।"
  </p>

  <h3>"Tell me about a time when you worked with a difficult team member"</h3>

  <p>
    <strong>कभी भी negative न बोलें।</strong> Problem को diplomatically present करें और अपने role को highlight करें।
  </p>

  <p>
    "मेरे एक teammate को हमेशा मेरे schedule के साथ ध्यान नहीं रहता था और वो meeting के लिए देर से आता था। इससे project delays हो रहे थे। मैंने frustrate न होकर, उससे एक-एक बात हुई। पता चला कि उसके personal issues चल रहे थे। मैंने उसे support दिया और हमने एक better schedule बनाया जो दोनों के लिए काम करता था। टीम की productivity improve हुई और अब हम अच्छे colleagues हैं।"
  </p>
</section>

<section>
  <h2>Salary Discussion में क्या करें?</h2>

  <p>
    पहले interview में salary के बारे में खुद से मत पूछें। जब HR पूछे:
  </p>

  <ul>
    <li>आपकी current salary को पूरी detail के साथ बताएं — base + bonus + allowances</li>
    <li>Expected salary में 20-30% तक increase माँगने की गुंजाइश होती है</li>
    <li>Market research करें — Glassdoor, Payscale पर अपनी profile के लिए salary देखें</li>
    <li>Range दें — particular number नहीं। उदाहरण: "Based on my experience और market research, मैं 12-14 LPA expect कर रहा हूँ"</li>
  </ul>
</section>

<section>
  <h2>🌟 Meri Salah — My Personal Tips</h2>

  <p>
    अपने 6 साल के career coaching में मैंने hundreds of candidates के interviews में मदद की है। यहाँ मेरी top tips हैं:
  </p>

  <ul>
    <li><strong>Practice out loud:</strong> Bathroom में या अपने room में mirror के सामने जवाब दें। यह awkward लग सकता है लेकिन यह बहुत काम करता है। आप अपनी speech को improve कर पाएंगे।</li>
    <li><strong>Mock interviews लें:</strong> किसी को बुलाएं या friends के साथ practice करें। Real interview जैसा experience ही आपको prepare करेगा। हमारे साथ आप free mock interviews दे सकते हैं।</li>
    <li><strong>Company research करें:</strong> Interview से एक दिन पहले company की हर detail पढ़ लें। यह दिखाता है कि आप seriously interested हैं।</li>
    <li><strong>Questions पूछें:</strong> Interview के आखिर में "क्या कुछ questions हैं?" पूछा जाता है। हमेशा 2-3 intelligent questions पूछें। यह दिखाता है कि आप engaged हैं।</li>
    <li><strong>First impression का 80% पहले 2 मिनट में बन जाता है।</strong> तो handshake, eye contact, और confidence से शुरू करें।</li>
    <li><strong>Thank you email भेजें।</strong> Interview के 24 घंटे के अंदर एक personalized thank you email भेजें। इससे आप candidate की memory में रहते हो।</li>
  </ul>

  <p>
    याद रखें — interview एक two-way process है। Company आपको evaluate कर रही है, आप भी उन्हें evaluate कर सकते हो। Confidence से बात करें, लेकिन arrogant न बनें।
  </p>
</section>

<section>
  <h2>Interview के बाद क्या करें?</h2>

  <ul>
    <li>✅ Thank you email भेजें (24 घंटे में) — personalized हो</li>
    <li>✅ LinkedIn पर interviewer को connect करें (optional)</li>
    <li>✅ उन्हें follow up करें — 1 हफ्ते बाद (अगर कोई response न मिले)</li>
    <li>✅ Multiple offers के बाद, carefully decision लें — सिर्फ salary नहीं, growth भी देखें</li>
    <li>✅ Rejection मिले तो feedback माँगें — "क्या आप बता सकते हो कि मैं कहाँ improve कर सकता हूँ?"</li>
  </ul>
</section>

<section>
  <p style="text-align: center; margin-top: 40px; padding: 20px; background-color: #f0f9ff; border-radius: 8px;">
    <strong>Priya Sharma, Career Coach</strong><br/>
    6+ years की coaching experience से सैकड़ों candidates को successful interviews के लिए prepare किया है। TCS, Infosys, Amazon जैसे companies में working या recruitment करने वाले professionals के साथ काम करती हूँ।
  </p>
</section>
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
<section>
  <h2>Professional Resume कैसे बनाएं — ATS Friendly Format और Real Examples</h2>

  <p>
    क्या आप जानते हो कि हर दिन हजारों resumes Infosys, TCS, और Accenture जैसी companies में आते हैं, लेकिन 80% resumes एक computer के software से automatically reject हो जाते हैं? यह software का नाम है ATS (Applicant Tracking System)। इसी software को खुश करना आपके resume का पहला काम है।
  </p>

  <p>
    मेरे पास एक candidate आया था जिसका resume बहुत अच्छा लिख हुआ था लेकिन MS Word में creative formatting और graphics लगे हुए थे। ATS को यह समझ नहीं आया और उसका resume reject हो गया। फिर मैंने उसे एक simple, clean resume format दिया और उसी content को बिना graphics के reorganize किया। अब उसके पास 5 companies से interview calls आए। यह है ATS-friendly resume की ताकत।
  </p>

  <p>
    इस article में मैं share करूंगी कि एक winning resume कैसे बनाएं — step by step, examples के साथ, mistakes को avoid करते हुए।
  </p>
</section>

<section>
  <h2>ATS (Applicant Tracking System) को समझें</h2>

  <h3>ATS क्या है और यह क्यों important है?</h3>

  <p>
    ATS एक software है जो companies अपनी recruitment process को automate करने के लिए use करती हैं। यह software हजारों resumes को scan करता है, सही keywords find करता है, और best candidates को shortlist करता है। फिर human recruiters उन shortlisted candidates को review करते हैं।
  </p>

  <p>
    Statistically, 100 resumes में से सिर्फ 20 ATS को pass करते हैं। और उन 20 में से सिर्फ 5-10 actual shortlisted होते हैं। अगर आपका resume ATS-compatible नहीं है तो चाहे आप कितने भी qualified हों, आप interview तक पहुँच नहीं सकते।
  </p>

  <p>
    <strong>ATS किस चीज को पढ़ नहीं सकता:</strong>
  </p>
  <ul>
    <li>Graphics, images, या creative designs</li>
    <li>Tables और columns (special formatting में)</li>
    <li>Headers और footers में placed text</li>
    <li>Fancy fonts या unusual formatting</li>
    <li>PDF files जो image-based हों (scanned resume)</li>
    <li>Unusual file formats</li>
  </ul>

  <p>
    <strong>ATS को clear दिखता है:</strong>
  </p>
  <ul>
    <li>Simple formatting — bolding, italics, bullet points</li>
    <li>Standard fonts — Arial, Calibri, Times New Roman</li>
    <li>Proper section headings — Experience, Education, Skills</li>
    <li>Keywords जो job description में हैं</li>
    <li>.docx या .pdf format (simple PDF)</li>
  </ul>
</section>

<section>
  <h2>Resume का Perfect Structure — Section by Section</h2>

  <h3>1. Contact Information (Top of Resume)</h3>

  <p>
    यह सबसे important है क्योंकि recruiter को आपको contact करना है।
  </p>

  <p>
    <strong>क्या include करें:</strong>
  </p>
  <ul>
    <li>Full Name (बड़े font में, लेकिन bold)</li>
    <li>Professional Email (firstname.lastname@email.com)</li>
    <li>Phone Number (WhatsApp compatible हो तो better)</li>
    <li>LinkedIn Profile URL (बस profile, full long URL नहीं)</li>
    <li>City (optional, लेकिन helpful है)</li>
    <li>GitHub/Portfolio (अगर relevant हो)</li>
  </ul>

  <p>
    <strong>बुरे examples से बचें:</strong>
  </p>
  <ul>
    <li>❌ Email: party_lover@email.com —unprofessional दिखता है</li>
    <li>❌ Phone number के साथ "Call me anytime" — अजीब लगता है</li>
    <li>❌ Personal website जो outdated हो</li>
  </ul>

  <h3>2. Professional Summary (या Career Objective)</h3>

  <p>
    यह 3-4 lines होनी चाहिए, जिसमें आप बताएं:
  </p>
  <ul>
    <li>आप क्या करते हो / करना चाहते हो</li>
    <li>कितने साल का experience है</li>
    <li>आपकी key strengths क्या हैं</li>
    <li>क्या unique value दे सकते हो</li>
  </ul>

  <p>
    <strong>Good Example:</strong>
  </p>
  <p>
    "Experienced Software Engineer with 3+ years of expertise in Java, Spring Boot, and REST API development. Proven track record of delivering scalable solutions for fintech and e-commerce domains. Strong problem-solving skills and team collaboration abilities with a passion for clean code and continuous learning."
  </p>

  <p>
    <strong>Bad Example (बहुत generic):</strong>
  </p>
  <p>
    "Hardworking and dedicated professional seeking a challenging role to utilize my skills and grow in the organization."
  </p>

  <p>
    ध्यान दें — resume में keywords use करना बहुत जरूरी है। अगर job description में "Spring Boot" आ रहा है तो आपके resume में भी "Spring Boot" mention होना चाहिए। ATS exactly ये keywords search करता है।
  </p>

  <h3>3. Work Experience (सबसे important section)</h3>

  <p>
    यहाँ आप अपने achievements और impact दिखाते हो।
  </p>

  <p>
    <strong>Structure for each job:</strong>
  </p>
  <ul>
    <li>Job Title (बोल्ड)</li>
    <li>Company Name (बोल्ड)</li>
    <li>Duration in months/years</li>
    <li>3-5 key achievements — bullet points में</li>
  </ul>

  <p>
    <strong>Real Example (Fresher को कैसे लिखना चाहिए):</strong>
  </p>
  <p>
    "<strong>Junior Software Developer</strong>, Infosys, Bengaluru | Jun 2022 - Present<br/>
    • Developed 5+ RESTful APIs using Spring Boot, serving 100K+ daily requests with 99.9% uptime<br/>
    • Optimized database queries, reducing API response time by 45% using indexing and query optimization<br/>
    • Collaborated with frontend team to implement payment gateway integration for e-commerce platform<br/>
    • Mentored 2 junior developers and conducted code reviews to maintain quality standards<br/>
    • Participated in Agile sprints with 2-week iterations, delivering features on schedule
    "
  </p>

  <p>
    <strong>बुरा example:</strong>
  </p>
  <p>
    "मैंने अपनी company में coding का काम किया। मैंने websites बनाए। मेरे boss को मेरा काम पसंद आया।"
  </p>

  <p>
    ध्यान दें — <strong>numbers use करें!</strong> "improved performance", "reduced cost", "increased engagement", आदि। Statistics companies को impress करते हैं।
  </p>

  <h3>4. Education</h3>

  <p>
    <strong>Format:</strong>
  </p>
  <p>
    Degree, College Name, Graduation Year, CGPA (अगर 8+ हो तो include करें)
  </p>

  <p>
    <strong>Example:</strong>
  </p>
  <p>
    "B.Tech in Computer Science, Delhi Technological University | Graduated: May 2022 | CGPA: 8.2/10"
  </p>

  <h3>5. Skills Section</h3>

  <p>
    Skills को categories में organize करें:
  </p>
  <ul>
    <li><strong>Programming Languages:</strong> Java, Python, JavaScript, C++</li>
    <li><strong>Web Technologies:</strong> HTML, CSS, React, Node.js, Spring Boot</li>
    <li><strong>Databases:</strong> MySQL, MongoDB, PostgreSQL</li>
    <li><strong>Tools & Platforms:</strong> Git, Docker, Jenkins, AWS, Azure</li>
    <li><strong>Soft Skills:</strong> Communication, Leadership, Problem-solving, Team Collaboration</li>
  </ul>

  <p>
    <strong>Tip:</strong> Top 5-6 skills resume के top पर highlight करें क्योंकि ATS इसे specially देखता है।
  </p>

  <h3>6. Certifications और Achievements</h3>

  <p>
    अगर आपके पास हों तो add करें:
  </p>
  <ul>
    <li>Coursera, edX, Udemy certificates</li>
    <li>AWS Certified Solutions Architect</li>
    <li>Google Cloud certifications</li>
    <li>Hackathon wins या competitions</li>
    <li>Publications या open-source contributions</li>
  </ul>
</section>

<section>
  <h2>Common Resume Mistakes — इन्हें बिल्कुल avoid करें</h2>

  <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
    <tr style="background-color: #f5f5f5;">
      <th style="border: 1px solid #ddd; padding: 10px;">❌ गलती</th>
      <th style="border: 1px solid #ddd; padding: 10px;">✅ सही तरीका</th>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">Objective statement — "I want to work in a challenging environment..."</td>
      <td style="border: 1px solid #ddd; padding: 10px;">Profile/Professional Summary — अपनी achievements का summary</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">Photo लगाना (India में)</td>
      <td style="border: 1px solid #ddd; padding: 10px;">Photo बिना resume भेजें (international के लिए photo needed)</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">"References available upon request"</td>
      <td style="border: 1px solid #ddd; padding: 10px;">यह line remove करें — समझा जाता है</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">Spelling mistakes और bad grammar</td>
      <td style="border: 1px solid #ddd; padding: 10px;">Grammarly से check करें — professional हो</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">अजीब email address — "coolkid@", "lucky07@"</td>
      <td style="border: 1px solid #ddd; padding: 10px;">Professional email — firstname.lastname@email.com</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">बिना responsibility का responsibility — "Worked in HR team"</td>
      <td style="border: 1px solid #ddd; padding: 10px;">Impact के साथ — "Processed 50+ recruitment cases, achieved 15% faster hiring"</td>
    </tr>
  </table>
</section>

<section>
  <h2>Fresher के लिए Special Tips</h2>

  <p>
    अगर आपके पास professional experience नहीं है, तो इन्हें include करें:
  </p>

  <h3>Projects Section</h3>

  <ul>
    <li>College projects को professionally describe करें</li>
    <li>GitHub links include करें</li>
    <li>किस technology में बनाया — mention करें</li>
  </ul>

  <p>
    <strong>Example:</strong>
  </p>
  <p>
    "<strong>E-commerce Platform</strong> | React, Node.js, MongoDB<br/>
    • Built full-stack e-commerce website with user authentication, product catalog, and payment integration<br/>
    • Implemented efficient product search using MongoDB indexing<br/>
    • GitHub: github.com/yourname/ecommerce-platform
    "
  </p>

  <h3>Internships</h3>

  <ul>
    <li>Summer internships, winter internships mention करें</li>
    <li>Learning outcomes mention करें</li>
  </ul>

  <h3>Certifications</h3>

  <ul>
    <li>Google, Coursera, Udemy से certifications करें — free or cheap</li>
    <li>resume में add करें</li>
  </ul>

  <h3>Publications या Contests</h3>

  <ul>
    <li>Hackathons में भाग लिया तो mention करें</li>
    <li>Coding competitions की achievements</li>
  </ul>
</section>

<section>
  <h2>🌟 Meri Salah — My Personal Tips</h2>

  <ul>
    <li><strong>Resume को 1 page में रखें (fresher से 2 years तक)।</strong> 2 pages अगर 5+ years experience हो तो ठीक है। Recruiters को detailed information की बजाय quick summary पसंद है।</li>
    <li><strong>Job description को carefully पढ़ें।</strong> उसमें से 10-15 keywords निकालें और अपने resume में naturally use करें। यह ATS को pass करने में मदद करेगा।</li>
    <li><strong>Customization करें।</strong> हर company/role के लिए अपना resume update करें। सब को same generic resume मत भेजो।</li>
    <li><strong>Action verbs use करें।</strong> "Developed", "Implemented", "Optimized", "Streamlined", "Accelerated" — ये words impact create करते हैं।</li>
    <li><strong>Achievers Resumes हैं।</strong> Responsibilities नहीं, achievements बताएं। "Responded to customer inquiries" नहीं, "Achieved 95% customer satisfaction rating by implementing personalized follow-up process"।</li>
    <li><strong>Resume as a PDF save करें।</strong> Most companies .pdf prefer करते हैं क्योंकि formatting intact रहता है।</li>
    <li><strong>LinkedIn और resume को sync रखें।</strong> दोनों में same information हो ताकि confusion न हो।</li>
  </ul>
</section>

<section>
  <h2>Resume को Test करें</h2>

  <p>
    Resume बनाने के बाद:
  </p>

  <ol>
    <li>किसी friend को दें और उनसे पूछें कि 10 seconds में क्या impression मिला?</li>
    <li>Resume में typos के लिए Grammarly से check करवाएं</li>
    <li>ATS test करने के लिए free tools हैं — जैसे Resume Worded</li>
    <li>PDF और DOCX दोनों formats में save रखें</li>
  </ol>
</section>

<section>
  <p style="text-align: center; margin-top: 40px; padding: 20px; background-color: #f0f9ff; border-radius: 8px;">
    <strong>Priya Sharma, Career Coach</strong><br/>
    TCS, Infosys, और Amazon जैसी companies में 100+ candidates को recruitment process से pass करवा चुकी हूँ। ATS optimization में specialist हूँ।
  </p>
</section>
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
<section>
  <h2>Fresher Job Interview — पहली नौकरी कैसे पाएं?</h2>

  <p>
    क्या आप जानते हो कि एक fresher candidate को job मिलना सबसे मुश्किल होता है? ना तो experience है, ना ही established reputation। लेकिन यही भी सबसे exciting phase होता है। आपको सही strategy से approach करना होगा।
  </p>

  <p>
    मेरा पहला interview experience भी बहुत scary था। मैं Infosys के office पहुंची, बिल्कुल nervous। मुझे तो लगा कि मैं कुछ नहीं जानता। लेकिन यह जो मैंने सीखा उस दिन, वह भी की मेरे 100+ freshers को interview देने में help किया है। अब मैं आपको वही secrets बता रही हूँ।
  </p>

  <p>
    इस article में मैं cover करूंगी:
  </p>
  <ul>
    <li>Freshers को सबसे ज्यादा कौन से सवाल आते हैं</li>
    <li>उनका जवाब कैसे दें ध्यान में रखते हुए कि आपके पास experience नहीं है</li>
    <li>Resume कैसे बनाएं जो attention grab करे</li>
    <li>Company research कितना जरूरी है</li>
    <li>Online vs Offline interviews में क्या अलग होता है</li>
  </ul>
</section>

<section>
  <h2>Freshers को सबसे ज्यादा पूछे जाने वाले सवाल</h2>

  <h3>1. "आपके पास experience नहीं है — फिर आप हमारे लिए क्यों सही हो?"</h3>

  <p>
    यह सबसे डरने वाला सवाल है freshers के लिए। लेकिन याद रखें — interviewer को यह पता है कि आप fresher हो। उसे देखना है कि क्या आप सीखने के लिए passionate हो।
  </p>

  <p>
    <strong>सही answer:</strong>
  </p>

  <p>
    "While I don't have professional experience, मेरे पास कुछ ऐसी चीजें हैं जो काम के लिए equally important हैं। First, मेरे college projects में मैंने [specific technology] काम किया है जो इस role के exactly अनुरूप है। दूसरा, मैं एक passionate learner हूँ — मैंने हाल ही में [कोई relevant certification] किया है। तीसरा, मैं अपनी mistakes से very quickly सीखता हूँ। मेरे एक project में test cases handle करते समय एक major bug आया था। मैंने उस debugging process को समझा और वो lesson अब सब जगह apply करता हूँ।<br/>
    मेरा मतलब है कि अगर आप मुझे एक chance दें, तो मैं आपकी team में बहुत fast हो सकता हूँ।"
  </p>

  <p>
    ध्यान दें कि यह answer:
  </p>
  <ul>
    <li>✅ Experience की कमी को acknowledge करता है (honest)</li>
    <li>✅ Concrete examples देता है (credible)</li>
    <li>✅ Learning attitude दिखाता है (important for freshers)</li>
    <li>✅ Self-awareness demonstrate करता है (maturity)</li>
  </ul>

  <h3>2. "अपने college life के बारे में बताएं — achievements, challenges"</h3>

  <p>
    Freshers के लिए यह एक बेहतरीन सवाल है क्योंकि आपको अपनी story बताने का मौका मिलता है।
  </p>

  <p>
    <strong>Good Answer Structure:</strong>
  </p>

  <p>
    "<strong>Achievement:</strong> मैं B.Tech Mechanical Engineering से graduated हूँ [university name] से। मेरा सबसे proud moment था जब मैंने एक robotics project किया 4 of हम members के साथ। हमारा robot एक national level competition में second आया था। उस project में मैंने mechanics और programming दोनों सीखे।<br/>
    <strong>Challenge:</strong> लेकिन पहली semester में मुझे struggle आया। मेरे programming में basic concepts clear नहीं थे। तो मैंने step back लिया, एक senior से help लिया, और systematically हर concept को समझा। अब programming मेरी सबसे strong subject है।<br/>
    <strong>Why it's relevant:</strong> यह experience मुझे सिखाता है कि challenges को किस तरह face करना है और कब help माँगना है। Professional life में भी यही attitude लग सकता है।"
  </p>

  <h3>3. "क्या कोई internship किया है?"</h3>

  <p>
    अगर internship किया है तो बहुत अच्छा है। अगर नहीं किया तो don't panic — बस अपने projects highlight करें।
  </p>

  <p>
    "<strong>Internship का example:</strong> "Summer 2023 में मैंने XYZ company में 2-month internship की थी। वहां मैंने [specific task] पर काम किया। मेरी main achievement थी कि मैंने एक reporting process को automate किया जिससे 5 घंटे की manual work 30 minutes में हो गई। इस experience ने मुझे दिखाया कि technical skills को business problems solve करने के लिए कैसे use करते हैं।"
  </p>

  <p>
    "<strong>No internship का example:</strong> "मेरे पास formal internship नहीं है, लेकिन मैंने कई self-directed projects किया हैं। एक E-commerce website build किया जो React और Node.js में है। एक और project था machine learning वाला जहां मैंने customer churn predict किया। ये projects मेरे लिए quasi-internship जैसे थे क्योंकि मैंने real-world problems solve किए।"
  </p>

  <h3>4. "आपके strengths और weaknesses क्या हैं?"</h3>

  <p>
    पहले वाले article में मैंने detail दी थी लेकिन freshers के लिए यहाँ specific approach है:
  </p>

  <p>
    "<strong>Strength:</strong> मैं quick learner हूँ और मैं problem-solving में strong हूँ। ये सिद्ध हो गया है मेरे projects में जहां नई technologies को short notice में सीखकर काम किया।<br/>
    <strong>Weakness:</strong> पहले मुझे public speaking में nervousness होता था। लेकिन college में मैंने deliberately projects प्रेजेंट किए और अब मैं quite confident हूँ। Yeh ongoing improvement है।"
  </p>

  <h3>5. "Salary Expectation क्या है?"</h3>

  <p>
    Freshers के लिए यह सवाल थोड़ा different है। आपको यह दिखाना है कि आप serious हो लेकिन overambitious न हों।
  </p>

  <p>
    "<strong>सही jawab:</strong> "Salary definitely important है, लेकिन अभी मेरे लिए सबसे बड़ी priority है कि यह company कहाँ है और मैं क्या सीख सकता हूँ। Based on industry research और market rates, freshers के लिए typically [XYZ] range है। मैं उसी के साथ comfortable हूँ। लेकिन अगर opportunity है growth करने की, certifications करने की, तो वह मेरे लिए salary से भी ज्यादा valuable है।"
  </p>

  <p>
    इससे दिखता है कि आप:
  </p>
  <ul>
    <li>✅ Research किया है (well-informed)</li>
    <li>✅ Maturely सोचते हो (growth focused)</li>
    <li>✅ Realistic हो (unrealistic expectations नहीं)</li>
  </ul>
</section>

<section>
  <h2>Fresher के लिए Resume कैसे बनाएं?</h2>

  <p>
    Fresher resumes बिल्कुल अलग होते हैं। यहाँ experience नहीं दिखा पा सकते, projects show करने हों।
  </p>

  <h3>Structure for Fresher Resume</h3>

  <p>
    <strong>1. Contact + Professional Summary (hindi/english mix):</strong>
  </p>

  <p>
    "Enthusiastic Computer Science graduate with strong foundation in Java, Web Development, and Database Management. Successfully completed 3+ projects using modern tech stack. Seeking entry-level software developer role to leverage technical skills and contribute to innovative projects."
  </p>

  <p>
    <strong>2. Education (सबसे important for freshers):</strong>
  </p>

  <ul>
    <li>B.Tech Computer Science, Delhi University | Graduated: June 2024 | CGPA: 8.5/10</li>
    <li>Relevant Coursework: Data Structures, Object-Oriented Programming, Database Management, Web Development</li>
  </ul>

  <p>
    <strong>3. Projects (Career section की जगह):</strong>
  </p>

  <p>
    <strong>E-Commerce Web Application</strong> | React, Node.js, MongoDB | GitHub Link<br/>
    • Developed full-stack e-commerce platform with user authentication, product listing, shopping cart, and payment integration using Stripe<br/>
    • Implemented efficient product search and filtering using MongoDB aggregation pipeline<br/>
    • Deployed on Heroku with automated testing and CI/CD pipeline<br/>
    • Achievement: Reduced page load time by 40% through optimization techniques
  </p>

  <p>
    <strong>4. Internships/Volunteer Work:</strong>
  </p>

  <p>
    अगर कोई internship या volunteer work किया है तो add करें साथ में achievements भी।
  </p>

  <p>
    <strong>5. Skills (अच्छे से organize करें):</strong>
  </p>

  <ul>
    <li><strong>Programming:</strong> Java, Python, JavaScript, C++</li>
    <li><strong>Web Dev:</strong> HTML, CSS, React, Node.js, Express</li>
    <li><strong>Databases:</strong> MySQL, MongoDB</li>
    <li><strong>Tools:</strong> Git, GitHub, VS Code, Eclipse</li>
    <li><strong>Soft Skills:</strong> Communication, Teamwork, Problem-solving</li>
  </ul>

  <p>
    <strong>6. Certifications:</strong>
  </p>

  <ul>
    <li>Google IT Support Professional — Coursera (2023)</li>
    <li>AWS Cloud Practitioner (in progress)</li>
    <li>DataCamp — Python & SQL Courses</li>
  </ul>

  <p>
    <strong>7. Achievements/Competitions:</strong>
  </p>

  <ul>
    <li>HackDay 2023 — Built a social media analytics dashboard (Team of 3)</li>
    <li>Coding competition at university — Ranked 5th in campus-wide Python coding contest</li>
  </ul>
</section>

<section>
  <h2>Interview से पहले की तैयारी</h2>

  <h3>Company Research — क्यों जरूरी है?</h3>

  <p>
    जब fresher candidate detailed company knowledge दिखाता है तो interviewer impressed हो जाता है क्योंकि उसे पता चलता है कि यह candidate seriously interested है।
  </p>

  <p>
    <strong>क्या research करें:</strong>
  </p>

  <ul>
    <li>Company की Wikipedia/About section — founding, mission, vision</li>
    <li>Recent news/press releases — कि recent months में क्या हुआ</li>
    <li>Product/Services — detailed समझ development करें</li>
    <li>Glassdoor reviews — एक average idea कि company culture कैसा है</li>
    <li>LinkedIn company page — recent posts, culture, team size</li>
    <li>Job description — closely पढ़ें और keywords note करें</li>
  </ul>

  <p>
    <strong>Real advantage कि यह research कैसे help करेगी:</strong>
  </p>

  <p>
    "मैंने देखा है आपकी company ने हाल ही में [specific product] launch किया है। मुझे यह बहुत innovative लगा क्योंकि यह [specific reason]. मेरे projects में भी मैंने similar approach लिया था जहां [example]. So मुझे लगता है कि मैं इस culture के साथ perfectly fit हो सकता हूँ।"
  </p>

  <h3>Interview के दिन की तैयारी</h3>

  <ul>
    <li><strong>Time Management:</strong> 30-45 minutes पहले office/location पहुंचें। Traffic या routing issue का time रहे</li>
    <li><strong>Documents:</strong> Resume की 2-3 physical copies (भले ही online हो), ID proof, certificate copies</li>
    <li><strong>Appearance:</strong> Formal clothes — white shirt + dark trousers + formal shoes। Hair neat हो, nails clean हो</li>
    <li><strong>Mental Preparation:</strong> अगले दिन early sleep लें। Morning को अपने answers को mentally revise करें</li>
    <li><strong>Backup Plan:</strong> Online interview है तो technology check करें — camera, mic, internet, lighting सब</li>
  </ul>
</section>

<section>
  <h2>Technical Interview में Freshers क्या गलती करते हैं?</h2>

  <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
    <tr style="background-color: #f5f5f5;">
      <th style="border: 1px solid #ddd; padding: 10px;">❌ Common Mistakes</th>
      <th style="border: 1px solid #ddd; padding: 10px;">✅ सही Approach</th>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">बिना think किए coding start कर देना</td>
      <td style="border: 1px solid #ddd; padding: 10px;">पहले problem को समझें, approach discuss करें, फिर code लिखें</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">बहुत बड़ा और complex solution try करना</td>
      <td style="border: 1px solid #ddd; padding: 10px;">Simple approach से start करें, फिर optimize करें</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">Edge cases को ignore करना</td>
      <td style="border: 1px solid #ddd; padding: 10px;">अपने code को test करें — empty inputs, negative numbers, large values</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">Silent रहना और code लिखते रहना time pass करना</td>
      <td style="border: 1px solid #ddd; padding: 10px;">अपनी thinking process को verbally explain करते रहें</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 10px;">अगर mistake पकड़ी गई तो defensive हो जाना</td>
      <td style="border: 1px solid #ddd; padding: 10px;">Mistake को acknowledge करें, सीखें, improve करें</td>
    </tr>
  </table>
</section>

<section>
  <h2>Interview के अंत में पूछने के लिए Smart Questions</h2>

  <p>
    Interview के आखिर में interviewer आपसे पूछेगा: "क्या आपके कोई सवाल हैं?" हमेशा 2-3 good questions पूछें। ये दिखाता है कि आप engaged हो।
  </p>

  <p>
    <strong>Good questions for freshers:</strong>
  </p>

  <ul>
    <li>"इस role में पहले 3-6 महीने में किस तरह की projects पर काम करूंगा?"</li>
    <li>"Team में कितने लोग हैं और उनकी experience levels कैसी हैं?"</li>
    <li>"Learning और professional development के लिए कौन से opportunities हैं?"</li>
    <li>"किस technology या tools में upskilling की scope है?"</li>
    <li>"Success मेजरमेंट क्या होगी इस role में?"</li>
  </ul>

  <p>
    <strong>Bad questions (avoid करें):</strong>
  </p>

  <ul>
    <li>❌ "Salary और leaves के बारे में detailed सवाल" (अभी नहीं)</li>
    <li>❌ "क्या shocking होगी?" या "घर से काम कर सकता हूँ?"</li>
    <li>❌ Company के products के बारे में basic सवाल जो आपको पहले ही research में पता चल सकते थे</li>
  </ul>
</section>

<section>
  <h2>🌟 Meri Salah — Fresher के लिए Personal Tips</h2>

  <ul>
    <li><strong>Confidence और Overconfidence में फर्क है।</strong> Confident रहो लेकिन humble भी रहो। "I don't know" कहना बिल्कुल ठीक है अगर आप genuinely नहीं जानते। लेकिन फिर जरूर बताओ कि "लेकिन मैं सीखने के लिए ready हूँ"।</li>
    <li><strong>Practice, practice, practice।</strong> अपने friends के साथ mock interviews दो। अपनी presentation record करो और देखो। Awkward moments को reduce करो actual interview से पहले practice से।</li>
    <li><strong>Mistakes को opportunity बनाओ।</strong> अगर interview में कोई गलती हो तो उस पर acknowledge करो और quickly move forward करो। "Sorry, मुझे गलती हुई। Let me approach this differently..."</li>
    <li><strong>Follow-up करो।</strong> Interview के 24 घंटे के अंदर एक thank you email भेजो। "Dear [Name], Thank you for taking time to interview me. यह conversation बहुत valuable था मेरे लिए... " — personalized लिखो।</li>
    <li><strong>Multiple offers मिलें तो सही choice करो।</strong> Company's reputation, growth opportunity, mentor quality, tech stack — सब देखो। सिर्फ salary से decision मत करो। पहली job में learning ज्यादा important है।</li>
    <li><strong>Network building शुरू करो कभी से पहले।</strong> LinkedIn को seriously लो। अपने interviews की experience share करो (positive tips के साथ)। College seniors को connect करो जो industry में हैं।</li>
  </ul>
</section>

<section>
  <h2>Interview के बाद क्या करें?</h2>

  <ul>
    <li>✅ Rejection मिले तो feedback माँगो — "क्या आप बता सकते हो कि मैं किस area में improve कर सकता हूँ?"</li>
    <li>✅ Offer मिले तो offer letter को carefully पढ़ो (salary, joining date, notice period, benefits)</li>
    <li>✅ एक previous topic follow up करो अगर कोई pending सवाल है</li>
    <li>✅ Start preparing अगली नई company के लिए अगर यह सही नहीं लगी</li>
    <li>✅ अपनी growth story को track करो — what you learned, what you could have done better</li>
  </ul>
</section>

<section>
  <p style="text-align: center; margin-top: 40px; padding: 20px; background-color: #f0f9ff; border-radius: 8px;">
    <strong>Priya Sharma, Career Coach</strong><br/>
    100+ freshers को उनकी पहली job में place करवा चुकी हूँ। TCS, Infosys, Amazon, Flipkart जैसी companies। Freshers के interviews और nervousness को बहुत understand करती हूँ क्योंकि मैंने भी यही journey की है।
  </p>
</section>
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