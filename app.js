let containers = [...document.querySelectorAll('.container')];

let options = {
    rootMargin: '0px',
    threshold: .2
  }
  
let observer = new IntersectionObserver(callback, options);

containers.forEach(container => {
    observer.observe(container); 
})
 
function callback(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }else{
            entry.target.classList.remove('active')
        }
    });
};

function animate(){
    for(let i = 0; i < containers.length; i++){
        let translate = containers[i].parentElement.getBoundingClientRect().top;
        containers[i].style.transform = `translate3d(0,${translate * .2}px, ${Math.abs(translate) * 1.02}px)`
        containers[i].style.filter = `blur(${Math.abs(translate)* .1}px)`
    }
    requestAnimationFrame(animate);
}

animate();