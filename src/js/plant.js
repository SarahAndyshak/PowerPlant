// // This function stores our state.
// const storeState = () => {
//   let currentState = {};
//   return (stateChangeFunction = state => state) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   };
// };

// const stateControl = storeState();

// // This is a function factory. 
// // We can easily create more specific functions that 
// // alter a plant's soil, water, and light to varying degrees.
// const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop] : (state[prop] || 0) + value
//     });
//   };
// };

// const changeStateAge = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop] : (state[prop] || 0) + value,
//     });
//   };
// };

// const changeStateString = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop] : (state[prop] || "") + value,
//     });
//   };
// };

// const plantSeed = { ...stateControl(changeStateAge("plantAge")(1)) };


// const feed = changeState("food")(1);
// const superFood = changeState("superfood")(5);

// const water = changeState("water")(1);
// const megaWater = changeState("megaWater")(5);

// // const sunLight = changeState("light")(1);
// // const growLight = changeState("light")(5);

// // plant Method Compositions
// //charm
// //sleep
// //shade
// //poke
// //dance

// window.onload = function() {

//   // This function has side effects because we are manipulating the DOM.
//   // Manipulating the DOM will always be a side effect. 
//   // Note that we only use one of our functions to alter soil. 
//   // You can easily add more.
//   document.getElementById('add-feed').onclick = function() {
//     const newState = { ...stateControl(feed) };
//     document.getElementById('food-value').innerText = `Food: ${newState.food}`;
//   };

//   document.getElementById('add-superfood').onclick = function() {
//     const newState = { ...stateControl(superFood) };
//     document.getElementById('superfood-value').innerText = `Super Food: ${newState.superfood}`;
//   };

//   document.getElementById('add-water').onclick = function() {
//     const newState = { ...stateControl(water) };
//     document.getElementById('water-value').innerText = `water: ${newState.water}`;
//   };

//   document.getElementById('add-megaWater').onclick = function() {
//     const newState = { ...stateControl(megaWater) };
//     document.getElementById('megaWater-value').innerText = `megaWater: ${newState.megaWater}`;
//   };

//   document.getElementById("create-plant").onsubmit = (e) => {
//     e.preventDefault();
//     //console.log("here");
//     let plantName = document.getElementById("plant-name").value;
//     document.getElementById("create-plant").reset();
//     const plant = { ...stateControl(changeStateString("name")(plantName))};
//     plantSeed;
//     document.getElementById("name").innerText = `Plant Name: ${plant.name} Age: ${plant.plantAge}`;
//   };

//   // This function doesn't actually do anything useful in this application 
//   // — it just demonstrates how we can "look" at the current state 
//   // (which the DOM is holding anyway). 
//   // However, students often do need the ability to see the current state 
//   // without changing it so it's included here for reference.
//   document.getElementById('show-state').onclick = function() {
//     // We just need to call stateControl() without arguments 
//     // to see our current state.
//     const currentState = stateControl();
//     document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;
//   };
// };