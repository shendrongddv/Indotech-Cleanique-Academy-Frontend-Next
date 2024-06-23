import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AlurPendaftaran from "./_sectionx/alur-pendaftaran";
import HargaPaket from "./_sectionx/harga-paket";

const HomepageLayout = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-[url('/bg-hero.webp')] bg-cover bg-no-repeat px-4 py-40">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-10 text-center">
            {/* ## */}
            <h1 className="text-balance text-4xl font-bold md:text-6xl">
              #GROWYOURSELFWITHUS!
            </h1>

            <p className="text-balance md:text-lg">
              Cleanique Academy merupakan program unggulan dari PT Indotech
              Berkah Abadi, salah satu perusahaan lokal dari Yogyakarta, melalui
              brand nya Orchidcare memberikan pelatihan, pembinaan, serta
              permodalan usaha bagi calon mitra Cleanique Academy yang nantinya
              akan dibimbing oleh mentor dengan status kemitraan seumur hidup.
            </p>

            <div className="mt-4 flex flex-col gap-2 md:flex-row">
              <Link
                href="#program"
                className={cn(buttonVariants({ variant: "default" }))}
              >
                Selengkapnya
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ANALISIS BISNIS */}
      <section className="px-4 py-20">
        <div className="container flex flex-col justify-center gap-10">
          <div>
            <h2 className="text-2xl font-bold md:text-4xl">Analisis Bisnis</h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {/* COL */}
            <div className="flex flex-col justify-start gap-6 rounded-md border p-6 text-start">
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
            <div className="flex flex-col justify-start gap-6 rounded-md border p-6 text-start">
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

            {/* COL */}
            <div className="flex flex-col justify-start gap-6 rounded-md border p-6 text-start">
              <h2 className="text-xl font-bold md:text-2xl">Kelebihan</h2>

              <ul className="grid gap-2">
                <li className="flex items-baseline justify-start">
                  <Check className="mr-2 h-4 w-4 shrink-0" />
                  Sudah memiliki izin edar KEMENKES
                </li>
                <li className="flex items-baseline justify-start">
                  <Check className="mr-2 h-4 w-4 shrink-0" />
                  Merk sudah terdaftar DJKI
                </li>
                <li className="flex items-baseline justify-start">
                  <Check className="mr-2 h-4 w-4 shrink-0" />
                  Sudah memiliki sertifikat halal MUI
                </li>

                <li className="flex items-baseline justify-start">
                  <Check className="mr-2 h-4 w-4 shrink-0" />
                  Proteksi Perang Harga - Garansi Uang Kembali
                </li>

                <li className="flex items-baseline justify-start">
                  <Check className="mr-2 h-4 w-4 shrink-0" />
                  Garansi Uang Kembali
                </li>
              </ul>
            </div>

            {/* COL */}
            <div className="flex aspect-video items-center justify-center overflow-hidden rounded-md border">
              <Image
                src="/4x3.png"
                alt="Programs"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>

            {/* COL */}
            <div className="flex aspect-video items-center justify-center overflow-hidden rounded-md border">
              <Image
                src="/4x3.png"
                alt="Programs"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>

            {/* COL */}
            <div className="flex aspect-video items-center justify-center overflow-hidden rounded-md border">
              <Image
                src="/4x3.png"
                alt="Programs"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ALUR PENDAFTARAN */}
      <AlurPendaftaran />

      {/* PROGRAMS */}
      <HargaPaket />

      {/* ROI */}
      <section id="program" className="px-4 py-20">
        <div className="container flex flex-col items-center gap-8 text-center">
          <h2 className="text-2xl font-bold md:text-4xl">
            Return of Investment
          </h2>

          <div className="flex aspect-video items-center justify-center overflow-hidden rounded-md border">
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

      {/* TESTIMONI MITRA */}
      <section id="program" className="bg-slate-50 px-4 py-20">
        <div className="container flex flex-col items-center gap-8 text-center">
          <h2 className="text-2xl font-bold md:text-4xl">Testimoni Mitra</h2>
        </div>
      </section>

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
                href="#"
                className={cn(buttonVariants({ variant: "destructive" }))}
              >
                Daftar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "text-black",
                )}
              >
                Konsultasi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomepageLayout;
