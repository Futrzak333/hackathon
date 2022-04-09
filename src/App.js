
import Home from './pages' ;
import SigninPage from './pages/signin';
import QRCODE from './qrc/qrcode';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

return(
    <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signin' component={SigninPage} exact />
          <Route path='/qrcode' component={QRCODE} exact />
        </Switch>
    </Router>
);
} //aaa

export default App;