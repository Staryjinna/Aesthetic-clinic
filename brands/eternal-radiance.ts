import type { BrandConfig, Treatment, TreatmentCategory } from "./types";

/* ------------------------------------------------------------------ *
 * ETERNAL RADIANCE — doctor-led aesthetic medicine & wellness, Chennai.
 * Treatment list and doctor name come from the client brief; descriptions
 * are neutral placeholders to be reviewed and approved by Dr. Sivapriya.
 * ------------------------------------------------------------------ */

const img = (alt: string, src?: string) => ({ alt, src });
const faq = (q: string, a: string) => ({ q, a });
const disclaimer =
  "Results vary from person to person. Treatments are performed by qualified professionals after a consultation and suitability assessment.";

const defaultSteps = [
  { title: "Consultation", text: "A discussion of your goals, medical history and suitability." },
  { title: "Planning", text: "A personalised plan, with options and expectations explained." },
  { title: "Treatment", text: "The procedure is carried out with attention to comfort." },
  { title: "Aftercare", text: "Clear guidance and follow-up to support recovery." },
];
const defaultRecovery = [
  "Mild redness, swelling or sensitivity can occur and usually settles quickly.",
  "Follow the aftercare instructions given at your appointment and use daily sun protection.",
];

interface T {
  slug: string;
  title: string;
  short: string;
  long: string[];
  benefits: string[];
  suitableFor: string[];
  duration: string;
  faqs: [string, string][];
  related: string[];
  steps?: Treatment["steps"];
  recovery?: string[];
}
const t = (x: T): Treatment => ({
  slug: x.slug,
  title: x.title,
  short: x.short,
  long: x.long,
  benefits: x.benefits,
  suitableFor: x.suitableFor,
  steps: x.steps ?? defaultSteps,
  recovery: x.recovery ?? defaultRecovery,
  duration: x.duration,
  faqs: x.faqs.map(([q, a]) => faq(q, a)),
  image: img(x.title),
  related: x.related,
});

const skin: TreatmentCategory = {
  slug: "skin",
  title: "Skin Rejuvenation",
  blurb: "Glow, texture and tone: facials, microneedling and laser treatments.",
  image: img("Skin treatments"),
  treatments: [
    t({
      slug: "skin-glow-glass-skin",
      title: "Skin Glow & Glass Skin",
      short: "Customised programmes for smooth, hydrated, luminous-looking skin.",
      long: ["Skin Glow and Glass Skin programmes combine hydration, gentle resurfacing and skin-supporting treatments over a planned series of sessions.", "Your doctor tailors the plan to your skin type, tone and lifestyle."],
      benefits: ["Improved hydration", "More even-looking tone", "Smoother texture"],
      suitableFor: ["Dull or tired-looking skin", "Uneven tone", "Rough texture"],
      duration: "45 – 60 minutes per session",
      faqs: [["How many sessions will I need?", "A plan is suggested after consultation; skin response varies."], ["Is there downtime?", "Most people can return to routine activities the same day."]],
      related: ["instant-glow-up-facials", "microneedling", "skinpen-microneedling"],
    }),
    t({
      slug: "instant-glow-up-facials",
      title: "Instant Glow-Up Facials",
      short: "Quick, doctor-supervised facials for fresh-looking skin before an occasion.",
      long: ["Instant Glow-Up facials cleanse, exfoliate and hydrate in a single visit, leaving skin refreshed with no significant downtime."],
      benefits: ["Fresh-looking skin", "No significant downtime", "Easy to schedule before events"],
      suitableFor: ["Pre-event skin prep", "Dull skin", "Maintenance between treatments"],
      duration: "45 minutes",
      faqs: [["How often can I have one?", "Typically every few weeks; your clinician will advise."]],
      related: ["skin-glow-glass-skin", "q-switch-laser-skin-toning"],
    }),
    t({
      slug: "microneedling",
      title: "Microneedling",
      short: "Controlled micro-channels that encourage the skin's own renewal.",
      long: ["Microneedling uses fine needles to stimulate natural repair, commonly used for texture, acne marks and overall skin quality."],
      benefits: ["Supports smoother texture", "Helps with mild scarring", "Can be paired with serums"],
      suitableFor: ["Acne marks", "Uneven texture", "Enlarged-looking pores"],
      duration: "60 minutes",
      faqs: [["Does it hurt?", "A numbing cream is used so most people are comfortable."]],
      related: ["skinpen-microneedling", "skin-glow-glass-skin"],
    }),
    t({
      slug: "skinpen-microneedling",
      title: "SkinPen Precision Microneedling",
      short: "Device-based precision microneedling for texture and scarring concerns.",
      long: ["SkinPen is a microneedling device with adjustable needle depth, allowing treatment to be tailored to different areas of the face and different concerns."],
      benefits: ["Adjustable depth for different areas", "Supports skin texture", "Suitable for a range of concerns"],
      suitableFor: ["Acne scars", "Fine lines", "Texture irregularities"],
      duration: "60 minutes",
      faqs: [["How is it different from regular microneedling?", "The device offers controlled, adjustable depth. Your doctor will explain which option suits you."]],
      related: ["microneedling", "skin-glow-glass-skin"],
    }),
    t({
      slug: "q-switch-laser-skin-toning",
      title: "Q-Switch Laser Skin Toning",
      short: "Gentle laser sessions that target pigment for a more even-looking tone.",
      long: ["Q-switch laser toning uses short laser pulses to target pigment. A skin assessment determines suitability and the number of sessions."],
      benefits: ["Targets pigment", "Evens tone", "Minimal downtime"],
      suitableFor: ["Sun spots", "Uneven tone", "Pigmentation concerns (after assessment)"],
      duration: "20 – 30 minutes",
      faqs: [["Is sun protection necessary?", "Yes, strict sun protection is important throughout the course."]],
      related: ["instant-glow-up-facials", "skin-glow-glass-skin"],
    }),
  ],
};

