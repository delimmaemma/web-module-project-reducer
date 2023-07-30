# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The app picks up the onClick function and calls the event handler connected to that button. This event handler is defined in App.js.
* The event handler calls dispatch() and passes it the addOne action creator in ./actions/index.js
* The addOne action creator returns an action object with type: 'ADD_ONE'
* The reducer receives that action and executes the 'ADD_ONE' case statement. It returns a new state object with total incremented by 1.
* TotalDisplay shows the total plus 1.
