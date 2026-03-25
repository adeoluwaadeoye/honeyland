"use client";

interface SectionHeaderProps {
  label: string;                 // small top text
  title: React.ReactNode;        // main expressive line
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {/* small label */}
      <p className="text-sm uppercase tracking-widest text-gray-800">
        {label}
      </p>

      {/* main expressive title */}
      <h2 className="text-2xl md:text-4xl lg:text-5xl leading-snug font-medium text-gray-700">
        {title}
      </h2>
    </div>
  );
}