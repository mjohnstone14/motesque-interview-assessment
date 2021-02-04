import React, { useContext, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import AppContext from '../context/AppContext';
import { toast } from 'react-toastify';

/**
 * Component that renders a button whose onClick function retrieves
 * the diagnostic tests
 * @param {*} props props object that contains button label
 */
export default function AllTests (props) {
  const { title } = props;
  const context = useContext(AppContext);
  const [allTestsRecieved, setAllTestsRecieved] = useState(false);
  const [categories, setAllCategories] = useState([]);

  useEffect(() => {
    context.setAllTestsRetrievedFlag(allTestsRecieved);
    context.setCategories(categories)
  }, [allTestsRecieved, context, categories])

  /**
   * onClick fetch GET function that will retrieve the full JSON response
   * and set the data in the AppContext for future reference by other components.
   * Sets a flag to conditionally render the tests after they are received.
   */
  const fetchAllTests = () => {
    fetch('http://localhost:8001/api/v1/diagnostics/tests')
    .then(response => {
      if(response.status === 200) {
        return response.json();
      } else {
        fetchAllTests();
      }
    })
    .then(data => {
      setAllCategories(data.tests);
      setAllTestsRecieved(true);
      toast.success('All tests received!');
    }).catch(() => {
      toast.error('Fetching the tests failed!')
    });
  }

  return (
    <Button 
      onClick={fetchAllTests} 
      variant="contained" 
      color="primary" 
      style={{margin: '5%'}}
    >
      {title}
    </Button>
  )
};