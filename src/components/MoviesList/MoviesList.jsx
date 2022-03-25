import axios from 'axios'
import { useEffect, useState } from 'react'
import './MoviesList.css'

export default function MoviesList(){
    const [listMovies, setListMovies] = useState([])

    useEffect(()=>{
        const promesse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")

        promesse.then(response => {
            setListMovies(response.data)
        })
        promesse.catch("Ocorreu um erro.")
    },[])

    return(
        <>
            <h2>Selecione o filme</h2>
            <div className="listMovies">
                <section>
                    {listMovies.map(movie => <img src={movie.posterURL}/>)}
                </section>
            </div>
        </>
    )
}