function CheckEven(No)                 // check

{
    return (No % 2 == 0)

}

function main()
{
  let value = 10
  let bret = false


  bret = CheckEven(value)

  if(bret)
  {
    console.log(`${value} is Even Number`)
  }
  else 
  {
    console.log(`${value} is odd Number`)
  }
}

main();