import { SiteLogoFooter } from "@/components/site-logo";
import { Button } from "@/components/ui/button";
import { Box, Paperclip } from "lucide-react";
import Image from "next/image";

const HomepageLayout = () => {
  return (
    <>
      {/* HERO */}
      <section className="px-4 py-20">
        <div className="container">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            {/* ## */}
            <div className="flex w-full flex-col justify-start gap-4 text-start md:w-5/12">
              <h1 className="text-balance text-4xl font-bold md:text-6xl">
                Ambil Kendali Masa Depanmu
              </h1>

              <p className="text-balance md:text-lg">
                Kampus Merdeka adalah cara terbaik berkuliah. Dapatkan
                kemerdekaan untuk membentuk masa depan yang sesuai dengan
                aspirasi kariermu.
              </p>

              <div className="mt-4 flex flex-col gap-2 md:flex-row">
                <Button>
                  <Box className="mr-2 h-4 w-4" />
                  Program Kami
                </Button>
                <Button variant="outline">
                  <Paperclip className="mr-2 h-4 w-4" />
                  Persyaratan
                </Button>
              </div>
            </div>

            {/* ## */}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-slate-50 px-4 py-20">
        <div className="container flex flex-col items-center gap-8 text-center">
          <h2 className="text-2xl font-bold md:text-4xl">Program Unggulan</h2>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="px-4 py-20">
        <div className="container flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* COL */}
          <div className="flex w-full flex-col justify-start gap-4 text-start md:w-5/12">
            <SiteLogoFooter />

            <p className="text-lg font-semibold">
              Program persiapan karier yang komprehensif untuk mempersiapkan
              generasi terbaik Indonesia
            </p>

            <p>
              Kampus Merdeka adalah bagian dari kebijakan Merdeka Belajar oleh
              Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
              (Kemendikbudristek) yang memberikan seluruh mahasiswa kesempatan
              untuk mengasah kemampuan sesuai bakat dan minat dengan terjun
              langsung ke dunia kerja sebagai langkah persiapan karier.
            </p>
          </div>

          {/* COL */}
          <div className="flex w-full items-center justify-center md:w-5/12">
            <Image
              src="/4x3.png"
              alt="Programs"
              width={800}
              height={600}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-slate-50 px-4 py-20">
        <div className="container flex flex-col items-center gap-8 text-center">
          <h2 className="text-2xl font-bold md:text-4xl">Program Unggulan</h2>
        </div>
      </section>
    </>
  );
};

export default HomepageLayout;
