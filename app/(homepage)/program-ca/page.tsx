import Image from "next/image";
import {
  copyAlpha,
  copyAlurPendaftaran,
  copyJaminanPerlindunganUsaha,
} from "./copywritting";
import { SiteLogoFooter } from "@/components/site-logo";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, LogIn, Phone } from "lucide-react";
import TestimoniMitra from "../program-ca-old/_sections/testimoni-mitra";
import { HargaPaketBeta } from "../program-ca-old/_sections/harga-paket";

const ProgramCleaniqueAcademy = () => {
  return (
    <>
      {/* HERO */}
      <section className="px-4 py-20 pt-36 bg-[url('/v2/Bakground-1-Photoroom.png')] bg-cover bg-center bg-no-repeat">
        <div className="container flex md:flex-row flex-col md:justify-between md:items-center gap-16">
          {/* COL */}
          <div className="w-full md:w-6/12 flex flex-col gap-6 items-center md:items-start text-center md:text-start">
            <Image
              src="/v2/logo.png"
              alt="Image"
              width={274}
              height={80}
              className="h-8 md:h-20 w-auto"
            />

            <h1 className="font-black uppercase text-4xl md:text-6xl">
              Grow Yourself With Us
            </h1>

            <Link
              href="https://app.cleaniqueacademy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default" }),
                "my-btn rounded-full mt-4 border-b-2 border-white shadow-lg"
              )}
            >
              <span className="drop-shadow-lg text-white font-bold">
                Daftar Sekarang
              </span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Col */}
          <div className="w-full md:w-5/12">
            <figure className="flex justify-center items-center w-full aspect-square">
              <Image
                src="/v2/1.png"
                alt="Image"
                width={656}
                height={602}
                className="w-full h-auto"
              />
            </figure>
          </div>
        </div>
      </section>
      {/* ./ HERO */}

      {/* SECTIONXXX */}
      <section className="px-4 py-20 bg-[url('/v2/Bakground-3-Photoroom.png')] bg-cover bg-center bg-no-repeat">
        <div className="container flex flex-col items-center  gap-20">
          {/* ROW */}
          <div className="w-full md:w-4/5 flex flex-col text-center justify-center gap-2">
            <p className="text-lg md:text-xl font-medium">
              Cleanique Academy merupakan program unggulan dari PT Indotech
              Berkah Abadi, salah satu perusahaan lokal dari Yogyakarta, melalui
              brand nya Orchidcare memberikan pelatihan, pembinaan, serta
              permodalan usaha bagi calon mitra Cleanique Academy yang nantinya
              akan dibimbing oleh mentor dengan status kemitraan seumur hidup.
            </p>
          </div>

          {/* ROW */}
          <ul className="w-full flex flex-wrap justify-center items-center gap-10">
            {copyAlpha?.map((item) => (
              <li
                key={item.id}
                className="w-full sm:w-1/2 shadow-xl md:w-1/5 bg-white border-4 border-white rounded-2xl overflow-hidden grid"
              >
                <figure className="aspect-video overflow-hidden flex justify-center items-center w-full round3x">
                  <Image
                    src={`/v2/${item.media}`}
                    alt={item.title}
                    width={294}
                    height={179}
                    className="h-full w-full object-cover"
                  />
                </figure>

                <div className="p-4 flex text-center justify-center w-full">
                  <h3 className="text-balance md:w-9/12 md:text-lg font-bold">
                    {item.title}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* ./SECTIONXXX */}

      {/* JAMINAN PERLINDUNGAN USAHA */}
      <section className="px-4 py-20  bg-[#1c643f]">
        <div className="container flex flex-col items-center gap-10">
          {/* TITLE */}
          <h2 className="text-2xl md:text-3xl font-black uppercase text-center text-white">
            Jaminan Perlindungan Usaha
          </h2>

          {/* ROW */}
          <ul className="w-full grid md:grid-cols-3 gap-10">
            {copyJaminanPerlindunganUsaha?.map((item) => (
              <li
                key={item.id}
                className="bg-white p-4 border h-full flex flex-col justify-start"
              >
                {item.media !== null ? (
                  <figure className=" flex justify-center items-center h-auto w-full border">
                    <Image
                      src={`/v2/${item.media}`}
                      alt={item.title}
                      width={400}
                      height={400}
                      className="w-full h-auto"
                    />
                  </figure>
                ) : null}

                <div className="p-4 flex flex-col justify-start items-center text-center gap-4 mt-4">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* ./ JAMINAN PERLINDUNGAN USAHA */}

      {/* FASILITAS MITRA */}
      <section className="px-4 py-20 bg-[url('/v2/Bakground-3-Photoroom.png')] bg-cover bg-center bg-no-repeat">
        <div className="container flex flex-col items-center gap-10">
          {/* ROW */}
          <div className="grid aspect-square md:grid-cols-2 w-full md:w-7/12 gap-4 md:gap-0">
            {/* COL */}
            <div className=" md:p-4 flex justify-center items-center md:aspect-square p-4">
              <h2 className="text-xl md:text-2xl font-bold md:w-1/2 text-center">
                Fasilitas Mitra
              </h2>
            </div>

            {/* COL */}
            <div className="p-4 py-6 md:p-6 bg-[#1C643F] text-white flex flex-col justify-center items-center md:items-start gap-2 rounded-tl-3xl rounded-br-3xl md:aspect-square text-center md:text-start">
              <h3 className="text-lg font-bold">Proteksi Perang Harga</h3>
              <p>
                Ketika Mitra bergabung dengan Cleanique Academy, Mitra memiliki
                hak untuk menggunakan merek tersebut dan dilindungi oleh
                undang-undang untuk menghindari kemungkinan gugatan merek yang
                dapat mengganggu bisnis mitra.
              </p>
            </div>

            {/* COL */}
            <div className="p-4 py-6 md:p-6 flex flex-col justify-center items-center md:items-end gap-2 md:text-end bg-[#1C643F] text-white rounded-br-3xl rounded-tl-3xl md:aspect-square text-center">
              <h3 className="text-lg font-bold">Garansi Produk & Usaha</h3>
              <p>
                <b>Produk :</b> garansi penggantian produk apabila terjadi
                kegagalan dalam pengolahan produk setelah mengikuti panduan
                pengolahan disertai bukti video pembuatan.
              </p>
              <p>
                <b>Usaha :</b> garansi uang kembali apabila tidak balik modal
                dalam jangka waktu yang telah ditentukan sesuai dengan
                kesepakatan Bersama (MoU).
              </p>
            </div>

            {/* COL */}
            <div className=" md:p-4 flex justify-center items-center md:aspect-square p-4">
              <span className="text-xl md:text-2xl font-bold md:w-1/2 text-center">
                Cleanique Academy
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* ./ FASILITAS MITRA */}

      {/* ALUR PENDAFTARAN */}
      <section className="px-4 py-20 bg-[url('/v2/background2.png')] bg-cover bg-center bg-no-repeat">
        <div className="container flex flex-col items-center gap-10">
          {/* TITLE */}
          <h2 className="text-2xl md:text-3xl font-black uppercase text-center text-white">
            Alur Pendaftaran
          </h2>

          {/* ROW */}
          <ul className="grid w-full md:w-2/3 gap-6 md:grid-cols-2 md:gap-x-16">
            {copyAlurPendaftaran?.map((item) => (
              <li
                key={item.id}
                className="flex justify-start items-start gap-4 md:even:flex-row-reverse"
              >
                <figure className="flex justify-center items-center aspect-square h-10 md:h-16 rounded-full border shrink-0">
                  <Image
                    src={`/v2/${item.media}`}
                    alt={item.mark}
                    width={80}
                    height={80}
                    className="md:h-7 h-4 w-auto"
                  />
                </figure>

                <div className="bg-white flex-1 flex flex-col p-4 text-start h-full rounded-tl-3xl rounded-br-3xl">
                  <h3 className="font-bold text-sm text-muted-foreground">{`#${item.mark}`}</h3>
                  <p>{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* ./ ALUR PENDAFTARAN */}

      {/* ROI */}
      <section className="py-20 px-4">
        <div className="container flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          <div className="w-full md:w-1/3">
            <HargaPaketBeta />
          </div>

          <div className="flex-1">
            <figure className="flex justify-center items-center w-full">
              <Image
                src="/v2/ROI.png"
                alt="ROI"
                width={1476}
                height={935}
                className="w-full h-auto"
              />
            </figure>
          </div>
        </div>
      </section>
      {/* ./ ROI */}

      {/* ALUR PENDAFTARAN */}
      <section className="px-4 py-20  bg-[#1c643f]">
        <div className="container flex flex-col items-center gap-10">
          {/* TITLE */}
          <h2 className="text-2xl md:text-3xl font-black uppercase text-center text-white">
            Apa Kata Mereka
          </h2>

          {/* ROW */}
          <TestimoniMitra />
        </div>
      </section>
      {/* ./ ALUR PENDAFTARAN */}

      {/* CTA */}
      <section className="px-4 py-20 bg-slate-100">
        <div className="container md:w-2/3 flex flex-col items-center gap-20">
          <SiteLogoFooter />

          {/* ROW */}
          <div className="w-full -mt-10 grid md:grid-cols-2 gap-10">
            {/* COL */}
            <div>
              <figure className="overflow-hidden flex justify-center rounded-xl border-white border-4 shadow-xl items-center bg-white aspect-square">
                <Image
                  src="/v2/collage.png"
                  alt="CTA"
                  width={400}
                  height={100}
                  className="w-full h-auto object-cover"
                />
              </figure>
            </div>

            {/* COL */}
            <div className="grid divide-y rounded-lg border bg-white shadow-xl">
              <div className="p-4 text-center flex justify-center items-center">
                <span className="font-medium">
                  Apa yang kamu butuhkan untuk jadi pengusaha?
                </span>
              </div>
              <div className="p-4 text-center flex justify-center items-center">
                <span className="font-medium">
                  Ketertarikan kuat pada bisnis FMCG
                </span>
              </div>
              <div className="p-4 text-center flex justify-center items-center">
                <span className="font-medium">
                  Memiliki rencana & gambaran bisnis
                </span>
              </div>
              <div className="p-4 text-center flex justify-center items-center">
                <span className="font-medium">
                  Pengetahuan & kemampuan pengelolaan keuangan
                </span>
              </div>
              <div className="p-4 text-center flex justify-center items-center">
                <span className="font-medium">Motivasi tinggi</span>
              </div>
            </div>
          </div>

          {/* ROW */}
          <div className="w-full md:max-w-96 flex flex-col items-center gap-10">
            <figure className="flex justify-center items-center aspect-video">
              <Image
                src="/v2/daftar.png"
                alt="CTA"
                width={400}
                height={100}
                className="w-full h-auto"
              />
            </figure>

            <div className="grid w-full gap-2 sm:flex sm:justify-center sm:items-center">
              <Link
                href="https://app.cleaniqueacademy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-[#fdd462] text-[#1a643f] hover:text-white"
                )}
              >
                <LogIn className="mr-2 h-4 w-4" />
                Daftar
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=6287872180088&text=Dengan%20CS%20Cleanique%20Academy"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-[#fdd462] text-[#1a643f] hover:text-white"
                )}
              >
                <Phone className="mr-2 h-4 w-4" />
                0878-7218-0088
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ./ CTA */}
    </>
  );
};

export default ProgramCleaniqueAcademy;
