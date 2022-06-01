import logo from './logo.svg';
import './App.css'
import MiniDrawer from './Component/Layout/Layout';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Doctor from './Container/Doctor';
import Medicine from './Container/Medicine';

function App() {
  return (
    <MiniDrawer>

    
      <Switch>
        <Route exact path={"/Doctor"} Component={Doctor} />,
        <Route exact path={"/Medicine"} Component={Medicine} />,
      </Switch>
    </MiniDrawer>
  );
}

export default App;
