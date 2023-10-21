import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import NewsCards from "../../components/NewsCards";
import SectionHeader from "../../components/SectionHeader";
import { getNews } from "../../api/newsAPI";

const SearchResults = () => {
    const [data,setDatas] = useState('');
    const [loading,setLoading] = useState(false)
    const params = useParams();
    useEffect(()=> {
        setLoading(true)
        getNews(params.keyword).
            then(res => setDatas(res.data.articles))
            .catch(error => {
                console.error("Error fetching news:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    },[params])
    return (
        <>
            <SectionHeader title={params.keyword} />
            {
                loading ? (
                    <InfinitySpin color="black" />
                ) : (
                    data && <NewsCards data={data} />
                )
            }
        </>
    )
};
export default SearchResults