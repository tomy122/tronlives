const boot = document.getElementById("boot");
const content = document.getElementById("content");

const enter = document.getElementById("enter");

const login = document.getElementById("login");
const username = document.getElementById("username");

const terminalScreen =
    document.getElementById("terminal-screen");

const terminal =
    document.getElementById("terminal");

const startup =
    document.getElementById("startup");

let state = "boot";
let userID = "";

/* Pantalla inicial */

setTimeout(() => {
    boot.style.display = "none";
    content.style.display = "block";
}, 2500);

setTimeout(() => {
    enter.style.display = "block";
}, 4500);

/* Teclado */

document.addEventListener("keydown", (event) => {

    /* Entrar al sistema */

    if (
        event.key === "Enter" &&
        state === "boot"
    ) {
        state = "login";

        startup.currentTime = 0;
        startup.play();

        enter.style.display = "none";
        login.style.display = "block";

        return;
    }

    /* Confirmar usuario */

    if (
        event.key === "Enter" &&
        state === "login"
    ) {

        if (userID.length === 0) {
            return;
        }

        state = "terminal";

        login.style.display = "none";
        terminalScreen.style.display = "block";

        startTerminal();

        return;
    }

    /* Escribir usuario */

    if (state === "login") {

        if (event.key === "Backspace") {

            userID = userID.slice(0, -1);

        }
        else if (
            event.key.length === 1 &&
            userID.length < 20
        ) {

            userID +=
                event.key.toUpperCase();

        }

        username.textContent =
            "> " + userID;
    }

});

/* Terminal */

function startTerminal() {

    const text =
`ACCESS GRANTED

WELCOME TO THE GRID, ${userID}.

Greetings, user.

My name is Tomás. I was the one who had the pleasure of narrating my version of the Tron story. Not bad, right?

This project was crafted with passion and dedication; I hope the adventures of Kevin Flynn, Chrome, and—of course—Tron transported you back to a better time, while also helping you appreciate the real world you inhabit.

Throughout history, humanity has felt the need to believe in gods, ghosts, and aliens, hoping to encounter an intelligence superior to its own—all while remaining unaware that the long-awaited miracle was right in front of them.

No, it is not the programs or the artificial intelligences.

It is us.

Out of all the planets in the universe, and amidst all possible conditions, what were the odds that our planet would possess the ideal conditions for life to emerge?

We are a miracle.

Our world is a miracle.

Our lives are a miracle.

Our intellect is a miracle.

Let us not squander any of this by trying to escape into a fictional reality; instead, let us always strive to make the miracles that haven't happened yet come to pass.

That is all.

End of line.`;

    let i = 0;
    const speed = 35;

    function type() {

        if (i < text.length) {

            terminal.textContent +=
                text.charAt(i);

            i++;

            terminalScreen.scrollTop =
                terminalScreen.scrollHeight;

            setTimeout(type, speed);
        }
    }

    type();
}