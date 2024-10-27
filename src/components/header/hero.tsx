import { Card } from "../ui/card";
import { CircularProgress } from "../chart/circular-progress";
import ProgressBar from "../chart/progress-bar";
import Navbar from "../navbar";
import Slider from "./slider";

const Hero = () => {
  return (
    <div className="relative bg-[#0A2640] overflow-hidden">
      <div className="absolute top-[-150px] right-[-150px] w-[600px] h-[600px] bg-gradient-to-tr from-emerald-400 to-blue-400 rounded-full opacity-10 z-0"></div>
      <div className="relative z-10">
        <Navbar />
      </div>

      <main className="px-4 md:px-6 py-8 sm:py-12 md:py-16 lg:py-20 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-medium leading-tight">
              Save time by building fast with Boldo Template
            </h1>
            <p className="text-gray-300 text-base sm:text-lg">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button className="text-sm sm:text-base bg-emerald-400 text-navy-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium hover:bg-emerald-500 transition-colors">
                Buy template
              </button>
              <button className="text-sm sm:text-base border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-colors">
                Explore
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            <Card className="bg-gray-700 opacity-50 p-6 rounded-lg space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-3">
                <ProgressBar value={80} color="bg-blue-200" />
                <ProgressBar value={30} color="bg-blue-400" />
                <ProgressBar value={100} color="bg-white" />
                <ProgressBar value={75} color="bg-emerald-400" />
              </div>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-gray-700 opacity-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                  <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                </div>

                <div className="flex flex-col items-center justify-center mt-16 h-48 md:h-40 w-full">
                  <div className="grid grid-cols-8 gap-3 w-full px-4 h-full items-center">
                    {[-30, -20, 80, 60, 90, 75, 85, 50].map((value, index) => (
                      <div
                        key={index}
                        className="relative h-full flex items-center justify-center"
                      >
                        <div
                          className={`absolute w-2.5 ${
                            index === 4 ? "bg-slate-800" : "bg-blue-400"
                          } rounded-sm transition-all duration-300 ${
                            value > 0 ? "bottom-1/2" : "top-1/2"
                          }`}
                          style={{ height: `${Math.abs(value)}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
              <Card className="bg-gray-700 opacity-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                  <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="h-40 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <CircularProgress />
                  <div className="space-y-2">
                    <div className="h-2 w-28 bg-gray-200 rounded" />
                    <div className="h-2 w-24 bg-gray-200 rounded" />
                    <div className="h-2 w-28 bg-gray-200 rounded" />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20">
          <Slider />
        </div>
      </main>
    </div>
  );
};

export default Hero;
