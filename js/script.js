function decKg()
{
    var currentQuantity = parseInt(document.getElementById("qnt-apple").innerHTML);
   if(currentQuantity>1)
   {
     currentQuantity--;
     document.getElementById('qnt-apple').innerHTML = currentQuantity;
   }

   var currentQuantity = parseInt(document.getElementById("qnt-banana").innerHTML);
    if(currentQuantity>1)
   {
     currentQuantity--;
     document.getElementById('qnt-banana').innerHTML = currentQuantity;
   }

   var currentQuantity = parseInt(document.getElementById("qnt-grapes").innerHTML);
    if(currentQuantity>1)
   {
     currentQuantity--;
     document.getElementById('qnt-grapes').innerHTML = currentQuantity;
   }

   var currentQuantity = parseInt(document.getElementById("qnt-orange").innerHTML);
    if(currentQuantity>1)
   {
     currentQuantity--;
     document.getElementById('qnt-orange').innerHTML = currentQuantity;
   }
  
   var currentQuantity = parseInt(document.getElementById("qnt-tomato").innerHTML);
   if(currentQuantity>1)
  {
    currentQuantity--;
    document.getElementById('qnt-tomato').innerHTML = currentQuantity;
  }

  var currentQuantity = parseInt(document.getElementById("qnt-kiwi").innerHTML);
  if(currentQuantity>1)
 {
   currentQuantity--;
   document.getElementById('qnt-kiw').innerHTML = currentQuantity;
 }

 var currentQuantity = parseInt(document.getElementById("qnt-watermelon").innerHTML);
 if(currentQuantity>1)
{
  currentQuantity--;
  document.getElementById('qnt-watermelon').innerHTML = currentQuantity;
} 

var currentQuantity = parseInt(document.getElementById("qnt-strawberry").innerHTML);
if(currentQuantity>1)
{
 currentQuantity--;
 document.getElementById('qnt-strawberry').innerHTML = currentQuantity;
}

var currentQuantity = parseInt(document.getElementById("qnt-pinapple").innerHTML);
if(currentQuantity>1)
{
currentQuantity--;
document.getElementById('qnt-pinapple').innerHTML = currentQuantity;
}

}

function incKg(fruitName)
{
  if(fruitName=="apple")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-apple').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-apple').innerHTML = currentQuantity;
  }
  else if(fruitName=="banana")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-banana').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-banana').innerHTML = currentQuantity;
  }
  else if(fruitName=="grapes")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-grapes').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-grapes').innerHTML = currentQuantity;
  }
  else if(fruitName=="orange")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-orange').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-orange').innerHTML = currentQuantity;
  }
  else if(fruitName=="tomato")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-tomato').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-tomato').innerHTML = currentQuantity;
  }
  else if(fruitName=="kiwi")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-kiwi').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-kiwi').innerHTML = currentQuantity;
  }
  else if(fruitName=="watermelon")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-watermelon').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-watermelon').innerHTML = currentQuantity;
  }
  else if(fruitName=="strawberry")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-strawberry').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-strawberry').innerHTML = currentQuantity;
  }
  else
  {
    var currentQuantity = parseInt(document.getElementById('qnt-pinapple').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-pinapple').innerHTML = currentQuantity;
  }
 
}