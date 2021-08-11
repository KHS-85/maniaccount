import './App.css';
import Countdown from 'react-countdown';
import ManiacDino from '../src/ManiacIcon.jpg'


const Completionist = () => <span>Servers are open - you can login now!</span>;

function App() {
  return (



    <div className="App">

      <img src={ManiacDino} alt="" />

      <h1>Get ready for season 8!</h1> <br /><br />

      <span id="redtext">
        <h2>Servers will open in:</h2>

        <h1>

          <Countdown date='Aug 13 2021 19:00:00 GMT+0100'>
            <Completionist />
          </Countdown>





        </h1>




      </span>

      <footer>
        <div className="trent">
          <h6>Made with
            <span className="heart"> &#9829; </span>
            by Trent Steel</h6>
        </div>
      </footer>


    </div>
  );
}

export default App;
