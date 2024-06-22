import { SiteLogoFooter } from "@/components/site-logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Box, Check, Paperclip } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomepageLayout = () => {
  return (
    <>
      {/* HERO */}
      <section className="px-4 py-40">
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
                <Box className="mr-2 h-4 w-4" />
                Program Kami
              </Link>
              <Link
                href="#syarat"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                <Paperclip className="mr-2 h-4 w-4" />
                Persyaratan
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

      {/* ALUR PENDIRIAN */}
      <section id="program" className="px-4 py-20">
        <div className="container flex flex-col items-center gap-8 text-center">
          <h2 className="text-2xl font-bold md:text-4xl">Alur Pendaftaran</h2>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="program" className="bg-slate-50 px-4 py-20">
        <div className="container flex flex-col items-center gap-8 text-center">
          <h2 className="text-2xl font-bold md:text-4xl">Program Unggulan</h2>
        </div>
      </section>

      {/* ROI */}
      <section id="program" className="px-4 py-20">
        <div className="container flex flex-col items-center gap-8 text-center">
          <h2 className="text-2xl font-bold md:text-4xl">ROI</h2>
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
          <h2 className="text-2xl font-bold md:text-4xl">Persyaratan</h2>
        </div>
      </section>
    </>
  );
};

export default HomepageLayout;
