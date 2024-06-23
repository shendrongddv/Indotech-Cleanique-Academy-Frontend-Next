import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRightFromSquareIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FAQ } from "./sections/faq";

export default function Homepage() {
  return (
    <>
      {/* HERO */}
      <section className="py-20 pt-36 px-4">
        <div className="container">
          <div className="flex flex-col justify-start text-start gap-4 w-full md:w-1/2">
            <h1 className="md:text-6xl font-medium text-balance text-4xl">
              Ambil Kendali Masa Depanmu
            </h1>

            <p className="md:text-lg">
              Kampus Merdeka adalah cara terbaik berkuliah. Dapatkan kemerdekaan
              untuk membentuk masa depan yang sesuai dengan aspirasi kariermu.
            </p>
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
            Apa saja manfaat program Kampus Merdeka?
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
                Kegiatan dapat dikonversi menjadi SKS.
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
                Perluas jaringan hingga ke luar program studi dan universitas.
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
                Eksplorasi pengetahuan dan kemampuan di lapangan selama lebih
                dari satu semester.
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
                Menimba ilmu secara langsung dari mitra berkualitas dan
                terkemuka.
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
