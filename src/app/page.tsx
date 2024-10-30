// .src/app/pages.tsx

import Header from "@/components/Header/Header";
import Content from "@/components/Footer/Content/Content";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="size-full">
      <Header />

      <Content />

      <Footer />
    </div>
  );
}
