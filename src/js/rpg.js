// creates a character, composition?

//Change AND check current stats//
const storeState = (initialState) => {
  let currentState = initialState;
    return (stateChangeFunction = state => state) => {
      const newState = stateChangeFunction(currentState);
      currentState = {...newState};
      return newState;
    }
  }
  // JUST change stats//
  // const storeState = (initialState) => {
  //   let currentState = initialState;
  //   return (stateChangeFunction) => {
  //     const newState = stateChangeFunction(currentState);
  //     currentState = {...newState};
  //     return newState;
  //   }
  // }
//Function factory, functions that affect character attributes
const changeState = (prop) => {
  return (value) => {
    return (math) => {
        return (state) => ({
            ...state,
            [prop] : math((state[prop] || 0),  value)
        })
    }
  }
}

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

const healthUp = changeState("health")(1.2)(mult)
const levelAdd = changeState("level")(1)(add)
const cpUp = changeState("cp")(1.2)(mult)
const mpUp = changeState("mp")(1.2)(mult)

const levelUp3 = (health) => {
  health()
  return (level)=> {
    level()
    return(cp)=> {
      cp()
      return(mp) => {
        mp()
        return;
      }
    }
  }
}


const knight = storeState({type:"knight", level:1, health:10, CP: 10, MP: 0})
const wizardUp = levelUp3(healthUp)(levelAdd)(cpUp)(mpUp)
console.log(knight(wizardUp));
// const levelUp = changeState("health", mult)(1.5);
// const wizardInitalState = {type:wizard, heatlh:10, CP: 0, MP: 10}
// changeState("health")(10)
// const wizard = storeState(wizardInitalState)
// const princess = storeState();
// console.log(knight(levelUp));
// console.log("this is princess" + princess());
// const levelUp = function(name) {
//   let state = {
//     name
//   }

//   return { ...state, ...healthUp(state), ...cpUp(state), ...mpUp(state), ...levelAdd(state) };
// }


