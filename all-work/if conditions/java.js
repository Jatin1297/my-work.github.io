

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

    var inpu_1 = document.getElementById('inpu-1').value;
    var inpu_2 = document.getElementById('inpu-2').value;

    let c_1 = parseInt(inpu_1);
    let c_2 = parseInt(inpu_2);

   if(inpu_1== "" && inpu_2== "" )
   {
    alert("please type numbers");
   }
else{

   if(c_1>c_2)
   {
       alert("input 1 is Greater");
   }
   else if(c_1<c_2)
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

    var inp_1 = document.getElementById('input-1').value;
    var inp_2 = document.getElementById('input-2').value;
    var inp_3 = document.getElementById('input-3').value;

    let c1 = parseInt(inp_1);
    let c2 = parseInt(inp_2);
    let c3 = parseInt(inp_3);

   if(inp_1== "" , inp_2== "" , inp_3== "")
   {
    alert("please type numbers");
   }

   else
   {
        if(c1>c2 && c1>c3)
        {
            alert("input 1 is greater");
        }
        else if(c2>c1 && c2>c3)
        {
            alert("input 2 is greater");
        }

        else if (c3>c1 && c3>c2)
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

 
