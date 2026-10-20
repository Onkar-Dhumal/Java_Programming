
import java.util.Scanner;
class program27
{
    public static void main(String[] args) 
    {
        Scanner scanner = null;
        String sName = null;
        int iAge = 0;
        float fmarks = 0.0;    //Error for understading 

        scanner = new Scanner(System.in);
        
        System.out.println("Entre your name : ");
        sName = scanner.next();

        System.out.println("Entre your age : ");
        iAge = scanner.nextInt();

        System.out.println("Entre your marks :");
        fmarks = scanner.nextFloat();

        System.out.println("Welcome "+sName);
        System.out.println("Your age : "+iAge);
        System.out.println("Your marks "+fmarks);
    }
}


