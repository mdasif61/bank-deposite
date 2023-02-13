const dpBtn=document.getElementById("dp-btn");
const previousAmount=document.getElementById("d-amount");
const dField=document.getElementById("deposite-field");
const totalB=document.getElementById("totalBlance");
const lastWid=document.getElementById("lastWid");
const widBtn=document.getElementById("wid-btn");
const wField=document.getElementById("wid-field")

dpBtn.addEventListener("click",function(){
    const dFieldValue=parseFloat(dField.value);
    if(isNaN(dFieldValue)){
        alert("Provide a Number");
        return;
    }
    const convartNum=parseFloat(previousAmount.innerText);
    previousAmount.innerText=dFieldValue;
    
})
dpBtn.addEventListener("click",function(){
    const convartTb=parseFloat(totalB.innerText);
    const d=parseFloat(dField.value);
    dField.value="";
    if(isNaN(d)){
        return;
    }
    totalB.innerText=convartTb+d;
})

widBtn.addEventListener("click",function(){
    const lwValue=parseFloat(lastWid.innerText);
    const w=parseFloat(wField.value);
    if(w>totalB.innerText){
        return;
    }
    if(isNaN(w)){
        alert("Provide a Number");
        return;
    }
    lastWid.innerText=w;
});
widBtn.addEventListener("click",function(){
    const convartTblance=parseFloat(totalB.innerText);
    if(convartTblance>totalB){
        return;
    }
    const wFvalue=parseFloat(wField.value);
    wField.value="";
    if(isNaN(wFvalue)){
        return;
    }
    if(wFvalue>convartTblance){
        alert("not found");
        return;
    }
    totalB.innerText=Math.abs(wFvalue-convartTblance);
});


// dpBtn.addEventListener("click",function(){
//     const dHistory=document.getElementById("deposite-history");
//     const div=document.createElement("div");
//     div.innerText=dField.value+" tk";
//     dHistory.appendChild(div);
//     div.classList.add("h2");
//     dField.value="";
// })
// widBtn.addEventListener("click",function(){
//     const wHistory=document.getElementById("widthdraw-history");
//     const div2=document.createElement("div");
//     div2.innerText=wField.value+" tk";
//     div2.classList.add("h2");
//     wHistory.appendChild(div2);
//     wField.value="";
// })
