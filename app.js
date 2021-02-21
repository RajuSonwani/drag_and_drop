
console.log("hello world")
 
let whiteBoxes=document.getElementsByClassName("whiteBox");
let imgBox=document.querySelector(".imgBox");

imgBox.addEventListener('dragstart',(e)=>{
    console.log("drageStart fired..");
    e.target.className+=' hold';
    setTimeout(()=>{
        e.target.className+=' hide'
    },0)
})

imgBox.addEventListener('dragend',(e)=>{
    e.target.className='imgBox';
    console.log('dragEnd fired..')
})

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover',(e)=>{
        e.preventDefault();
        console.log("drageOver running")
    }),
    whiteBox.addEventListener('dragenter',(e)=>{
        e.target.className+=' doted';
        console.log("drageenter running")
    }),
    whiteBox.addEventListener('dragleave',(e)=>{
        e.target.className=' whiteBox';
        console.log("drageLeave fired")
    }),
    whiteBox.addEventListener('drop',(e)=>{
        e.target.append(imgBox);
        console.log("drop fired")
    })
    
};