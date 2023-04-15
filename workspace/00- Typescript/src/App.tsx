import { Counter } from './components/Counter';
import { TimerPadre } from './components/TimerPadre';

import { Usuario } from './components/Usuario';

function App() {
  return (
    <>

      <h1 className="pt-3">React + Typescript</h1>

      <hr />

      <h2>Use State</h2>
      <Counter />
      <Usuario />

      <h2>useEffect - useRef</h2>
      <hr />

      <TimerPadre/>

    </>
  );
}

export default App;
