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
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
// const div = (a, b) => a / b;

const healthUp = changeState("health")(2)(mult);
const levelAdd = changeState("level")(1)(add);
const cpUp = changeState("cp")(2)(mult);
const mpUp = changeState("mp")(2)(mult);
// const takesMagicDamage = changeState("health")(obj.mp)(sub);
// const takesPhysDamage = changeState("health")(obj.mp)(sub);


export const knight = storeState({type:"knightWizard", health:10, cp:10, mp:10, level:1});
export const monster = storeState({type:"monsterWizard", health:5, cp:5, mp:5, level:1});

export const levelUpThatWizard = function(test){
  const newHealth = healthUp(test);
  const newCp = cpUp(newHealth);
  const newMp = mpUp(newCp);
  const levelUp= levelAdd(newMp);
  return levelUp;
};

const canAttack = (obj) => ({
  attack:(target) => {
    const takesPhysDamage = changeState("health")(obj.cp)(sub);
    target(takesPhysDamage);
    // return `The ${obj.type} attacks the ${target().type} with their wand.`;
    return target;
  }
});

const canSpecialAttack = (obj) => ({
  sAttack:(target) => {
    const takesMagicDamage = changeState("health")(obj.mp)(sub);
    target(takesMagicDamage);
    return `The ${obj.type} attacks the ${target().type} with magic.`;
  }
});

export const attackingCharacter = (obj) => {
  return {...obj, ...canAttack(obj), ...canSpecialAttack(obj) };
};

knight(attackingCharacter);
// monster(attackingCharacter);
// console.log(knight());
// console.log(monster());
// console.log(knight().attack(monster));
// console.log(knight().sAttack(monster));
// console.log(monster().sAttack(knight));
// console.log(monster());
// console.log(knight());
/*
function thing(...stuff) {
  stuff.forEach((a) => {
    console.log(a);
  });
}
*/
