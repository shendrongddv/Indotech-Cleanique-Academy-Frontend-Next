import { contentAlurPendaftaran } from "@/config/cleanique-academy";
import { Box } from "lucide-react";

const AlurPendaftaran = () => {
  const contents = contentAlurPendaftaran;

  return (
    <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8 md:gap-x-12 w-full">
      {contents?.map((item, index) => (
        <li
          key={item.id}
          className="flex items-start justify-start gap-4 rounded-md text-start md:flex-col"
        >
          <span className="font-bold text-primary text-lg">{`0${
            index + 1
          }`}</span>

          <p>{item.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default AlurPendaftaran;
