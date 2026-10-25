function SumDigits(No)
{
     let iSum = 0;
     let iDigit = 0;

     while(No != 0)
     {
        iDigit = No % 10 
        iSum = iSum + iDigit
        No = No /10

     }   
    
}


function main()
{
     let iret = 0;
     
     iret = SumDigits(257)

     console.log("Summinaction oF Digits : ",iret)
}
main();