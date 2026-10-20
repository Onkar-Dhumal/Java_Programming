
import java.util.Scanner;
class program29
{
    public static void main(String[] args) 
    {
        Scanner scanner = null;
        String sName = null;
        int iAge = 0;
        float fmarks = 0.0f; 

        scanner = new Scanner(System.in);
        
        System.out.println("Entre your name : ");
        sName = scanner.nextLine();   

        System.out.println("Entre your age : ");
        iAge = scanner.nextInt();

        System.out.println("Entre your marks :");
        fmarks = scanner.nextFloat();

        System.out.println("Welcome "+sName);
        System.out.println("Your age : "+iAge);
        System.out.println("Your marks "+fmarks);
    }
}



