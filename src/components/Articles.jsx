import { Link, useParams } from "react-router-dom"
import AllArticlesCard from "./AllArticlesCard"
import { useState, useEffect } from "react"
import { getArticles, getArticleById } from "../../api"
import LoadingWheel from "./LoadingWheel"

export default function Articles() {

    const [ articles, setArticles ] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => { 
        setIsLoading(true)
      getArticles()
      .then((articles) => {
        setArticles(articles)
        setIsLoading(false)
      })
    }, [])


    return isLoading ? (
        <LoadingWheel/>
    ) 
    :
    (
        <div className="allArticlesPage">
        <ul className="centerList">
                    {articles.map((article)=>{
                        return <AllArticlesCard key={article.article_id} article={article} /> 
                    })}
                </ul>
        </div>
    )
    
}