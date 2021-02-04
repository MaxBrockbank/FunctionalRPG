import $ from 'jquery';
import { levelUpThatWizard, knight, monster, attackingCharacter} from './js/rpg.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css'; 

$(document).ready(function(){
  const initialKnight = knight(attackingCharacter);
  const initialMonster = monster(attackingCharacter);
  $('.yourWizStats').html(`Knight Wizard Stats:<br>Level: ${initialKnight.level}<br>Health: ${initialKnight.health}<br>CP:${initialKnight.cp}<br>MP: ${initialKnight.mp}`);
  $('#chooseKnightWizard').click(function() {
    $('#intro').hide();
    $('#scene1').show();
  });

  $('#levelUp').click(function() {
    const newKnight= knight(levelUpThatWizard);
    $('.yourWizStats').html(`Knight Wizard Stats:<br>Level: ${newKnight.level}<br>Health: ${newKnight.health}<br>CP:${newKnight.cp}<br>MP: ${newKnight.mp}`);
    $('#nakedWizStats').html(`Naked Wizard Stats:<br>Level: ${initialMonster.level}<br>Health: ${initialMonster.health}<br>CP:${initialMonster.cp}<br>MP: ${initialMonster.mp}`);
    $('#scene1').hide();
    $('#scene2').show();
  });
  $('#squareUp').click(function() {
    const newKnight= knight(levelUpThatWizard);
    newKnight(attackingCharacter);
    // newKnight().attack(initialMonster);
    const deadWiz = newKnight().attack(initialMonster);
    $('#nakedWizStats').html(`Naked Wizard Stats:<br>Level: ${initialMonster.level}<br>Health: ${initialMonster.health}<br>CP:${initialMonster.cp}<br>MP: ${initialMonster.mp}`);
    $('#scene2').hide();
    $('#scene3').show();
  });
});