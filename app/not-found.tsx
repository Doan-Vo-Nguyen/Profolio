import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col justify-between px-6 py-8 sm:px-12">
      <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted">
        404
      </p>
      <div>
        <h1 className="font-display text-[18vw] leading-[0.8] font-extrabold tracking-[-0.07em] uppercase">
          Lost
        </h1>
        <p className="mt-6 max-w-md font-serif text-xl italic text-muted">
          This path does not exist. Go back to the work.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block font-mono text-[11px] tracking-[0.22em] uppercase link-line"
        >
          Return home →
        </Link>
      </div>
      <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted">
        Doan Vo Nguyen
      </p>
    </main>
  );
}
