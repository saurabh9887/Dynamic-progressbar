const progress = document.querySelector(".progress")
const loading = document.querySelector(".loading")

let i=0;

const fakeper = [0,10,20,30,40,50,60,70,80,90,100];

const interval = setInterval(() => {
    progress.style.width = fakeper[i] + "%";
    loading.innerHTML = fakeper[i] + "%";
    i++;
    if(i==fakeper.length){
        clearInterval(interval);
        loading.innerHTML = "Completed";
    }
}, 1000);