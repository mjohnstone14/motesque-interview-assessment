import React, { useContext } from 'react';
import '../styles/App.css';
import CategoryAccordion from '../base-components/CategoryAccordion';
import AllTests from '../base-components/AllTests';
import AppContext from '../context/AppContext';
import { Typography } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Component that lists the test buttons in accordions based on category.
 * Each button is constructed to have a fetch POST onClick to the API
 */
export default function HomePage() {
  const context = useContext(AppContext);

  /**
   * Appends category accordions that map
   * respective test button components to each
   */
  const renderCategoryAccordions = () => {
    let categories = context.getCategories();
    let testAccordions = [];
    categories.forEach(async (category) => {
      context.setCategoryTests(category);
      testAccordions.push(
        <CategoryAccordion
         key={category.category}
         title={category.category}
         detail={category.description}
        />
      );
    });
    return testAccordions;
  };

  return (
    <AppContext.Consumer>
      {() => (
        <div>
          <ToastContainer 
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Typography variant='h3' className="App-title-style">
            Motesque Test Executor
          </Typography>
          {(!context.allTestsRetrievedFlag()) ?
            <AllTests 
              title="Get All Tests" 
            /> : renderCategoryAccordions()
          }
        </div>
      )}
    </AppContext.Consumer>  
  )
};