import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-8xl font-extrabold text-brand">404</h1>
      <p className="mt-4 text-xl text-muted">Page not found</p>
      <Link
        to="/"
        className="mt-6 rounded-full bg-brand px-6 py-3 font-semibold text-white"
      >
        Back to Home
      </Link>
    </section>
  );
}