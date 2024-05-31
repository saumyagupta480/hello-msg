import logo from './logo.svg';
import './App.css';

let name = "Saumya"
function App() {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">About Us</a></li>
            <li class="nav-item"><a class="nav-link disabled" href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
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
