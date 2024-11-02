function reverseString()
{
    let str = prompt("Enter a string: ");
    let rev = "";
    for(let i=str.length-1;i>=0;i--)
    {
        rev+=str[i];
    }
    document.getElementById("content").innerHTML = "<h1>Reverse of the string is "+rev+"</h1>";
}

function palindrome()
{
    document.getElementById("content").innerHTML = '<input type="text" id="pal" placeholder="Enter a number" onkeyup="palCheck()">\
    <h1 id="pallabel"></h1>';
}

function palCheck()
{
    let num = document.getElementById("pal").value;
    if(num == "")
    {
        document.getElementById("pallabel").textContent = "";
        return;
    }
    let temp = parseInt(num);
    console.log(num);
    rev = 0;
    while(temp>0)
    {
        rev*=10;
        rev+=temp%10;
        temp = Math.floor(temp/10);
        console.log(temp);
    }
    console.log(rev);
    if(rev == num)
    {
        document.getElementById("pallabel").textContent = num+" is a palindrome!"
    }
    else
    {
        document.getElementById("pallabel").textContent = num+" is not a palindrome!"
    }
}

function calcSubTotal()
{
    let subTotal = prompt("Enter the subtotal of the bill:");
    let tip = prompt("What percentage would you like to tip? ");
    document.getElementById("content").innerHTML = "<h1>Total bill is "+((1+(tip/100))*subTotal)+"</h1>";
}
