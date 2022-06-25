const { API_URL_CMC, API_KEY_CMC } = process.env;
const options = {
  method: "GET",
  headers: {
    "X-CMC_PRO_API_KEY": API_KEY_CMC,
    Accept: "application/json",
    "Accept-Encoding": "deflate, gzip",
  },
};

async function fetchData(url, options) {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

export default async function handler(req, res) {
  const data = await fetchData(API_URL_CMC, options);

  res.json(data);
}
