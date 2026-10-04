import type { BrandConfig, Treatment, TreatmentCategory } from "./types";

/* ------------------------------------------------------------------ *
 * ADYAR HYDRA CENTER — placeholder content.
 * Every string marked PLACEHOLDER must be replaced with real client copy.
 * ------------------------------------------------------------------ */

const img = (alt: string) => ({ alt }); // no src => gradient placeholder

const commonDisclaimer =
  "Results vary from person to person. Treatments are performed after a consultation and suitability assessment.";

const faq = (q: string, a: string) => ({ q, a });

const treat = (t: Omit<Treatment, "image"> & { image?: Treatment["image"] }): Treatment => ({
  image: img(t.title),
  ...t,
});

const facials: TreatmentCategory = {
  slug: "facials-skin-glow",
  title: "Facials & Skin Glow",
  blurb: "Hydration-led facials and glow treatments tailored to your skin.",
  image: img("Hydrating facial"),
  treatments: [
    treat({
      slug: "hydra-facial",
      title: "Hydrating Facial",
      short: "A multi-step cleanse, exfoliation and hydration facial for fresh, comfortable skin.",
      long: [
        "A hydrating facial combines gentle cleansing, exfoliation, extraction and infusion of moisture-rich serums. It is designed to leave skin feeling refreshed and well-hydrated.",
        "Your clinician selects the products and steps based on your skin type and concerns after a short assessment.",
      ],
      benefits: ["Deep cleansing", "Boosts surface hydration", "Smoother-feeling skin", "No downtime for most people"],
      suitableFor: ["Dull or dehydrated skin", "Congested pores", "Pre-event skin prep", "Regular maintenance"],
      steps: [
        { title: "Skin assessment", text: "We review your skin type, concerns and any sensitivities." },
        { title: "Cleanse & exfoliate", text: "Dead cells and surface impurities are gently lifted away." },
        { title: "Extraction", text: "Congested pores are cleared with gentle suction." },
        { title: "Hydrate & protect", text: "Serums and a finishing SPF are applied." },
      ],
      recovery: ["Skin may look slightly flushed for a short while.", "Use sunscreen daily and avoid harsh actives for 24–48 hours."],
      duration: "45 – 60 minutes",
      faqs: [
        faq("How often can I have this facial?", "Many people schedule one every 3–4 weeks. Your clinician will advise on a suitable interval."),
        faq("Is it suitable for sensitive skin?", "Steps can be adjusted for sensitive skin after assessment."),
      ],
      related: ["glass-skin-glow", "chemical-peel"],
    }),
    treat({
      slug: "glass-skin-glow",
      title: "Glass Skin Glow Programme",
      short: "A series of treatments focused on smooth, even-looking, luminous skin.",
      long: [
        "The Glass Skin Glow Programme combines gentle resurfacing, hydration and skin-supporting treatments over several sessions.",
        "The plan is customised after an assessment and may include facials, peels or microneedling depending on your skin.",
      ],
      benefits: ["Even-looking tone", "Improved texture", "Hydrated, luminous finish"],
      suitableFor: ["Uneven tone", "Rough texture", "Dull-looking skin"],
      steps: [
        { title: "Consultation", text: "We discuss goals and design a staged plan." },
        { title: "Treatment sessions", text: "Sessions are spaced to let skin recover." },
        { title: "Home care", text: "A simple routine supports in-clinic work." },
      ],
      recovery: ["Mild redness or dryness may occur.", "Daily sunscreen is essential."],
      duration: "Programme of 4–6 sessions",
      faqs: [faq("When will I notice changes?", "Skin response varies. Many people notice gradual change over the course of the programme.")],
      related: ["hydra-facial", "microneedling"],
    }),
    treat({
      slug: "chemical-peel",
      title: "Chemical Peels",
      short: "Controlled exfoliation to help with texture, pigmentation and dullness.",
      long: [
        "Chemical peels use skin-safe acids to exfoliate the outer layers of skin. Strength and type are matched to your skin and concerns.",
      ],
      benefits: ["Refines texture", "Helps with uneven tone", "Brightens dull skin"],
      suitableFor: ["Pigmentation", "Rough texture", "Dullness"],
      steps: [
        { title: "Patch & prep", text: "Skin is cleansed and assessed." },
        { title: "Peel application", text: "The peel is applied and monitored." },
        { title: "Neutralise & soothe", text: "Calming products and SPF are applied." },
      ],
      recovery: ["Some peeling or dryness is common for a few days.", "Avoid picking skin and use sun protection."],
      duration: "30 – 45 minutes",
      faqs: [faq("Will my skin peel?", "It depends on the peel strength. Your clinician will explain what to expect.")],
      related: ["glass-skin-glow", "q-switch-laser"],
    }),
  ],
};

