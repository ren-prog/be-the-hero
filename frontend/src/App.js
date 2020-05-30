import React from 'react';
import './global.css'
import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}

export default App;




/*
const [counter, setCounter ] = useState(0);

  // useState retorna um array com duas posições
  // Array [valor, função de atualização do valor]
  
  function increment(){
    setCounter(counter + 1);
    console.log(counter);
  }
  return (
    <div>
      <Header>Contador: {counter} </Header>
      <button onClick={increment}>Incrementar</button>   
    </div>
  );
*/
