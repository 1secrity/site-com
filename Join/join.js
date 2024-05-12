alert("どうもこんにちは")
alert("登録ありがとうございます")


var device = navigator.userAgent;
alert("貴方の端末情報は " + device + " です");

history.pushState(null, null, null);
window.onpopstate = function(e) {
    if (!e.state) {
        history.pushState(null, null, null);
        return;
    }
};


{
    
    const hour = document.getElementById('hour');
    const min = document.getElementById('min');
    const sec = document.getElementById('sec');

    function countDown(){
        const now= new Date();

        const tomorrow =new Date(now.getFullYear(),now.getMonth(),
        now.getDate()+1);

        const timeDiff=tomorrow.getTime() - now.getTime();

        const calsHour =Math.floor(timeDiff /1000 / 60 / 60);
        const calsMin =Math.floor(timeDiff /1000 / 60)%60;
        const calsSec =Math.floor(timeDiff /1000 )%60;

        
        hour.innerHTML = String(calsHour).padStart(2, '0');
        min.innerHTML = String(calsMin).padStart(2, '0');
        sec.innerHTML = String(calsSec).padStart(2, '0');
    }
    countDown();
    setInterval(countDown, 1000);
}

