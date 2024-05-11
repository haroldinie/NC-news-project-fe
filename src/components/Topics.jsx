import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticles } from "../../api";
import AllArticlesCard from "./AllArticlesCard";
import LoadingWheel from "./LoadingWheel";

export function Topics() {

    const [isLoading, setIsLoading] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams();
    const [articles, setArticles] = useState([])
    const [sortBy, setSortBy] = useState("created_at")
    const [orderBy, setOrderBy ] = useState("DESC")
    const [topic, setTopic] = useState("")

    function handleTopic (event) {
        setIsLoading(true)
        const topic = event.target.value
        setTopic(topic)
        setSearchParams({topic: topic})
    }
    
    function handleSortBy (event) {
        setIsLoading(true)
        const sortBy = event.target.value
        setSortBy(sortBy)
    }

    function handleOrderBy (event) {
        setIsLoading(true)
        const orderBy = event.target.value
        setOrderBy(orderBy)
    }


    useEffect(() => {
        setIsLoading(true)
        setSearchParams({topic: topic,
            sort_by: sortBy,
            order: orderBy 
        })
        getArticles(topic, sortBy, orderBy)
        .then((articles) => {
            setArticles(articles)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setIsLoading(false)
        })
    }, [searchParams, sortBy, orderBy, topic]) 

    


    return isLoading ? (
        <LoadingWheel/>
    ) 
    :
    (
        <div className="topicsPage">
        <main className="selecta">
        <div>
        <label htmlFor="selecta" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
  <select id="selecta" className="bg-gray-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
        onChange={handleTopic}
        >
            <option>
                Select Topic:
            </option>
        <option value="all">All</option>
        <option value="coding">Coding</option>
        <option value="football">Football</option>
        <option value="cooking">Cooking</option>
        </select>
        <br>
        </br>
        <select id="selectb" className="bg-gray-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
        onChange={handleSortBy}
        >
            <option>
                Sort By:
            </option>
        <option value="created_at">Date</option>
        <option value="comment_count">Comment count</option>
        <option value="votes">Votes</option>
        </select>
        <br>
        </br>
        <select id="selectc" className="bg-gray-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
        onChange={handleOrderBy}
        >
            <option>
                Order By:
            </option>
        <option value="DESC">Desc</option>
        <option value="ASC">Asc</option>
        </select>
        </div>
        <br>
        </br>
        <div className="articleByTopics">
                     {articles.map((article)=>{
                        return <AllArticlesCard key={article.article_id} article={article} /> 
                    })}
                </div>
            </main>
            </div>
    )
}