const injectables: TreatmentCategory = {
  slug: "injectables",
  title: "Injectables",
  blurb: "Fillers, toxins and fat-dissolving injections by qualified doctors.",
  image: img("Injectables"),
  treatments: [
    t({
      slug: "dermal-fillers",
      title: "Dermal Fillers",
      short: "Hyaluronic acid fillers to restore volume and soften lines, subtly.",
      long: ["Dermal fillers are injectable gels used to restore volume or soften lines. Placement is planned around facial balance, with a conservative approach."],
      benefits: ["Restores lost volume", "Refines contour", "Subtle, balanced enhancement"],
      suitableFor: ["Volume loss", "Lip or cheek definition", "Static lines"],
      duration: "30 – 45 minutes",
      faqs: [["How long do fillers last?", "It depends on the product and area; your doctor will explain."], ["Is there bruising?", "Some bruising or swelling can occur and typically settles in days."]],
      related: ["botox-dysport", "fat-dissolving-injections"],
    }),
    t({
      slug: "botox-dysport",
      title: "Botox / Dysport",
      short: "Botulinum toxin to soften expression lines, tailored to your face.",
      long: ["Botulinum toxin relaxes specific muscles to soften expression lines. Dose and placement are individualised for natural movement."],
      benefits: ["Softens frown and forehead lines", "Short appointment", "Natural movement retained with conservative dosing"],
      suitableFor: ["Forehead lines", "Frown lines", "Crow's feet"],
      duration: "15 – 20 minutes",
      faqs: [["When will I see the effect?", "It develops gradually over several days."]],
      related: ["dermal-fillers"],
    }),
    t({
      slug: "fat-dissolving-injections",
      title: "Fat Dissolving Injections",
      short: "Injections for small, localised pockets of fat, after assessment.",
      long: ["Fat dissolving injections are used for small, localised areas such as under the chin. Suitability is assessed carefully, and it is not a weight-loss treatment."],
      benefits: ["Targets small localised areas", "No surgery", "Short appointments"],
      suitableFor: ["Submental fullness", "Small stubborn areas"],
      duration: "20 – 30 minutes",
      faqs: [["Is this weight loss?", "No. It addresses small localised areas only."]],
      related: ["dermal-fillers"],
    }),
    t({
      slug: "vampire-breast-lift",
      title: "Vampire Breast Lift",
      short: "A PRP-based, non-surgical treatment for skin quality of the décolletage and breast area.",
      long: ["This treatment uses platelet-rich plasma from your own blood to support skin quality in the area. It is not a substitute for surgical lifting; your doctor will discuss realistic expectations."],
      benefits: ["Uses your own PRP", "Non-surgical", "Supports skin quality"],
      suitableFor: ["Skin laxity concerns", "Décolletage rejuvenation"],
      duration: "60 minutes",
      faqs: [["Is it a surgical lift?", "No. It is non-surgical and results are modest and vary by person."]],
      related: ["o-shot"],
    }),
    t({
      slug: "o-shot",
      title: "O-Shot",
      short: "A PRP-based intimate wellness treatment, discussed privately with the doctor.",
      long: ["The O-Shot is a PRP-based procedure offered for intimate wellness concerns. It is discussed in a private, confidential consultation including risks and limitations."],
      benefits: ["Uses your own PRP", "Confidential consultation", "Doctor-performed"],
      suitableFor: ["Intimate wellness concerns (after consultation)"],
      duration: "45 – 60 minutes",
      faqs: [["Is my privacy protected?", "Yes, consultations are private and confidential."]],
      related: ["vampire-breast-lift"],
    }),
  ],
};

