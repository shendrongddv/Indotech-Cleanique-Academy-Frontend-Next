import { Box } from "lucide-react";
import { contentAlurPendaftaran } from "../copywritting";

const AlurPendaftaran = () => {
  const contents = contentAlurPendaftaran;

  return (
    <section id="program" className="px-4 py-20">
      <div className="container flex flex-col items-center gap-16 text-center">
        <h2 className="text-2xl font-bold md:text-4xl">Alur Pendaftaran</h2>

        <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8 md:gap-x-12">
          {contents?.map((item, index) => (
            <li
              key={item.id}
              className="flex items-start justify-start gap-4 rounded-md text-start md:flex-col"
            >
              <Box className="h-6 w-6 shrink-0 text-primary" />

              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AlurPendaftaran;
