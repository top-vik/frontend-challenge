import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { useSelector } from 'react-redux';
import styles from "./Favourite.module.scss";

const Favourite = () => {
    const { favourites } = useSelector(state => state.toolkit);

    return (
        <div className={styles.container}>
            {favourites.length === 0 && <p>No favourite kitties</p>}
            {favourites.map(card =>
                <Card 
                    card={card}
                    key={card.id}
                    className={styles.card}  
                />
            )}   
        </div>
    )
}

export default Favourite;