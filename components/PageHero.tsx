import Link from "next/link";

export default function PageHero({ eyebrow, title, text, crumbs }: { eyebrow?: string; title: string; text?: string; crumbs?: { href?: string; label: string }[] }) {
  return (
    <section className="border-b border-line">
      <div className="container-x py-14 sm:py-20">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
            <ol className="flex flex-wrap gap-2">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex gap-2">
                  {c.href ? <Link href={c.href} className="hover:text-primary">{c.label}</Link> : <span aria-current="page" className="text-ink">{c.label}</span>}
                  {i < crumbs.length - 1 && <span aria-hidden>/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="h-display mt-3 max-w-3xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-lg text-muted">{text}</p>}
      </div>
    </section>
  );
}
