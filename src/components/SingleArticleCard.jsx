import { useState, useEffect } from "react"
import { getArticleById } from "../../api"
import { useParams } from "react-router-dom"
import Comments from "./Comments"

export default function SingleArticleCard(){

    const {article_id} = useParams()
    const [article, setArticle] = useState([])
    // const [articleId, setarticleId] = useState("")

    
    useEffect(() => {
        getArticleById(article_id)
        .then((articleData) => {
          console.log(articleData.data);
          const splitDate = articleData.data.created_at.split("T")
          articleData.data.created_at = splitDate[0]
          setArticle(articleData.data)
        })
    }, [article_id])

    
    if (!article) {
        return <p>Loading....</p>
    }


    return (
        <ul className="singleArticlePage">
            <div className="singleArticleCard">
        <div className="image2">
        <img className="imageb2" src={article.article_img_url} alt="no image"/>
        </div>
        <div className="article-title2">
        <h4>{article.title}</h4>
        </div>
        <br>
        </br>
        <div className="body-text">
            <p>{article.body}</p>
            </div>
        <br>
        </br>
        <div className="info2">
            
        <p>Topic</p>
            <p>{article.topic}</p>
            
         
        <p>posted by:</p>
        <p>{article.author}</p>
        
     
            <p>{article.created_at}</p>
       
        </div>
        </div>
        
            <br>
            </br>
        
        <div className="vote">Vote count:
        <p>{article.votes}</p>
        <button>Vote up</button>
        <button>Vote down</button>
        </div>
            <br>
            </br>
        <div className='comments'>Comment count:
            <p>{article.comment_count}</p>
            <Comments/>
            </div>
    </ul>

    )
}