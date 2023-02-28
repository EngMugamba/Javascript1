
    var num=parseInt(prompt("Enter any number between 1 and 20 and stand a chance to win 10,000!\n"));
    var Depo=parseInt(prompt("Enter any amount you wish to deposit\n"));
    console.log("You choose number:\n",num);
    console.log("You Deposited:\n",Depo);


    var x = Math.floor((Math.random() * 20));
if(num == x)
{
   won = Depo * 10;
  console.log("You won",won);
}
else
{
    console.log("Ooops!!you have lost the chance, if you may wish try again!!", won);
}

