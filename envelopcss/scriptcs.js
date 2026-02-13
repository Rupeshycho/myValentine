const envelope = document.getElementById("envelope");
const flap = document.getElementById("flap");
const paper = document.getElementById("paper");

envelope.addEventListener("click", () => {

    // 1️⃣ open flap
    flap.classList.add("open");

    // 2️⃣ close flap back after 1s
    setTimeout(() => {
        flap.classList.remove("open");
    }, 1000);

    // 3️⃣ shift envelope slightly down
    setTimeout(() => {
        envelope.classList.add("shift");
    }, 900);

    // 4️⃣ show paper rising above envelope
    setTimeout(() => {
        paper.classList.add("show");
    }, 1100);

});
