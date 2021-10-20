
import "./styles/style.scss";
import "./App.css";
import Banner from './Banner';
import Foot from './Foot';
import CreateUser from './CreateUser';
import QuienesSomos from './QuienesSomos';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Puente from "./Puente";




const App = () => (
  
<>
<Router> 
  <Banner/>
 
    <Switch>
    <Route path="/" exact component={Puente}/> 
    <Route path="/CreateUser" exact component={CreateUser}/> 
    <Route path="/QuienesSomos" exact component={QuienesSomos}/> 
    <Route component={() => (
      <div className="ed-grid">
      <h1>Error 404</h1>
      <span>Web Page Not Found!!</span>
      </div>
    )}/>
    
    </Switch>

   <Foot/>
</Router> 
</>
)


export default App;










