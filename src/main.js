import $ from 'jquery';
import { levelUpThatKnight, knight} from './js/rpg.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css'; 

$(document).ready(function(){
  const initialKnight = knight();
  $('#testTextField').html(`Knight Stats:<br>Level: ${initialKnight.level}<br>Health: ${initialKnight.health}<br>CP:${initialKnight.cp}<br>MP: ${initialKnight.mp}`);
  $('#levelUp').click(function() {
    const newKnight= knight(levelUpThatKnight);
    $('#testTextField').html(`Knight Stats:<br>Level: ${newKnight.level}<br>Health: ${newKnight.health}<br>CP:${newKnight.cp}<br>MP: ${newKnight.mp}`);
  });
});