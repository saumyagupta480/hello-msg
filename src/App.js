import logo from './logo.svg';
import './App.css';

let name = "Saumya"
function App() {
  return (
    <>
      <div class="container">
        <h1>hello {name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quam,
          ratione quos error vitae enim fugiat doloribus, unde ut nemo soluta
          obcaecati nisi quasi tempore accusantium expedita itaque aliquid ab.
        </p>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </>
  );
}

export default App;
