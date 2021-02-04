import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import HomePage from './components/HomePage';
import TestsHistory from './components/TestsHistory';
import AppContext from './context/AppContext';
import * as mockFunctions from './mockTestFunctions';

test('HomePage matches snapshot', () => {
  const allTestsRetrievedFlag = mockFunctions.allTestsRetrievedFlag;
  const getCategories = mockFunctions.getCategories;
  const setCategories = mockFunctions.setCategories;
  const setAllTestsRetrievedFlag = mockFunctions.setAllTestsRetrievedFlag;
  const { container } = render(
    <AppContext.Provider
     value={{
      allTestsRetrievedFlag,
      getCategories,
      setCategories,
      setAllTestsRetrievedFlag
    }}>
      <HomePage />
    </AppContext.Provider>);
  expect(container.firstChild).toMatchSnapshot();
})

test('TestsHistory matches snapshot', () => {
  const getUpdatedHistory = jest.fn(() => {
    return new Map([
      ['System', -1],
      ['Check system information', 5],
      ['Check system free storage', 4],
      ['Check database status', 3],
      ['Check USB ports', 2],
      //sensors
      ['Sensor', -1],
      ['Check sensor firmware', 8],
      ['Check sensor hardware', 9],
      ['Check sensor calibration', 1],
      ['Run test measurement', 2],
      ['Test sensor battery', 0],
      //specific
      ['Specific', -1],
      ['Get customer', 4],
      ['Check running services', 2],
      ['Test API', 0]
    ])
  });
  const { container } = render(
    <AppContext.Provider value={{getUpdatedHistory}}>
      <TestsHistory />
    </AppContext.Provider>);
  expect(container.firstChild).toMatchSnapshot();
})

