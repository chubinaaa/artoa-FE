// .src/app/pages.tsx

import Header from "@/components/Header";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="size-full">
      <Header />

      <Content />

      <Footer />
    </div>
  );
}
