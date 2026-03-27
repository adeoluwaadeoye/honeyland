import Link from "next/link";

interface CTAButtonProps {
  text: string;
  href: string;
}

export default function CTAButton({ text, href }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className="inline-block px-6 py-3 mb-6 bg-green-500 text-white shadow-md hover:bg-green-600 hover:shadow-lg transition-all duration-300"
    >
      {text}
    </Link>
  );
}