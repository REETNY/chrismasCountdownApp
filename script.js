let anyYear = new Date().getFullYear();
let chrismasDate = `25 Dec ${anyYear}`

console.log(anyYear)

let checkDate = new Date().getDate();
let checkMonth = new Date().getUTCMonth() + 1;

if(checkDate === 25 && checkMonth === 12){
    itsChrismas();
};

if(checkDate === 26 && checkMonth === 12){
    anyYear += 1;
    countdown();
}

const dayEl = document.querySelector(".dayEl");
const hourEl = document.querySelector(".hourEl");
const minEl = document.querySelector(".minEl");
const secEl = document.querySelector(".secEl");

const dayLet = document.querySelector(".days");
const hourLet = document.querySelector(".hours");
const minLet = document.querySelector(".mins");
const secLet = document.querySelector(".secs");




function countdown() {

    let newchrismasday = new Date(chrismasDate).getTime();
    let currentDate = new Date().getTime();

    let totalSeconds = (newchrismasday - currentDate) / 1000;

    let days = Math.floor(totalSeconds / 3600/ 24);
    let hours = Math.floor(totalSeconds / 3600) % 24;
    let mins = Math.floor(totalSeconds / 60) % 60;
    let secs = Math.floor(totalSeconds % 60)

    dayEl.textContent = days;
    hourEl.textContent = formatTime(hours);
    minEl.textContent = formatTime(mins);
    secEl.textContent = formatTime(secs);

    days <= 1 ? dayLet.innerText = `Day` : dayLet.innerText = `Days`;
    hours <= 1 ? hourLet.innerText = `Hour` : hourLet.innerText = `Hours`;
    mins <= 1 ? minLet.innerText = `Minute` : minLet.innerText = `Minutes`;
    secs <= 1 ? secLet.innerText = `Second` : secLet.innerText = `Seconds`;

}

countdown(); // initial call

setInterval(countdown, 1000);



function formatTime(data) {
    return data < 10 ? `0${data}` : `${data}`;
}