const rejuvenation: TreatmentCategory = {
  slug: "skin-rejuvenation",
  title: "Skin Rejuvenation",
  blurb: "Microneedling, lasers and injectables to support skin quality.",
  image: img("Skin rejuvenation"),
  treatments: [
    treat({
      slug: "microneedling",
      title: "Microneedling",
      short: "Fine needles create controlled micro-channels to support skin renewal.",
      long: [
        "Microneedling uses very fine needles to stimulate the skin's natural repair response. It is commonly used for texture, scars and overall skin quality.",
      ],
      benefits: ["Supports smoother texture", "Helps with mild scarring", "Can be combined with serums"],
      suitableFor: ["Acne marks", "Uneven texture", "Enlarged-looking pores"],
      steps: [
        { title: "Numbing", text: "A topical anaesthetic is applied." },
        { title: "Treatment", text: "Needling is performed across the area." },
        { title: "Soothing", text: "Calming serum and SPF are applied." },
      ],
      recovery: ["Redness for 24–48 hours is common.", "Avoid makeup and active ingredients for a day or two."],
      duration: "60 minutes",
      faqs: [faq("Does it hurt?", "Numbing cream keeps most people comfortable. You may feel pressure or mild tingling.")],
      related: ["glass-skin-glow", "q-switch-laser"],
    }),
    treat({
      slug: "q-switch-laser",
      title: "Q-Switch Laser Toning",
      short: "Laser sessions that target pigmentation for a more even-looking tone.",
      long: ["Q-switch laser toning uses gentle laser pulses to target pigment. Suitability and number of sessions depend on your skin."],
      benefits: ["Targets pigment", "Evens tone", "Minimal downtime"],
      suitableFor: ["Sun spots", "Uneven tone", "Melasma (after assessment)"],
      steps: [
        { title: "Assessment", text: "We check skin type and pigment pattern." },
        { title: "Laser session", text: "Low-fluence pulses are delivered across the area." },
        { title: "Aftercare", text: "Soothing care and strict sun protection." },
      ],
      recovery: ["Mild pinkness may last a few hours.", "Sun protection is essential between sessions."],
      duration: "20 – 30 minutes",
      faqs: [faq("How many sessions are needed?", "This varies. A plan is suggested after your consultation.")],
      related: ["chemical-peel", "glass-skin-glow"],
    }),
    treat({
      slug: "dermal-fillers",
      title: "Dermal Fillers",
      short: "Hyaluronic acid fillers to restore volume and contour, in a natural manner.",
      long: ["Dermal fillers are injectable gels used to add volume or soften lines. Treatment is carried out by a qualified doctor after discussion of goals and risks."],
      benefits: ["Restores volume", "Softens lines", "Subtle, balanced enhancement"],
      suitableFor: ["Volume loss", "Lip or cheek definition", "Static lines"],
      steps: [
        { title: "Consultation", text: "Facial assessment and goal setting." },
        { title: "Injection", text: "Filler is placed with precision." },
        { title: "Review", text: "Optional follow-up to assess settling." },
      ],
      recovery: ["Swelling or bruising may occur.", "Avoid strenuous exercise for 24 hours."],
      duration: "30 – 45 minutes",
      faqs: [faq("How long do fillers last?", "Longevity depends on product and area. Your doctor will explain.")],
      related: ["botox"],
    }),
    treat({
      slug: "botox",
      title: "Botulinum Toxin",
      short: "Softens dynamic expression lines when administered by a qualified doctor.",
      long: ["Botulinum toxin relaxes specific muscles to soften expression lines. Dosage and placement are individualised."],
      benefits: ["Softens frown and forehead lines", "Quick appointment", "Natural-looking when done conservatively"],
      suitableFor: ["Forehead lines", "Frown lines", "Crow's feet"],
      steps: [
        { title: "Consultation", text: "Expression and anatomy review." },
        { title: "Injection", text: "Small amounts are placed at planned points." },
        { title: "Aftercare", text: "Simple guidance for the first 24 hours." },
      ],
      recovery: ["Tiny marks may appear briefly.", "Effects appear gradually over several days."],
      duration: "15 – 20 minutes",
      faqs: [faq("Is it safe?", "When performed by a trained doctor with an assessment, it is widely used. Your doctor will discuss risks.")],
      related: ["dermal-fillers"],
    }),
  ],
};

