const textClip = (text: string) => {
  if (text.length < 20) return text; // gelen string 20den küçükse normal döndür

  return text.substring(0, 20) + '...';
};

export default textClip;
