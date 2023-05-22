const getData = (city) => {
  return new Promise(async (resolve, reject) => {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=dadc768297024b119eb174331232205&q=${city}&days=7`;
    const response = await fetch(url);
    const result = await response.text();
    const data = await JSON.parse(result);
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export default getData;
