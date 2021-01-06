using System;

namespace ConsoleApp1
{
    class Program
    {

        //Challenge #1
        // find the longest string in an array

        static void LongestString()
        {
            string[] array1 = { "first word", "second word", "third word", "suprcalifradulistiespialidocios", "one" };

            string longString = array1[0];

            //find the longest string in the array
            foreach (var word in array1)
            {
                if (longString.Length < word.Length)
                {
                    longString = word;
                }
            }

            Console.WriteLine("longest word in the group is " + longString);
        }

        static void CharacterCount()
        {
            string stuff = "supercalifradulistiespialidocios";
            int[] charCount = new int[256];
            int length = stuff.Length;
            int maxCount = -1;
            char character = ' ';

            for (int i = 0; i < length; i++)
            {
                charCount[stuff[i]]++;
                if (maxCount < charCount[stuff[i]])
                {
                    maxCount = charCount[stuff[i]];
                    character = stuff[i];
                }
            }

            Console.WriteLine(character);
            Console.WriteLine(maxCount);
        }

        static void Main(string[] args)
        {
            // LongestString();
            CharacterCount();
        }
    }
}
