import {storeState, changeState, add} from '../src/js/rpg.js';


test('Should store key values in wizard object', () => {
    const wizard = storeState({type:"wizard", level:1, health:10, cp:0, mp:10});
    expect(wizard()).toEqual({type:"wizard", level:1, health:10, cp:0, mp:10});
})


test('Should increment a property of an object by the input value, based on the input math operator', () => {
  let wizard = storeState({type:"wizard", level:1, health:10, cp:0, mp:10});
  const mpUp = changeState("mp")(1)(add);
  expect(wizard(mpUp)).toEqual({type:"wizard", level:1, health:10, cp:0, mp:11});
})
