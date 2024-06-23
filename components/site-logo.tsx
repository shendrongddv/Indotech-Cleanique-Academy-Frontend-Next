import Image from "next/image";
import Link from "next/link";
import siteLogo from "../public/cleanique-academy.png";

export const SiteLogoHeader = () => {
  return (
    <Link href="/" className="h-10 w-auto">
      <Image
        src={siteLogo}
        alt="Cleanique Academy"
        height={577}
        width={1600}
        className="h-full w-auto"
        priority
      />
    </Link>
  );
};

export const SiteLogoFooter = () => {
  return (
    <Link href="/" className="h-12 w-auto">
      <Image
        src={siteLogo}
        alt="Cleanique Academy"
        height={577}
        width={1600}
        className="h-full w-auto"
      />
    </Link>
  );
};
