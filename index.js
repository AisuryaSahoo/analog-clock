
setInterval(() => {
    d=new Date();
    let hour=d.getHours();
    let min=d.getMinutes();
    let sec=d.getSeconds()
    let hourHeadPos=hour*30+min/2;
    let minHeadPos=min*6;
    let secHeadPos=sec*6;
    document.getElementById("hour-head").style.transform=`rotate(${hourHeadPos}deg)`;
    document.getElementById("min-head").style.transform=`rotate(${minHeadPos}deg)`;
    document.getElementById("sec-head").style.transform=`rotate(${secHeadPos}deg)`;

}, 1000);