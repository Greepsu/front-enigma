// const shortToK = (data) => {
//   if (data > 1000) {
//     return data > 1000000
//       ? `${(Math.round(data * 1) / 1000000).toFixed(2)}M`
//       : `${(Math.round(data * 1) / 1000).toFixed(2)}k`;
//   } else {
//     return data.toFixed(2);
//   }
// };

function shortToK(data) {
  if (data < 1e3) return data.toFixed(2);
  if (data >= 1e3 && data < 1e6) return +(data / 1e3).toFixed(1) + "K";
  if (data >= 1e6 && data < 1e9) return +(data / 1e6).toFixed(1) + "M";
  if (data >= 1e9 && data < 1e12) return +(data / 1e9).toFixed(1) + "B";
  if (data >= 1e12) return +(data / 1e12).toFixed(1) + "T";
}

const colorChangePrice = (data) => {
  if (data > 0) {
    return { color: "green" };
  } else if (data < 0) {
    return { color: "red" };
  }
};

const paginate = (array, pageSize, pageNumber) =>
  array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);

export { shortToK, colorChangePrice, paginate };
