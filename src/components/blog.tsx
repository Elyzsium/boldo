import React from "react";
import Image from "next/image";
import { blogPosts } from "@/constants";
import WidthWrapper from "./ui/WidthWrapper";

const Blog = () => {
  return (
    <WidthWrapper className="py-8 sm:py-12 md:py-16">
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <span className="text-lg sm:text-xl text-gray-600">Our Blog</span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-normal text-gray-900 mt-4">
          Value proposition accelerator product
          <br className="hidden sm:block"/>
          management venture
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
            <div className="relative h-40 sm:h-48 w-full rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={200}
                height={250}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
        
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-sm text-gray-600 font-bold">{post.category}</span>
                  <span className="text-sm text-gray-600">{post.date}</span>
                </div>

                <h2 className="text-xl font-normal leading-[32px] mt-4">
                  {post.title}
                </h2>

                <div className="flex items-center mt-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="ml-3 text-sm font-medium">
                    {post.author.name}
                  </span>
                </div>
              </div>
            
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-gray-800 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300">
            Load more
          </button>
        </div>
      </div>
    </WidthWrapper>
  );
};

export default Blog;
