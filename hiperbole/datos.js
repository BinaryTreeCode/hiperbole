var txt_Info = document.querySelector('inputinfo');
var txt_Centro = document.querySelector('inputCentro');
var txt_a = document.querySelector('inputa');
var txt_b = document.querySelector('inputb');
var txt_c = document.querySelector('inputc');
var txt_Lr = document.querySelector('inputLr');
var txt_e = document.querySelector('inpute');
var txt_A = document.querySelector('inputY');

var H = document.getElementById("HI");
var K = document.getElementById("KI");
var A = document.getElementById("AI");
var B = document.getElementById("BI");
var boton = document.getElementById("btn");

boton.addEventListener("click", datos, true);

var check1 = document.getElementById("checkbox1");
// var check2 = document.getElementById("checkbox1");

var axy;


function datos () {
    var H_value = parseFloat(H.value);
    var k_value = parseFloat(K.value);

    h = H_value * -1;
    k = k_value * -1;

    var A_value = parseFloat(A.value);
    var B_value = parseFloat(B.value);

    a_float = Math.sqrt(A_value);
    b_float = Math.sqrt(B_value);
    c_float = Math.sqrt(A_value + B_value);

    

    LR = (B_value*2)/A_value;
    E = c_float/a_float;
    
    a = a_float.toFixed(2);
    b = b_float.toFixed(2);
    

    forma1 = check1.checked;
    if (forma1 == true) {
        axy= "x";
    }
    else {
        axy= "y";
    }

    if (axy == "y")
    {
        Y = a + "/" + b + "x"
    }
    else
    {
        Y = b + "/" + a + "x"
    }

    c = c_float.toFixed(2);
    Lr = LR.toFixed(2);
    e = E.toFixed(2);
    
    console.log(h);
    console.log(k);
    console.log(A);
    console.log(B);
    console.log(a_float);
    console.log(B_value);
    console.log(c);
    console.log(Lr);
    console.log(axy);
    console.log(Y);
    console.log(axy);

    txt_Info.textContent = " " + axy;
    txt_Centro.textContent = "(" + h + "," + k +")";
    txt_a.textContent = a;
    txt_b.textContent = b;
    txt_c.textContent = c;
    txt_Lr.textContent = Lr;
    txt_e.textContent = e;
    txt_A.textContent = Y;
}





