import { SiteLogoHeader } from "@/components/site-logo";
import { MobileMenu } from "./mobile-menu";

const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-50 w-full border-b bg-white px-4">
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* SiteLogo */}
        <SiteLogoHeader />

        {/* Nav */}
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
