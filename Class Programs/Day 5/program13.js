function CheckEven(No)                 // check

{
    if(No % 2 == 0)
    {
        console.log("It is Even Number")
    }
    else
    {
        console.log("It is odd number ")
    }

}

function main()
{
  let value = 10
  let bret = false


  bret = CheckEven(value)

  if(bret == true)
  {
    console.log(`${value} is Even Number`)
  }
  else 
  {
    console.log(`${value} is odd Number`)
  }
}

main();