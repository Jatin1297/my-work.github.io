

function check_even_odd()
{

    var inpu_val = document.getElementById('check').value;

    // console.log(inpu_val);
  if(inpu_val=="")
  {
      alert("please type numbers");
  }
  else{
    if(inpu_val%2==0)
    {
        alert("Number is Even");
    }
    else if(inpu_val%2!==0) {
        
        alert("Number is Odd");

    } else{
        
        alert("please type numbers")
    }
  }

}

function check_Greater()
{

    var inpu_1 = parseInt(document.getElementById('inpu-1').value);
    var inpu_2 = parseInt(document.getElementById('inpu-2').value);

   if(inpu_1== "" && inpu_2== "" )
   {
    alert("please type numbers");
   }
else{

   if(inpu_1>inpu_2)
   {
       alert("input 1 is Greater");
   }
   else if(inpu_1<inpu_2)
   {
       alert("input 2 is Greater");
   }
   else{
    alert("please type numbers");
   }
}
}

function checkbiger()
{

    var inp_1 = parseInt(document.getElementById('input-1').value);
    var inp_2 = parseInt(document.getElementById('input-2').value);
    var inp_3 = parseInt(document.getElementById('input-3').value);

   if(inp_1== "" , inp_2== "" , inp_3== "")
   {
    alert("please type numbers");
   }

   else
   {
        if(inp_1>inp_2 && inp_1>inp_3)
        {
            alert("input 1 is greater");
        }
        else if(inp_2>inp_1 && inp_2>inp_3)
        {
            alert("input 2 is greater");
        }

        else if (inp_3>inp_1 && inp_3>inp_2)
        {
            alert("input 3 is greater");
        }

        else{
            alert("please type numbers");
        }
   }

}



function checkage()
{

    var age =document.getElementById('age').value;

   let newage = parseInt(age);


 

 if(age == "")
 {
     alert("empty");
 }
        if(newage>=18)
        {
            alert("you are eligable");
        }
        
        else if(newage<=18){
            alert("you are not eligable");
        }


    }

 
