import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CitySearch from './components/CitySearch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CitySearch />
  </StrictMode>,
)