const hair: TreatmentCategory = {
  slug: "hair-care",
  title: "Hair Care",
  blurb: "Assessment-led support for hair thinning and unwanted hair.",
  image: img("Hair treatments"),
  treatments: [
    treat({
      slug: "hair-restoration",
      title: "Hair Restoration & Anti-Hair Loss",
      short: "Programmes that support the scalp and hair follicles after a proper assessment.",
      long: ["Hair thinning has many causes. We begin with a consultation and scalp assessment before suggesting a plan, which may include in-clinic therapies and home care."],
      benefits: ["Cause-led approach", "Scalp health support", "Tracked over time"],
      suitableFor: ["Thinning hair", "Increased shedding", "Receding hairline"],
      steps: [
        { title: "Consultation", text: "History and scalp examination." },
        { title: "Plan", text: "A personalised plan is discussed." },
        { title: "Follow-up", text: "Progress is reviewed at intervals." },
      ],
      recovery: ["Most therapies have little downtime.", "Follow the home-care plan provided."],
      duration: "30 – 45 minutes",
      faqs: [faq("Can all hair loss be treated?", "Not every cause responds equally. We will be honest about what is realistic.")],
      related: ["laser-hair-removal"],
    }),
    treat({
      slug: "laser-hair-removal",
      title: "Laser Hair Removal",
      short: "Gradual hair reduction using medical-grade laser.",
      long: ["Laser hair removal reduces hair growth over a course of sessions. Skin and hair type determine settings and the number of sessions."],
      benefits: ["Gradual reduction in hair", "Quick sessions", "Smoother skin"],
      suitableFor: ["Face and body areas", "Ingrown hairs", "Long-term hair reduction"],
      steps: [
        { title: "Patch test", text: "Settings are checked on a small area." },
        { title: "Treatment", text: "Laser pulses are delivered across the area." },
        { title: "Aftercare", text: "Cooling and SPF." },
      ],
      recovery: ["Mild redness may last a few hours.", "Avoid sun exposure and waxing between sessions."],
      duration: "15 – 60 minutes by area",
      faqs: [faq("Is it permanent?", "It provides long-term reduction; maintenance sessions are sometimes needed.")],
      related: ["hair-restoration"],
    }),
  ],
};

const wellness: TreatmentCategory = {
  slug: "wellness",
  title: "Wellness",
  blurb: "Supportive wellness therapies delivered in a calm setting.",
  image: img("Wellness therapy"),
  treatments: [
    treat({
      slug: "iv-wellness",
      title: "IV Wellness Therapy",
      short: "Vitamin and hydration drips prepared after a medical screening.",
      long: ["IV therapy delivers fluids and nutrients directly into the bloodstream. It is offered only after a medical screening by our doctor."],
      benefits: ["Hydration support", "Customised blends", "Doctor-supervised"],
      suitableFor: ["Fatigue after travel", "Hydration support", "Nutritional top-up (after screening)"],
      steps: [
        { title: "Screening", text: "A short medical history is taken." },
        { title: "Drip", text: "The blend is administered under supervision." },
        { title: "Rest", text: "A brief observation period follows." },
      ],
      recovery: ["Most people resume normal activity straight away.", "Drink water through the day."],
      duration: "45 – 60 minutes",
      faqs: [faq("Is IV therapy for everyone?", "No. A screening determines suitability.")],
      related: ["hydra-facial"],
    }),
  ],
};

