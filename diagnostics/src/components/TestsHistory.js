import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Typography } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Paper from '@material-ui/core/Paper';
import '../styles/App.css';

export default function TestsHistory() {
  const context = useContext(AppContext);

  /**
   * Iterates over the map of results and pushes styled elements
   * to a list of elements to be displayed within an accordion.
   * The map contains a k,v pair of (category, -1) to help organize
   * the elements under their respective category title
   */
  const renderHistory = () => {
    const historyElements = [];
    let historyMap = context.getUpdatedHistory();
    // print history map
    console.log(historyMap);
    // iterate over key value pairs and determine category
    historyMap.forEach((value, key) => {
      if (key === 'System' || key === 'Sensor' || key === 'Specific') {
        historyElements.push(
          <Typography
            key={'title' + key}
            style={{display: 'flex', marginLeft: '2%', fontStyle:'italic'}} 
            variant='h6'>Number of {key} Test Runs
          </Typography>
        )
      } else {
        historyElements.push(
          <Paper key={key} className="PaperTestResultStyle">
            <Typography key={'listItem' + key} style={{
              display:'flex',
              marginRight: '1%', 
            }}>
                {key}:
            </Typography>
            <Typography key={'listItem' + value} style={{
              display: 'flex',
              textTransform: 'capitalize',
              color:'#ff6a00',
              fontWeight: 'bold'}}>
                {value}
            </Typography>
          </Paper>
        )
      }
    });
    return historyElements;
  }
  
  return (
    <AppContext.Consumer>
      {() => (
        <div>
          <Typography
            key='historyHeader'
            className="App-title-style"
            variant='h4' 
            style={{marginBottom: '0.8%'}}
          >
            Test History
          </Typography>
          <Accordion key='testHistoryAccordion' style={{borderRadius: '25px'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{fontWeight: 'bold', textTransform: 'capitalize'}}
            >
              View all tests passed
            </AccordionSummary>
            {renderHistory()}
          </Accordion>
        </div>
      )}
    </AppContext.Consumer>  
  )
};