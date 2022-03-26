import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

    if(listMovies.length === 0) {
		return <h2>Carregando...</h2>
	}

    return(
        <>
            <h2>Selecione o filme</h2>
            <div className="listMovies">
                <section>
                    {listMovies.map(movie => 
                        <Link to={`/sessoes/${movie.id}`} >
                            <img src={movie.posterURL}/>
                        </Link>
                    )}
                </section>
            </div>
        </>
    )
}