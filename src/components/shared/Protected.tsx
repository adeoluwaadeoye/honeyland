// "use client";

// import { useEffect, useState, ReactNode } from "react";
// import { useRouter } from "next/navigation";

// interface Props {
//   children: ReactNode;
// }

// export default function Protected({ children }: Props) {
//   const [allowed, setAllowed] = useState<boolean | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     // defer state update to avoid cascading renders
//     queueMicrotask(() => {
//       if (token) {
//         setAllowed(true);
//       } else {
//         setAllowed(false);
//         router.push("/auth/login"); // auto-redirect
//       }
//     });
//   }, [router]);

//   if (allowed === null) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <span className="text-gray-500 text-lg">Checking access...</span>
//       </div>
//     );
//   }

//   return <>{children}</>;
// }


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