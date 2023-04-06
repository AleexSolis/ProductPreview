import "isomorphic-fetch";

export const getImageFromLoremFlickr = async (url: string): Promise<string> => {
  const response = await fetch(url);
  return response.url;
};
