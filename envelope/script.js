
const envelope = document.getElementById("envelopeContainer");
const flap = document.getElementById("flap");
const letter = document.getElementById("letter");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const letterContent = document.getElementById("letterContent");

let noClicks = 0;

// OPEN ENVELOPE
envelope.addEventListener("click", () => {

    flap.style.transform = "rotateX(180deg)";
    
    setTimeout(() => {
        envelope.classList.add("hidden");
        letter.classList.remove("hidden");
    }, 600);
});


// NO BUTTON MOVES
noBtn.addEventListener("click", () => {

    noClicks++;

    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 100) - 50;

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;

    yesBtn.style.transform = `scale(${1 + noClicks * 0.2})`;
});


// YES CLICK
yesBtn.addEventListener("click", () => {

    letterContent.innerHTML = `
    
        <h2 class="text-center text-xl font-semibold mb-4">
            Thanks my sweetheart 💗
        </h2>

        <p class="text-center mb-4">
            I will never leave you. <br>
            I will always love you baby 🫂💗
        </p>

        <div class="flex justify-center">
            <button id="finalBtn"
                class="bg-pink-500 text-white px-6 py-2 rounded-full mt-4">
                I love you too buda 🫂💗🥹
            </button>
        </div>
    `;

    document.getElementById("finalBtn").addEventListener("click", () => {
        letterContent.innerHTML = `

            <h2 class="text-center text-3xl font-extrabold text-pink-500 drop-shadow-lg animate-pulse mb-4">
                Aww thank you 💌🫳
            </h2>

            <div class="text-center">
                <img src="image1.png" class="rounded-lg shadow-lg max-w-full" />
            </div>
        `;
    });

});