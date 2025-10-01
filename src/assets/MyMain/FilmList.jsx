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
    const [searchGenre, setSearchGenre] = useState("")

    // useEffect(() => {

    //     console.log("films", films);
    //     setSelectGenre(films)
    //     console.log("Select", selectGenre);


    //     if (searchGenre !== "") {
    //         setSelectGenre(
    //             selectGenre.filter(i => {
    //                 console.log(i);
    //                 console.log(searchGenre);
    //                 return i.genre === searchGenre
    //                 // return i.includes(searchGenre)
    //             }
    //             ))
    //     }
    // }, [searchGenre]);

    useEffect(() => {

        console.log("films 2", films);
        setSelectGenre(films)
        console.log("Select 2", selectGenre);


        if (searchGenre !== "") {
            setFilterGenre(
                selectGenre.filter(i => {
                    console.log(i);
                    console.log(searchGenre);
                    return i.genre === searchGenre
                    // return i.includes(searchGenre)
                }
                ))
        }
    }, [searchGenre]);

    return (
        <>
            <select name="film"
                onChange={(e) => { setSearchGenre(e.target.value) }}
            >
                <option >Fantascienza</option>
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
