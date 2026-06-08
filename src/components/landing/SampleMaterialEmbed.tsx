export function SampleMaterialEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm ring-1 ring-navy/5">
      <iframe
        src="/myfeynman_sample_material.html"
        title="MyFeynman sample post-session materials"
        className="h-[min(720px,75vh)] w-full min-h-[480px] border-0"
        loading="lazy"
      />
    </div>
  );
}
