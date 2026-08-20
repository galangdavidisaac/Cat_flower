window.onload = () => {
    const loader = document.getElementById("loader");
    const bar = document.getElementById("loader-bar-fill");
    const percentText = document.getElementById("loader-percent");
    const subtitle = document.getElementById("loader-subtitle");

    const duration = 2200;

    const messages = [
        { at: 0, text: "gathering every petal..." },
        { at: 35, text: "planting something sweet..." },
        { at: 70, text: "almost ready to bloom..." },
    ];

    let start = null;
    let shownIndex = 0;

    function fillBar(timestamp) {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const percent = Math.min((elapsed / duration) * 100, 100);

        bar.style.width = percent + "%";
        percentText.textContent = Math.floor(percent) + "%";

        if (shownIndex < messages.length - 1 && percent >= messages[shownIndex + 1].at) {
            shownIndex++;
            subtitle.textContent = messages[shownIndex].text;
        }

        if (percent < 100) {
            requestAnimationFrame(fillBar);
        } else {
            finishLoading();
        }
    }

    function finishLoading() {
        loader.classList.add("hide");
        setTimeout(() => {
            document.body.classList.remove("container");
        }, 800);
    }

    requestAnimationFrame(fillBar);
};

/* start click catbox*/
const startScreen = document.getElementById("start-screen");
const catBox = document.getElementById("cat-box");

catBox.addEventListener("click", () => {

    startScreen.classList.add("fade-out");

    setTimeout(() => {
        startScreen.remove();
    }, 1000);

});

/* flower hover*/

const flowers = document.querySelectorAll(".flower");

flowers.forEach((flower) => {
    flower.addEventListener("click", () => {
        flower.classList.toggle("selected");
    });
});
