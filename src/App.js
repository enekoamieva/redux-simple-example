import './App.css';
//REDUX
import { useSelector, useDispatch } from 'react-redux';

function App() {

  //Obtener todos los valores del STORE de REDUX
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  //Ejecutamos las acciones para cambiar los valores del STATE del STORE
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <p>
        <button onClick={() => dispatch({ type: 'SIGN_IN' })}>
          {isLogged ? 'LOGOUT' : 'LOGIN'}
        </button>
      </p>
    </div>
  );
}

export default App;
