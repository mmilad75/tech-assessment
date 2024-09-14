const useTimeDate = (isoString: string) => {
  if (!isoString) return { formattedDate: '', formattedTime: '' };
  const localDate = new Date(isoString);

  const formattedDate = new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(localDate);

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  }).format(localDate);

  return { formattedDate, formattedTime };
};

export default useTimeDate;