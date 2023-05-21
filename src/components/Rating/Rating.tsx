import React from "react";

import { IoMdStar, IoMdStarHalf } from 'react-icons/io';
import './rating.css';


interface IRatingProps {
    rating?: number;
}

const Rating: React.FC<IRatingProps> = ({ rating }) => {
    const fullStars = Math.floor(rating / 2);
    const hasHalfStar = rating % 2 !== 0;

    const renderStars = () => {
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<IoMdStar key={i} />);
        }

        if (hasHalfStar) {
            stars.push(<IoMdStarHalf key="half" />);
        }

        return stars;
    };

    return <div className={'rating_stars'}>{renderStars()}</div>;
};


export {
    Rating
}