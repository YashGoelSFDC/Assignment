//Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.
import java.util.Random;

public class Shuffle{
    public static void main(String[] args)
    {
        int arr[] = {1, 2, 3, 4, 5, 6, 7};
        Shuffle.shuffleNumbers(arr);
    }

    public static void shuffleNumbers(int[] arr)
    {
        Random randomObject = new Random();

        for(int i = 0; i < arr.length; i++)
        {
            int randomValue = randomObject.nextInt(arr.length);

            int currentValue = arr[i];
            arr[i] = arr[randomValue];
            arr[randomValue] = currentValue;
        }

        for(int i = 0; i < arr.length; i++)
        {
            System.out.print(arr[i] + " ");
        }
    }
}