import { use, useState } from 'react' //Esto es un hook. Este Hook especificamente para habilitar los estados en React. 
import "./twitterCard.css";

// function TwitterCard({nombre,usuario}) {
//     return (  
//         <>
//             {/* <article style={{display: 'flex', color:'#fff', alignItems: 'center'}}>  Asi se pone el css desde aqui */}
//             <article> 
//                 {/* para el css se pueden usar id, pero es recomendable classname, ya que la idea es que los componentes sean reutilizables. No es class, ya que en js class es una palabra reservada */}
//                 <header className='card'>
//                 <section className='perfil'>
//                     <img src="src/img/usuario_default.png" alt="imagen de usuario"/>
//                     <strong>{nombre}</strong>
//                 </section>
//                 <section className='nickname'>
//                     <span>{`${usuario}`}@usuarioX</span>
//                 </section>
//                 </header>
//                 <aside><button>Seguir</button></aside>
//             </article>
//         </>
//     );
// }

function TwitterCard({children,usuario, initialIsFollowing}) { //children es para el elemento hijo que esta envuelto en otro. Si pongo usuario="usuario algo", es para darle un valor por defecto.
    
    // const state = useState(false) //Inicializo el estado del elemento. El state me devuelve un array
    // const isFollowing = state[0] //Aqui tengo el valor del estado
    // const setIsFollowing = state[1]//Aqui hay una funcion que me permite cambiar el valor del estado
    // Estas 3 lineas de código también se pueden poner de la siguiente manera:
    const [isFollowing,setIsFollowing] = useState(initialIsFollowing);//Esta forma esta mas bonita. Primera posicion es el valor del estado (en este caso isFollowing tiene valor verdadero o falso. Se pone el nombre de la variable que en este caso es "isFollowing"), segunda posicion como se actualiza(en este caso cuando se hace click. Se pone el nombre de la variable antepuesto con "set" y todo en camel case. En este caso es "setIsFollowing")

    const text = isFollowing ? "Dejar de seguir":"Seguir"; {/* Si isFollowing es true se muestra dejar de seguir, sino se muestra seguir */}
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following':'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing) //esta cambiando el estado a negativo, osea que si ya estaba en negativo, lo pasa a positivo y viceversa
    }

    return (  
        <>
            {/* <article style={{display: 'flex', color:'#fff', alignItems: 'center'}}>  Asi se pone el css desde aqui */}
            <article> 
                {/* para el css se pueden usar id, pero es recomendable classname, ya que la idea es que los componentes sean reutilizables. No es class, ya que en js class es una palabra reservada */}
                <header className='card'>
                <section className='perfil'>
                    <img src="src/img/usuario_default.png" alt="imagen de usuario"/>
                    <strong>{children}</strong> {/* h2 es children de TwitterCard */}
                </section>
                <section className='nickname'>
                    <span>{`${usuario}`}</span>
                </section>
                </header>
                <aside>
                    <button className={buttonClassName} onClick={handleClick}>
                        {text}
                    </button>
                </aside>
            </article>
        </>
    );
}

export default TwitterCard;

//uso ff como snippet para estas funciones