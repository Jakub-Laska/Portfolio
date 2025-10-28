import "./welcomePage.css";

export function initWelcomePage(){
    const welcomePage = document.querySelector('#welcomePage');
    welcomePage.innerHTML = `

    <div>
        <h1>welcome, glad to have you <span class="underscore">here.</span></h1>
        <p>let me introduce myself - i'm jakub laska, an aspiring web developer.</p>
        <p>'pixel perfect' is my motto, <span class="joke">which i happen to ignore.</span></p><br>
        <p class="anyway">anyway... let me show you around.</p>
    </div>

    `
    const joke = document.querySelector('.joke');
    joke.classList.add('jokeAnimation');
    const anyway = document.querySelector('.anyway');
    anyway.classList.add('anywayAnimation');
}