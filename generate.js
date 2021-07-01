//a function for generationg ramdom value by clicking generate button and clear input code with success/fail result
function randomCode()
{
    var randomCode = Math.floor(10000000 + Math.random() * 90000000);
    var str=randomCode.toString();
    var res = str.split("").join(" "); 

    document.getElementById('randomCode').value = res + " "; 

    document.getElementById("success").style.display='none';
    document.getElementById("fail").style.display='none';
    document.getElementById("inputCode").value='';   
}


//a function for taking input from keypad
function button(id)
{
    var val = document.getElementById('inputCode').value;
    var takingInput= document.getElementById(id).innerHTML;
    document.getElementById('inputCode').value = val +  takingInput + " "; 
}

//a function to clear latest values from the input
function clearLastOne()
{
    var takingInput = document.getElementById('inputCode').value;
    var removeLastOne = takingInput.slice(0, takingInput.length - 2);
    document.getElementById('inputCode').value = removeLastOne;
}

//a function to clear all input values
function clearAll()
{
    document.getElementById('inputCode').value='';
}

//a function for checking random code with input code and showing and hiding message depends on success and fail condition
function submit()
{
    var storeGenerateCode = document.getElementById('randomCode').value;
    var storeInputCode = document.getElementById('inputCode').value;

    if(storeGenerateCode == storeInputCode)
    {
        document.getElementById("success").style.display='block';
        document.getElementById("fail").style.display='none';
        document.getElementById("tryHide").style.display='none';
    }
    else
    {
        document.getElementById("fail").style.display='block';
        document.getElementById("success").style.display='none';
        document.getElementById("tryHide").style.display='block';

        tryLeft('try');
    }
}

//a function to check how many chances are left and if none then disable the submit button
function tryLeft(id)
{
    var chanceLeft = document.getElementById(id).innerHTML--;

    if(chanceLeft == '1')
    {
        document.getElementById("submit").disabled = true;
        document.getElementById("submit").style.cursor = "not-allowed";
        error = "You have been blocked! Refresh the page";
        document.getElementById("fail").innerHTML = error;
    }
}
