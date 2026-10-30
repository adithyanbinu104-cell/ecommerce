import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center flex flex-col items-center gap-6">
      <span className="font-display-xl text-display-xl text-primary">404</span>
      <h1 className="font-headline-lg text-headline-lg uppercase text-primary">
        Piece Not Found
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
        The page or product you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-8 py-4 bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-[0.2em] hover:bg-secondary transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
