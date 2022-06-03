const shortToK = (data) => {
  if (data > 1000) {
    return data > 1000000
      ? `${(Math.round(data * 1) / 1000000).toFixed(2)}M`
      : `${(Math.round(data * 1) / 1000).toFixed(2)}k`;
  } else {
    return data.toFixed(2);
  }
};

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
