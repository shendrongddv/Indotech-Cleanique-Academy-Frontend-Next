import FooterFront from "@/components/header-footer/footer";
import Header from "@/components/header-footer/header";

export default function HomepageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <FooterFront />
    </>
  );
}
