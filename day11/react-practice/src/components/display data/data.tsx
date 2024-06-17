// import { useState,useReducer } from "react";
// const reducer=(state: any,action:any)=>{
// switch (action.type){
//   case "increment":
//     return {count:state.count+1}
//   default:
//   return state
// }
// }
// const Datahandler=()=>{
// // const [count,setcount]=useState(0)
// const [state,dispatch]=useReducer(reducer,{count:0})
//     return (
//   <>
// <h1>{state.count}</h1>
// <button onClick={
//   ()=>{
//    dispatch({type:"increment"})
//   }
// }>
//   Increase count
// </button>
//   </>
//     );
// }
// export default Datahandler

import { useRef } from "react";

const Datahandler=()=>{
const inputRef=useRef(null);
const onClick=()=>{

}
    return (
  <>
<h1>rahul </h1>
<input type="text" placeholder="ex...." ref={inputRef}/>
<button onClick={onClick}>
  change name
</button>
  </>
    );
}
export default Datahandler


