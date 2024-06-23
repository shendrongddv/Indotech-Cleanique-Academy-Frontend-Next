import { Check, CheckCircle2, CircleX, X } from "lucide-react";
import { contentHargaPaket } from "../copywritting";

const HargaPaket = () => {
  const contents = contentHargaPaket;

  return (
    <section id="program" className="bg-slate-50 px-4 py-20">
      <div className="container flex flex-col items-center gap-8">
        <h2 className="text-2xl font-bold md:text-4xl">Paket</h2>

        <ul className="grid w-full gap-6 md:grid-cols-3 md:gap-12">
          {contents?.map((item) => (
            <li
              key={item.id}
              className="flex flex-col rounded-md border bg-white p-4 md:p-6"
            >
              <h3 className="font-medium">{item.title}</h3>
              <span className="text-3xl font-black">{`Rp ${item.harga}JT`}</span>

              <hr className="my-4" />
              <ul className="mt-4 grid gap-2">
                {item.features?.map((subitem) => (
                  <li
                    key={subitem.id}
                    className="flex items-baseline justify-start"
                  >
                    {subitem.isInclude ? (
                      <Check className="mr-2 h-4 w-4 shrink-0" />
                    ) : (
                      <X className="mr-2 h-4 w-4 shrink-0" />
                    )}
                    {subitem.isInclude ? (
                      <span>{subitem.text}</span>
                    ) : (
                      <span className="line-through opacity-75">
                        {subitem.text}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HargaPaket;
