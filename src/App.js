import './App.css';
import QrCodeComponent from './components/QrCodeComponent';

import qrCodeImage from './images/image-qr-code.png';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={qrCodeImage} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <QrCodeComponent
        image={qrCodeImage}
        title="Improve your front-end skills by building projects"
        description="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
      />
    </div>
  );
}

export default App;
