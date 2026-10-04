import { brand } from "@/lib/brand";
import { getPosts } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import BlogIndex from "@/components/BlogIndex";

export const metadata = pageMeta("Blog", `Articles on skin, hair and wellness from ${brand.name}.`, "/blog");

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Skin, hair and wellness, explained" text="Plain-language articles to help you prepare for a consultation. General information, not a substitute for medical advice." crumbs={[{ href: "/", label: "Home" }, { label: "Blog" }]} />
      <section className="section"><div className="container-x"><BlogIndex posts={getPosts()} /></div></section>
    </>
  );
}
