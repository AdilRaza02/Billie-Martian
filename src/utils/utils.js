const formatGermanDate = (date) => {
  var deDate = new Date(date);
  return deDate.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

const formatGermanCurrency = (money) => {
  return money.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  });
};

const utils = { formatGermanDate, formatGermanCurrency };
export default utils;
