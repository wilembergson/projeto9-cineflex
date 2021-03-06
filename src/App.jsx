import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Title from './components/Title/Title'
import './App.css'
import MoviesList from './components/MoviesList/MoviesList'
import MovieSection from './components/MovieSection/MovieSection'
import SelectSeats from './components/SelectSeats/SelectSeats'
import FinalScreen from './components/FinalScreen/FinalScreen'

export default function App(){
    return(
        <BrowserRouter>
            <Title/>
            <Routes>
                <Route path="/" element={<MoviesList/>}/>
                <Route path="/sessoes/:idFilme" element={<MovieSection/>}/>
                <Route path="/sessao/:idSessao" element={<SelectSeats/>}/>
                <Route path="/sucesso" element={<FinalScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}