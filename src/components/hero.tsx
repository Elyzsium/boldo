import React from "react";
import Link from "next/link";
// import { Progress } from './ui/progress';
import { Card } from "./ui/card";
import { CircularProgress } from "./chart/circular-progress";
import ProgressBar from "./chart/progress-bar";

const Hero = () => {
  return (
    <div className="min-h-screen bg-[#0A2640] bg-gradient-to-br from-navy-900 to-navy-800">
      {/* Navigation */}
      <nav className="p-3 sm:p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-emerald-400 text-xl sm:text-2xl font-bold">
            Boldo
          </div>
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <Link
              href="#product"
              className="text-white hover:text-emerald-400 text-sm lg:text-base"
            >
              Product
            </Link>
            <Link
              href="#services"
              className="text-white hover:text-emerald-400 text-sm lg:text-base"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-emerald-400 text-sm lg:text-base"
            >
              About
            </Link>
            <button className="bg-white px-3 py-1.5 sm:px-4 sm:py-2 text-sm lg:text-base rounded-full hover:bg-emerald-400 hover:text-white transition-colors">
              Log In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="px-4 md:px-6 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left Column */}
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

          {/* Right Column - Stats Grid */}
          <div className="grid gap-4">
            {/* Main Stats Card */}
            <Card className="bg-navy-700 p-6 rounded-lg space-y-4">
              {/* <Progress value={0} /> */}
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-3">
                {/* <div className=""> */}
                {/* <span className="bg-gray-600 h-4 rounded-full w-1/6" > </span> */}
                {/* <ProgressBar value={0} color={""} />
                <ProgressBar value={80} color="bg-blue-200 h-4" />
                </div>
                <div className="bg-gray-600 h-4 rounded-full w-1/6"></div>
                <div className="bg-gray-600 h-4 rounded-full w-1/6"></div>
                <div className="bg-gray-600 h-4 rounded-full w-1/6"></div>
              </div>
              <div className="space-y-4"> */}
                <ProgressBar value={80} color="bg-blue-200" />
                <ProgressBar value={30} color="bg-blue-400" />
                <ProgressBar value={100} color="bg-white" />
                <ProgressBar value={75} color="bg-emerald-400" />
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-navy-700 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                  <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="h-24 flex items-center justify-center">
                  <div className="w-full h-16 bg-blue-400 rounded"></div>
                </div>
              </Card>
              <Card className="bg-gray-700 opacity-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                  <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="h-32 flex items-center justify-center gap-4">
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

        {/* Logo Section */}
        <div className="max-w-7xl mx-auto mt-20">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 opacity-30">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                {i % 2 === 0 ? (
                  <div className="text-white text-xl font-bold">Boldo</div>
                ) : (
                  <div className="text-white text-xl font-bold">Presto</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
