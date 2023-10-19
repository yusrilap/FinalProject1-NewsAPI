import React, { useState, useEffect } from 'react';
import Card from '../components/Card'; 

// Meika make fetch dulu yahh soalnya Api Support ini 
const fetchDataFromAPI = async () => {
    try {
        const apiKey = '8cd6a6e72b3f2a2ebde0acf4cc92767f';
        const response = await fetch(`https://gnews.io/api/v4/search?q=example&lang=en&max=10&token=${apiKey}`);
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

const Covid = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchDataFromAPI();
            setArticles(data);
        };

        fetchData(); 
    }, []);

    return (
        <div className="indonesia-card-container">
            {articles.map((item, index) => (
                <Card
                key={index}
                author={item.author}
                title={item.title}
                name={item.name}
                handleOnClickNewsPage={item.url}
                handleOnClickSave={()=>console.log(item)}
                />
            ))}
        </div>
    );
};

export default Covid;
