import { SiteLogoHeader } from "@/components/site-logo";
import { Button } from "@/components/ui/button";
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
import { Menu } from "lucide-react";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          className="flex aspect-square items-center justify-center p-0"
        >
          <Menu className="h-6 w-6 text-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex h-full flex-col gap-0 p-0 md:hidden"
      >
        <SheetHeader className="flex h-16 flex-row items-center justify-start border-b p-4">
          <SheetClose asChild>
            <SiteLogoHeader />
          </SheetClose>
        </SheetHeader>
        {/* MENU */}
        <SheetFooter className="mt-auto border-t p-4">
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
