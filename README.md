# Frontend Developer Home Assignment

You are tasked to create a user interface for a diagnostics app.

>The application fetches a collection of tests from the backend and performs calls to the backend API to execute the individual tests.
>
A sample JSON output for the test collection is presented below.

    {
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

Each individual API test call JSON responses are

    {
      "result": "SUCCESS"
    }

or

    {
      "result": "FAILURE"
    }

**Please create a UI in React that runs and displays the tests.**

The UI should have two pages:

1. The main page with the list of tests
2. A page with the history of test runs

#### Additional requirements:

* React version 16.8^
* Hooks should be used where suitable
* You should use a mockserver to run the API 
* A CSS framework of your choice may be used to style the components
* The application should be containerized using Docker 

