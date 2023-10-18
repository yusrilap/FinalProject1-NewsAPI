import { useEffect, useState } from "react";
import axios from "axios";
<<<<<<< HEAD
import Card from "../../components/NewsCard";
=======
import Card from "../components/Card";
>>>>>>> c60267f (Slicing View)
import { useParams } from "react-router-dom";

const SearchResults = () => {
    const [data,setData] = useState('');
    const [loading, setLoading] = useState(false);
    const params = useParams()
    const getData = async()=> {
        setLoading(true);
        try{
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${params.search}&apiKey=c5caa90dbadd4298a09aa6a81456e702`);
            setData(response.data.articles)
        }catch(e){
            console.log(e)
        }
        setLoading(false);
    }
    useEffect(()=> {
        getData()
    },[params])
    return (
        <div className='indonesia-card-container'>
            {data && data.map((item,index)=>(
                <Card 
                    key={index}
                    author={item.author}
                    title={item.title}
                    name={item.name}
                    handleOnClickNewsPage={item.url}
                    handleOnClickSave={()=>console.log(item)}
                />
            ))}
            {loading && <p>Tunggu...</p>}
        </div>
    )
};
export default SearchResults