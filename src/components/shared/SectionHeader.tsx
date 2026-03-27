"use client";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {/* small label with double underline */}
      <p className="relative text-md uppercase tracking-widest text-rose-500 font-medium">
        {label}
      </p>

      {/* main expressive title */}
      <h2 className="text-4xl md:text-4xl lg:text-5xl leading-snug font-bold">
        {title}
      </h2>
    </div>
  );
}