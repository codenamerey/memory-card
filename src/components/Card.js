import { useEffect, useState } from 'react';
import './Card.css';


function Card(props) {
    const { character } = props;
    const [gifURL, setGifURL] = useState('');
    useEffect(()=> {
        const URL = `https://api.giphy.com/v1/gifs/translate?api_key=z4L4W8mw0SgWTkLcbb9BIkykMbaZ7hvf&s=${convertToSearchable(character)}`;
        setGIF(URL);
    }, []);

    function convertToSearchable(searchTerm) {
        let searchTermLowercased = searchTerm.toLowerCase();
        let spaceReplacedWithPlus = searchTermLowercased.replace(' ', '+');
        return spaceReplacedWithPlus;
    }

    async function setGIF(url) {
        try {
            const response = await fetch(url);
            const gifData = await response.json();
            setGifURL(gifData.data.images.original.url); 
        }
        catch {
            setGifURL('There has been a problem loading this image');
        }
    }

    return (
        <div className="card">
            <img src={gifURL} alt="Harry Potter" />
            <div className="description">
                <p>{character}</p>
            </div>
        </div>
    )
}

export default Card;