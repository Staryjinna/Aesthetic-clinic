# Multi-brand clinic website

One Next.js (App Router, TypeScript, Tailwind, Framer Motion available) codebase that builds a different clinic site per brand.

## Use this repo as a base for a new clinic

`brands/starter.ts` is the neutral base. Everything a new client needs to change is in the **SETTINGS block** at the top of one brand file.

```bash
npm install
npm run new-brand -- my-clinic "My Clinic"     # creates brands/my-clinic.ts, public/brands/my-clinic/, content/my-clinic/blog/
NEXT_PUBLIC_BRAND=my-clinic npm run dev
```

No registration step: any `brands/<id>.ts` is picked up by `NEXT_PUBLIC_BRAND=<id>` (default `starter`). In the brand file's SETTINGS block:

| Change | Where |
|---|---|
| Brand name, tagline, city, site URL | `NAME`, `TAGLINE`, `CITY`, `SITE_URL` |
| Logo, favicon, share image, emblem | drop files in `public/brands/<id>/`, set `LOGO`, `FAVICON`, `OG_IMAGE`, `EMBLEM` |
| Colours and fonts | `COLORS`, `FONTS` |
| Phone, WhatsApp, email, address, map, hours, social links | `CONTACT` |
| Instagram reels | `REELS` (paste each reel URL) |
| Hero, doctor and gallery images | `HERO_IMAGE`, `DOCTOR_IMAGE`, `GALLERY` (paths into `public/brands/<id>/`) |
| Treatments, doctors, team, reviews, FAQs, SEO, redirects | the rest of the file |
| Blog | Markdown files in `content/<id>/blog/` |

Search the file for `PLACEHOLDER` to find what still needs real client content. Keep `brands/starter.ts` untouched so it stays a clean base.

## Brands in this repo

| Brand id | File | Status |
|---|---|---|
| `starter` (default) | `brands/starter.ts` | neutral base to copy |
| `adyar-hydra` | `brands/adyar-hydra.ts` | placeholder content |
| `eternal-radiance` | `brands/eternal-radiance.ts` | real home-page copy, reviews and old URLs; see placeholders below |

```bash
NEXT_PUBLIC_BRAND=eternal-radiance npm run dev
npm run build:all        # builds every brand in brands/
```

## Pages

Home, Treatments hub, `/treatments/[slug]` (static), About, Gallery (category filter; hidden from nav until 3+ photos), Reviews (Instagram video reviews + written reviews), Blog (featured post, search, category chips, tags, pagination, `/blog/[slug]`), Community, Contact (WhatsApp pre-filled form, click-to-call, map, hours), Privacy Policy and Terms (drafts), `sitemap.xml`, `robots.txt`, Open Graph image, JSON-LD (MedicalClinic, FAQPage, Physician, BlogPosting), 301 redirects from each brand's `redirects` map (`next.config.ts`).

## Add or edit a brand

1. Run `npm run new-brand -- <id> "Name"` (or copy `brands/starter.ts`). The shape is `BrandConfig` in `brands/types.ts`. Brands are auto-discovered, no registration.
2. Add brand assets in `public/brands/<id>/` (logo, favicon, hero, doctor, team, before/after). Any image slot with a `src` wins over stock photos.
3. Add blog posts as Markdown in `content/<id>/blog/*.md` (front matter: `title`, `date`, `excerpt`, `category`, `tags`, `featured`, `image`).
4. If you want a font not listed in `FontKey`, add it in `lib/fonts.ts` and `brands/types.ts`.

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
