import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const {
      namaLengkap,
      jenisKelamin,
      alamatAsal,
      alamatDomisili,
      telepon,
      whatsapp,
      email,
      pendidikanTerakhir,
      statusPernikahan,
      statusPekerjaan,
    } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const bio = await db.user.create({
      data: {
        userId,
        namaLengkap,
        jenisKelamin,
        alamatAsal,
        alamatDomisili,
        telepon,
        whatsapp,
        email,
        pendidikanTerakhir,
        statusPernikahan,
        statusPekerjaan,
        quizes: {},
      },
    });

    return NextResponse.json(bio);
  } catch (error) {
    console.log("[ACCOUNT-REGISTRATION]", error);
    return new NextResponse("Internal Error", {
      status: 500,
    });
  }
}
