function formatNumber(num, precision, separator) {
  var parts;
  if (!isNaN(parseFloat(num)) && isFinite(num)) {
    num = Number(num);
    num = (typeof precision !== "undefined"
      ? num.toFixed(precision)
      : num
    ).toString();
    parts = num.split(".");
    parts[0] = parts[0]
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + (separator || ","));

    return parts.join(".");
  }
  return NaN;
}
axios
  .get("https://api.covidtracking.com/v1/us/daily.json")
  .then(function (response) {
    // handle success
    document.getElementById("states").innerText = formatNumber(
      response.data[0].states
    );
    document.getElementById("positive").innerText = formatNumber(
      response.data[0].positive
    );
    document.getElementById("negative").innerText = formatNumber(
      response.data[0].negative
    );
    document.getElementById("pending").innerText = formatNumber(
      response.data[0].pending
    );
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
