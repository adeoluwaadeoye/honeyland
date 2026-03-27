"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

interface ProtectedProps {
  children: React.ReactNode;
}

const Protected = ({ children }: ProtectedProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [allowed, setAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setTimeout(() => setAllowed(true), 0);
    } else {
      localStorage.setItem("redirectAfterLogin", pathname);
      setTimeout(() => setAllowed(false), 0);
      router.push("/auth/login");
    }
  }, [pathname, router]);

  if (allowed === null) return null; // loading
  if (!allowed) return null; // redirecting

  return <>{children}</>;
};

export default Protected;