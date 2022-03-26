import './Footer.css'

export default function Footer(props){
    return(
        <footer>
            <img src={props.image}/>
            <div className="informations">
                <h3>{props.title}</h3>
                <h3>{props.date}</h3>
            </div>
        </footer>
    )
}