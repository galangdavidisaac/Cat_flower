window.onload = () => {

    /* =================================
       LOADER
       ================================= */

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

        if (
            shownIndex < messages.length - 1 &&
            percent >= messages[shownIndex + 1].at
        ) {
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


    /* =================================
       CAT + BOUQUET
       ================================= */

    const catBox = document.getElementById("cat-box");
    const bouquet = document.getElementById("bouquet");
    const catPrompt = document.querySelector(".cat-prompt");
    const bouquetMessage = document.getElementById("bouquet-message");
    const catDanceGif = document.getElementById("cat-dance-gif");

    if (catBox) {

        catBox.addEventListener("click", () => {

            console.log("CAT CLICKED!");

            catBox.style.pointerEvents = "none";

            catBox.classList.add("cat-surprise");

            catPrompt.classList.add("hide");

            setTimeout(() => {

                bouquet.classList.add("show");

            }, 600);

            setTimeout(() => {
            
                bouquetMessage.classList.add("show");
            
            }, 1500);

            setTimeout(() => {
            
                // Fade out the original cat + box
                catBox.classList.add("scene-fade-out");
            
                // Fade out the bouquet
                bouquet.classList.add("scene-fade-out");
            
                // Fade out the message
                bouquetMessage.classList.add("fade-out");
            
                // Bring in the dancing cat GIF
                catDanceGif.classList.add("show");
            
            }, 5000);
            
        });
    }


    /* =================================
       FLOWER INTERACTION
       ================================= */
    const flowers = document.querySelectorAll(".flower");

    flowers.forEach((flower) => {
        flower.addEventListener("click", () => {
            flower.classList.toggle("selected");

        });
    });
};
