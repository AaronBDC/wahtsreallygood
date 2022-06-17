import logo from './logo.svg';
import img1 from './img/off/iono.gif';
import img2 from './img/off/rg3sf.gif';
import img3 from './img/on/dance-robert-griffin.gif';
import baylor from './img/on/baylor.gif';
import skins from './img/off/skins.gif';
//import DateTime from date;

// import img2 from './img/200.gif';
// import img3 from './img/200.gif';
// import img4 from './img/200.gif';

// import img5 from './img/200.gif';


import './App.css';
import { Offline, Online } from "react-detect-offline";

//function App() {
  //  return (
  // componentDidUpdate(){
  //   var now = new Date();
  //   //convert date to a string in UTC timezone format:
  //   console.log(now.toUTCString());
  //   //output: wed, 21 jun 2017 09:13:01 GMT 
  //   console.log('did update fired! '+ now);
  // };
  const App = () =>(
    <div>
    <Online>
    <div className="App">
      <header className="Good">
        <img src={baylor} className="App-logo" alt="loxgo" />
       <p></p>
        <img src={img3} className="Apsp-logo" alt="loxgo" />
        <p>
          Only shown when you're<code> ONLINE </code> 😎YES!.
        </p>
        <p className="Giant">😎</p>
        <a
          className="App-link"
          href="http://AaronDC.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Peep AaronDC.com
        </a>
      </header>
    </div>
    </Online>
    <Offline>
    <div className="App">
      <header className="WhatsReallyGood">
      <img src={skins} className="App-logo" alt="loxgo" />
      <p></p>

        <img src={img2} className="Appss-logo" alt="loxgo" />
        <p>
          (<p className="Giant">😡</p>suprise!)
          GAME OVER <code> Insert Coin to Continue... </code>
          You HAVE NO INTERNET!
        </p>
        <a
          className="App-link"
          href="http://netrider.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try Again
        </a>
      </header>
    </div>
    </Offline>

    </div>
  );


export default App;
