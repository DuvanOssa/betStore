export const query = async (url) => {
  const res = await fetch(url);
  const resJson = await res.json();
  return resJson;
};
