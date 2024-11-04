import { PublicFooter } from "@/components/footer/public-footer";
import { PublicHeader } from "@/components/header/public-header";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // grid rows auto 1fr auto makes sure that children take up the remaining space
    // and the footer is puhed to the bottom
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <PublicHeader />
      {children}
      <PublicFooter />
    </div>
  );
}
