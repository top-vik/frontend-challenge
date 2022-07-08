import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getCats } from '../../reducers/catsSlice';

import styles from "./Home.module.scss";

const Home = () => {
    const dispatch = useDispatch();
    const { cards } = useSelector(state => state.toolkit);
    const [currentPage, setCurrentPage] = useState(1);
    const [isFetching, setIsFetching] = useState(true);




    useEffect(() => {
        if (isFetching) {
            dispatch(getCats(currentPage));
            setCurrentPage(prevState => prevState + 1);
            setIsFetching(false);
        } 
    }, [isFetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        };
    }, [])

    const scrollHandler = (e) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setIsFetching(true);
        }
    }
    

    return (     
        <div className={styles.container}>
            {cards.map((card, index) =>
                <Card 
                    card={card}
                    key={`${card.id} + ${index}`}
                    className={styles.card}  
                />
            )} 
            {isFetching && <h1>Loading...</h1>}   
        </div>
    )
}

export default Home;