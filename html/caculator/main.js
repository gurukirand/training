//   Author: Gurukiran D
// Date: 09--8-18
  var arr = new Array();// holding numnbers and operator
   var i=0;
   var inpu=0; 
//    function to take input
// gurukiran
   function input(value)
    {
        calc.display.value+=value;
        inpu=calc.display.value;
    }
    //  function to show the calculation results 
   function result()
   {
       var result;
       var variable1;  //local variable used to combine digits
       var operand1;// local variable to hold operand 1
       var operand2;// local variable to hold operand 2
       var temp;  //temparory variable to hold calculation value
       var num=/[0-9'.']/;//matching the number
       var num1=/[0-9'.''-']/;
       var arr_input;
       arr_input=Array.from(inpu);
        var variable1='';
       // creating a array of numbers and operators
       for(i=0;i<arr_input.length;i++)
       {
           if(arr_input[i].match(num))
           {
            variable1+=arr_input[i];
            }
            else
            {
                if (variable1==''&&arr_input[i]=='-') 
                {
                    variable1='-';
                }
                else{
             arr.push(variable1);
             arr.push(arr_input[i]);
             variable1='';
            }
        }
        }
        arr.push(variable1);
    //    calculation part
        while(arr.length>1)
        {
        operand1=arr.shift();
        operand1=parseFloat(operand1)
        op=arr.shift();
        operand2=arr.shift();
        operand2=parseFloat(operand2);
        switch(op)
        {

            case '*': temp=operand1*operand2;
                   
                     arr.unshift(temp);
               break;

            case '-': temp=operand1-operand2;
                      arr.unshift(temp);
                      break;
            case '/':if(operand2)
                     { temp=operand1/operand2;
                      arr.unshift(temp);
                      break;}
                      else
                      {
                        calc.resu.value ='divded by zero';
                        exit;
                      }
            case '%':if(operand2)
            { temp=operand1%operand2;
             arr.unshift(temp);
             break;}
             else
             {
               calc.resu.value ='error';
               exit;
             }
             
            case '+': temp=operand1+operand2;
            arr.unshift(temp)
            break;
           
    }
    calc.resu.value='=  ';
    calc.resu.value+=arr;// displaying result
}   
}    
// ac button function to clear displays
// gurukiran
  function clearScreen()
    {
        calc.resu.value ='0'; 
        calc.display.value=''
        arr=[];
    }
