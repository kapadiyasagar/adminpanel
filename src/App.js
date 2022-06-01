import logo from './logo.svg';
import './App.css'
import MiniDrawer from './Component/Layout/Layout';
import { Route , Switch } from 'react-router-dom';
import Doctor from './Container/Doctor';
import Medicine from './Container/Medicine';


function App() {
  return (
    <MiniDrawer>
      <Switch>
        <Route exact path={"/Doctor"} component={Doctor} />,
        <Route exact path={"/Medicine"} component={Medicine} />,
      </Switch>
    </MiniDrawer>
  );
}

export default App;

