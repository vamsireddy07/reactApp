import logo from './logo.svg';
import './App.css';
import StateTutorial from './UseState/StateTutorial';
import ReducerTutorial from './ReduceState/ReducerTutorial';
import EffectTutorial from './UseEffect/EffectTutorial';

function App() {
  return (
    <>
    < ReducerTutorial/>
    <  StateTutorial />
    < EffectTutorial/>
    </>
  );
}

export default App;
