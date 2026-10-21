"use client";
import Link from "next/link";
export default function PageError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="church-container section-space reading-width">
      <h1 className="display-heading">Let’s try that again.</h1>
      <p className="body-copy">
        This page couldn’t load just now. You can try again or find the details
        for visiting Doxa.
      </p>
      <div className="contact-actions">
        <button className="church-button" onClick={reset}>
          Try again
        </button>
        <Link className="text-link" href="/visit">
          Visitor information ↗
        </Link>
      </div>
    </div>
  );
}