function itsChrismas(){
    const body = document.body;
    body.innerHTML = "";

    let color = ['#C30F16', "#599C5D", "#F1D900", "2A8FBD", "#ffffff", "#d56c2b", "#663398", "#C1A520"];

    function randomNum1(){
        return Math.floor(Math.random() * color.length);
    }

    function randomNum2(){
        return Math.floor(Math.random() * color.length);
    }

    function randomNum3(){
        return Math.floor(Math.random() * color.length);
    }

    function randomNum4(){
        return Math.floor(Math.random() * color.length);
    }

    function randomNum5(){
        return Math.floor(Math.random() * color.length);
    }

    function randomNum6(){
        return Math.floor(Math.random() * color.length);
    }

    const image = document.createElement("img");
    image.src = "/img/pic.jpg";
    image.setAttribute("class", "full-img");

    const div = document.createElement("div");
    div.classList.add("chrismas-cont");

    const heading = document.createElement("h2");
    heading.classList.add("merry");
    heading.textContent = `Merry Chrismas`;

    div.appendChild(heading);

    body.appendChild(image);
    body.appendChild(div);


    const chrisLightCont = document.createElement("div");
    chrisLightCont.classList.add("light-cont");

    const span1 = document.createElement("span");
    const span2 = document.createElement("span");

    span1.classList.add("span_1");
    span2.classList.add("span_2");

    const bulb_1 = document.createElement("div");
    const bulb_2 = document.createElement("div");
    const bulb_3 = document.createElement("div");
    const bulb_4 = document.createElement("div");
    const bulb_5 = document.createElement("div");
    const bulb_6 = document.createElement("div");
    const bulb_7 = document.createElement("div");
    const bulb_8 = document.createElement("div");
    const bulb_9 = document.createElement("div");
    const bulb_10 = document.createElement("div");
    const bulb_11 = document.createElement("div");
    const bulb_12 = document.createElement("div");
    const bulb_13 = document.createElement("div");
    const bulb_14 = document.createElement("div");
    const bulb_15 = document.createElement("div");
    const bulb_16 = document.createElement("div");

    bulb_1.classList.add("bulb");
    bulb_2.classList.add("bulb");
    bulb_3.classList.add("bulb");
    bulb_4.classList.add("bulb");
    bulb_5.classList.add("bulb");
    bulb_6.classList.add("bulb");
    bulb_7.classList.add("bulb");
    bulb_8.classList.add("bulb");
    bulb_9.classList.add("bulb");
    bulb_10.classList.add("bulb");
    bulb_11.classList.add("bulb");
    bulb_12.classList.add("bulb");
    bulb_13.classList.add("bulb");
    bulb_14.classList.add("bulb"); 
    bulb_15.classList.add("bulb");
    bulb_16.classList.add("bulb");

    bulb_1.classList.add("bulb-1");
    bulb_2.classList.add("bulb-2")
    bulb_3.classList.add("bulb-3")
    bulb_4.classList.add("bulb-4")
    bulb_5.classList.add("bulb-5")
    bulb_6.classList.add("bulb-6")
    bulb_7.classList.add("bulb-7")
    bulb_8.classList.add("bulb-8");
    bulb_9.classList.add("bulb-9");
    bulb_10.classList.add("bulb-10")
    bulb_11.classList.add("bulb-11")
    bulb_12.classList.add("bulb-12")
    bulb_13.classList.add("bulb-13")
    bulb_14.classList.add("bulb-14")
    bulb_15.classList.add("bulb-15")
    bulb_16.classList.add("bulb-16")



    function setLight(){
        bulb_1.style.background = color[randomNum1()];
        bulb_2.style.background = color[randomNum5() + 1];
        bulb_3.style.background = color[randomNum3()];
        bulb_4.style.background = color[randomNum2()];
        bulb_5.style.background = color[randomNum6() + 1];
        bulb_6.style.background = color[randomNum2() -1];
        bulb_7.style.background = color[randomNum6() -1];
        bulb_8.style.background = color[randomNum5() -2];
        bulb_9.style.background = color[randomNum6()]
        bulb_10.style.background = color[randomNum1() + 1];
        bulb_11.style.background = color[randomNum4() + 1];
        bulb_12.style.background = color[randomNum6()]
        bulb_13.style.background = color[randomNum3()];
        bulb_14.style.background = color[randomNum5()];
        bulb_15.style.background = color[randomNum2() - 2];
        bulb_16.style.background = color[randomNum3() + 2]
    }
    setInterval(setLight, 1000);

    chrisLightCont.appendChild(span1);
    chrisLightCont.appendChild(bulb_8);
    chrisLightCont.appendChild(bulb_9);
    chrisLightCont.appendChild(span2);

    span1.appendChild(bulb_1);
    span1.appendChild(bulb_2);
    span1.appendChild(bulb_3);
    span1.appendChild(bulb_4);
    span1.appendChild(bulb_5);
    span1.appendChild(bulb_6);
    span1.appendChild(bulb_7);

    span2.appendChild(bulb_10);
    span2.appendChild(bulb_11);
    span2.appendChild(bulb_12);
    span2.appendChild(bulb_13);
    span2.appendChild(bulb_14);
    span2.appendChild(bulb_15);
    span2.appendChild(bulb_16);
    
    div.appendChild(chrisLightCont);

    let array1 = span1.childNodes;
    let array2 = span2.childNodes;

    array1.forEach((item) => {
        item.style.position = "relative";
        item.style.top = "-5px";
    })

    array2.forEach((item) => {
        item.style.position = "relative";
        item.style.bottom = "-5px";
    })

    function fallingCard(){
        const yellowCard = document.createElement("span");
        const blueCard = document.createElement("span");
        const whiteCard = document.createElement("span");
        const redCard = document.createElement("span");

        yellowCard.classList.add("card1");
        blueCard.classList.add("card2");
        whiteCard.classList.add("card3");
        redCard.classList.add("card4");

        yellowCard.classList.add("overCard");
        blueCard.classList.add("overCard");
        whiteCard.classList.add("overCard");
        redCard.classList.add("overCard");

        body.appendChild(yellowCard);
        body.appendChild(blueCard);
        body.appendChild(redCard);
        body.appendChild(whiteCard);

        yellowCard.style.left = Math.random() * 90 + "vw";
        yellowCard.style.animationDuration = Math.random() * 2.9 + 10 + "s";

        blueCard.style.left = Math.random() * 90 + "vw";
        blueCard.style.animationDuration = Math.random() * 2.9 + 10 + "s";

        whiteCard.style.left = Math.random() * 90 + "vw";
        whiteCard.style.animationDuration = Math.random() * 2.9 + 10 + "s";

        redCard.style.left = Math.random() * 90 + "vw";
        redCard.style.animationDuration = Math.random() * 2.9 + 10 + "s";
    
        body.style.overflow = "hidden";
    }

    setInterval(fallingCard, 3500)

}

