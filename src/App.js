import { BrowserRouter as Router} from 'react-router-dom';
import Header from './Components/Navbar';
import FirstRoutes from './Components/FirstRoutes';

import './Css/App.css';

function App() {
  return (
    
      
      <Router>
        <Header/>
        <FirstRoutes/>
      </Router>
  );
}

export default App;
