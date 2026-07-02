// src/components/HeroHighlight.tsx
import Link from 'next/link';
import { Concert } from "@/lib/concerts";
import { getConcertStatus } from "@/lib/utils"; // Import natin

export default function HeroHighlight({ concert }: { concert: Concert }) {
  const status = getConcertStatus(concert.date); // Auto compute

  return (
    <section className="relative w-full h-[600px] bg-black flex items-center overflow-hidden">
      <div className="relative z-20 w-full md:w-3/5 px-8 md:px-16 flex flex-col justify-center h-full">
        <span className="bg-[#F7FF00] text-black font-bold px-4 py-1 rounded-full text-sm mb-4 w-max uppercase tracking-widest animate-pulse">
          {status}
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-2 leading-tight">
          {concert.title}
        </h1>
        <p className="text-lg text-gray-400 mb-8 max-w-lg">
          {concert.date} | {concert.venue}
        </p>
        <div className="flex gap-4">
          <Link href={`/concert/${concert.id}`} className="bg-[#F7FF00] text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-all">
            Buy Tickets
          </Link>
        </div>
      </div>

      {/* <div className="absolute right-0 top-0 w-full md:w-1/2 h-full z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent z-10" />
        <img src={concert.bannerImage} alt={concert.title} className="w-full h-full object-cover" />
      </div> */}
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent z-10">
        <source src="/BANNERS/[1]/IN BETWEEN LA.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}