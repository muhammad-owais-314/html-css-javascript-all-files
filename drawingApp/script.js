// let mouseEvent = document.getElementById('mouseEvent');



// console.log(mouseEvent);


// mouseEvent.addEventListener('mouseup',()=>{
//     console.log('Mouse Up');
// })

// mouseEvent.addEventListener('mousedown',()=>{
//     console.log('Mouse Down');
// })

// mouseEvent.addEventListener('mousemove',()=>{
//     console.log('Mouse Move');
// })

// mouseEvent.addEventListener('mouseover',()=>{
//     console.log('Mouse Over');
// })

// mouseEvent.addEventListener('mouseenter',()=>{
//     console.log('Mouse Enter');
// })




// mouseEvent.addEventListener('click',(e)=>{
//     console.log(e)
// })


// let isMouseDown = false

// mouseEvent.addEventListener('mousedown', () => {
//     isMouseDown = true;
// })
// mouseEvent.addEventListener('mouseup', () => {
//     isMouseDown = false;
// })
// mouseEvent.addEventListener('mousemove', () => {

//     if(isMouseDown){
//          console.log('Mouse Move event occurs')
//     }
   
// })



const canva = document.getElementById('canva');
console.log(canva)

let context = canva.getContext('2d');

// console.log(context)


let isMouseDown = false;

canva.addEventListener('mousedown',()=>{
    isMouseDown = true;

})
canva.addEventListener('mouseup',()=>{
    isMouseDown=false
    context.beginPath();

})
canva.addEventListener('mousemove',(e)=>{
    if(isMouseDown){
        console.log(`ClientX: ${e.clientX}`,`ClientY: ${e.clientY}`)
        // console.log('Mouse move')
        context.lineTo(e.offsetX,e.offsetY)
        context.moveTo(e.offsetX,e.offsetY)
        context.lineWidth = 4
        context.strokeStyle ='red'
        context.stroke();
    }
})





