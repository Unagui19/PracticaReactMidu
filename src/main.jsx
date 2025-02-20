import { StrictMode } from 'react' //importo react
import { createRoot } from 'react-dom/client' // importo react para manejar el DOM
import './index.css' //llama al css de la pagina
import App from './App.jsx'

const BotonPrueba = ({text}) => {
  return (
    <button>
      {text}
    </button>
  )
}

createRoot(document.getElementById('root')).render( // esto es lo de renderizar la aplicacion
  // <StrictMode>
    <App /> //Para que me renderice el módulo App.jsx
  // </StrictMode>,
 
  
)
