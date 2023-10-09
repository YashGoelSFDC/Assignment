/*Check if the input is pangram or not. (A pangram is a sentence that contains all the 
alphabets from A to Z)

Example - 'The quick brown fox jumps over the lazy dog'  is a pangram */

public class Pangram{

    public static void main(String[] args)
    {
        String s = "The quick brown fox jumps over the lazy dog";
        System.out.print(isPangram(s.toLowerCase()));
    }

    public static boolean isPangram(String s)
    {
        if(s.length() < 26)
        {
            return false;
        }
        else
        {
            for(char ch='a'; ch<='z'; ch++)
            {
                if(s.indexOf(ch) < 0)
                {
                    return false;
                }
            }
        }
        return true;
    }
}