import { SiteLogoHeader } from "@/components/site-logo";
import { MobileMenu } from "./mobile-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Box, HelpCircle, Home, LogInIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b bg-white px-4">
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* SiteLogo */}
        <SiteLogoHeader />

        {/* Nav */}
        <ul className="hidden gap-2 md:flex md:items-center md:justify-center">
          <li>
            <Link href="/" className={cn(buttonVariants({ variant: "ghost" }))}>
              <Home className="mr-2 h-4 w-4" />
              Beranda
            </Link>
          </li>
          <li>
            <Link
              href="/program"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              <Box className="mr-2 h-4 w-4" />
              Program
            </Link>
          </li>
          <li>
            <Link href="#" className={cn(buttonVariants({ variant: "ghost" }))}>
              <HelpCircle className="mr-2 h-4 w-4" />
              Bantuan
            </Link>
          </li>
        </ul>

        {/* Groups */}
        <div className="flex items-center justify-center gap-2">
          <Link
            href="/account"
            className={cn(
              buttonVariants({ variant: "default" }),
              "hidden md:flex",
            )}
          >
            <LogInIcon className="mr-2 h-4 w-4" />
            Daftar
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
