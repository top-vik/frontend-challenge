import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image } from 'react-bootstrap';
import { like } from '../../reducers/catsSlice';
import styles from './Card.module.scss';

const Card = ({card}) => {
    const dispatch = useDispatch();
    const [isFavourite, setIsFavourite] = useState(false);

    const clickHandler = (cat) => {
        if(isFavourite === false) {
            dispatch(like(cat));
            setIsFavourite(true);
        }
    }


    return  (
        <div className={isFavourite ? styles.card_liked : styles.card}>
            <Image 
                src={card.url} 
                className={styles.card_Image}
                onClick={()=> clickHandler(card)}    
            />
        </div>        
    )
}

export default Card;