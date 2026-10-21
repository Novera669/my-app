export default function PlaceholderPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section>
      <h1 className="text-2xl font-semibold text-ink sm:text-3xl">{title}</h1>
      <p className="mt-2 text-ink/70">{description}</p>
      <div className="mt-6 rounded-card border border-dashed border-ink/20 bg-muted p-8 text-center text-ink/50">
        Placeholder. Real content comes in a later phase.
      </div>
    </section>
  );
}