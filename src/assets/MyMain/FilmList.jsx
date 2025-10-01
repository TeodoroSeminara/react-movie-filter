import { useState } from "react";
import { useEffect } from "react";

function FilmList() {

    // Array 
    const films = [
        { title: 'Inception', genre: 'Fantascienza' },
        { title: 'Il Padrino', genre: 'Thriller' },
        { title: 'Titanic', genre: 'Romantico' },
        { title: 'Batman', genre: 'Azione' },
        { title: 'Interstellar', genre: 'Fantascienza' },
        { title: 'Pulp Fiction', genre: 'Thriller' },
    ];

    // stato dell'array completo
    const [selectGenre, setSelectGenre] = useState(films);
    // stato array filtrato
    const [filterGenre, setFilterGenre] = useState(films);
    // stato array di ricerca
    const [searchGenre, setSearchGenre] = useState(filterGenre.genre)

    useEffect(() => {
        setFilterGenre(
            selectGenre.filter(genre => {
                return genre.includes(searchGenre)
            }))
    }, [searchGenre]);

    return (
        <>
            <select name="film"
                onChange={(e) => { setSearchGenre(e.target.value) }}
            >
                <option value={searchGenre} >Fantascienza</option>
                <option >Thriller</option>
                <option >Azione</option>
                <option >Romantico</option>
            </select>

            <ul>
                {filterGenre.map((film, i) => (
                    <li value={film.genre}
                        key={i}>
                        {film.title}, il Genere è:{film.genre}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default FilmList
