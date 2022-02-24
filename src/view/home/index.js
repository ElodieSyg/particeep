import { useState, useEffect } from "react";
import { movies$ } from "../../data/index";
import Card from "../../component/card";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Filter from "../../component/filter";

const CardContainer = styled.div`
    margin: 0.5rem;

    @media (min-width: 375px) {
        display: grid;
        grid-template-columns: 50% 50%;
    }

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 33.33% 33.33% 33.33%;
    }

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
    }

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 20% 20% 20% 20%;
    }

    @media (min-width: 1440px) {
        display: grid;
        grid-template-columns: 16.66% 16.66% 16.66% 16.66% 16.66% 16.66%;
    }
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem;
`;

const Home = () => {
    const [data, setData] = useState(null);
    const [categories, setCategories] = useState([]);
    const [filter, setFilter] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState();

    useEffect(() => {
        movies$.then(res => setData(res));
    }, []);

    const handleSearch = e => {
        setSelectedCategory(e.target.value);
        setFilter(true);
    };

    if (!data || !categories) {
        return (
            <div>Loading...</div>
        );
    };

    if (data) {
        for (let i = 0; i < data.length; ++i) {
            if (!categories.includes(data[i].category)) {
                categories.push(data[i].category);
            };
        };
    };

    return (
        <div>
            <FilterContainer>
                <Filter
                    categories={categories}
                    setSelectedCategory={setSelectedCategory}
                    handleSearch={handleSearch} />
            </FilterContainer>
            <CardContainer>
                 { 
                    filter
                    ? data.filter(item => item.category === selectedCategory).map(filtered => (
                            <Card
                                key={uuidv4()}
                                movie={filtered}
                                data={data}
                                setData={setData} />
                    ))
                    : data.map(item => (
                         <Card
                                key={uuidv4()}
                                movie={item}
                                data={data}
                                setData={setData} />
                    ))
                }   
            </CardContainer>
        </div>
    );
};

export default Home;