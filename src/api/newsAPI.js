import axios from "axios";

export const getNews = async (keyword) => {
    return axios.get(`https://newsapi.org/v2/everything?q=${keyword}&pageSize=30&apiKey=72b9597ef47e43dc83d993251e9caaac`);
};