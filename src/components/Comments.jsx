import { useState, useEffect } from "react"
import { getComments, postComment } from "../../api"
import { useParams } from "react-router-dom"
import CommentsCard from "./CommentsCard"

export default function Comments(){

    const {article_id} = useParams()
    const [comments, setComments] = useState([])
    const [commentText, setCommentText] = useState("")

    
    useEffect(() => {
        getComments(article_id)
        .then((res) => {
          setComments(res.data.comments)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [article_id])

    
    if (!comments) {
        return <p>Loading....</p>
    }
    
        function handleSubmit(event) {
            event.preventDefault()
            postComment(article_id, commentText)
            .then(() => {
                setCommentText("")
                getComments(article_id)
            .then((updatedComments) => {
                    {setComments(updatedComments.data.comments)
                }
            })
            }).catch((err) => {
                console.log(err)
            })
        }
    
    
      

    return (
        <div>
        <ul className="centerList">
        <div className="postComment">
        <form
        onSubmit={
          handleSubmit
        }
      >
        <label htmlFor="comment">Comment</label>
        <input 
        type="text"
        id="comment"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        />
        <button type="submit">Post comment</button>
        </form>
        </div>
        <br>
        </br>
                    {comments.map((comment)=>{
                        return <CommentsCard key={comment.comment_id} comment={comment} /> 
                    })}
                </ul>
            
        </div>
    )


}