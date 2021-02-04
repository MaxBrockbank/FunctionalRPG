//Change AND check current stats//
export const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

//Function factory, functions that affect character attributes
export const changeState = (prop) => {
  return (value) => {
    return (math) => {
      return (state) => ({
        ...state,
        [prop] : math((state[prop] || 0),  value)
      });
    };
  };
};

const add = (a, b) => a + b;
// const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
// const div = (a, b) => a / b;

const healthUp = changeState("health")(2)(mult);
const levelAdd = changeState("level")(1)(add);
const cpUp = changeState("cp")(2)(mult);
const mpUp = changeState("mp")(2)(mult);


export const knight = storeState({type:"knight", health:10, cp:10, mp:10, level:1});

export const levelUpThatKnight = function(test){
  const newHealth = healthUp(test);
  const newCp = cpUp(newHealth);
  const newMp = mpUp(newCp);
  const levelUp= levelAdd(newMp);
  return levelUp;
};

/*
function thing(...stuff) {
  stuff.forEach((a) => {
    console.log(a);
  });
}
*/
