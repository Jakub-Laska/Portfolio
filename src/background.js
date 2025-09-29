import './background.css';
export function background(){
    const background = document.getElementById('background');
    background.innerHTML = ` 
  <div class="background-gradient-left"></div>
  <div class="background-gradient-bot"></div>
  <div class="background-gradient-right"></div>
  <div class="background-grain"></div>
  `;
}