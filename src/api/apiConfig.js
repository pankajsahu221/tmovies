const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "5365a06c6665eef0aaf5dd5f3a09570a",
  originalImage: imgPath => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: imgPath => `https://image.tmdb.org/t/p/w500/${imgPath}`
};

export default apiConfig;
