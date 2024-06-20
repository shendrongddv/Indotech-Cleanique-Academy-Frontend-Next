import Image from "next/image";
import Link from "next/link";

export const SiteLogoHeader = () => {
  return (
    <Link href="/" className="h-12 w-auto">
      <Image
        src="/logo.png"
        alt="Cleanique Academy"
        height={577}
        width={1600}
        className="h-full w-auto"
        priority
      />
    </Link>
  );
};
