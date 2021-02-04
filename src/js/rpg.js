//Change AND check current stats//
const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

//Function factory, functions that affect character attributes
const changeState = (prop) => {
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


const knight = storeState({type:"knight", health:10, cp:10, mp:10, level:1});

const levelUpThatKnight = function(test){
  const newHealth = healthUp(test);
  const newCp = cpUp(newHealth);
  const newMp = mpUp(newCp);
  const levelUp= levelAdd(newMp);
  return levelUp;
};

const canAttack = (obj) => ({
  attack:(target) => {
    target(takesDamage)
    return `The ${obj.type} attacks the ${target} with their sword.`
  }
});

const canSpecialAttack = (obj) => ({
  sAttack:(target) => {
    return `The ${obj.type} attacks the ${target} with magic.`
  }
});

const attackingCharacter = (obj) => {
  let character = {
    obj
  }
  return {...obj, ...canAttack(obj), ...canSpecialAttack(obj) };
};
knight(attackingCharacter);
console.log(knight());
console.log(knight().attack("monster"));
console.log(knight().sAttack("monster"));

/*
function thing(...stuff) {
  stuff.forEach((a) => {
    console.log(a);
  });
}
*/
