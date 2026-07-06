export const getConcertStatus = (dateString: string) => {

  const today = new Date(); 
  const concertDate = new Date(dateString);
  
  today.setHours(0, 0, 0, 0);
  concertDate.setHours(0, 0, 0, 0);

  const diffTime = concertDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return "Done";
  if (diffDays === 0) return "Today!";
  if (diffDays <= 30) return `${diffDays} Days to go`;
  return "Upcoming";
};