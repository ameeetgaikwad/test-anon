import Image from "next/image";
import { Inter } from "next/font/google";
import { LogInWithAnonAadhaar, useAnonAadhaar } from "@anon-aadhaar/react";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [anonAadhaar] = useAnonAadhaar();
  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
  }, [anonAadhaar]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <LogInWithAnonAadhaar
        nullifierSeed={17949523375164891060245100106117122211186}
      />
      <p>{anonAadhaar?.status}</p>
    </main>
  );
}
