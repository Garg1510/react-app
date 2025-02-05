// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
// import {Main} from "./Components/Header";

// we can't give js inside the return function. if you want togive use {}. can't defined variable inside return
// const a = 23;
// function Mycomponent(props){
//   const b = 30;
//   return (<>
//   <div className = {props.nameforclass}>
//     {props.name}: 300
//      <Header/>
//      {/* {a}
//     {b}  */}

//     </div>
//     <hr/>
//     </>);
// }

function App() {
//   return (<div id="k">
//     hello <Mycomponent name ={"abhi"} nameforclass ="div1"/>
//      <Mycomponent name ={"kashish"} nameforclass ="div2"/> 
//      world
//     <button>click</button>
//     </div>
// );

return (<div>
  <Header/>
  <Home/>
</div>
);
}
export default App;
