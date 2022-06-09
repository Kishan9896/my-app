import logo from './logo.svg';
import './App.css';
import City from './container/City';
import Cityfun from './container/Cityfun';
import Famousplace from './container/Famousplace';
import Country from './container/Country';
import Time from './container/Time/Time';
import TimeFun from './container/Time/TimeFun';
import Loading from './container/Loading';
import Hoc_data from './container/Hoc_data';
import Home from './container/Home';

function App() {
  

  return (
    <div>
        {/* <Loading /> */}
        <Hoc_data />
        {/* <Home /> */}
    </div>
  );
}

export default App;
