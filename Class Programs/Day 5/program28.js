function CountSmal(str)
{
    iCount = 0;
    for(let i = 0; i <str.length; i++)
    {
        if(str[i] >= 'a' && str[i] <= 'z')
        {
            iCount++;
        }
    }
    return iCount;
}

function main()
{
    let name = "Marvellous"
    let iret = 0

    iret = CountSmal(name);

    console.log("Small Charecter are : ",iret)
}
main();