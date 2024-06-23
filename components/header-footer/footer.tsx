import { SiteLogoFooter } from "@/components/site-logo";

const FooterFront = () => {
  return (
    <footer className="border-t p-4 pt-16 text-sm">
      <div className="container space-y-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="flex flex-col justify-start gap-4 text-start max-md:flex-1 md:w-2/5">
            <SiteLogoFooter />
          </div>

          <div className="flex flex-1 flex-col justify-start gap-4 text-start">
            <h4 className="text-base font-medium">Keagenan</h4>

            <ul>
              <li>Paket Starter</li>
              <li>Paket Premium</li>
              <li>Paket King</li>
            </ul>
          </div>

          <div className="flex flex-1 flex-col justify-start gap-4 text-start">
            <h4 className="text-base font-medium">Contact Us</h4>

            <ul>
              <li>+62857 1326 9167</li>
            </ul>
          </div>

          <div className="flex flex-1 flex-col justify-start gap-4 text-start">
            <h4 className="text-base font-medium">Follow Us</h4>

            <ul>
              <li>Instagram</li>
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
