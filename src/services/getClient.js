const urlDataClient = "/dataClient.json";
//const urlDataClient = "https://fiadosya.herokuapp.com/api/v1/customer/all";

const getClient = async () => {
  try {
    const data = await fetch(urlDataClient)
      .then((data) => data.json())
      .then((clientes) => clientes);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getClient;
