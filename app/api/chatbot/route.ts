import { NextResponse } from "next/server";

const bloodFAQs = [
  {
    q: ["who can donate to whom", "compatibility", "match blood type"],
    a: "Here’s a quick guide: O- is a universal donor. AB+ is a universal receiver. O+ can donate to O+, A+, B+, AB+. A- can donate to A-, A+, AB-, AB+. B- can donate to B-, B+, AB-, AB+."
  },
  {
    q: ["how often", "donate again", "time between donations"],
    a: "You can donate whole blood every 3 months (12 weeks). Platelet donations can be done every 2 weeks."
  },
  {
    q: ["requirements", "eligibility", "age limit"],
    a: "You must be between 18–65 years old, weigh at least 50 kg, and be healthy with no infections or recent tattoos (within 6 months)."
  },
  {
    q: ["benefits", "good for health"],
    a: "Yes! Donating blood helps balance iron levels, stimulates new cell production, and can save up to 3 lives per donation."
  },
  {
    q: ["when can i donate", "timings", "hours"],
    a: "Blood donation drives usually operate between 9 AM and 5 PM. However, timings vary by center — please check your nearest blood bank."
  },
  {
  q: ["iron levels", "after donation", "recovery"],
  a: "After donating blood, drink plenty of water, rest, and eat iron-rich foods like spinach, lentils, and meat to recover quickly."
}

];

export async function POST(req: Request) {
  const { query } = await req.json();
  const lower = query.toLowerCase();

  const match =
    bloodFAQs.find(faq =>
      faq.q.some(keyword => lower.includes(keyword))
    ) || {
      a: "I'm here to help with blood donation, compatibility, and timings. Please ask something like 'Who can donate to O+' or 'How often can I donate blood?'"
    };

  return NextResponse.json({ answer: match.a });
}
