import { contentHargaPaket } from "@/config/cleanique-academy";
import { Check, X } from "lucide-react";

const HargaPaket = () => {
  const contents = contentHargaPaket;

  return (
    <ul className="grid gap-6 md:gap-12">
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
  );
};

export default HargaPaket;

export const HargaPaketBeta = () => {
  const contents = contentHargaPaket;

  return (
    <ul className="grid gap-6 md:gap-12">
      {contents?.map((item) => (
        <li
          key={item.id}
          className="flex flex-col rounded-md border bg-white p-4 md:p-6"
        >
          <h3 className="text-sm text-muted-foreground">{item.title}</h3>
          <span className="text-xl font-black">{`Rp ${item.harga}JT`}</span>

          <hr className="my-2" />
          <ul className="grid gap-2">
            {item.features?.map((subitem) => (
              <li
                key={subitem.id}
                className="flex items-baseline justify-start"
              >
                {subitem.isInclude ? (
                  <Check className="mr-2 h-2.5 w-2.5 shrink-0" />
                ) : (
                  <X className="mr-2 h-2.5 w-2.5 shrink-0" />
                )}
                {subitem.isInclude ? (
                  <span className="text-xs md:text-sm">{subitem.text}</span>
                ) : (
                  <span className="line-through text-xs md:text-sm opacity-75">
                    {subitem.text}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
