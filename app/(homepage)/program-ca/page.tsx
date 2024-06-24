import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, ChevronRight, LogInIcon } from "lucide-react";
import Link from "next/link";
import AlurPendaftaran from "./_sections/alur-pendaftaran";
import Image from "next/image";
import KelebihanProgram from "./_sections/kelebihan-program";
import HargaPaket from "./_sections/harga-paket";
import TestimoniMitra from "./_sections/testimoni-mitra";

const ProgramCleaniqueAcademy = () => {
  return (
    <>
      {/* HERO */}
      <section className="py-20 pt-36 px-4 gradient text-white">
        <div className="container">
          <div className="flex flex-col justify-start text-start gap-4 w-full md:w-1/2">
            <h1 className="md:text-6xl font-medium text-balance text-2xl">
              #GrowYourselfWithUs!
            </h1>
          </div>
        </div>
      </section>
      {/* ./ HERO */}

      {/* SECTION */}
      <section className="py-20 px-4">
        <div className="container space-y-6">
          <h2 className="font-medium text-2xl md:text-4xl md:w-1/2">
            Apa itu Cleanique Academy?
          </h2>

          <p className="md:text-lg">
            Cleanique Academy merupakan program unggulan dari PT Indotech Berkah
            Abadi, salah satu perusahaan lokal dari Yogyakarta, melalui brand
            nya Orchidcare memberikan pelatihan, pembinaan, serta permodalan
            usaha bagi calon mitra Cleanique Academy yang nantinya akan
            dibimbing oleh mentor dengan status kemitraan seumur hidup.
          </p>
        </div>
      </section>
      {/* ./ SECTION */}

      {/* ANALISIS */}
      <section className="py-20 px-4">
        <div className="container space-y-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* COL */}
            <div>
              <h2 className="font-medium text-2xl md:text-4xl">
                Analisis Bisnis
              </h2>
            </div>

            {/* COL */}
            <div className="flex flex-col justify-start gap-6 rounded-md border p-6 text-start bg-primary text-white">
              <h2 className="text-xl font-bold md:text-2xl">Kekuatan</h2>

              <ul className="grid gap-2">
                <li className="flex items-baseline justify-start">
                  <Check className="mr-2 h-4 w-4 shrink-0" />
                  Harga terjangkau dengan kualitas premium
                </li>
                <li className="flex items-baseline justify-start">
                  <Check className="mr-2 h-4 w-4 shrink-0" />
                  Operasional mudah dan dibimbing tenaga professional
                </li>
                <li className="flex items-baseline justify-start">
                  <Check className="mr-2 h-4 w-4 shrink-0" />
                  Tingkat kebutuhan konsumen terhadap produk yang tinggi
                </li>
                <li className="flex items-baseline justify-start">
                  <Check className="mr-2 h-4 w-4 shrink-0" />
                  Support marketing online & Offline dari Cleanique Academy
                </li>
              </ul>
            </div>

            {/* COL */}
            <div className="flex flex-col justify-start gap-6 rounded-md border p-6 text-start bg-primary text-white">
              <h2 className="text-xl font-bold md:text-2xl">Peluang</h2>

              <ul className="grid gap-2">
                <li className="flex items-baseline justify-start">
                  <Check className="mr-2 h-4 w-4 shrink-0" />
                  Menjadi alternatif pilihan dengan harga terjangkau untuk
                  produk sabun, parfum, dan perbekalan kesehatan rumah tangga
                  lainnya dibandingkan produk konvensional
                </li>
                <li className="flex items-baseline justify-start">
                  <Check className="mr-2 h-4 w-4 shrink-0" />
                  Ramah lingkungan baik dari bahan maupun sistem penjualan
                </li>
                <li className="flex items-baseline justify-start">
                  <Check className="mr-2 h-4 w-4 shrink-0" />
                  Nyaris tidak ada kompetitor
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ./ ANALISIS */}

      {/* KELEBIHAN */}
      <section className="py-20 px-4">
        <div className="container space-y-10">
          <h2 className="font-medium text-2xl md:text-4xl md:w-1/2">
            Kelebihan Program
          </h2>
          <KelebihanProgram />
        </div>
      </section>
      {/* ./ KELEBIHAN */}

      {/* PENDAFTARAN */}
      <section className="py-20 px-4">
        <div className="container space-y-10">
          <h2 className="font-medium text-2xl md:text-4xl md:w-1/2">
            Alur Pendaftaran
          </h2>

          <AlurPendaftaran />
        </div>
      </section>
      {/* ./ PENDAFTARAN */}

      {/* Harga & ROI */}
      <section className="py-20 px-4">
        <div className="container space-y-10">
          {/* <h2 className="font-medium text-2xl md:text-4xl md:w-1/2">
            Harga & ROI
          </h2> */}

          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="w-full md:w-1/3">
              <HargaPaket />
            </div>

            <div className="flex-1">
              <figure className="w-full h-auto flex justify-center' items-center">
                <Image
                  src="/img17.jpg"
                  alt="Image"
                  width={1922}
                  height={1247}
                  className="w-full h-auto"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      {/* ./ Harga & ROI */}

      {/* Testimoni Mitra */}
      <section className="py-20 px-4">
        <div className="container space-y-10">
          <TestimoniMitra />
        </div>
      </section>
      {/* ./ Testimoni Mitra */}

      {/* PERSYARATAN */}
      <section id="program" className="px-4 py-20">
        <div className="container flex flex-col items-center gap-8 text-center">
          <h2 className="text-2xl font-bold md:text-4xl">Apakah Kamu</h2>

          <ul className="grid w-full gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8 md:gap-x-12">
            <li className="flex flex-col items-center gap-4 rounded-md border bg-white p-4">
              <Check className="h-6 w-6 shrink-0 text-destructive" />

              <p>Memiliki rencana yang bagus tentang bisnis</p>
            </li>
            <li className="flex flex-col items-center gap-4 rounded-md border bg-white p-4">
              <Check className="h-6 w-6 shrink-0 text-destructive" />

              <p>Memiliki kemampuan atau pengetahuan tentang keuangan</p>
            </li>
            <li className="flex flex-col items-center gap-4 rounded-md border bg-white p-4">
              <Check className="h-6 w-6 shrink-0 text-destructive" />

              <p>memliki motivasi yang kuat</p>
            </li>
            <li className="flex flex-col items-center gap-4 rounded-md border bg-white p-4">
              <Check className="h-6 w-6 shrink-0 text-destructive" />

              <p>
                {" "}
                memiliki ketertarikan kuat dalam dunia bisnis, terutama FMCG
              </p>
            </li>
          </ul>

          <div className="mt-16 flex w-full flex-col items-center gap-10 rounded-md bg-primary p-6 py-16 text-center text-white md:p-16">
            <h2 className="text-2xl font-bold md:text-4xl">
              Punya kriteria diatas? Segera gabung dengan kami!
            </h2>

            <div className="grid w-full items-center justify-center gap-4 md:flex md:w-auto md:flex-row">
              <Link
                href="https://app.cleaniqueacademy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "bg-transparent text-white"
                )}
              >
                <LogInIcon className="mr-2 h-4 w-4" />
                Daftar
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=6287872180088&text=Dengan%20CS%20Cleanique%20Academy"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "bg-transparent text-white"
                )}
              >
                <ChevronRight className="mr-2 h-4 w-4" />
                Customer Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramCleaniqueAcademy;
