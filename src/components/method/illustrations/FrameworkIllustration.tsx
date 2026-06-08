import { BloomsPyramidIllustration } from "./BloomsPyramidIllustration";
import { DokLevelsIllustration } from "./DokLevelsIllustration";
import { ErrorAnalysisIllustration } from "./ErrorAnalysisIllustration";
import { ForgettingCurveIllustration } from "./ForgettingCurveIllustration";
import { RetrievalPracticeIllustration } from "./RetrievalPracticeIllustration";
import { VarkIllustration } from "./VarkIllustration";
import { MetacognitionIllustration } from "./MetacognitionIllustration";

interface FrameworkIllustrationProps {
  pillar: number;
  bloomsLabels?: string[];
  className?: string;
}

export function FrameworkIllustration({
  pillar,
  bloomsLabels,
  className = "",
}: FrameworkIllustrationProps) {
  const wrapper = `rounded-2xl bg-orange-light/80 p-4 ring-1 ring-navy/5 ${className}`;

  switch (pillar) {
    case 1:
      return (
        <div className={wrapper}>
          <BloomsPyramidIllustration labels={bloomsLabels} />
          <div className="mt-2 border-t border-navy/10 pt-3">
            <DokLevelsIllustration className="max-w-[200px]" />
          </div>
        </div>
      );
    case 2:
      return (
        <div className={wrapper}>
          <VarkIllustration />
        </div>
      );
    case 3:
      return (
        <div className={wrapper}>
          <ForgettingCurveIllustration />
        </div>
      );
    case 4:
      return (
        <div className={wrapper}>
          <MetacognitionIllustration />
        </div>
      );
    case 5:
      return (
        <div className={wrapper}>
          <ErrorAnalysisIllustration />
        </div>
      );
    case 6:
      return (
        <div className={wrapper}>
          <RetrievalPracticeIllustration />
        </div>
      );
    default:
      return null;
  }
}
