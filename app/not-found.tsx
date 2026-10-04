import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section"><div className="container-x max-w-xl text-center">
      <p className="eyebrow">404</p><h1 className="h-display mt-3">Page not found</h1>
      <p className="mt-4 text-muted">The page you are looking for may have moved.</p>
      <Link href="/" className="btn btn-primary mt-8">Back to home</Link>
    </div></section>
  );
}
