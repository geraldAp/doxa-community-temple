export function DailyMessage({ message }: { message: string | null }) {
  const paragraphs =
    message
      ?.trim()
      .split(/\n\s*\n/)
      .filter(Boolean) ?? [];
  return (
    <section
      id="daily-message"
      className="scripture-section"
      aria-labelledby="daily-message-heading"
    >
      <div className="church-container scripture-inner">
        <h2
          id="daily-message-heading"
          className="!text-3xl font-medium tracking-tight"
        >
          Daily message
        </h2>
        <div className="space-y-5 text-base leading-relaxed text-white/95 md:text-lg">
          {paragraphs.length ? (
            paragraphs.map((paragraph, index) => (
              <p key={index} className="whitespace-pre-line break-words">
                {paragraph}
              </p>
            ))
          ) : (
            <p>
              The daily message is unavailable right now. Please check back
              later.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
