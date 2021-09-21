import React from "react";
import Map from './components/Map'
import './App.css';
import PaginationTableComponent from './components/Pagination.table'

export default function App() {
  const [markers, setMarkers] = React.useState([]);
  console.log(markers)
  return (
    <>
      <div className="google_map">
        <Map
          markers={markers}
          setMarkers={setMarkers}
        />
      </div>

      <PaginationTableComponent 
        data={markers}
      />
    </>
  )
  

}
