const allRangeSliders=document.querySelectorAll('.hex-slider');
const allRangeInputs=document.querySelectorAll('#hex');
const colorDisplay=document.querySelector('#color-display');
const externalColorInput=document.querySelector('.external-color-input');
const currentrgbValues=['ff','ff','ff'];
externalColorInput.value=`#${currentrgbValues.join('')}`;
colorDisplay.style.backgroundColor=`#${currentrgbValues.join('')}`;

externalColorInput.addEventListener('input',(event)=>{
    let currentColor=event.target.value;
    if(!currentColor.startsWith('#')){
        colorDisplay.style.backgroundColor=`#${currentColor}`;
    }
    colorDisplay.style.backgroundColor=`${currentColor}`;
})

async function copyColor(){
    try{
        await navigator.clipboard.writeText(externalColorInput.value);
        // copiedText.textContent='copied';
    }
    catch(e){
        // copiedText.textContent='Failed';
    }

    // copiedText.classList.add('active');
    // setTimeout(() => {
    //     copiedText.classList.remove('active');
    // }, 2000);
}

colorDisplay.addEventListener('click',copyColor)

allRangeInputs.forEach(eachInput=>{
    eachInput.value='ff';
})

allRangeSliders.forEach((eachSlider,index)=>{
    eachSlider.addEventListener('input',()=>sliderHandler(index,event));
});


function sliderHandler(index,event){
    const currentColorCode= Number(event.target.value);
    let hexCode=currentColorCode.toString(16);
    if(hexCode.length===1){
        hexCode=`0${hexCode}`;
    }
    currentrgbValues[index]=hexCode;
    allRangeSliders[index].value=String(currentColorCode);
    allRangeInputs[index].value=hexCode;
    externalColorInput.value=`#${currentrgbValues.join('')}`;
    colorDisplay.style.backgroundColor=`#${currentrgbValues.join('')}`;
}