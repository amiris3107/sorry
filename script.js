const wrapper = document.querySelector(".wrapper");
const sorry = document.querySelector(".sorry");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener('click', ()=>{
    sorry.innerHTML = "I LOVEEEEE YOUUUUU <br> SOOOO MUCHHHHH";
    gif.src = 
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjRyaGQxMW9zYnBudDJxaWg4cjZ2bzZiY3JmNWhkcmt3ZHRqbnhhbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/W8krmZSDxPIfm/giphy.gif"
    heading.style.textAlign = 'center';
});

noBtn.addEventListener('click', ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX  = Math.floor(Math.random() * maxX);
    const randomY  = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
})
