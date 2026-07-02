// src/app/concert/[id]/page.tsx
import { concerts } from "@/lib/concerts"; // Siguraduhing tama ang path ng file mo
import { notFound } from "next/navigation";

export default async function ConcertPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  
  // Hanapin ang concert base sa ID
  const concert = concerts.find((c) => c.id === id);

  // Kung walang nahanap, ipakita ang notFound
  if (!concert) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        
        {/* EVENT HEADER: Poster at Info */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
            <img src={concert.posterImage} alt={concert.title} className="w-full h-auto object-cover" />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#F7FF00]">{concert.title}</h1>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">{concert.description}</p>
            
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 mb-8">
              <p className="mb-2 text-white">📅 <strong>Date:</strong> {concert.date}</p>
              <p className="text-white">📍 <strong>Venue:</strong> {concert.venue}</p>
            </div>

            <button className="bg-white text-black text-lg font-bold py-4 rounded-xl hover:bg-yellow-300 transition-all">
              Buy Tickets Now
            </button>
          </div>
        </div>

            {/* SPONSORS SECTION */}
            <div className="border-t border-gray-800 pt-8 mt-8"> {/* Binawasan natin ang pt-12 at mt-12 para mas dikit */}
            <h3 className="text-center text-gray-500 font-bold mb-6 uppercase tracking-widest text-sm">
                Official Partners & Sponsors
            </h3>
            
            {/* Dito tayo gumamit ng GRID para maayos ang pag-layout ng hanggang 6 logos per row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
                {concert.sponsors.map((sponsor, index) => (
                <div key={index} className="flex justify-center w-full">
                    <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="h-20 md:h-30 w-auto object-contain  opacity-60 hover:opacity-100 transition-all duration-1000"
                    />
                </div>
                ))}
            </div>
            </div>

      </div>
    </main>
  );
}