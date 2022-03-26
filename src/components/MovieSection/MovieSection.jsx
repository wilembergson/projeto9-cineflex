import axios from "axios"
import './MovieSection.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Footer from "../Footer/Footer"

export default function MovieSection(){
    const {idFilme} = useParams()
    const [movie, setMovie] = useState({})
    const [days, setDays] = useState([])

    useEffect(()=>{
        const promesse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
        promesse.then(response =>{
            setMovie(response.data)
            setDays(response.data.days)
        })
        promesse.catch("Ocorreu algum erro.")
    }, [])

    return(
        <>
            <h2>Selecione o horário</h2>
            <main>
            {days.map(day=> 
                <div className="date">
                    <h3>{day.weekday} - {day.date}</h3>
                    <div className="hours">
                        {day.showtimes.map(time => <h4>{time.name}</h4>)}
                    </div>
                </div>)}
            </main>
            <Footer image={movie.posterURL} title={movie.title}/>
        </>
    )
}