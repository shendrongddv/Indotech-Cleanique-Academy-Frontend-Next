import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <>
      <header className="px-4">
        <div className="container flex h-16 items-center justify-between gap-4">
          <h1>LOGO</h1>
          <UserButton />
        </div>
      </header>
      <main className="px-4">
        <div className="container">{children}</div>
      </main>
    </>
  );
}
