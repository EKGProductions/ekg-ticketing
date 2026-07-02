// src/components/ConcertCard.tsx
import { Concert } from "@/lib/concerts";
import { getConcertStatus } from "@/lib/utils"; // Import natin
import Link from "next/link";

export default function ConcertCard({ concert }: { concert: Concert }) {
  const status = getConcertStatus(concert.date); // Auto compute

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-[#F7FF00] transition-colors group">
      <div className="h-48 bg-gray-800 flex items-center justify-center">
        <img src={concert.cardImage} alt={concert.title} className="w-full h-full object-cover" />
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#F7FF00]">{concert.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{concert.date} | {concert.venue}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-[#F7FF00] font-bold">{status}</span> {/* Dito na lalabas yung auto status */}
          <Link href={`/concert/${concert.id}`} className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-200">
            Buy Ticket
          </Link>
        </div>
      </div>
    </div>
  );
}