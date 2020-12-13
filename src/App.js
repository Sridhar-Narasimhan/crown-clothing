import './App.css';
import {Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
const Hats = ()=>
(
  <div>HATS</div>
);
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage}></Route>
      <Route exact path="/hats" component={Hats}></Route>
     {/* <Homepage></Homepage> */}
    </div>
  );
}

export default App;
