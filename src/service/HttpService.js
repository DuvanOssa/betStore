export const query = async (url) => {
  const res = await fetch(url);
  const resJson = await res.json();
  return resJson;
};

const header = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const post = async (url, payload) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: header,
    body: JSON.stringify(payload),
  });
  const resJson = await res.json();
  return resJson;
};
