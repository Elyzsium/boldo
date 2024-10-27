import Blog from "@/components/blog";
import Business from "@/components/business";
import Faq from "@/components/faq";
import Hero from "@/components/hero";
import Marketing from "@/components/marketing";
import NewsLetter from "@/components/news-letter";
import Service from "@/components/service";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Service/>
      <Marketing/>
      <Business/>
      <Testimonial/>
      <Faq/>
      <Blog/>
      <NewsLetter/>
    </div>
  );
}
