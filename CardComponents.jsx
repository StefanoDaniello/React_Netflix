import { useContextApp } from "../store/context"


function CardComponets() {
    const { filmArray } = useContextApp();
    const film = filmArray.film;
    if (film.Error || film.Response == 'False') {
        return <h1>Nessun Film</h1>
    }
    if (film.length == 0){
        return  <h1>Cerca il tuo film preferito!</h1>
    }

    const starRating = (starNum) => {
        const prova = Math.ceil(starNum/2)
        let star = ""
        for(let i=0 ; i<prova; i++){
            star += "🌟"
        }
        return star
    }
    return (
        <>
            <div className="col-12 col-md-4 col-lg-3">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={film.Poster} alt={film.Plot} style={{ width: '300px', height: '300px' }} />
                        </div>
                        <div className="flip-card-back">
                            <h4 className="ellisseTitle">{film.Title}</h4>
                            <p className="ellisse">{film.Plot}</p>
                            <p id="star">{starRating(film.imdbRating)}</p>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}


export default CardComponets