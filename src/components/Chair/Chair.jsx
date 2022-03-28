import { useState } from "react"
import styled from "styled-components"

export default function Chair(props){
    const [initialColor, setInitialColor] = useState({color:'#C3CFD9', border:'#7B8B99'})
    const notAvailableColor = {color:'#FBE192', border:'#F7C52B'}

    function selectSeat(seat, name){
        setInitialColor({color:'#8DD7CF', border:'#1AAE9E'})
        props.addSeat(seat, name)
    }

    return(
        props.available ? (
            <Seat    
                color={initialColor.color}
                border={initialColor.border}
                onClick={()=>{selectSeat(props.id, props.name)}}
            >
                {props.name}
            </Seat>
        ):(
            <Seat   
                color={notAvailableColor.color}
                border={notAvailableColor.border}
            >
                {props.name}
            </Seat>
        )
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