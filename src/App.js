import './App.css';
import Countdown from 'react-countdown';


const Completionist = () => <span>Servers are open - you can login now!</span>;

function App() {
  return (

    

    <div className="App">
      


    <h1>Counter for Maniac</h1>

    <h1>
      
    <Countdown date='2021-07-09T19:00:00'>
      <Completionist />
    </Countdown>

      
      
      </h1>


    </div>
  );
}

export default App;
