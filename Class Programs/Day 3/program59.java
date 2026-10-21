

import java.util.Scanner;

class program59
{

    public static void main(String[] args)
    {
        Scanner scanner=new Scanner(System.in);
        int iValue = 0;

        Iteraction iteraction = new Iteraction();

        System.out.println("Entre the frequency");
        iValue = scanner.nextInt();

        iteraction.display(iValue);
    }

    static class Iteraction
    {
        public void display(int iNo)
        
        {
            int init=0;

            //Input Updater
            if(iNo<=0)
            {
               iNo = -iNo;
            }
            else
            {
                for(init=1;init<=iNo;init++)
                {
                    System.out.println("Jay Ganesh...");
                }
            }
        }
    }

}
