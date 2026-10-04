# Multi-brand clinic website

One Next.js (App Router, TypeScript, Tailwind, Framer Motion available) codebase that builds a different clinic site per brand.

## Brands

| Brand id | File | Status |
|---|---|---|
| `adyar-hydra` (default) | `brands/adyar-hydra.ts` | placeholder content |
| `eternal-radiance` | `brands/eternal-radiance.ts` | real home-page copy, reviews and old URLs; see placeholders below |

The brand is picked at **build time** by one variable, `NEXT_PUBLIC_BRAND` (unset or unknown means `adyar-hydra`).

```bash
npm install
NEXT_PUBLIC_BRAND=eternal-radiance npm run dev
npm run build:all        # builds both brands
```

## Pages

Home, Treatments hub, `/treatments/[slug]` (static), About, Gallery (category filter; hidden from nav until 3+ photos), Reviews (Instagram video reviews + written reviews), Blog (featured post, search, category chips, tags, pagination, `/blog/[slug]`), Community, Contact (WhatsApp pre-filled form, click-to-call, map, hours), Privacy Policy and Terms (drafts), `sitemap.xml`, `robots.txt`, Open Graph image, JSON-LD (MedicalClinic, FAQPage, Physician, BlogPosting), 301 redirects from each brand's `redirects` map (`next.config.ts`).

## Add or edit a brand

1. Copy `brands/eternal-radiance.ts` to `brands/<id>.ts` and edit. The shape is `BrandConfig` in `brands/types.ts`.
2. Register it in `lib/brand.ts` (`BRANDS`) and in `next.config.ts` (`BRANDS`, used for redirects).
3. Add brand assets in `public/brands/<id>/` (logo, favicon, hero, doctor, team, before/after). Any image slot with a `src` wins over stock photos.
4. Add blog posts as Markdown in `content/<id>/blog/*.md` (front matter: `title`, `date`, `excerpt`, `category`, `tags`, `featured`, `image`).
5. If you want a font not listed in `FontKey`, add it in `lib/fonts.ts` and `brands/types.ts`.

## Images

Brand-owned photos live in `public/brands/<id>/` and are wired through the brand config (`hero.image`, `gallery`, doctor/team `image`, `beforeAfter`). Eternal Radiance has two real photos: `clinic-reception.jpg` (home hero, About) and `doctor.jpg` (Dr. Sivapriya), both taken from the clinic's Google Maps listing: confirm the clinic holds the rights or replace with the original files.

Treatment and category cards use **temporary free stock photos** (`public/stock/`, Unsplash/Pexels licences) via `lib/stock.ts`, which only fills slots that have no `src`. They are generic scenes: set `image.src` on a treatment or category to override, and replace them with real photos before launch. Doctor, team, gallery and before/after slots never use stock; a slot without a photo renders nothing. The **Gallery** nav link appears once `gallery` has 3 or more real photos. Never use stock or AI images as before/after results.

## Instagram video reviews

Add entries to `videoReviews` in the brand file:

```ts
videoReviews: [{ name: "Patient name", instagramUrl: "https://www.instagram.com/reel/XXXXXXXX/", treatment: "Microneedling" }],
```

The card shows Instagram's own preview (cover image and details) but never plays in the page: a tap opens the reel on Instagram.

## Deploy on Vercel (one repo, two projects)

Create two Vercel projects from the same repo. In each, set **Environment Variables**:

- Project A: `NEXT_PUBLIC_BRAND=adyar-hydra`, with its own domain.
- Project B: `NEXT_PUBLIC_BRAND=eternal-radiance`, with domain `eternalradiance.in`.

Changing the value needs a redeploy. Each brand's `siteUrl` drives canonical URLs, the sitemap and Open Graph.

## Remaining placeholders

**Eternal Radiance** (search `PLACEHOLDER` in `brands/eternal-radiance.ts`):
- Logo (`EternalRadianceLogo.png` could not be downloaded; a text wordmark is used) and more clinic photos (only the reception photo exists; treatment, doctor, team and gallery photos are missing)
- Phone, WhatsApp number (booking buttons use a dummy number until set), email, opening hours, exact Google Maps embed URL (address and PIN are now set)
- Dr. Sivapriya: qualifications, registration number, bio, photo; team members; clinic timeline
- Google rating and review count (rating row hidden while count is 0)
- Instagram video reviews: 4 reels added; add each person's name and treatment
- Treatment descriptions are neutral drafts and need the doctor's approval
- Reviews copied from the live site: confirm consent and advertising-rule suitability
- Blog: 3 sample posts need clinical review; old blog URLs are not yet redirected

**Adyar Hydra**: everything marked `PLACEHOLDER` in `brands/adyar-hydra.ts` (all contact details, doctor, team, reviews, rating, siteUrl, redirects, logo).

## Advertising-rules note

Copy is written to avoid superlatives and guaranteed-result claims. Keep it that way when editing.
