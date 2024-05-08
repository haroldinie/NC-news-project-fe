import { useState, useEffect } from "react"
import { getComments } from "../../api"
import { useParams } from "react-router-dom"
import CommentsCard from "./CommentsCard"

export default function Comments(){

    const {article_id} = useParams()
    const [comments, setComments] = useState([])
    // const [articleId, setarticleId] = useState("")

    
    useEffect(() => {
        getComments(article_id)
        .then((res) => {
          console.log(res.data.comments)
        //   const splitDate = commentData.data.created_at.split("T")
        //   articleData.data.created_at = splitDate[0]
          setComments(res.data.comments)
        })
    }, [article_id])

    
    if (!comments) {
        return <p>Loading....</p>
    }


    return (
        <div>
        <ul className="centerList">
                    {comments.map((comment)=>{
                        return <CommentsCard key={comment.comment_id} comment={comment} /> 
                    })}
                </ul>
            
        </div>
    )


}