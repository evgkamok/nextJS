"use client";
import RatingProps from "./Rating.props";
import StarIcon from "../../assets/star-icon.svg";
import styles from './Rating.module.css';
import cn from 'classnames';
import { useEffect, useState } from "react";

const Rating = ({rating, isEditable = false, ...props} : RatingProps ) : JSX.Element =>  {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    
    useEffect( () => {
        updateRating(rating)
    }, [rating])

    const updateRating = (currentRating: number) => {
        const updatedRatingArray = ratingArray.map( (elem , index)  => {
            return (
                <StarIcon
                key={index}
                    className={cn(styles.star, {
                        [styles.filled]: currentRating > index,
                        [styles.editable]: isEditable
                    })}
                onMouseEnter={() => changeRating(index + 1)}
                onMouseLeave={() => changeRating(rating)}
                />
            )
        })
        setRatingArray(updatedRatingArray)
    }

    const changeRating = (i: number) => {
        if (!isEditable) {
            return
        }
        updateRating(i)
    }

    
    return (
        <div {...props}>
            {ratingArray.map((e, i) => <span key={i}> {e} </span>)}
        </div>
    )
}

export default Rating;