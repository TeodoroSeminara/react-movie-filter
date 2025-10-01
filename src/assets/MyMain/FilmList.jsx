import { useState } from "react";
import { useEffect } from "react";

function FilmList() {

    const films = [
        { title: 'Inception', genre: 'Fantascienza' },
        { title: 'Il Padrino', genre: 'Thriller' },
        { title: 'Titanic', genre: 'Romantico' },
        { title: 'Batman', genre: 'Azione' },
        { title: 'Interstellar', genre: 'Fantascienza' },
        { title: 'Pulp Fiction', genre: 'Thriller' },
    ];

    const [selectGenre, setSelectGenre] = useState(films);
    const [filterGenre, setFilterGenre] = useState();

    useEffect{() => {
        setFilterGenre(
            selectGenre.find( genre => {
                return 
            })
        )
    }

    }

    return (
        <select name="ciao">
            {selectGenre.map((film, i) => (
                <option value={film.genre} key={i}>{film.genre}
                </option>
            ))}

        </select>


    )
}

export default FilmList