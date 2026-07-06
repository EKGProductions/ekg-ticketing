"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Concert, SeatingZone } from '@/lib/concerts';

export default function SeatMap({ concert }: { concert: Concert }) {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [showModal, setShowModal] = useState(false);
  const [selectedZone, setSelectedZone] = useState<SeatingZone | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  // TIMER LOGIC
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0)), 1000);
    if (timeLeft === 0) {
        alert("Time expired! Redirecting to home.");
        router.push('/');
    }
    return () => clearInterval(timer);
  }, [timeLeft, router]);

  // HANDLE SVG CLICK
  const handleZoneClick = (svgId: string) => {
    const zoneId = svgId.replace('layer-', 'zone-');
    const zone = concert.zones.find(z => z.id === zoneId);
    if (zone) {
      setSelectedZone(zone);
      setShowModal(true);
    }
  };

  // TOGGLE RESERVED SEAT
  const toggleSeat = (seatId: string) => {
    setSelectedSeats(prev => 
      prev.includes(seatId) ? prev.filter(s => s !== seatId) : [...prev, seatId]
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* TIMER */}
      <div className="text-center mb-8">
        <div className="inline-block bg-red-600/20 border border-red-500 text-red-500 px-8 py-2 rounded-lg font-bold text-lg animate-pulse">
          Time Remaining: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
        </div>
      </div>

      {/* SVG INTERACTIVE MAP */}
      <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
        <svg 
            onClick={(e) => {
                const target = e.target as SVGElement;
                const parentGroup = target.closest('g');
                if (parentGroup?.id) handleZoneClick(parentGroup.id);
            }} 
            viewBox="0 0 916.55 722.04" 
            className="w-full h-auto cursor-pointer"
        >
              <g id="layer-stage">
    <rect  x="161.17" width="594.49" height="64.21"/>
  </g>
  <g id="layer-lefthiraya">
    <rect  x="161.17" y="100.74" width="291.15" height="67.53" color="#00bbff"/>
  </g>
  <g id="layer-righthiraya">
    <rect  x="465.05" y="100.74" width="290.6" height="67.53"/>
  </g>
  <g id="layer-simula">
    <rect  x="161.17" y="178.05" width="291.15" height="67.53"/>
    <rect  x="464.78" y="178.05" width="291.15" height="67.53"/>
    <rect  x="768.38" y="78.42" width="148.16" height="167.16"/>
    <rect  x=".55" y="78.42" width="148.16" height="167.16"/>
  </g>
  <g id="layer-gold">
    <rect  x=".55" y="255.36" width="148.16" height="90.29"/>
    <rect  x="768.38" y="255.36" width="148.16" height="90.29"/>
    <g>
      <rect  x="559.34" y="255.36" width="196.32" height="90.29"/>
      <rect  x="464.78" y="255.36" width="196.32" height="35.3"/>
    </g>
    <g>
      <rect  x="161.31" y="255.36" width="196.32" height="90.29" transform="translate(518.93 601.01) rotate(-180)"/>
      <rect  x="255.87" y="255.36" width="196.32" height="35.3" transform="translate(708.05 546.02) rotate(-180)"/>
    </g>
  </g>
  <g id="layer-silver">
    <rect  x="161.31" y="355.42" width="291.02" height="90.22"/>
    <rect  x="464.78" y="355.42" width="291.15" height="90.22"/>
    <rect  x="768.38" y="355.42" width="148.16" height="90.22"/>
    <rect  x=".55" y="355.42" width="148.16" height="90.22"/>
  </g>
  <g id="layer-bronze">
    <rect  x="160.89" y="455.43" width="291.15" height="117.16"/>
    <rect  x="464.78" y="455.43" width="291.15" height="117.16"/>
    <rect  x="768.38" y="455.43" width="148.16" height="117.16"/>
    <rect  y="455.43" width="148.16" height="117.16"/>
  </g>
  <g id="layer-genad">
    <rect x="160.89" y="582.37" width="291.15" height="139.67"/>
    <rect x="464.91" y="582.37" width="291.15" height="139.67"/>
    <rect x="768.94" y="582.37" width="147.61" height="139.67"/>
    <rect y="582.37" width="148.44" height="139.67"/>
  </g>
        </svg>
      </div>

      {/* MODAL */}
      {showModal && selectedZone && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-600 w-full max-w-2xl text-white">
            <h2 className="text-xl font-bold mb-4">{selectedZone.name} - ₱{selectedZone.price}</h2>

            {/* RESERVED SEATING: DYNAMIC GENERATION */}
            {selectedZone.type === 'reserved' && selectedZone.rows && selectedZone.cols ? (
              <div className="flex flex-col gap-2 items-center">
                {selectedZone.rows.map((row) => (
                  <div key={row} className="flex gap-2">
                    <span className="w-6 font-bold text-gray-400">{row}</span>
                    {Array.from({ length: selectedZone.cols }).map((_, i) => {
                      const seatId = `${row}${i + 1}`;
                      const isSelected = selectedSeats.includes(seatId);
                      // Dito mo i-check kung 'muted' o 'red' ang seat
                      return (
                        <button 
                          key={seatId} 
                          onClick={() => toggleSeat(seatId)}
                          className={`w-8 h-8 rounded text-[10px] ${
                            isSelected ? 'bg-green-500' : 'bg-gray-700 hover:bg-gray-600'
                          }`}
                        >
                          {i + 1}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            ) : null}

            {/* FREE SEATING */}
            {selectedZone.type === 'free' && (
              <div className="flex items-center justify-center gap-6 py-10">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-4 bg-gray-700 rounded">-</button>
                <span className="text-3xl font-bold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-4 bg-gray-700 rounded">+</button>
              </div>
            )}

            <div className="mt-6 flex justify-between items-center border-t border-gray-700 pt-4">
               <span className="text-lg font-bold">Total: ₱{(selectedZone.type === 'reserved' ? selectedSeats.length : quantity) * selectedZone.price}</span>
               <button onClick={() => setShowModal(false)} className="bg-blue-600 px-6 py-2 rounded">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}