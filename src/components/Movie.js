import React from 'react'

const IMG = "https://image.tmdb.org/t/p/w1280";


const setVoteClass = (vote) => {

    if (vote >= 8) {
        return "green"
    } else if (vote >= 5 ) {
        return "orange"
    }
    else {
        return "red"
    }
}




const Movie = ({title, poster_path, overview, vote_average}) => {
    return(
        <div className="movie">
            <img 
                src={ poster_path ? ( IMG + poster_path) :
                        'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                    } 
                    alt={title} 
                />

            <div className="info">
                <h3>{title}</h3>
                <h4 
                    className={ `tag ${setVoteClass(vote_average)}`}>
                    {vote_average} 
                    <i className="fas fa-medal"></i>
                </h4>
            </div>

            <div className="overview">
                <h2><i className="far fa-file-alt"></i> Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movie