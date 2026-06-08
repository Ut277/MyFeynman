import { BloomsPyramidIllustration } from "./illustrations/BloomsPyramidIllustration";
import { DokLevelsIllustration } from "./illustrations/DokLevelsIllustration";

interface BloomsLevel {
  name: string;
  description: string;
}

interface BloomsTaxonomyProps {
  title: string;
  body: string;
  levels: BloomsLevel[];
  sessionNoteLabel: string;
  sessionNoteExample: string;
}

export function BloomsTaxonomy({
  title,
  body,
  levels,
  sessionNoteLabel,
  sessionNoteExample,
}: BloomsTaxonomyProps) {
  const pyramidLabels = [...levels].reverse().map((level) => level.name);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-navy md:text-3xl">{title}</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-warm-grey">{body}</p>

      <div className="mt-8 flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="w-full max-w-xs shrink-0 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-navy/5">
          <BloomsPyramidIllustration labels={pyramidLabels} />
        </div>

        <div className="w-full flex-1 space-y-2">
          {levels.map((level, index) => (
            <div
              key={level.name}
              className="flex items-start gap-3 rounded-lg bg-white px-4 py-3 ring-1 ring-navy/5"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-primary text-xs font-bold text-white">
                {index + 1}
              </span>
              <div>
                <p className="text-sm font-semibold text-navy">{level.name}</p>
                <p className="text-xs text-warm-grey">{level.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-md rounded-xl border border-navy/10 bg-white p-4 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-orange-primary">
          {sessionNoteLabel}
        </p>
        <p className="mt-2 text-sm text-warm-grey">{sessionNoteExample}</p>
      </div>
    </div>
  );
}

export { DokLevelsIllustration };
