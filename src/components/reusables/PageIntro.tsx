export function PageIntro({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <header className="page-intro">
      <div className="church-container">
        <h1 className="display-heading" data-motion>
          {title}
        </h1>
        {description && (
          <p className="intro-copy" data-motion>
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
