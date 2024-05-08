import { useState, useEffect } from "react"
import { getArticleById } from "../../api"
import { useParams } from "react-router-dom"

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
        <ul className="card2">
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
            <div className='vertical2'>
        <p className='smallText2'>Topic</p>
            <p>{article.topic}</p>
            </div>
        <div className="vertical2"> 
        <p className='smallText2'>posted by:</p>
        <p>{article.author}</p>
        </div>
        <div className="createdDate">
            <p>{article.created_at}</p>
        </div>
        <div>
            <br>
            </br>
        <div className="vote">Vote count:</div>
        <p>{article.votes}</p>
        <button>Vote up</button>
        <button>Vote down</button>
        </div>
        <div>
            <br>
            </br>
        <div className='comments'>Comment count:</div>
            <p>{article.comment_count}</p>
        </div>
        </div>
    </ul>

    )
}