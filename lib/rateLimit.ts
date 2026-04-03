export function checkRateLimit(): { allowed: boolean; remaining: number } {
  if (typeof window === 'undefined') return { allowed: true, remaining: 10 }; // For server-side rendering
  const today = new Date().toDateString();
  const stored = localStorage.getItem('interviewGuruQueryCount');
  if (!stored) return { allowed: true, remaining: 10 };
  const data = JSON.parse(stored);
  if (data.date !== today) return { allowed: true, remaining: 10 };
  const remaining = Math.max(0, 10 - data.count);
  return { allowed: remaining > 0, remaining };
}

export function incrementQueryCount(): void {
  if (typeof window === 'undefined') return;
  const today = new Date().toDateString();
  const stored = localStorage.getItem('interviewGuruQueryCount');
  let count = 0;
  if (stored) {
    const data = JSON.parse(stored);
    if (data.date === today) {
      count = data.count;
    }
  }
  count++;
  localStorage.setItem('interviewGuruQueryCount', JSON.stringify({ date: today, count }));
}