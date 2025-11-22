import "./App.css";
import Uno from "./Uno/uno";
import Dos from "./Dos/dos";

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
     </div>
   </body>
  );
}

export default App;
