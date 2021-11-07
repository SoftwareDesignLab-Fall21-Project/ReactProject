import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from "./components/navBar";
import Landing from "./pages/Landing";
import DatasetPage from "./pages/DatasetPage";
import HardwarePage from './pages/HardwarePage';


function App() {
  return (
        <>
            <Router>
                <NavBar/>
                <div id="page-container">

                </div>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/datasets" exact component={DatasetPage}/>
                    <Route path="/hardware" exact component={HardwarePage}/>
                </Switch>
                
            </Router>

        </>
  );
}

export default App;
