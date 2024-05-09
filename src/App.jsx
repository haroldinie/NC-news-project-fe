import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Articles from './components/Articles'
import SingleArticleCard from './components/SingleArticleCard'
import { Topics } from './components/Topics'

function App() {  


  return (
    <div>
    <div className='topBar'>
      <Header/>
      </div>
      <div className='linksBar'>
    <Routes> 
       <Route path="/" element={<Home />} />
      <Route path="/articles" element={ <Articles/>} />
      <Route path="/articles/:article_id" element={ <SingleArticleCard/>} />
       <Route path="/topics" element={<Topics />} />
    </Routes>
    </div>
    </div>
  )
}

export default App;