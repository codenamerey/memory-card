import './Card.css';

function Card() {
    return (
        <div className="card">
            <img src="https://media4.giphy.com/media/d6Ni9aqSatPfq/giphy.gif?cid=609307femwj1tc3mwpz3lel0di7n33ckx5ic2279udlyrepf&rid=giphy.gif&ct=g" alt="Harry Potter" />
            <div className="description">
                <p>Harry Potter</p>
            </div>
        </div>
    )
}

export default Card;