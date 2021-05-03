import axios from "axios";

const url = "https://covid19.mathdro.id/api";

// Fetching data
export const fetchData = async (country) => {
  let changebaleurl = url;

  if (country) {
    changebaleurl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changebaleurl);

    const modifiedData = { confirmed, recovered, deaths, lastUpdate };

    return modifiedData;

    // console.log(res);
  } catch (error) {
    console.log(error);
  }
};

// Fetching daily data globally
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    // console.log(data);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    // console.log(res);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
