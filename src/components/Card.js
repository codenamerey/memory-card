import './Card.css';

function Card(props) {
    const { handleCardClick, character, id, imgURL } = props;
    console.log(imgURL, character);
    return (
        <div className="card" key={id} onClick={handleCardClick.bind(null, character)}>
            <img src={imgURL} alt={character} />
            <div className="description">
                <p>{character}</p>
            </div>
        </div>
    )
}

export default Card;