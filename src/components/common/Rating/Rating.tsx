"use client";
import RatingProps from "./Rating.props";
import StarIcon from "../../assets/star-icon.svg";
import styles from './Rating.module.css';
import cn from 'classnames';
import { KeyboardEvent, useEffect, useState } from "react";

const Rating = ({rating, setRating, isEditable = false, ...props} : RatingProps ) : JSX.Element =>  {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    
    useEffect( () => {
        updateRating(rating)
    }, [rating])

    const updateRating = (currentRating: number) => {
        const updatedRatingArray = ratingArray.map( (elem , index)  => {
            return (
                <span
                    className={cn(styles.star, {
                        [styles.filled]: currentRating > index,
                        [styles.editable]: isEditable
                    })}
                    key={index}
                    onMouseEnter={() => changeRatingMouse(index + 1)}
                    onMouseLeave={() => changeRatingMouse(rating)}
                    onClick={() => changeRatingClick(index + 1)}
                >
                    <StarIcon
                        tabIndex={ isEditable ? 0 : -1}
                        onKeyPress={ (e: KeyboardEvent<SVGElement>) => handleSpace(e, index + 1)}
                    />
                </span>
            )
        })
        setRatingArray(updatedRatingArray)
    }

    const changeRatingMouse = (i: number) => {
        if (!isEditable) {
            return
        }
        updateRating(i)
    }

    const changeRatingClick = (i: number) => {
        if (!isEditable || !setRating) {
            return
        }
        setRating(i)
    }

    const handleSpace = (e: KeyboardEvent<SVGElement>, i: number) => {
        if (e.code != 'Space' || !setRating) {
            return
        }
        setRating(i)
    }

    
    return (
        <div {...props}>
            {ratingArray.map((e, i) => <span key={i}> { e } </span>)}
        </div>
    )
}

export default Rating;