const brand: BrandConfig = {
  id: "adyar-hydra",
  name: "Adyar Hydra Center",
  shortName: "Adyar Hydra",
  tagline: "Skin & wellness, thoughtfully cared for",
  intro: {
    eyebrow: "Welcome",
    heading: "Calm, considered skin & wellness care in Adyar",
    text: [
      "Adyar Hydra Center is a skin and wellness clinic built around hydration, skin health and honest advice.",
      "Every visit begins with a conversation, so your plan is shaped around your skin, your goals and your comfort.",
    ],
  },
  wordmark: { line1: "ADYAR HYDRA", line2: "CENTER" },
  logo: "/brands/adyar-hydra/logo.svg",
  favicon: "/brands/adyar-hydra/favicon.svg",
  palette: {
    primary: "#0E6B78",
    accent: "#5BB5BC",
    background: "#FFFFFF",
    surface: "#F1F8F8",
    text: "#1E2B2E",
    muted: "#5E7075",
    line: "#DCE8E9",
  },
  fonts: { display: "marcellus", body: "manrope" },
  siteUrl: "https://adyarhydra.example.com", // PLACEHOLDER
  phone: "+91 00000 00000", // PLACEHOLDER
  phoneTel: "+910000000000",
  whatsapp: "910000000000", // PLACEHOLDER
  email: "hello@adyarhydra.example.com", // PLACEHOLDER
  address: {
    lines: ["Street address to be added", "Adyar"],
    city: "Chennai",
    state: "Tamil Nadu",
    postalCode: "600020",
    country: "IN",
  },
  mapEmbedUrl: "https://www.google.com/maps?q=Adyar,Chennai&output=embed",
  hours: [
    { days: "Monday – Saturday", hours: "10:00 am – 7:00 pm" },
    { days: "Sunday", hours: "By appointment" },
  ],
  social: { instagram: "https://instagram.com/", facebook: "https://facebook.com/" }, // PLACEHOLDER
  hero: { eyebrow: "Skin · Hydration · Wellness", cta: "Book Consultation", image: img("Clinic hero") },
  doctors: [
    {
      name: "Dr. Name Surname",
      title: "Founder & Consultant Dermatologist",
      credentials: "MBBS, MD (Dermatology) — PLACEHOLDER",
      bio: [
        "Placeholder biography. Replace with the doctor's training, experience and approach to patient care.",
        "Add registration details and professional memberships as required.",
      ],
      quote: "Good skin care starts with listening.",
      image: img("Doctor portrait"),
      specialties: ["Medical dermatology", "Aesthetic dermatology", "Hair & scalp"],
    },
  ],
  team: [
    { name: "Team Member", role: "Senior Aesthetic Therapist", image: img("Team portrait") },
    { name: "Team Member", role: "Clinic Coordinator", image: img("Team portrait") },
    { name: "Team Member", role: "Skin Therapist", image: img("Team portrait") },
  ],
  about: {
    heroHeading: "Care that begins with a conversation",
    story: [
      "Placeholder story. Describe why the clinic was started, the neighbourhood it serves and what patients can expect.",
      "Keep the tone calm and factual; avoid superlatives and guaranteed outcomes.",
    ],
    pullQuote: "We would rather explain a little more than promise a little too much.",
    philosophy: [
      { title: "Skin first", text: "Healthy skin is the foundation of every plan." },
      { title: "Honest advice", text: "We explain options, limits and realistic expectations." },
      { title: "Comfort", text: "A quiet space and unhurried appointments." },
    ],
  },
  timeline: [
    { year: "20XX", title: "Clinic opens", text: "Placeholder milestone." },
    { year: "20XX", title: "Laser & device suite added", text: "Placeholder milestone." },
    { year: "20XX", title: "Wellness services launched", text: "Placeholder milestone." },
  ],
  categories: [facials, rejuvenation, hair, wellness],
  why: [
    { title: "Doctor-led", text: "Assessments and injectables are performed by qualified doctors." },
    { title: "Personalised plans", text: "No one-size-fits-all packages." },
    { title: "Clear communication", text: "Transparent about steps, aftercare and expectations." },
    { title: "Calm environment", text: "Private rooms and an unhurried pace." },
  ],
  testimonials: [
    { name: "Reviewer Name", text: "Placeholder review. Replace with real Google reviews once collected.", rating: 5, treatment: "Hydrating Facial", when: "a month ago" },
    { name: "Reviewer Name", text: "Placeholder review. The team explained every step clearly.", rating: 5, treatment: "Microneedling", when: "2 months ago" },
    { name: "Reviewer Name", text: "Placeholder review. A calm clinic and a helpful consultation.", rating: 5, treatment: "Consultation", when: "3 months ago" },
  ],
  videoReviews: [], // PLACEHOLDER: add { name, instagramUrl, treatment } for each Instagram reel
  googleRating: { score: 4.9, count: 0 }, // PLACEHOLDER — set real score & count
  beforeAfter: [
    { id: "ba-1", title: "Skin texture", categorySlug: "skin-rejuvenation", treatment: "Microneedling", before: img("Before"), after: img("After"), note: commonDisclaimer },
    { id: "ba-2", title: "Skin tone", categorySlug: "facials-skin-glow", treatment: "Glass Skin Glow Programme", before: img("Before"), after: img("After"), note: commonDisclaimer },
    { id: "ba-3", title: "Pigmentation", categorySlug: "skin-rejuvenation", treatment: "Q-Switch Laser Toning", before: img("Before"), after: img("After"), note: commonDisclaimer },
  ],
  stats: [
    { value: "00+", label: "Years of practice" }, // PLACEHOLDER
    { value: "00+", label: "Treatments offered" },
    { value: "0,000+", label: "Consultations" },
  ],
  homeFaqs: [
    faq("Do I need a consultation first?", "Yes. Every treatment begins with a consultation so we can assess suitability."),
    faq("Are treatments painful?", "Comfort measures such as numbing cream are used where appropriate. Sensations vary by treatment."),
    faq("How do I book?", "Use the Book Consultation button to message us on WhatsApp or call the clinic."),
    faq("Will results be the same for everyone?", "No. Results vary from person to person and depend on skin, health and aftercare."),
  ],
  seo: {
    title: "Adyar Hydra Center | Skin & Wellness Clinic in Adyar, Chennai",
    description: "Doctor-led skin and wellness clinic in Adyar, Chennai. Facials, skin rejuvenation, hair care and wellness therapies after a personal consultation.",
    keywords: ["skin clinic Adyar", "aesthetic clinic Chennai", "hydrating facial Chennai"],
  },
  redirects: {},
  disclaimer: commonDisclaimer,
};

export default brand;
