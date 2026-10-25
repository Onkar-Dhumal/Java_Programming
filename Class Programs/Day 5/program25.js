function Sumaction(Arr)
{
   
    let iSum = 0, i = 0

    for(i=0;i<Arr.length;i++)
    {
        iSum = iSum + Arr[i]
    }

}

function main()
{
     let Arr = [10,20,30,40]
     iret = 0;

     iret = Sumaction(Arr)
 

    console.log("Summaction is : ",iSum)
}
main();