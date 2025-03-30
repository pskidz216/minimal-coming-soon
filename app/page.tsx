import Image from "next/image"
import Link from "next/link"
import { Mail, Instagram, Twitter } from "lucide-react"
import { WaitlistForm } from "@/components/waitlist-form"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-6xl mx-auto">
          {/* Brand Header */}
          <div className="text-center mb-12 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-widest text-white mb-4 md:mb-6 font-gilroy">
              MINIMAL
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light">Coming Soon</p>
          </div>

          {/* Design Process Image */}
          <div className="flex justify-center mb-12 md:mb-20">
            <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden border border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.15)]">
              <Image
                src="/images/design-process.png"
                alt="Design Process for MINIMAL shorts"
                width={1200}
                height={900}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Brand Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-20">
            <div className="relative aspect-square overflow-hidden bg-[#1A1A1A] border border-white/30 shadow-[0_10px_30px_rgba(255,255,255,0.15)] rounded-2xl group">
              <Image
                src="/images/natural.jpg"
                alt="Natural colored textiles"
                fill
                className="object-cover transition-transform group-hover:scale-105 duration-500 mix-blend-normal opacity-90"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 border-t border-white/20">
                <p className="text-white font-light">Natural</p>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden bg-[#1A1A1A] border border-white/30 shadow-[0_10px_30px_rgba(255,255,255,0.15)] rounded-2xl group">
              <Image
                src="/images/clean.jpg"
                alt="Clean white fabric"
                fill
                className="object-cover transition-transform group-hover:scale-105 duration-500 mix-blend-normal opacity-90"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 border-t border-white/20">
                <p className="text-white font-light">Clean</p>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden bg-[#1A1A1A] border border-white/30 shadow-[0_10px_30px_rgba(255,255,255,0.15)] rounded-2xl group sm:col-span-2 md:col-span-1">
              <Image
                src="/images/organic.jpg"
                alt="Organic cotton materials"
                fill
                className="object-cover transition-transform group-hover:scale-105 duration-500 mix-blend-normal opacity-90"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 border-t border-white/20">
                <p className="text-white font-light">Organic</p>
              </div>
            </div>
          </div>

          {/* Waitlist Form */}
          <div className="bg-[#1A1A1A] p-6 sm:p-8 md:p-10 max-w-xl mx-auto mb-12 md:mb-20 border border-white/30 shadow-[0_5px_30px_rgba(255,255,255,0.1)] rounded-2xl">
            <h2 className="text-xl sm:text-2xl font-light text-white mb-4 md:mb-6">Join the waitlist</h2>
            <WaitlistForm />
            <p className="text-gray-400 text-xs sm:text-sm mt-4">
              Be the first to know when our sustainable sport shorts launch.
            </p>
          </div>

          {/* Product Info */}
          <div className="flex flex-col items-center gap-6 md:gap-8 mb-12 md:mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 w-full max-w-md">
              <div className="p-4 sm:p-6 bg-[#1A1A1A] border border-white/20 shadow-[0_5px_20px_rgba(255,255,255,0.07)] rounded-xl">
                <h3 className="font-light text-white mb-2 uppercase tracking-wider text-xs sm:text-sm">Materials</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  100% Abacá Bananatex®
                  <br />
                  100% Organic Cotton Liner
                  <br />
                  Available Lined or Linerless
                </p>
              </div>
              <div className="p-4 sm:p-6 bg-[#1A1A1A] border border-white/20 shadow-[0_5px_20px_rgba(255,255,255,0.07)] rounded-xl">
                <h3 className="font-light text-white mb-2 uppercase tracking-wider text-xs sm:text-sm">Launch Date</h3>
                <p className="text-gray-400 text-sm sm:text-base">September 2025</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 sm:gap-8 mt-6 sm:mt-8">
              <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-6 md:py-8 text-center text-gray-500 text-xs sm:text-sm border-t border-white/10">
        <p>© {new Date().getFullYear()} MINIMAL. All rights reserved.</p>
      </footer>
    </div>
  )
}

