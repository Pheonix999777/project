import { Blog } from "./pages/Blog/Blog";
import { Faqs } from "./pages/Faqs/Faqs";
import Hero from "./pages/Hero/Hero";
import New from "./pages/New/New";
import { Phones } from "./pages/Phones/Phones";
import { Product } from "./pages/Product/Product";
import Service from "@/app/pages/Service/Service";

export default function Home() {
  return (
    <main>
      <Hero />
      <New />
      <Phones />
      <Product />
      <Service />
      <Blog />
      <Faqs />
    </main>
  );
}
