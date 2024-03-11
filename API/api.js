// https://documenter.getpostman.com/view/3479169/Szf7zncp?version=latest#236e4205-de53-41e0-bfc2-f17d396f9741

export const categories = [
  {
    code: "",
    pic: "https://img.icons8.com/ios-filled/50/FD7E14/news.png",
    name: "general",
  },
  {
    code: "",
    pic: "https://img.icons8.com/ios-filled/50/FD7E14/briefcase.png",
    name: "business",
  },
  {
    code: "",
    pic: "https://img.icons8.com/glyph-neue/64/FD7E14/movie-projector.png",
    name: "entertainment",
  },
  {
    pic: "https://img.icons8.com/ios-filled/50/FD7E14/clinic.png",
    name: "health",
  },
  {
    pic: "https://img.icons8.com/ios-filled/50/FD7E14/test-tube.png",
    name: "science",
  },
  {
    pic: "https://img.icons8.com/ios/50/FD7E14/football2.png",
    name: "sports",
  },
  {
    pic: "https://img.icons8.com/ios-filled/50/FD7E14/innovation.png",
    name: "technology",
  },
];

export const country = [
  {
    code: "in",
    name: "India",
  },
  {
    code: "us",
    name: "USA",
  },
  {
    code: "au",
    name: "Australia",
  },
  {
    code: "ru",
    name: "Russia",
  },
  {
    code: "fr",
    name: "France",
  },
  {
    code: "gb",
    name: "United Kingdom",
  },
];

export const sources = [
  {
    id: "bbc-news",
    name: "BBC News",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png",
  },
  {
    id: "cnn",
    name: "CNN",
    pic: "https://th.bing.com/th/id/OIP.3OdKcTuH9LAGoVPmVF246QHaEo?rs=1&pid=ImgDetMain",
  },
  {
    id: "fox-news",
    name: "Fox News",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/480px-Fox_News_Channel_logo.svg.png",
  },
  {
    id: "google-news",
    name: "Google News",
    pic: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png",
  },
];

export const BASE_URL = "https://saurav.tech/NewsAPI/";

export const getNewsAPI = (category, country = "in") => {
  return `${BASE_URL}/top-headlines/category/${category}/${country}.json`;
};

export const getSourceAPI = (source) => {
  return `${BASE_URL}/everything/${source}.json`;
};
