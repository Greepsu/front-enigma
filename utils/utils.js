const shortToK = (data) => {
  if (data > 1000) {
    return `${Math.round((data / 1000).toFixed(2))}k`;
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

export { shortToK, colorChangePrice };
