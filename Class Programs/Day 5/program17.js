function CheckPerfect(No)
{

    let i = 0;
    let sum = 0;

    for (i=1; i<=No/2; i++)
    {
      if(No % i == 0)
      {
        sum = sum + i
      }
    }

    return (No == sum)
}

function main()
{
    let bret = false;

    bret = CheckPerfect(28)

    if(bret == true)
    {
        console.log("It is a perfect number")
    }
    else 
    {
        console.log("It is not perfect number")
    }
}

main();