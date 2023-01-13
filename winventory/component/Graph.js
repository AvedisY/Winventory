import React,{ useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
)

import EOQgraph from './EOQ';
import ROPgraph from './ROP';
import Table from './Table';



    const navigation = [
      { name: "EOQ", return: "<EOQgraph />", id: "present" },
      { name: "ROP", href: "<ROPgraph />", id: "present" },
      { name: "Table", href: "<Table />", id: "present" },
      { name: "ROP+SS", href: "<ROPSSgraph />", id: "changeable" },
      { name: "Table+SS", href: "<TableSS />", id: "changeable" },
    ]




export default function Graph({Present}){

  var styling = 'btn btn-outline-dark btn-lg btn-block m-3';
  function styler(id){
    if(id === 'changeable'){
      const add = Present ? '' : 'disabled';
      const classes = `btn btn-outline-dark btn-lg btn-block m-3 ${add}`;
      return classes
    }else{
      return styling;
    }
  }

  const [toggle, setToggle] = useState
  (
    <div style={{color: 'grey', width:'350px', height: '350px', position: "relative", left: "150px", textAlign: 'center' }} className = "d-flex justify-content-center align-items-center user-select-none">
      <h1>Please Click on Submit to see results</h1>
    </div>
    )

  const wantedGraph = (value) => {
    switch (value){
      case  "EOQ":
        return setToggle(<EOQgraph />);
      case  "ROP":
        return setToggle(<ROPgraph />);
      case  "Table":
       return setToggle(<Table />);
/*
      case  "ROP+SS":
        return setToggle(<ROPSSgraph />);
      case  "Table+SS":
        return setToggle(<TableSS />);
*/
    }
  }

return (
    <div style={{display:'flex', flexDirection:'column', justifyContent: 'space-between', alignItems:'space-between', height:'25rem'}}>
      <div>
        {navigation.map((item) => (
        <button type="submit"
          className={styler(item.id)}
          key={item.name}
          onClick={() => wantedGraph(item.name)}
          style={{}}
        >
          {item.name}
        </button>
      ))}
      </div>
      <div style={{ color: 'black' }}>
        {toggle}
      </div>
    </div>
  )
}