const hair: TreatmentCategory = {
  slug: "hair",
  title: "Hair",
  blurb: "Transplant, restoration and hair removal.",
  image: img("Hair care"),
  treatments: [
    t({
      slug: "hair-transplant",
      title: "Hair Transplant",
      short: "Surgical hair restoration planned after a detailed scalp and donor-area assessment.",
      long: ["Hair transplant relocates follicles from a donor area to thinning or bald areas. Candidacy, graft planning and expectations are discussed in detail at consultation."],
      benefits: ["Long-term approach to hair loss", "Planned hairline design", "Individual assessment"],
      suitableFor: ["Pattern hair loss", "Receding hairline", "Stable hair loss with adequate donor hair"],
      duration: "Full day, planned individually",
      steps: [
        { title: "Consultation", text: "Scalp, donor area and medical history review." },
        { title: "Design", text: "Hairline and graft plan agreed with you." },
        { title: "Procedure", text: "Grafts are extracted and implanted under local anaesthesia." },
        { title: "Follow-up", text: "Aftercare and scheduled reviews as hair grows." },
      ],
      recovery: ["Scabs and redness settle over the first couple of weeks.", "Hair growth is gradual over many months; results vary."],
      faqs: [["When will I see growth?", "Growth is gradual and typically takes several months."]],
      related: ["hair-restoration-anti-hair-loss"],
    }),
    t({
      slug: "hair-restoration-anti-hair-loss",
      title: "Hair Restoration & Anti-Hair Loss",
      short: "Non-surgical programmes to support the scalp and hair follicles.",
      long: ["Hair thinning has many causes. We begin with an assessment before suggesting a plan that may combine in-clinic therapies and home care."],
      benefits: ["Cause-led approach", "Supports scalp health", "Progress tracked"],
      suitableFor: ["Thinning hair", "Increased shedding"],
      duration: "30 – 45 minutes",
      faqs: [["Does it work for everyone?", "Response varies. We explain what is realistic."]],
      related: ["hair-transplant", "laser-hair-removal"],
    }),
    t({
      slug: "laser-hair-removal",
      title: "Laser Hair Removal",
      short: "Gradual hair reduction using medical-grade laser.",
      long: ["Laser hair removal reduces hair growth over a course of sessions; skin and hair type determine settings."],
      benefits: ["Gradual hair reduction", "Quick sessions", "Smoother skin"],
      suitableFor: ["Face and body areas", "Ingrown hairs"],
      duration: "15 – 60 minutes by area",
      faqs: [["Is it permanent?", "It gives long-term reduction; occasional maintenance may be needed."]],
      related: ["hair-restoration-anti-hair-loss"],
    }),
  ],
};

const wellness: TreatmentCategory = {
  slug: "wellness",
  title: "Wellness",
  blurb: "Doctor-supervised IV wellness therapy.",
  image: img("Wellness"),
  treatments: [
    t({
      slug: "iv-wellness-therapy",
      title: "IV Wellness Therapy",
      short: "Hydration and vitamin drips prepared after medical screening.",
      long: ["IV therapy delivers fluids and nutrients directly into the bloodstream. It is offered only after a screening by our doctor."],
      benefits: ["Hydration support", "Customised blends", "Doctor-supervised"],
      suitableFor: ["Hydration support", "Nutritional top-up (after screening)"],
      duration: "45 – 60 minutes",
      faqs: [["Is it suitable for everyone?", "No. A medical screening determines suitability."]],
      related: ["instant-glow-up-facials"],
    }),
  ],
};

