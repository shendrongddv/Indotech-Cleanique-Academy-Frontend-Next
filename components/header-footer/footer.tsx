import { SiteLogoFooter } from "@/components/site-logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ChevronRight} from "lucide-react";

const FooterFront = () => {
  return (
    <footer className="border-t p-4 pt-16 text-sm">
      <div className="container space-y-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="flex flex-col justify-start gap-4 text-start max-md:flex-1 md:w-2/5">
            <SiteLogoFooter />
          </div>

          <div className="flex flex-1 flex-col justify-start gap-4 text-start">
            <h4 className="text-base font-medium">Program</h4>

            <ul>
              <li>
                <Link
                  href="/program-ca"
                  className={cn(buttonVariants({ variant: "link" }), "p-0")}
                >
                  <ChevronRight className="mr-2 h-4 w-4" />
                  Cleanique Academy™
                </Link>
              </li>
              <li>
                <Link
                  href="https://depocleanique.co.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "link" }), "p-0")}
                >
                  <ChevronRight className="mr-2 h-4 w-4" />
                  Depo Cleanique™
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-1 flex-col justify-start gap-4 text-start">
            <h4 className="text-base font-medium">Kontak</h4>

            <ul>
              <li>
                <Link
                  href="https://api.whatsapp.com/send/?phone=6287872180088&text=Dengan%20CS%20Cleanique%20Academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "link" }), "p-0")}
                >
                  <ChevronRight className="mr-2 h-4 w-4" />
                  Customer Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-1 flex-col justify-start gap-4 text-start">
            <h4 className="text-base font-medium">Follow</h4>

            <ul>
              <li>
                <Link
                  href="https://www.tiktok.com/@cleaniqueacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "link" }), "p-0")}
                >
                  <ChevronRight className="mr-2 h-4 w-4" />
                  TikTok
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/cleaniqueacademy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "link" }), "p-0")}
                >
                  <ChevronRight className="mr-2 h-4 w-4" />
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://web.facebook.com/people/Cleaniqueacademy/61560606725248/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "link" }), "p-0")}
                >
                  <ChevronRight className="mr-2 h-4 w-4" />
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <small>&copy; 2024. Cleanique Academy, All right reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default FooterFront;
