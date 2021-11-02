export default function cacheVerify(name) {
  const currentData = localStorage.getItem(name);
  const currentDate = new Date().getTime();
  if (currentData) {
    const currentDataJson = JSON.parse(currentData);
    const TTL = (currentDate - currentDataJson.date) / 1000 / 60;
    return TTL < 60 ? currentDataJson.data : null;
  }
  return null;
}
