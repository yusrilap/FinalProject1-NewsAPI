import { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import NewsCards from "../../components/NewsCards";
import SectionHeader from "../../components/SectionHeader";
const SearchResults = () => {
    const [data,setData] = useState('');
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const getData = async()=> {
        setLoading(true);
        try{
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${params.search}&apiKey=c5caa90dbadd4298a09aa6a81456e702`);
            setData(response.data.articles)
            console.log(response)
        }catch(e){
            console.log(e)
        }
        setLoading(false);
    }
    useEffect(()=> {
        getData()
    },[params])
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
    )
};
export default SearchResults