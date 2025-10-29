import "./welcomePage.css";

export function initWelcomePage(){
    const welcomePage = document.querySelector('#welcomePage');
    welcomePage.innerHTML = `

    <div>
        <h1>welcome, glad to have you <span class="underscore">here.</span></h1>
        <p>let me introduce myself - i'm jakub laska, an aspiring web developer.</p>
        <p><span class="pixel">'pixel perfect'</span> is my motto, <span class="joke">which i happen to ignore.</span></p><br>
        <p class="anyway">anyway... let me show you around.</p>
    </div>

    `
    const joke = document.querySelector('.joke');
    joke.classList.add('jokeAnimation');
    const anyway = document.querySelector('.anyway');
    anyway.classList.add('anywayAnimation');

animateJoke();
animateAnyway();
}
    // typing animations
function animateJoke() {
    const joke = document.querySelector('.joke');
  setTimeout(() => {
    joke.style.opacity = '1';
    const words = [
      "which i happen to ignore...",
    ];
    let i = 0; // word index
    let j = 0; // letter index
    function type() {
      const currentWord = words[i];
        joke.textContent = currentWord.slice(0, j++);
        if (j <= currentWord.length) {
          setTimeout(type, 150); // type speed
        }
    }

    type();
  }, 5000); 
}

function animateAnyway() {
    const anyway = document.querySelector('.anyway');
    const pixel = document.querySelector('.pixel');
  setTimeout(() => {
    anyway.style.opacity = '1';
    const words = [
      "anyway... let me show you around.",
    ];
    let i = 0; // word index
    let j = 0; // letter index
    function type() {
      const currentWord = words[i];
        anyway.textContent = currentWord.slice(0, j++);
        if (j <= currentWord.length) {
          setTimeout(type, 150); // type speed
        }
    }
    pixel.style.textDecoration = 'line-through';
    type();
  }, 10000); 
}