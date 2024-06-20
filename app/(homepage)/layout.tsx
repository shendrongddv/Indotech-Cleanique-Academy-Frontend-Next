import FooterFront from "./_components/header-footer/footer";
import Header from "./_components/header-footer/header";

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <FooterFront />
    </>
  );
}
