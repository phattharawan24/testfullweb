function calculate(){
    ttt();
    setTimeout(function(){
        var sum=0;
        var gen= document.getElementById('gen').value;
        console.log(gen);
        var kw= document.getElementById('kw').value;
        var hr = document.getElementById('num1').value;
        sum = kw*(hr*gen);
        document.getElementById('hour').value = sum.toFixed(2);
        sum = sum / 0.7;
        document.getElementById('drive').value = sum.toFixed(2);
       
     
        var element1 = document.getElementById("divCar");
        element1.classList.add("thing");
        element1.classList.add("thing-1");
    },200);
  
}

function ttt(){
    var element = document.getElementById("divCar");
    element.classList.remove("thing");
    element.classList.remove("thing-1");
}