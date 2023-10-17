// import { useEffect,useState } from 'react'
// import axios from "axios"
// import Card from '../components/NewsCard'

// const Indonesia = ()=> {
//     const [data,setData] = useState('');
//     const getData = async()=> {
//         try{
//             const response = await axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=c5caa90dbadd4298a09aa6a81456e702');
//             console.log(response.data.articles)
//             setData(response.data.articles)
//         }catch(e){
//             console.log(e)
//         }
//     }
//     useEffect(()=> {
//         getData()
//     },[])
//     return(
//         <>
//             <div className="indonesia-card-container">
//                 {data && data.map((item,index)=>(
//                     <Card 
//                         key={index}
//                         author={item.author}
//                         title={item.title}
//                         name={item.name}
//                         handleOnClickNewsPage={item.url}
//                         handleOnClickSave={()=>console.log(item)}
//                     />
//                 ))}
//             </div>
//         </>
//     )
// }
// export default Indonesia

import { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { getNews } from "../../api/newsAPI";
import NewsCards from "../../components/NewsCards";
import SectionHeader from "../../components/SectionHeader";

const Indonesia = () => {
    const [data, setDatas] = useState(null);

    useEffect(() => {
        getNews("Indonesia").then(res => setDatas(res.data.articles));
    }, []);

    return (
        <>
            <SectionHeader title="Indonesia News" />
            {
                data ?
                    <NewsCards data={data} />
                    :
                    <InfinitySpin color="black" />
            }
        </>
    );
};

export default Indonesia;