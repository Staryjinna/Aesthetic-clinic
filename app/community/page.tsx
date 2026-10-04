import { brand, whatsappLink } from "@/lib/brand";
import { pageMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";

export const metadata = pageMeta("Join Community", `Follow ${brand.name} for skin, hair and wellness updates.`, "/community");

export default function CommunityPage() {
  const links = [
    brand.social.instagram && { label: "Instagram", text: "Tips, treatment explainers and patient video reviews.", href: brand.social.instagram },
    brand.social.facebook && { label: "Facebook", text: "Clinic news and updates.", href: brand.social.facebook },
    { label: "WhatsApp", text: "Ask a question or book a consultation.", href: whatsappLink(`Hello ${brand.name}, I'd like to join your community updates.`) },
  ].filter(Boolean) as { label: string; text: string; href: string }[];
  return (
    <>
      <PageHero eyebrow="Community" title="Join our community" text="Stay in touch for educational content and clinic updates. We do not share your details." crumbs={[{ href: "/", label: "Home" }, { label: "Community" }]} />
      <section className="section"><div className="container-x">
        <ul className="grid gap-5 md:grid-cols-3">
          {links.map((l) => (
            <li key={l.label} className="rounded-2xl border border-line p-7">
              <h2 className="text-xl">{l.label}</h2><p className="mt-2 text-muted">{l.text}</p>
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-6">Open {l.label}</a>
            </li>
          ))}
        </ul>
      </div></section>
    </>
  );
}
