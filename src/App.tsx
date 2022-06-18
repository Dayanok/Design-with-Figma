import './App.css';
import { Header } from "./componenets/Header";
import { Feed } from "./componenets/Feed";
import { UserProfile } from "./componenets/UserProfile";


const names = [{ name:"Taleen"},
            {name: "Eiman"},
            {name: "Nadeen"}]

function App() {
  return (
    <div className="lg:flex lg:justify-center">

<div className="grid grid-cols-1 lg:grid lg:grid-cols-2 md:bg-purple-400 md:flex md:justify-center">
    <div className="lg-col-span-1">
    <Header />
    <Feed />
  </div>
  <div className="hidden lg:inline-block lg-col-span-1">
    {names?.map((item) =>{
      return <UserProfile name={item.name} />
    })}
    
    </div>
  </div>
</div>
    
  
  );
}

export default App;
