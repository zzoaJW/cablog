import logo from './logo.svg';
import './App.css';

function App() {

  let post = '강남 우동 맛집'

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그임</h4>
      </div>
        <h4>{post}</h4>
    </div>
  );
}

export default App;
