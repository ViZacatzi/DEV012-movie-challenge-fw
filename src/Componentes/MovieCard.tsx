

function MovieCard ({ imageURL, title, movieYear, gender}: MovieProps){
    return (
        <section className="movie-card">
            <img src={imageURL} alt=""/>
            <h5>{title}</h5>
            <p>{movieYear}</p>
            <p>{gender}</p>
        </section>
    );
}

export default MovieCard