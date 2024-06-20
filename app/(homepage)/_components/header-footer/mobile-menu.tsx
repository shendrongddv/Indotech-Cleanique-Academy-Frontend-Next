import { SiteLogoHeader } from "@/components/site-logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { LogInIcon, Menu } from "lucide-react";
import Link from "next/link";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="flex md:hidden">
        <Button
          variant="secondary"
          className="flex aspect-square items-center justify-center p-0"
        >
          <Menu className="h-6 w-6 text-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col gap-0 p-0 md:hidden">
        <SheetHeader className="flex h-16 flex-row items-center justify-start border-b p-4">
          <SheetClose asChild>
            <SiteLogoHeader />
          </SheetClose>
        </SheetHeader>
        {/* MENU */}
        <SheetFooter className="mt-auto border-t p-4">
          <SheetClose asChild>
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
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
