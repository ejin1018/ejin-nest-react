import { BrowserRouter } from 'react-router-dom';
import Header from './UI/Header';
import Main from './UI/Main'
import './style/style.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
