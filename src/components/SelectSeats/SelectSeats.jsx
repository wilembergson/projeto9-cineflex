import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import axios from "axios";
import './SelectSeats.css'

export default function SelectSeats(){
    const {idSessao} = useParams()
    const [movie, setMovie] = useState({})
    const [hour, setHour] = useState('')
    const [day, setDay] = useState({})
    const [seats, setSeats] = useState([])

    useEffect(()=>{
        const promesse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        promesse.then(response => {
            setMovie(response.data.movie)
            setHour(response.data.name)
            setDay(response.data.day)
            setSeats(response.data.seats)
        })
        promesse.catch("Ocorreu algum erro.")
    }, [])

    return(
        <main className="selectSeats">
            <h2>Selecione o(s) assento(s)</h2>
            <div className="seats">
                {seats.map(seat => <div className="seat">
                    {seat.name}
                </div>)}
            </div>
            <Footer image={movie.posterURL  } title={movie.title} date={`${day.weekday} - ${hour}`}/> 
        </main>
    )
}