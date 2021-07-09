import './App.css';
import Countdown from 'react-countdown';
import ManiacDino from '../src/ManiacIcon.jpg'


const Completionist = () => <span>Servers are open - you can login now!</span>;

function App() {
  return (



    <div className="App">

      <img src={ManiacDino} alt="" />

      <h1>Get ready for season 7!</h1> <br /><br />

      <span id="redtext">
        <h2>Servers will open in:</h2>

        <h1>

          <Countdown date='2021-07-09T20:00:00'>
            <Completionist />
          </Countdown>



        </h1>

      </span>


    </div>
  );
}

export default App;
