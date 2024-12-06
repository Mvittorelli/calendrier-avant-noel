const btn = document.getElementsByClassName("btn");
let n = 0;

for (let button of btn) {
    button.onclick = () => {
        n = Math.floor(Math.random() * 8);
        button.style.backgroundImage = "url('./gif/' + n + '.gif')";
    };
}