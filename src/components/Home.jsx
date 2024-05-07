import { Link } from "react-router-dom"
import Header from './Header'
import { Routes, Route } from 'react-router-dom'


export default function Home() {
    return (
        <div>
        <p>You're on the HOME page</p>
        <p>Welcome to NC News, the UK's premier news </p>
        {/* <Link className="link" to="/articles">The following page contains all of our articles</Link>
        <br>
        </br><Link className="link" to="/topics">Topics</Link> */}
        </div>
    )
}