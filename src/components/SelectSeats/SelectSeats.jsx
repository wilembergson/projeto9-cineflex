import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import axios from "axios";
import './SelectSeats.css'
import styled from "styled-components";
import Chair from "../Chair/Chair";

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
                {seats.map(seat => <Chair name={seat.name} available={seat.isAvailable}/>)}
                <div className="subtitle">  
                    <section>
                        <Seat color='#8DD7CF' border='#1AAE9E'/>
                        <label>Selecionado</label>
                    </section>
                    <section>
                        <Seat color='#C3CFD9' border='#7B8B99'/>
                        <label>Disponivel</label>
                    </section>
                    <section>
                        <Seat color='#FBE192' border='#F7C52B'/>
                        <label>Indisponivel</label>
                    </section>  
                </div>
            </div>
            <form>
                <section>
                    <label>Nome do comprador</label>
                    <input type="text" placeholder="Digite seu nome..."/>
                </section>
                <section>
                    <label>CPF do comprador</label>
                    <input type="number"  placeholder="Digite seu CPF..."/>
                </section>
                <div>Reservar assento(s)</div>
            </form>

            <Footer image={movie.posterURL  } title={movie.title} date={`${day.weekday} - ${hour}`}/> 
        </main>
    )
}

const Seat = styled.div`
    display: flex;
    justify-content: center;
    margin: 7px;
    width: 26px;
    height: 26px;
    left: 124px;
    top: 158px;

    background: ${props => props.color};
    border: 1px solid ${props => props.border};
    box-sizing: border-box;
    border-radius: 12px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #000000;
`