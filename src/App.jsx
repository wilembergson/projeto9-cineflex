import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Title from './components/Title/Title'
import './App.css'
import MoviesList from './components/MoviesList/MoviesList'

export default function App(){
    return(
        <BrowserRouter>
            <Title/>
            <Routes>
                <Route path="/" element={<MoviesList/>}/>
            </Routes>
        </BrowserRouter>
    )
}