// const urlDataClient = "/dataClient.json";
// const urlLocal = "http://localhost:3005/client";
const urlDataClient = "https://fiados.herokuapp.com/api/v1/trade/all";

const getClient = async () => {
  try {
    const data = await fetch(urlDataClient)
      .then((data) => data.json())
      .then((clientes) => clientes);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getClient;
