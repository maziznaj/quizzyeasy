
import './App.css';
import  Navbar from './components/sidebar';
import Quiz from './components/quiz';

function App() {
  return (
    <div >
      <Navbar/>
      <div className="flex items-center  justify-center min-h-screen">         
          <Quiz/>
      </div>
      
    </div>
  );
}

export default App;
