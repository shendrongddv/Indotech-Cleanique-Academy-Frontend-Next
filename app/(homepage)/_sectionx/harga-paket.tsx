import { Check } from "lucide-react";

const HargaPaket = () => {
  return (
    <section id="program" className="bg-slate-50 px-4 py-20">
      <div className="container flex flex-col items-center gap-8">
        <h2 className="text-2xl font-bold md:text-4xl">Paket</h2>

        <ul className="grid w-full gap-6 md:grid-cols-3 md:gap-12">
          <li className="flex flex-col rounded-md border bg-white p-4 md:p-6">
            <h3 className="font-medium">Starter</h3>
            <span className="text-3xl font-black">Rp 15JT</span>

            <hr className="my-4" />
            <ul className="mt-4 grid gap-2">
              <li className="flex items-baseline justify-start">
                <Check className="mr-2 h-4 w-4 shrink-0" />
                Lorem ipsum dolor sit, amet consectetur.
              </li>
              <li className="flex items-baseline justify-start">
                <Check className="mr-2 h-4 w-4 shrink-0" />
                Lorem ipsum dolor sit, amet consectetur.
              </li>
              <li className="flex items-baseline justify-start">
                <Check className="mr-2 h-4 w-4 shrink-0" />
                Lorem ipsum dolor sit, amet consectetur.
              </li>
              <li className="flex items-baseline justify-start">
                <Check className="mr-2 h-4 w-4 shrink-0" />
                Lorem ipsum dolor sit, amet consectetur.
              </li>
            </ul>
          </li>

          <li className="flex flex-col rounded-md border bg-white p-4 md:p-6">
            <h3 className="font-medium">Premium</h3>
            <span className="text-3xl font-black">Rp 17.9JT</span>

            <hr className="my-4" />
            <ul className="mt-4 grid gap-2">
              <li className="flex items-baseline justify-start">
                <Check className="mr-2 h-4 w-4 shrink-0" />
                Lorem ipsum dolor sit, amet consectetur.
              </li>
              <li className="flex items-baseline justify-start">
                <Check className="mr-2 h-4 w-4 shrink-0" />
                Lorem ipsum dolor sit, amet consectetur.
              </li>
              <li className="flex items-baseline justify-start">
                <Check className="mr-2 h-4 w-4 shrink-0" />
                Lorem ipsum dolor sit, amet consectetur.
              </li>
              <li className="flex items-baseline justify-start">
                <Check className="mr-2 h-4 w-4 shrink-0" />
                Lorem ipsum dolor sit, amet consectetur.
              </li>
            </ul>
          </li>

          <li className="flex flex-col rounded-md border bg-white p-4 md:p-6">
            <h3 className="font-medium">King</h3>
            <span className="text-3xl font-black">Rp 24.5JT</span>

            <hr className="my-4" />
            <ul className="mt-4 grid gap-2">
              <li className="flex items-baseline justify-start">
                <Check className="mr-2 h-4 w-4 shrink-0" />
                Lorem ipsum dolor sit, amet consectetur.
              </li>
              <li className="flex items-baseline justify-start">
                <Check className="mr-2 h-4 w-4 shrink-0" />
                Lorem ipsum dolor sit, amet consectetur.
              </li>
              <li className="flex items-baseline justify-start">
                <Check className="mr-2 h-4 w-4 shrink-0" />
                Lorem ipsum dolor sit, amet consectetur.
              </li>
              <li className="flex items-baseline justify-start">
                <Check className="mr-2 h-4 w-4 shrink-0" />
                Lorem ipsum dolor sit, amet consectetur.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HargaPaket;
