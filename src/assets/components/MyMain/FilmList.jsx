import { useState } from "react";
import { useEffect } from "react";

// Array 
const films = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
];

function FilmList() {
    // stato dell'array completo
    const [selectGenre, setSelectGenre] = useState("");
    // stato array filtrato
    const [filterGenre, setFilterGenre] = useState(films);
    // stato array di ricerca
    const [optionFilm, setOptionFilm] = useState("")


    // // stato dell'array completo
    // const [selectGenre, setSelectGenre] = useState(films);
    // // stato array filtrato
    // const [filterGenre, setFilterGenre] = useState([]);
    // // stato array di ricerca
    // const [optionFilm, setOptionFilm] = useState("")

    // useEffect(() => {
    //     if (optionFilm !== "") {
    //         setFilterGenre(
    //             selectGenre.filter(i => {
    //                 return i.genre === optionFilm
    //             }
    //             ))
    //     } else {
    //         setFilterGenre(selectGenre);
    //     }
    // }, [optionFilm]);

    useEffect(() => {
        let result = films;
        if (selectGenre !== "") {
            result = result.filter(genre => {
                return genre.genre === selectGenre
            })
            if (optionFilm !== "") {
                result = result.filter(type => {
                    return type.title.toLowerCase().includes(optionFilm.toLowerCase().trim())
                })
            }
        } else if (optionFilm !== "") {
            result = result.filter(type => {
                return type.title.toLowerCase().includes(optionFilm.toLowerCase().trim())
            })
        }
        setFilterGenre(result)

    }, [optionFilm, selectGenre])

    return (
        <>
            <select name="film"
                onChange={(e) => { setSelectGenre(e.target.value) }}
            >
                <option value="">Seleziona genere..</option>
                <option value="Fantascienza">Fantascienza</option>
                <option value="Thriller">Thriller</option>
                <option value="Azione">Azione</option>
                <option value="Romantico">Romantico</option>
            </select>

            <ul>
                {filterGenre.map((film, i) => (
                    <li value={film.genre}
                        key={i}>
                        {film.title}, il Genere è:{film.genre}
                    </li>
                ))}
            </ul>

            <input type="text"
                placeholder="Cerca"
                value={optionFilm}
                onChange={(e) => { setOptionFilm(e.target.value) }} />
        </>


    )
}

export default FilmList
