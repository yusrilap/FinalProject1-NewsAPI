// import { useEffect, useState } from "react";
// import axios from "axios";
// import Card from "../components/Card";
// import { useParams } from "react-router-dom";

// const SearchResults = () => {
//     const [data,setData] = useState('');
//     const [loading, setLoading] = useState(false);
//     const params = useParams()
//     const getData = async()=> {
//         setLoading(true);
//         try{
//             const response = await axios.get(`https://newsapi.org/v2/everything?q=${params.search}&apiKey=c5caa90dbadd4298a09aa6a81456e702`);
//             setData(response.data.articles)
//         }catch(e){
//             console.log(e)
//         }
//         setLoading(false);
//     }
//     useEffect(()=> {
//         getData()
//     },[params])
//     return (
//         <div className='indonesia-card-container'>
//             {data && data.map((item,index)=>(
//                 <Card 
//                     key={index}
//                     author={item.author}
//                     title={item.title}
//                     name={item.name}
//                     handleOnClickNewsPage={item.url}
//                     handleOnClickSave={()=>console.log(item)}
//                 />
//             ))}
//             {loading && <p>Tunggu...</p>}
//         </div>
//     )
// };
// export default SearchResults

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { getNews } from "../../api/newsAPI";
import NewsCards from "../../components/NewsCards";
import SectionHeader from "../../components/SectionHeader";

const Search = () => {
    const { keyword } = useParams();

    const [data, setDatas] = useState(null);

    useEffect(() => {
        setDatas(null);
        getNews(keyword).then(res => setDatas(res.data.articles));
    }, [keyword]);

    return (
        <>
            <SectionHeader title={`Search ${keyword} News`} />
            {
                data ?
                    <NewsCards data={data} />
                    :
                    <InfinitySpin color="black" />
            }
        </>
    );
};

export default Search;