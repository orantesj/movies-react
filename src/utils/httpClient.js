const API = "https://api.themoviedb.org/3";

export function get(path){
    return fetch(API + path, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTc2NzIwMDczNTcwMTg5N2ExOTQyNjcwNWI4ZDI1YiIsInN1YiI6IjYzNTQ1MGUxMjQ0MTgyMDA3YWI2OTU1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2W-rU85Xy9oXxNhZTJTPBMixKuHWW3hIJ4zqqurkPDU",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((result) => result.json())
}