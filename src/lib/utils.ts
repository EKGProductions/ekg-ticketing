// src/lib/utils.ts
export const getConcertStatus = (dateString: string) => {
  const today = new Date('2026-07-02'); 
  const concertDate = new Date(dateString);
  
  const diffTime = concertDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return "Done";
  if (diffDays <= 30) return `${diffDays} Days to go`;
  return "Upcoming";
};