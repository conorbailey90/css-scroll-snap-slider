
const wordElements = [...document.querySelectorAll('.info')];
const words = [];
wordElements.forEach(word => {
    words.push(word.innerText);
})

// set to negative 30 to make animation time longer on page load
let count =  -30;

function animateLetters(){
    for(let i = 0; i < wordElements.length; i++){
        wordElements[i].innerText = words[i].split('').sort(() => ( 0.5-Math.random())).join('');
        setTimeout(()=>{
            wordElements[i].innerText = words[i];
        }, 500)
    }
    count++
    if(count < 20){
        requestAnimationFrame(animateLetters)
    }
}

main.addEventListener('scroll', () => {
    count = 0;
    animateLetters()
})

animateLetters()