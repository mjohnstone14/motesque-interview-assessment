import React, { useState } from 'react';
import AppContext from './AppContext';

export default function AppProvider({children}) {
  let testHistoryMap = new Map([
    ['System', -1],
    ['Check system information', 0],
    ['Check system free storage', 0],
    ['Check database status', 0],
    ['Check USB ports', 0],
    //sensors
    ['Sensor', -1],
    ['Check sensor firmware', 0],
    ['Check sensor hardware', 0],
    ['Check sensor calibration', 0],
    ['Run test measurement', 0],
    ['Test sensor battery', 0],
    //specific
    ['Specific', -1],
    ['Get customer', 0],
    ['Check running services', 0],
    ['Test API', 0]
  ])
  const [allTestsRetrievedFlag, setAllTestsRetrievedFlag] = useState(false);
  const [categories, setCategories] = useState([]);
  const [systemTests, setSystemTests] = useState([]);
  const [sensorTests, setSensorTests] = useState([]);
  const [specificTests, setSpecificTests] = useState([]);
  const [updatedHistory, setUpdatedHistory] = useState(testHistoryMap);

  return (
    <AppContext.Provider
      value={{
        allTestsRetrievedFlag: () => allTestsRetrievedFlag,
        setAllTestsRetrievedFlag: (input) => {
          setAllTestsRetrievedFlag(input);
        },
        setCategories: (categoryList) => {
          setCategories(categoryList);
        },
        getCategories: () => categories,
        setCategoryTests: (categoryObject) => {
          if (categoryObject.category === 'system') {
            setSystemTests(categoryObject.tests);
          } else if (categoryObject.category === 'sensor') {
            setSensorTests(categoryObject.tests);
          } else {
            setSpecificTests(categoryObject.tests);
          }
        },
        getCategoryTests: (category) => {
          if (category === 'system') {
            return systemTests;
          } else if (category === 'sensor') {
            return sensorTests;
          } else {
            return specificTests;
          }
        },
        updateHistory: (name) => {
          let testHistoryMap = updatedHistory;
          let val = testHistoryMap.get(name);
          val +=1;
          testHistoryMap.set(name, val);
          console.log(testHistoryMap);
          setUpdatedHistory(testHistoryMap);
        },
        getUpdatedHistory: () => updatedHistory
      }}
    >
      {children}
    </AppContext.Provider>
  )
}