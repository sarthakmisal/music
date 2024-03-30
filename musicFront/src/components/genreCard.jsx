import React from 'react';
import { useNavigate } from 'react-router-dom';
import GenreSongs from './GenreSongs';

const GenreCard = ({ genre, thumbnail }) => {
    const navigate=useNavigate();

    const handleClick = async () => { 
        navigate("/genreSongs",{state:{genre}}); 
    }

    return (
        <div className='w-60 h-24 relative cursor-pointer ' onClick={handleClick}>
            <img src={thumbnail} alt={genre} className="rounded-lg opacity-50 h-28 w-full object-cover object-top z-0 hover:opacity-80" />
            <h3 className='absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-2xl pointer-events-none'>{genre}</h3>
        </div>
    );
};

export default GenreCard;
