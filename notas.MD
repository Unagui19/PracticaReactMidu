# NOTAS

• Lo que hace react es renderizar elementos, no un html directo, debo crearlo con createElement por ejemplo, y de ahi lo renderiza

• No se puede renderizar más de 1 elemento a la vez.

• para crear un proyecto de react con vite, uso: npm create vite@latest

• swc es un transpilador, siempre usar

• package.json tiene las dependencias,como la versión de React,  y las dependencias del desarrollo, como la versión de Vite

• vite.config.js: configuracion de vite. No tocar.

• main.jsx es el punto de entrada de la aplicación.

• Un componente es una funcion que lo que hace es crear un elemento

•Los botones de los componentes SIEMPRE con pascal case. Ej: BotonPrueba.

• En React no se pueden usar los styles en linea de texto normal desde el .jsx, o es un archivo aparte .css, o como objeto (ver en video pa repasar)

• https://chakra-ui.com/ es una página de componentes para React

• La base de la reutilizacion en React , son los parametros. Estos son los props

• unavatar.io pagina para crear avatares pal perfil

• ` esta  comilla se hace con alt gr + el boton de la par

• Se pueden pasar funciones como props, osea como parametros.

• Tambien puedo pasar un elemento (como <p></p>) como parametros

• Diferencia entre componente  y elemento: un componente es una funcion que al ejecutarla te devuelve un elemento. El elemento es lo que renderiza React. (Osea el componente crea un elemento).

• Las props deben ser inmutables. La idea es no modificar la prop, si necesito un dato nuevo , directamente creo otra constante o variable.

• Siempre tener en cuenta las expresiones regulares

• Los elementos "children" , son aquellos elementos envueltos por otro. Si quiero que mi componente sea muy extensible, uso children

• State: estado del elemento. En este ejemplo , me el estado es si el usuario de la twitter card me está siguiendo o no.

• Renderizado condicional. Cuando necesitamos que dependiendo de una condicion, renderice una cosa u otra . (basicamente es un if o switch)

• Hooks: los hooks son lo que te permite añadir funcionalidades a los componentes de react.

• React es declarativo, ejemplo: "Quiero pan". En el imperativo seria: "Vistete, abre la puerta, ve por el pan"

• React detecta un cambio de estado y reacciona de acuerdo a eso.

• DOM virtual: React solo actualiza aquello que cambia, no toooooooda la pagina. En el ejemplo del usuario de twitter, solo renderiza el boton, no en tooooda la pagina.

• Cada vez que actualiza el estado de un componente , react reacciona y renderiza el componente con sus elementos hijos. Es decir, cuando cambia algo debido al estado, los cambios se propagan "hacia abajo".

• Siempre que use una prop para inicializar un estado, solo se inicializa una vez. El estado no se propaga para abajo

•

•

•