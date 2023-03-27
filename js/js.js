let osc=document.getElementById('os');

function display(num){
    osc.value +=num;
}
function calculate(){
    try {
        osc.value=eval(osc.value)
    } catch (error) {
        alert('invalid number')
    }
}

function cle() {
    osc.value='';
    
}
function del() {
    osc.value=osc.value.slice(0,-1);
}
