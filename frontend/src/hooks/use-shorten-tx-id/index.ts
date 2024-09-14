const useShortenTxId = (id: string, startLength = 4, endLength = 4) => {
  if (!id) return "";

  const start = id.substring(0, startLength);
  const end = id.substring(id.length - endLength, id.length);

  return `${start}...${end}`;
};

export default useShortenTxId;