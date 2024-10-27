import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { services } from "@/constants";
import WidthWrapper from "./ui/WidthWrapper";

const Service = () => {
  return (
    <WidthWrapper className="py-8 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-lg sm:text-xl text-gray-600">Our Services</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-normal text-gray-900 mt-4">
            Handshake infographic mass market
            <br className="hidden sm:block" />
            crowdfunding iteration.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={300}
                    height={350}
                    layout="responsive"
                    className="w-full h-40 sm:h-48 rounded-lg"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
                <button className="flex items-center space-x-2 text-gray-700 font-bold hover:text-primary transition-colors">
                  <span className="text-sm sm:text-base">Explore page</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WidthWrapper>
  );
};
export default Service;



// import React from "react";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";
// import { services } from "@/constants";
// import WidthWrapper from "./ui/WidthWrapper";

// const Service = () => {
//   return (
//     <WidthWrapper className="py-8 sm:py-12 lg:py-16">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section - Responsive text sizes */}
//         <div className="text-center mb-8 sm:mb-12 lg:mb-16">
//           <span className="text-lg sm:text-xl text-gray-600">Our Services</span>
//           <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-normal text-gray-900 mt-2 sm:mt-4">
//             <span className="block lg:inline">Handshake infographic</span>{" "}
//             <span className="block lg:inline">mass market crowdfunding iteration.</span>
//           </h2>
//         </div>

//         {/* Services Grid - Responsive layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
//           {services.map((service, index) => (
//             <div 
//               key={index} 
//               className="bg-white rounded-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
//             >
//               <div className="p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4">
//                 {/* Image Container */}
//                 <div className="w-full aspect-video sm:aspect-square relative">
//                   <Image
//                     src={service.image}
//                     alt={service.title}
//                     fill
//                     className="object-cover rounded-lg"
//                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                   />
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
//                   {service.title}
//                 </h3>
//                 <p className="text-sm sm:text-base text-gray-600">
//                   {service.description}
//                 </p>
                
//                 {/* Button */}
//                 <button className="flex items-center space-x-2 text-gray-700 font-bold hover:text-primary transition-colors text-sm sm:text-base">
//                   <span>Explore page</span>
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </WidthWrapper>
//   );
// };

// export default Service;