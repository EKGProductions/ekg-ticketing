// src/components/ConcertCard.tsx
import { Concert } from "@/lib/concerts";
import { getConcertStatus } from "@/lib/utils";
import Link from "next/link";

export default function ConcertCard({ concert }: { concert: Concert }) {
  const status = getConcertStatus(concert.date);

  return (
    // Ibinalot natin ang buong div sa Link. Ang 'block' class ay para sumunod ang link sa size ng card.
    <Link href={`/concert/${concert.id}`} className="block">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-[#F7FF00] transition-colors group cursor-pointer">
        
        <div className="h-48 bg-gray-800 flex items-center justify-center">
          <img src={concert.cardImage} alt={concert.title} className="w-full h-full object-cover" />
        </div>
        
        <div className="p-5">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#F7FF00]">{concert.title}</h3>
          <p className="text-gray-400 text-sm mb-4">{concert.date} | {concert.venue}</p>
          
          <div className="flex justify-between items-center">
            {/* Dito natin inilagay ang status. Tinanggal na natin ang dating button dito. */}
            <span className="text-[#F7FF00] font-bold">{status}</span>
          </div>
        </div>
        
      </div>
    </Link>
  );
}