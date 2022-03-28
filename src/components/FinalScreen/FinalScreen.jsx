import { useLocation, useNavigate } from "react-router-dom"
import './FinalScreen.css'

export default function FinalScreen(){
    const location = useLocation()
    
    const { movieAndSection:{
        movie:{title},
        hour,
        day:{date}}} = location.state
   
    return(
        <main className="finalScreen">  
            <h2>Pedido feito com sucesso!</h2>
            <section>
                <h3>Filme e sessão</h3>
                <h4>{title}</h4>
                <h4>{date} - {hour}</h4>
            </section>
        </main>
    )
}