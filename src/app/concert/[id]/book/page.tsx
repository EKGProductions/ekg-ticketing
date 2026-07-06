import { concerts } from "@/lib/concerts";
import SeatMap from "@/components/SeatMap";
import { notFound } from "next/navigation";

export default async function BookingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const concert = concerts.find((c) => c.id === id);
  if (!concert) notFound();

  return (
    <main className="min-h-screen bg-black text-white">
      <SeatMap concert={concert} />
    </main>
  );
}