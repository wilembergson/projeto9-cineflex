import './Footer.css'

export default function Footer(props){
    return(
        <footer>
            <img src={props.image}/>
            <div className="informations">
                <h2>{props.title}</h2>
                <h2>{props.date}</h2>
            </div>
        </footer>
    )
}