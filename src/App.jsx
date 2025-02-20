import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TwitterCard from './twitterCard.jsx'

function App() {
  return (
    <>
      {/* <TwitterCard nombre="usuarioX" usuario="@usuarioX"/>
      <TwitterCard nombre="usuarioY" usuario="@usuarioY"/> */}

      {/* <TwitterCard usuario="@usuarioX" isFollowing={false}> children no se llama  */}
      <TwitterCard usuario="@usuarioX" initialIsFollowing={false}> {/*children no se llama . Aqui tambien inicializo el isFollowing */}
          <h2>UsuarioX</h2>{/* h2 es children de TwitterCard */}
      </TwitterCard>
      
      {/* Ahora practico pasar props desde un objeto */}
      {/* <TwitterCard usuario="@usuarioY" isFollowing={true}> children no se llama en la descripcion del componente */}
      <TwitterCard usuario="@usuarioY" > {/*children no se llama en la descripcion del componente */}
      {/* isFollowing={true / false} para mandar el booleano como prop. Tambien isFollowing solo sería equivalente a verdadero */}
        <h2>UsuarioY</h2> 
      </TwitterCard>
    </>
  )
}

export default App //Para exportar el componente y poder usarlo mediante import en otras partes
