import Card from "./componnets/Card";
import { data} from  './data'
import Navbar from "./componnets/Navbar";
import './App.scss' 


function App() {
  return (
    <div>
     <Navbar/>
     <Card data={data}/>
    </div>
  );
}

export default App;
