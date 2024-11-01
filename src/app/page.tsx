import Blog from "@/components/blog";
import BusinessFeature from "@/components/business";
import Faq from "@/components/faq";
import Hero from "@/components/header/hero";
import MarketingFeature from "@/components/marketing";
import NewsLetter from "@/components/news-letter";
import Service from "@/components/service";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Service />
      <MarketingFeature />
      <BusinessFeature />
      <Testimonial />
      <Faq />
      <Blog />
      <NewsLetter />
    </div>
  );
}
