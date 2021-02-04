import React, { useContext } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AppContext from '../context/AppContext';
import { toast } from 'react-toastify';
import '../styles/App.css';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Function Component to build the accordion for each test category and render its test buttons
 */
export default function CategoryAccordion(props) {
  const context = useContext(AppContext);
  const { title, detail } = props;
  const tests = context.getCategoryTests(title);

  /**
   * Fetch POST call to initiate the running of specified test and route,
   * will trigger a success toast that will come on screen if successfull
   * @param {String} name name of test
   * @param {String} route API route of test
   */
  const testCall = (name, route) => {
    fetch('http://localhost:8001/api/v1/diagnostics' + route, {
      method: 'post'
    }).then((response) => {
      console.log(response.status);
      if(response.status === 200) {
        context.updateHistory(name);
        toast(name + " passed!", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error("An issue occured running the test: " + name);
      }
    });
  }
  
  /**
   * Function that renders and returns a list of styled buttons with
   * differing names and onClick fetch POST functions
   */
  const renderTestButtons = () => {
    const testButtonList = [];
    tests.forEach((test) => {
      testButtonList.push(
        <Button
          variant='outlined'
          style={{display: 'flex', flexDirection: 'column', margin: '2%'}}
          onClick={() => testCall(test.name, test.route)}
          key={test.name}
        >
          {test.name}
        </Button>
      )
    });
    return (
      <div style={{display: 'inline-block'}}>
        {testButtonList}
      </div>
    )
  }

  return (
      <Accordion key={title} style={{borderRadius: '25px', margin: '1.5%'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{
            display: 'flex',
            textTransform: 'capitalize',
            fontWeight: 'bold',
            marginRight: '0.5%'
          }}>
            Test Category:
          </Typography>
          <Typography style={{
            display: 'flex',
            textTransform: 'capitalize',
            color:'#ff6a00',
            fontWeight: 'bold'
          }}>
              {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: 'flex', flexDirection: 'column'}}>
          <Typography style={{
            textTransform: 'capitalize', 
            fontStyle: 'italic', 
            whiteSpace: 'break-spaces'}}>
            Description: {detail}
          </Typography>
          {renderTestButtons()}
        </AccordionDetails>
      </Accordion>
  )
};