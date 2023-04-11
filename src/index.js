//Business Logic

const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction = (state) => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

const stateControl = storeState({});

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};

const plant0 = storeState({ soil: 0, water: 0, light: 0 });

// const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);

// const hydrate = changeState("water")(1);
// const superWater = changeState("water")(5);

// const sunshine = changeState("light")(111);
// const plantLamp = changeState("light")(5);

//UI LOGIC
window.onload = function () {
  document.getElementById("feed").onclick = function () {
    const newState = stateControl(blueFood);
    document.getElementById("soil-value").innerText = `Soil: ${newState.soil}`;
  };

  //when the above is called it needs a slice of state : const newState = stateControl(blueFood({}));

  document.getElementById("feedPlant0").onclick = function () {
    const plant0Feed = plant0(blueFood);
    document.getElementById(
      "soil1-value"
    ).innerText = `Soil Plant Zero: ${plant0Feed.soil}`;
  };

  document.getElementById("show-state").onclick = function () {
    const currentState = stateControl();
    document.getElementById(
      "soil-value"
    ).innerText = `Soil: ${currentState.soil}`;
  };

  document.getElementById("show-state").onclick = function () {
    const currentState = { ...stateControl("soil")(4) };
    document.getElementById(
      "soil1-value"
    ).innerText = `Soil: ${currentState.soil}`;
  };
};

window.addEventListener("load", function () {
  document
    .querySelector("form")
    .addEventListener("submit");
  stateControl();
});
