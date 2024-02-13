

function MovieCard ({ imageURL, title, movieYear, overview, gender, vote, onClick}: MovieProps){
    return (
        <section className="movie-card" onClick={onClick}>
            <img src={imageURL} alt=""/>
            <h5>{title}</h5>
            <p>{movieYear}</p>
            <p>{overview}</p>
            <p>{gender}</p>
            <p>{vote}</p>
        </section>
    );
}

export default MovieCard