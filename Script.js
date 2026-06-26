const screens = [
    "loading",
    "surprise",
    "message",
    "voucher",
    "promise",
    "proposal",
    "kiss"
];

function showScreen(id) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("visible");
    });

    document.getElementById(id).classList.add("visible");
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadingAnimation(){

    const bar = document.getElementById("bar");
    const percent = document.getElementById("percent");

    const messages = [
        "Recordando 10 años de aventuras...",
        "Calculando la cantidad de te quiero...",
        "Buscando a la mujer de mi vida...",
        "Encontrada ❤️",
        "Preparando la gran pregunta..."
    ];

    let value = 0;

    for(let i=0;i<100;i++){

        value++;

        bar.style.width = value + "%";
        percent.innerHTML = value + "%";

        if(value===15) percent.innerHTML = messages[0];
        if(value===35) percent.innerHTML = messages[1];
        if(value===60) percent.innerHTML = messages[2];
        if(value===82) percent.innerHTML = messages[3];
        if(value===95) percent.innerHTML = messages[4];

        await sleep(45);

    }

    await sleep(1200);

}

async function typeProposal(){

    const text="¿Y si nos casamos? ❤️";

    const el=document.getElementById("typing");

    el.innerHTML="";

    if(navigator.vibrate){
        navigator.vibrate(200);
    }

    for(let letter of text){

        el.innerHTML += letter;

        await sleep(90);

    }

}

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=Math.random()>0.5?"❤️":"🤍";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(5+Math.random()*4)+"s";

    heart.style.fontSize=(16+Math.random()*18)+"px";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);

}

function rainHearts(){

    setInterval(createHeart,350);

}

async function start(){

    showScreen("loading");

    await loadingAnimation();

    showScreen("surprise");

    await sleep(2500);

    showScreen("message");

    await sleep(4500);

    showScreen("voucher");

    await sleep(5000);

    showScreen("promise");

    await sleep(5500);

    showScreen("proposal");

    await typeProposal();

    rainHearts();

    await sleep(2200);

    showScreen("kiss");

}

window.onload=start;