const brand: BrandConfig = {
  id: "eternal-radiance",
  name: "Eternal Radiance",
  shortName: "Eternal Radiance",
  tagline: "Doctor-led aesthetic medicine & wellness",
  intro: {
    eyebrow: "Welcome",
    heading: "Aesthetic medicine, led by a doctor who listens",
    text: [
      "Eternal Radiance is a doctor-led aesthetic medicine and wellness clinic in Chennai, led by Dr. Sivapriya.",
      "From skin and hair to injectables and wellness therapy, every plan begins with a consultation and an honest conversation about what is realistic.",
    ],
  },
  wordmark: { line1: "ETERNAL", line2: "RADIANCE" },
  // Replace with the real logo: save https://eternalradiance.in/wp-content/uploads/2025/04/EternalRadianceLogo.png
  // as public/brands/eternal-radiance/logo.png and point this path to it.
  logo: "/brands/eternal-radiance/logo.svg",
  favicon: "/brands/eternal-radiance/favicon.svg",
  palette: {
    primary: "#8A5A4B",
    accent: "#C49A6C",
    background: "#FFFDFB",
    surface: "#F8F1EC",
    text: "#2D2422",
    muted: "#7A6A64",
    line: "#EADFD8",
  },
  fonts: { display: "cormorant", body: "jost" },
  siteUrl: "https://eternalradiance.in",
  phone: "+91 00000 00000", // PLACEHOLDER — take from live site
  phoneTel: "+910000000000",
  whatsapp: "910000000000", // PLACEHOLDER
  email: "hello@eternalradiance.in", // PLACEHOLDER — confirm
  address: { lines: ["Clinic address to be confirmed"], city: "Chennai", state: "Tamil Nadu", postalCode: "600000", country: "IN" },
  mapEmbedUrl: "https://www.google.com/maps?q=Eternal+Radiance+Clinic+Chennai&output=embed",
  hours: [
    { days: "Monday – Saturday", hours: "10:00 am – 7:00 pm" }, // PLACEHOLDER
    { days: "Sunday", hours: "By appointment" },
  ],
  social: {
    instagram: "https://www.instagram.com/eternalradiance_clinic/",
    facebook: "https://www.facebook.com/people/Eternal-Radiance-Clinic/61560765166350/",
  },
  hero: { eyebrow: "Aesthetic Medicine · Skin · Hair · Wellness", cta: "Book Consultation", image: img("Clinic hero") },
  doctors: [
    {
      name: "Dr. Sivapriya",
      title: "Founder & Lead Aesthetic Physician",
      credentials: "Qualifications to be confirmed",
      bio: [
        "Dr. Sivapriya leads Eternal Radiance, a doctor-led clinic for aesthetic medicine and wellness in Chennai.",
        "Add training, years of practice and registration details here.",
      ],
      quote: "The best aesthetic work is the kind that looks like you, only well rested.",
      image: img("Dr. Sivapriya"),
      specialties: ["Aesthetic medicine", "Hair restoration", "Injectables"],
    },
  ],
  team: [
    { name: "Team Member", role: "Clinic Manager", image: img("Team portrait") },
    { name: "Team Member", role: "Aesthetic Therapist", image: img("Team portrait") },
    { name: "Team Member", role: "Patient Care Coordinator", image: img("Team portrait") },
  ],
  about: {
    heroHeading: "Medicine-led beauty, with a gentle touch",
    story: [
      "Eternal Radiance was founded to bring careful, doctor-led aesthetic medicine to Chennai.",
      "We keep appointments unhurried and explanations plain, so that every decision is yours.",
    ],
    pullQuote: "Enhancement should feel natural, and the decision should always feel yours.",
    philosophy: [
      { title: "Natural balance", text: "Subtle, proportionate work that respects your features." },
      { title: "Medical standards", text: "Assessment, consent and aftercare at every step." },
      { title: "Honest guidance", text: "We say what a treatment can and cannot do." },
    ],
  },
  timeline: [
    { year: "20XX", title: "Eternal Radiance opens", text: "Placeholder milestone." },
    { year: "20XX", title: "Hair restoration services", text: "Placeholder milestone." },
    { year: "20XX", title: "IV wellness therapy introduced", text: "Placeholder milestone." },
  ],
  categories: [skin, injectables, hair, wellness],
  why: [
    { title: "Doctor-led", text: "Led by Dr. Sivapriya, with doctor-performed injectables." },
    { title: "Personalised plans", text: "Every plan follows a consultation, never a template." },
    { title: "Clear communication", text: "Steps, aftercare and expectations explained up front." },
    { title: "Calm, private setting", text: "Unhurried appointments in a discreet clinic." },
  ],
  testimonials: [
    { name: "Reviewer Name", text: "Placeholder review. Replace with real Google reviews.", rating: 5, treatment: "Skin Glow", when: "a month ago" },
    { name: "Reviewer Name", text: "Placeholder review. Every step was explained clearly.", rating: 5, treatment: "Consultation", when: "2 months ago" },
    { name: "Reviewer Name", text: "Placeholder review. A calm, professional clinic.", rating: 5, treatment: "Microneedling", when: "3 months ago" },
  ],
  googleRating: { score: 4.9, count: 0 }, // PLACEHOLDER
  beforeAfter: [
    { id: "ba-1", title: "Skin texture", categorySlug: "skin", treatment: "SkinPen Precision Microneedling", before: img("Before"), after: img("After"), note: disclaimer },
    { id: "ba-2", title: "Skin tone", categorySlug: "skin", treatment: "Q-Switch Laser Skin Toning", before: img("Before"), after: img("After"), note: disclaimer },
    { id: "ba-3", title: "Hairline", categorySlug: "hair", treatment: "Hair Transplant", before: img("Before"), after: img("After"), note: disclaimer },
  ],
  stats: [
    { value: "14", label: "Treatments offered" },
    { value: "00+", label: "Years of practice" }, // PLACEHOLDER
    { value: "0,000+", label: "Consultations" },
  ],
  homeFaqs: [
    faq("Do I need a consultation first?", "Yes. Every treatment starts with a consultation to assess suitability."),
    faq("Are the treatments painful?", "Numbing cream and comfort measures are used where appropriate. Sensations vary by treatment."),
    faq("How do I book?", "Use Book Consultation to message us on WhatsApp, or call the clinic."),
    faq("Are results the same for everyone?", "No. Results vary from person to person."),
  ],
  seo: {
    title: "Eternal Radiance | Doctor-led Aesthetic Clinic in Chennai",
    description: "Doctor-led aesthetic medicine and wellness in Chennai: skin, hair transplant, fillers, Botox, microneedling and IV wellness with Dr. Sivapriya.",
    keywords: ["aesthetic clinic Chennai", "hair transplant Chennai", "dermal fillers Chennai"],
  },
  redirects: {
    "/hair-transplant-in-chennai": "/treatments/hair-transplant",
    "/dermal-fillers-in-chennai": "/treatments/dermal-fillers",
    "/skin-glow-glass-skin-in-chennai": "/treatments/skin-glow-glass-skin",
    "/microneedling-in-chennai": "/treatments/microneedling",
    "/instant-glow-up-facials-in-chennai": "/treatments/instant-glow-up-facials",
    "/hair-restoration-in-chennai": "/treatments/hair-restoration-anti-hair-loss",
    "/laser-hair-removal-in-chennai": "/treatments/laser-hair-removal",
    "/botox-dysport-in-chennai": "/treatments/botox-dysport",
    "/iv-wellness-therapy-in-chennai": "/treatments/iv-wellness-therapy",
    "/skinpen-microneedling-in-chennai": "/treatments/skinpen-microneedling",
    "/o-shot-in-chennai": "/treatments/o-shot",
    "/fat-dissolving-injections-in-chennai": "/treatments/fat-dissolving-injections",
    "/q-switch-laser-skin-toning-in-chennai": "/treatments/q-switch-laser-skin-toning",
    "/vampire-breast-lift-in-chennai": "/treatments/vampire-breast-lift",
    "/about-us": "/about",
    "/contact-us": "/contact",
    "/blogs": "/blog",
  },
  disclaimer,
};

export default brand;
