const envelope = document.getElementById("envelopeContainer");
const flap = document.getElementById("flap");
const letter = document.getElementById("letter");
const letterContent = document.getElementById("letterContent");

let noClicks = 0;

// STEP 1: OPEN ENVELOPE
envelope.addEventListener("click", () => {
    flap.style.transform = "rotateX(180deg)";

    setTimeout(() => {
        envelope.classList.add("hidden");
        letter.classList.remove("hidden");

        // Step 1 content
        letterContent.innerHTML = `
            <h2 class="text-center text-xl font-semibold mb-4">Will you be my Valentine? 💗</h2>
            <div class="flex justify-center gap-4">
                <button id="yesBtn" class="bg-green-500 text-white px-6 py-2 rounded-full transition-all duration-300">Yes</button>
                <button id="noBtn" class="bg-red-500 text-white px-6 py-2 rounded-full">No</button>
            </div>
        `;

        initStep2();
    }, 600);
});

// STEP 2: NO moves / YES click
function initStep2() {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    noClicks = 0;

    noBtn.addEventListener("click", () => {
        noClicks++;
        const randomX = Math.floor(Math.random() * 200) - 100;
        const randomY = Math.floor(Math.random() * 100) - 50;

        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        yesBtn.style.transform = `scale(${1 + noClicks * 0.3})`; // grows 30% each no
    });

    yesBtn.addEventListener("click", () => {
        // Step 2 content
        letterContent.innerHTML = `
            <h2 class="text-center text-xl font-semibold mb-4 text-pink-500">
                Thank you for coming into my life 💖
            </h2>
            <p class="text-center text-gray-700 mb-4">
                You make every day brighter! 🌟
            </p>
            <div class="flex justify-center">
                <button id="finalBtn" class="bg-pink-500 text-white px-6 py-2 rounded-full mt-4 hover:bg-pink-600 transition-all duration-300">
                    I am always yours 💗🫳
                </button>
            </div>
        `;
        initStep3();
    });
}

// STEP 3: FINAL HERO IMAGE
function initStep3() {
    const finalBtn = document.getElementById("finalBtn");

    finalBtn.addEventListener("click", () => {
        letterContent.innerHTML = `
            <div class="relative">
                <img src="image3.png" class="rounded-lg shadow-lg max-w-full" />
                <h2 class="absolute top-1/3 w-full text-center text-3xl font-extrabold text-pink-500 drop-shadow-lg animate-pulse">
                    Aww Budu
                    Thank you 💌🫳
                </h2>
                <p class="absolute top-2/3 w-full text-center text-lg text-skyblue drop-shadow-md">
                    Forever and always, my Valentine! 💖
                </p>
                
                
            </div>
        `;
    });
}

