import axios from "axios";

export function getArticles() {
    return axios
    .get("https://h-nc-news-project.onrender.com/api/articles")
    .catch((err) => {
        console.log(err)
    })
}
