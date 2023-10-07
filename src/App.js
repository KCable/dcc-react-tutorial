import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTacker/EntriesChartTracker';
import './App.css';



function App() {

  const [entries, setEntries] = useState([{weight: 175, date: "8-23-2023"}, {weight: 176, date: "8-24-2023"}])
  
  function addNewEntry(entry){
    
    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h3 style={{margin: '1em'}}>Weight
        <small className= 'text-muted'>Tracker</small></h3>
        <div className='col-md-6'>
          <div className='border-box'>
            <DisplayEntries parentEntries={entries} />
          </div>
          <div className='border-box'>
            <AddEntryForm addNewEntryProperty={addNewEntry} />
          </div>
        </div>
        <div className='col-md-6'>
        <div className='border-box'>
          <EntriesChartTracker parentEntries={entries} />
          </div>
        </div>
      </div>
    </div>


  );
}

export default App;
