// const urlDataClient = "/dataClient.json";
const urlLocal = "http://localhost:3005/client";
// const urlDataClient = "https://fiadosya.herokuapp.com/api/v1/customer/all";

const getClient = async () => {
  try {
    const data = await fetch(urlLocal)
      .then((data) => data.json())
      .then((clientes) => clientes);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getClient;
