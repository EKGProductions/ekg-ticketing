// src/app/page.tsx
"use client"; // Gawin nating client component dahil may search state tayo

import { useState } from "react";
import HeroHighlight from "@/components/HeroHighlight";
import ConcertCard from "@/components/ConcertCard";
import SearchBar from "@/components/SearchBar"; // Import natin
import { concerts } from "@/lib/concerts";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // I-filter ang concerts base sa title o venue
  const filteredConcerts = concerts.filter((concert) =>
    concert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    concert.venue.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Dito, hahanapin niya talaga ang item na may ID na '1', kahit saan pa ito nakapwesto sa array
const featuredConcert = concerts.find(c => c.id === '12');

  return (
    <main className="min-h-screen bg-black text-white">
      <HeroHighlight concert={featuredConcert} />
      
      <section className="max-w-7xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
        
        {/* Ilagay natin ang Search Bar dito */}
        <SearchBar onSearch={setSearchTerm} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredConcerts.length > 0 ? (
            filteredConcerts.map((concert) => (
              <ConcertCard key={concert.id} concert={concert} />
            ))
          ) : (
            <p className="text-gray-500">No concerts found matching your search.</p>
          )}
        </div>
      </section>
    </main>
  
    
  );
}