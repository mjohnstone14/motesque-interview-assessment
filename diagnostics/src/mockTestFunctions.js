
  export const allTestsRetrievedFlag = jest.fn(() => true);
  export const setAllTestsRetrievedFlag = jest.fn();
  export const setCategories = jest.fn();
  export const getCategories = jest.fn(() => {
    return {
        "tests": [
          {
            "category": "system",
            "description": "check system",
            "tests": [
              {
                "name": "Check system information",
                "route": "/system/check-info"
              },
              {
                "name": "Check system free storage",
                "route": "/system/check-free-storage"
              },
              {
                "name": "Check database status",
                "route": "/system/check-database-status"
              },
              {
                "name": "Check USB ports",
                "route": "/system/check-usb-ports"
              }
            ]
          },
          {
            "category": "sensor",
            "description": "check sensors",
            "tests": [
              {
                "name": "Check sensor firmware",
                "route": "/sensor/firmware-matches-base-station-version"
              },
              {
                "name": "Check sensor hardware",
                "route": "/sensor/check-hardware"
              },
              {
                "name": "Check sensor calibration",
                "route": "/sensor/check-calibration"
              },
              {
                "name": "Run test measurement",
                "route": "/sensor/measurement/test"
              },
              {
                "name": "Test sensor battery",
                "route": "/sensor/battery/test"
              }
            ]
          },
          {
            "category": "specific",
            "description": "check customer",
            "tests": [
              {
                "name": "Get customer",
                "route": "/specific/customer"
              },
              {
                "name": "Check running services",
                "route": "/specific/check-running-services"
              },
              {
                "name": "Test API",
                "route": "/specific/api/test"
              }
            ]
          }
        ]
      }
  });