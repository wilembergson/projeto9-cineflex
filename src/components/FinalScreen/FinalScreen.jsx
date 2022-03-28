import { useLocation, useNavigate } from "react-router-dom"
import './FinalScreen.css'

export default function FinalScreen(){
    const location = useLocation()
    const navigate = useNavigate()
    
    const { movieAndSection:{movie:{title}, hour, day:{date}},
    buyer:{
        name,
        cpf},
    seats} = location.state
   
    return(
        <main className="finalScreen">  
            <h2>Pedido feito com sucesso!</h2>
            <section>
                <h3>Filme e sessão</h3>
                <h4>{title}</h4>
                <h4>{date} - {hour}</h4>
            </section>
            <section>
                <h3>Ingressos</h3>
                {seats.map(seat => <h4>Assento {seat}</h4>)}
            </section>
            <section>
                <h3>Comprador</h3>
                <h4>Nome: {name}</h4>
                <h4>CPF: {cpf}</h4>
            </section>
           <div>
                <button onClick={() => navigate('/')}>
                    Voltar para a Home
                </button>
           </div>
        </main>
    )
}