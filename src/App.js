import "./App.css";
import Uno from "./Uno/uno";
import Dos from "./Dos/dos";
import Ruleta from "./Ruleta/ruleta";
import Tiempo from "./Tiempo/tiempo";

function App() {

  return (
   <body>
     <div >
        <div className="app-header">
          <h1>
            Juegos de Dados 3D
          </h1>
        </div>

        <div className="container-uno">
          <h2>Juego de un dado</h2>
          <Uno />
        </div>

        <div className="container-dos">
          <h2>Juego de dos dados</h2>
          <Dos />
        </div>

        <div className="container_ruleta">
          <Ruleta />
        </div>
        <div className="container_tiempo">
          <Tiempo />
        </div>
     </div>
   </body>
  );
}

export default App;
