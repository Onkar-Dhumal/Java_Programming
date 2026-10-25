class Arathmatic
{
    constructor(A,B)
    {
        this.No1 =A
        this.No2 =B

    }

    Addition()
    {
        return this.No1 + this.No2
    }

    subtraction()
    {
        return this.No1 - this.No2
    }

}
function main()
{
    let lobj = new Arathmatic(11,10)

    console.log(lobj.Addition())
     console.log(lobj.subtraction())

}
main();