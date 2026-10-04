import type { BrandConfig, Treatment, TreatmentCategory } from "./types";

/* ------------------------------------------------------------------ *
 * ETERNAL RADIANCE — doctor-led aesthetic medicine & wellness, Chennai.
 * SOURCE: https://eternalradiance.in/ (home page, fetched 2026-10). The live
 * site's other pages, images and Google listing sat behind a bot challenge
 * when this config was written, so anything that could not be read there is
 * marked PLACEHOLDER below. Treatment descriptions are neutral, factual
 * drafts to be reviewed and approved by Dr. Sivapriya before launch.
 * Google Business listing name: "Eternal Radiance Skin, Hair and Aesthetics".
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
  tagline: "Aesthetic Dermatology & Wellness",
  intro: {
    eyebrow: "Welcome",
    heading: "A personalised approach to every treatment",
    text: [
      "Eternal Radiance is a doctor-led aesthetic medicine and wellness clinic in Chennai, bringing together medical expertise, personalised care and a natural approach to aesthetics.",
      "Care begins with a consultation rather than a predetermined procedure. We take time to understand your concerns, expectations and lifestyle, then explain the process, what to expect and the ongoing care involved.",
    ],
  },
  wordmark: { line1: "ETERNAL", line2: "RADIANCE" },
  // PLACEHOLDER: the real logo (https://eternalradiance.in/wp-content/uploads/2025/04/EternalRadianceLogo.png)
  // could not be downloaded (bot challenge). Save it as public/brands/eternal-radiance/logo.png and point this path to it.
  logo: "/brands/eternal-radiance/logo.svg",
  favicon: "/brands/eternal-radiance/favicon.svg",
  palette: {
    // Derived from the live site's own palette: copper #D0936B and cream #FDEDE3.
    // The copper is darkened to #A0643A for accent text so it keeps 4.5:1 contrast on the page background.
    primary: "#8A5A4B",
    accent: "#A0643A",
    background: "#FFFFFF",
    surface: "#F8F5F2",
    text: "#1C1917",
    muted: "#7A6A64",
    line: "#E9E5E1",
  },
  fonts: { display: "manrope", body: "manrope" },
  siteUrl: "https://eternalradiance.in",
  phone: "+91 00000 00000", // PLACEHOLDER: not on the home page; take from the Contact Us page / Google listing
  phoneTel: "+910000000000", // PLACEHOLDER
  whatsapp: "910000000000", // PLACEHOLDER: booking buttons point here until replaced
  email: "hello@eternalradiance.in", // PLACEHOLDER: unconfirmed
  address: { lines: ["Clinic address to be confirmed"], city: "Chennai", state: "Tamil Nadu", postalCode: "600000", country: "IN" }, // PLACEHOLDER street and PIN
  // Name + coordinates taken from the Google Maps link supplied by the client (viewport of the clinic photo).
  // Confirm the pin, then replace with the exact "Share > Embed a map" URL from the listing.
  mapEmbedUrl: "https://www.google.com/maps?q=Eternal+Radiance+Skin,+Hair+and+Aesthetics&ll=13.065191,80.2478704&z=16&output=embed",
  geo: { lat: 13.065191, lng: 80.2478704 }, // from the Maps link; confirm
  hours: [
    { days: "Monday – Saturday", hours: "10:00 am – 7:00 pm" }, // PLACEHOLDER: unconfirmed
    { days: "Sunday", hours: "By appointment" }, // PLACEHOLDER: unconfirmed
  ],
  social: {
    instagram: "https://www.instagram.com/eternalradiance_clinic/",
    facebook: "https://www.facebook.com/people/Eternal-Radiance-Clinic/61560765166350/",
  },
  hero: { eyebrow: "Aesthetic dermatology & wellness · Chennai", headline: "Skin, hair and aesthetic care, led by a doctor", text: "A personalised plan for every patient, beginning with a consultation rather than a predetermined procedure.", cta: "Book Consultation", image: img("Reception at Eternal Radiance clinic, Chennai", "/brands/eternal-radiance/clinic-reception.jpg") },
  doctors: [
    {
      name: "Dr. Sivapriya",
      title: "Founder & Lead Aesthetic Physician",
      credentials: "Qualifications to be confirmed", // PLACEHOLDER: add degrees and registration number
      bio: [
        "Dr. Sivapriya leads Eternal Radiance, a doctor-led clinic for aesthetic medicine and wellness in Chennai.",
        "[PLACEHOLDER] Add training, qualifications, years of practice and medical registration details supplied by Dr. Sivapriya.",
      ],
      quote: "Treatment should begin with a consultation, not a predetermined procedure.", // paraphrased from the site; confirm with the doctor
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
  // Real patient reviews shown on the live home page (excerpted). The site does not say they came from Google,
  // so they are labelled as clinic-site reviews. Confirm consent/regulatory suitability before publishing.
  testimonials: [
    { name: "Sindhuja Hari", text: "Been coming to Eternal Radiance for almost 2 years now and honestly, it’s been such a game changer for me. Dr. Siva priya is the sweetest, explains everything, and actually listens. The whole vibe of the clinic is so nice and comforting that I actually look forward to my appointments now.", rating: 5 },
    { name: "Gokila Kumar", text: "Dr. Sivapriya has been an absolute sweetheart. She understood my concerns really well, worked on my skin goals. She prioritizes holistic lifestyle management rather than tonnes of dermatology procedures. The staff at the clinic are another level of hospitality and care.", rating: 5 },
    { name: "Ana", text: "She’s super friendly, patient, and takes the time to explain things clearly. I always felt like she truly listened and cared. The clinic is clean and well-organized, and getting appointments was easy with minimal wait times.", rating: 5 },
  ],
  videoReviews: [], // PLACEHOLDER: add { name, instagramUrl, treatment } for each Instagram reel
  googleRating: { score: 0, count: 0 }, // PLACEHOLDER: rating and count from the Google listing (hidden while count is 0)
  gallery: [
    // Source: Google Maps contributor photo of the clinic reception (confirm the clinic holds the rights / replace with the original file).
    { src: "/brands/eternal-radiance/clinic-reception.jpg", alt: "Reception at Eternal Radiance clinic, Chennai" },
  ],
  beforeAfter: [
    { id: "ba-1", title: "Skin texture", categorySlug: "skin", treatment: "SkinPen Precision Microneedling", before: img("Before"), after: img("After"), note: disclaimer },
    { id: "ba-2", title: "Skin tone", categorySlug: "skin", treatment: "Q-Switch Laser Skin Toning", before: img("Before"), after: img("After"), note: disclaimer },
    { id: "ba-3", title: "Hairline", categorySlug: "hair", treatment: "Hair Transplant", before: img("Before"), after: img("After"), note: disclaimer },
  ],
  stats: [
    { value: "14", label: "Treatments offered" },
    { value: "4", label: "Treatment areas" },
    { value: "1:1", label: "Doctor consultation first" },
  ],
  homeFaqs: [
    faq("Do I need a consultation before treatment?", "Yes. A consultation lets our team understand your concerns, medical history, expectations and goals before recommending suitable options."),
    faq("How do I know which treatment is right for me?", "No single treatment suits everyone. Your doctor assesses your individual needs and recommends options based on suitability and your goals."),
    faq("Are aesthetic treatments safe?", "Safety begins with proper assessment, appropriate treatment selection and qualified clinical care. Procedures are planned around individual suitability, with clear guidance and clinical protocols."),
    faq("Does Eternal Radiance only focus on skin?", "No. Skin health is an important part of the practice, alongside aesthetic injectables, hair restoration, regenerative aesthetics, wellness, anti-ageing and non-surgical body contouring."),
    faq("Are results the same for everyone?", "No. Results vary from person to person."),
  ],
  seo: {
    title: "Eternal Radiance | Aesthetic Dermatology & Wellness Clinic, Chennai",
    description: "Doctor-led aesthetic medicine and wellness in Chennai: skin health, aesthetic injectables, hair restoration, regenerative aesthetics and wellness through personalised care.",
    keywords: ["aesthetic clinic Chennai", "hair transplant Chennai", "dermal fillers Chennai"],
  },
  // Real old WordPress URLs (from the live site's navigation). Blog post URLs are root-level slugs on the old site;
  // add each as "/<old-slug>": "/blog/<new-slug>" once the posts are migrated.
  redirects: {
    "/hair-transplant-in-chennai": "/treatments/hair-transplant",
    "/dermal-fillers-in-chennai": "/treatments/dermal-fillers",
    "/skin-glow-glass-skin-in-chennai": "/treatments/skin-glow-glass-skin",
    "/microneedling-in-chennai": "/treatments/microneedling",
    "/instant-glow-up-facials-in-chennai": "/treatments/instant-glow-up-facials",
    "/hair-restoration-anti-hair-loss-treatments-in-chennai": "/treatments/hair-restoration-anti-hair-loss",
    "/laser-hair-removal-service-in-chennai": "/treatments/laser-hair-removal",
    "/botox-dysport-injection-treatments-in-chennai": "/treatments/botox-dysport",
    "/iv-wellness-therapy-in-chennai": "/treatments/iv-wellness-therapy",
    "/skinpen-precision-microneedling": "/treatments/skinpen-microneedling",
    "/o-shot-orgasm-shot-womens-intimate-wellness-at-eternal-radiance": "/treatments/o-shot",
    "/fat-dissolving-injections-at-eternal-radiance": "/treatments/fat-dissolving-injections",
    "/laser-skin-toning-with-q-switch-laser-at-eternal-radiance": "/treatments/q-switch-laser-skin-toning",
    "/vampire-breast-lift-at-eternal-radiance-2": "/treatments/vampire-breast-lift",
    "/services": "/treatments",
    "/about-us": "/about",
    "/contact-us": "/contact",
    "/blogs": "/blog",
  },
  disclaimer,
};

export default brand;
