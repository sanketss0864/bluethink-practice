import { useEffect, useState } from "react";

function Datafetch(){

    const [userdata,setuserdata]=useState([])
    const [query,setquery]=useState("")
async function fetchdata(){

let respone=await fetch("https://data.abudhabi/opendata/apis/search_main.php?fulltext=hotel&page=1&page-size=10&sort-order=desc&sort=modified&")
let result= await respone.json();
console.log(result.data)
setuserdata(result.data)

}
    useEffect(
()=>{
fetchdata()
},[]
    )

    let userlog=userdata.map(
(item,index)=>{
    const identifier=item.identifier
     const title=item.title
      const titlear=item.titlear
       const description=item.description
if(query){
if(identifier.toLowerCase().includes(query.toLowerCase())||title.toLowerCase().includes(query.toLowerCase())||titlear.toLowerCase().includes(query.toLowerCase())|| description.toLowerCase().includes(query.toLowerCase())){
    return(
        <tr key={index}>
            <td>  {  identifier  }</td>
            <td> {  title  }</td>
            <td> {  titlear  }</td>
            <td> {  description  }</td>
      
        </tr>
    )
}
}
else
{
    return(
        <tr key={index}>
            <td>  {    item.identifier}</td>
            <td> {    item.title}</td>
            <td> {    item.titlear}</td>
            <td> {    item.description}</td>
      
        </tr>
    )
}
}
)
function valueinputter(e){
    setquery(e.target.value)
    console.log(query)
}

    return (
<>
<input type="text" name="" id="" onChange={valueinputter} />
<table border={1}>
    <thead>
        <th>Identifier</th>
        <th>title</th>
        <th>titlear</th>
        <th>Description</th>
    </thead>
{userlog}
</table>

</>
    )
}
export default Datafetch;