


// let cursor = document.querySelector('.cursor')
 
// document.addEventListener('mousemove', (e) =>{
//    posX = e.clientX
//    posY = e.clientY
//    cursor.animate({
//       left: `${posX}px`,
//       top: `${posY}px`
//    }, {duration: 0, fill: 'forwards'})
// })
let sound = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.60282 10.0001L10 7.22056V16.7796L6.60282 14.0001H3V10.0001H6.60282ZM2 16.0001H5.88889L11.1834 20.3319C11.2727 20.405 11.3846 20.4449 11.5 20.4449C11.7761 20.4449 12 20.2211 12 19.9449V4.05519C12 3.93977 11.9601 3.8279 11.887 3.73857C11.7121 3.52485 11.3971 3.49335 11.1834 3.66821L5.88889 8.00007H2C1.44772 8.00007 1 8.44778 1 9.00007V15.0001C1 15.5524 1.44772 16.0001 2 16.0001ZM23 12C23 15.292 21.5539 18.2463 19.2622 20.2622L17.8445 18.8444C19.7758 17.1937 21 14.7398 21 12C21 9.26016 19.7758 6.80629 17.8445 5.15557L19.2622 3.73779C21.5539 5.75368 23 8.70795 23 12ZM18 12C18 10.0883 17.106 8.38548 15.7133 7.28673L14.2842 8.71584C15.3213 9.43855 16 10.64 16 12C16 13.36 15.3213 14.5614 14.2842 15.2841L15.7133 16.7132C17.106 15.6145 18 13.9116 18 12Z"></path></svg>'
let muted = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 7.22049L6.60282 10H3V14H6.60282L10 16.7795V7.22049ZM5.88889 16H2C1.44772 16 1 15.5523 1 15V9.00001C1 8.44772 1.44772 8.00001 2 8.00001H5.88889L11.1834 3.66815C11.3971 3.49329 11.7121 3.52479 11.887 3.73851C11.9601 3.82784 12 3.93971 12 4.05513V19.9449C12 20.221 11.7761 20.4449 11.5 20.4449C11.3846 20.4449 11.2727 20.405 11.1834 20.3319L5.88889 16ZM20.4142 12L23.9497 15.5355L22.5355 16.9498L19 13.4142L15.4645 16.9498L14.0503 15.5355L17.5858 12L14.0503 8.46447L15.4645 7.05026L19 10.5858L22.5355 7.05026L23.9497 8.46447L20.4142 12Z"></path></svg>'

const click = document.getElementById('click');
const bgMusic = document.getElementById('bg-music');
click_element = document.querySelectorAll('.cl')
click_element.forEach((e)=>{
   e.addEventListener('click',()=>{
   click.play()
})
})


document.querySelector(".sound").addEventListener('click', () => {
   setTimeout(() => {
      document.querySelector('.sound').firstElementChild.setAttribute('style','animation: bounce 500ms 1 0s forwards')
   }, 0);

   setTimeout(() => {
      document.querySelector('.sound').firstElementChild.setAttribute('style','animation: none')
   }, 500);
   if (bgMusic.paused) {
     bgMusic.play();
     document.querySelector('.sound').innerHTML = sound
   } else {
     bgMusic.pause();
     document.querySelector('.sound').innerHTML = muted
   }
 });



