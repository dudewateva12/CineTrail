import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeContextProvider } from './contexts/ThemeContext'
import HomePage from './Pages/HomePage/HomePage'
import MovieDetails from './Pages/MovieDetails/MovieDetails'


function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  return (
    
    <ThemeContextProvider>

      <BrowserRouter>

        <Header/>

        <Routes>

          <Route path='/' element={<HomePage apiKey={apiKey} baseUrl={baseUrl}/>}/>
          <Route path='/moviedetails/:movieid' element={<MovieDetails baseUrl={baseUrl} apiKey={apiKey} />}/>
        </Routes>
        

      </BrowserRouter>

    </ThemeContextProvider>
  )
}

export default App
