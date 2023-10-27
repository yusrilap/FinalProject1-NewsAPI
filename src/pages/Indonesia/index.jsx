import { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { getNews } from "../../api/newsAPI";
import NewsCards from "../../components/NewsCards";
import SectionHeader from "../../components/SectionHeader";
import axios from "axios"
const Indonesia = () => {
    const [data, setDatas] = useState(null);
    const getData = async()=> {
        try{
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=72b9597ef47e43dc83d993251e9caaac');
            setDatas(response.data.articles)
        }catch(e){
            console.log(e)
        }
    }
    useEffect(()=> {
        getData()
    },[])

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