// Aproch 1
import java.util.Scanner;
class program32
{
    public static void main(String[] args) 
    {
        Scanner scanner = null; 

        int iValue1=0, iValue2=0, iResult =0;

        scanner = new Scanner(System.in);

        System.out.println("Entre frist number :");
        iValue1 = scanner.nextInt();

        System.out.println("Entre second number :");
        iValue2 = scanner.nextInt();

        iResult = iValue1+iValue2;  //logic

        System.out.println("Addition is : "+iResult);

 
    }
}



