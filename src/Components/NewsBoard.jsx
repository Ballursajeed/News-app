import React from "react"
import NewsItem from "./NewsItem"

const NewsBoard=({category})=>{

 const [articles,setArticles]=React.useState([]);
 
 React.useEffect(()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=17847bcc352541ed965c2bc510d36ade` ;
  fetch(url).then(response=> response.json()).then(data=>
   setArticles(data.articles)
  );
  
 },[category])

 return(
 <>
  <div>
   <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
   {
     articles.map((news,index)=>{
           return <NewsItem key={index} 
           title={news.title} 
           description={news.description}
           src={news.urlToImage}
           url={news.url}
           />
     })}  
  </div>
 </>
 )}
 
 export default NewsBoard
