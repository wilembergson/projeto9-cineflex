import axios from "axios"
import './MovieSection.css'
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Footer from "../Footer/Footer"

export default function MovieSection(){
    const navigate = useNavigate()
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

    function handleClick() {
        navigate(-1);
    }

    return(
        <>
            <ion-icon
              onClick={handleClick}
              class="return-btn"
              name="arrow-back-circle-outline"
            ></ion-icon>
            <h2>Selecione o horário</h2>
            <main>
            {days.map(day=> 
                <div className="date">
                    <h3>{day.weekday} - {day.date}</h3>
                    <div className="hours">
                        {day.showtimes.map(time => 
                            <Link to={`/sessao/${time.id}`}>
                                <h4>{time.name}</h4>
                            </Link>)}
                    </div>
                </div>)}
            </main>
            <Footer image={movie.posterURL} 
                    title={movie.title}/>
        </>
    )
}