import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRightFromSquareIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FAQ } from "./sections/faq";
import TestimoniMitra from "./program-ca/_sections/testimoni-mitra";

export default function Homepage() {
  return (
    <>
      {/* HERO */}
      <section className="py-20 px-4">
        <div className="container flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="w-full md:w-6/12 flex flex-col gap-6 items-start">
            <h1 className="md:text-4xl font-black text-balance text-2xl">
              #GROWYOURSELFWITHUS!
            </h1>

            <p className="md:text-lg">
              Cleanique Academy merupakan program unggulan dari PT Indotech
              Berkah Abadi, salah satu perusahaan lokal dari Yogyakarta, melalui
              brand nya Orchidcare memberikan pelatihan, pembinaan, serta
              permodalan usaha bagi calon mitra Cleanique Academy yang nantinya
              akan dibimbing oleh mentor dengan status kemitraan seumur hidup.
            </p>
          </div>

          <div className="w-full md:w-5/12">
            <figure className="flex justify-center items-center aspect-square">
              <Image
                src="/01J141J72D567BMPF7QT5EJVQK.png"
                alt="Image"
                width={1024}
                height={582}
                className="w-full h-auto"
              />
            </figure>
          </div>
        </div>
      </section>
      {/* ./ HERO */}

      {/* PROGRAMS */}
      <section className="py-20 px-4 bg-slate-100">
        <div className="container flex flex-col justify-center items-center gap-16">
          <h2 className="font-medium text-2xl md:text-4xl">Program Unggulan</h2>

          <div className="w-full md:w-3/5 grid md:grid-cols-2 gap-10">
            <div className="rounded-lg bg-white p-4 md:p-6 flex flex-col gap-8 border text-center justify-start">
              <figure className="h-16 w-auto flex justify-center items-center">
                <Image
                  src="/cleanique-academy.png"
                  alt="Cleanique Academy"
                  height={100}
                  width={100}
                  className="h-full w-auto"
                />
              </figure>
              <p>
                Program kemitraan intensif usaha Depo Cleanique™. Kami berikan
                dukungan penuh untuk kesuksesan usaha Anda.
              </p>

              <Link
                href="/program-ca"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "mt-auto"
                )}
              >
                Selengkapnya
                <ArrowUpRightFromSquareIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-lg border bg-white p-4 md:p-6 flex flex-col gap-8 text-center justify-start">
              <figure className="h-16 w-auto flex justify-center items-center">
                <Image
                  src="/depo-cleanique.webp"
                  alt="Depo Cleanique"
                  height={100}
                  width={100}
                  className="h-full w-auto"
                />
              </figure>
              <p>
                Paket usaha depot isi ulang berbagai macam sabun, parfum &
                cairan pembersih untuk kebutuhan rumah tangga & laundry.
              </p>

              <Link
                href="https://depocleanique.co.id/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "mt-auto"
                )}
              >
                Selengkapnya
                <ArrowUpRightFromSquareIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ./ PROGRAMS */}

      {/* BENEFITS */}
      <section className="py-20 px-4 bg-foreground text-white">
        <div className="container flex flex-col justify-center items-center gap-16">
          <h2 className="font-medium text-2xl md:text-4xl md:w-1/2 text-center">
            Banyak Manfaatnya
          </h2>

          <div className="w-full grid gap-12 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col gap-4 justify-start items-center text-center">
              <Image
                src="/manfaat-1.png"
                alt="Manfaat"
                width={100}
                height={100}
                className="h-20 w-auto"
              />

              <p className="text-balance md:w-4/5">
                Pelatihan pembuatan chemical solution
              </p>
            </div>
            <div className="flex flex-col gap-4 justify-start items-center text-center">
              <Image
                src="/manfaat-2.png"
                alt="Manfaat"
                width={100}
                height={100}
                className="h-20 w-auto"
              />

              <p className="text-balance md:w-4/5">
                Pembinaan agar usaha dapat berjalan lancar
              </p>
            </div>
            <div className="flex flex-col gap-4 justify-start items-center text-center">
              <Image
                src="/manfaat-3.png"
                alt="Manfaat"
                width={100}
                height={100}
                className="h-20 w-auto"
              />

              <p className="text-balance md:w-4/5">
                Dibantu untuk solusi permodalah
              </p>
            </div>
            <div className="flex flex-col gap-4 justify-start items-center text-center">
              <Image
                src="/manfaat-4.png"
                alt="Manfaat"
                width={100}
                height={100}
                className="h-20 w-auto"
              />

              <p className="text-balance md:w-4/5">
                Mentoring dengan pakar berpengalaman
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ./ BENEFITS */}

      {/* SYARAT */}
      <section className="py-20 px-4 bg-slate-100">
        <div className="container flex flex-col justify-center items-center gap-16">
          <h2 className="font-medium text-2xl md:text-4xl md:w-1/2 text-center">
            Apa saja syarat keikutsertaan mahasiswa?
          </h2>
        </div>
      </section>
      {/* ./ SYARAT */}

      {/* Testimoni Mitra */}
      <section className="py-20 px-4">
        <div className="container space-y-10">
          <TestimoniMitra />
        </div>
      </section>
      {/* ./ Testimoni Mitra */}

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="container flex flex-col justify-center items-center gap-16">
          <h2 className="font-medium text-2xl md:text-4xl md:w-1/2 text-center">
            Pertanyaan Umum
          </h2>

          <FAQ />
        </div>
      </section>
      {/* ./ FAQ */}
    </>
  );
}
