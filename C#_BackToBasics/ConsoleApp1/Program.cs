using System;
using System.Linq;
using System.Collections.Generic;

namespace ConsoleApp1
{
    class Program
    {

        //Challenge 1
        // 1. Find the longest string in an array
        // Do we need to consider if there are no strings in the array?
        // Do we need to consider timse when all of the strings are the same length?

        static void LongestString()
        {
            string[] array1 = { "first word", "second word", "third word", "fourth word", "supercalifradulistiespialidotios", "one" };
            //var shortString = array1[0];
            var longString = array1[0];

            // Find the longest string in Array
            foreach(var word in array1)
            {
               // if (shortString.Length > t.Length)
               //     shortString = t;
                if (longString.Length < word.Length)
                    // if the the word in longstring is greater than the new word, replace longstring with that word
                    longString = word;
            }

            //Console.WriteLine("shortest string is: " + shortString);
            Console.WriteLine("longest string is: " + longString);

        }

        // Challenge 2
        // write a function that takes a string and returned the character that is most commonly used in the string
        // do we need to consider if there is no string given? no
        // do we need to consider times when more than one character showed up the same number of times? Yes, return the first one.
         static void CharacterCount()
        {
            string letters = "jfkdosluajfikewhklhdlisljakflwu;i";
            int[] charCount = new int[256];
            int length = letters.Length;
            for (int i = 0; i < length; i++)
            {
                charCount[letters[i]]++;
            }
            int maxCount = -1;
            char character = ' ';
            for (int i = 0; i < length; i++)
            {
                if (maxCount < charCount[letters[i]])
                {
                    maxCount = charCount[letters[i]];
                    character = letters[i];
                }
            }

            Console.WriteLine(character);
            Console.WriteLine(maxCount);            
        }

        // Challenge 3
        // Create a function that takes in two strings as two parameters and returns a boolean that indicates whether or not the first string is an anagram of the second string.
        // Anagram - a word or phrase made by transposing the letters of another word or phrase.
        // do we need to trim whitespace? YEEEEEEES

        static void Anagram()
        {
            string str1 = "heater";
            string str2 = "reheat";

            char[] ch1 = str1.ToLower().ToCharArray();
            char[] ch2 = str2.ToLower().ToCharArray();

            Array.Sort(ch1);
            Array.Sort(ch2);
            Console.WriteLine(ch2);

            string val1 = new string(ch1);
            string val2 = new string(ch2);

            if (val1 == val2)
            {
                Console.WriteLine("Both strings are Anagrams");
            } else
            {
                Console.WriteLine("Both strings are not Anagrams");
            }
        }

        // ^this solution doesn't account for whitespace. Meets requirements but not ideal.

        // Challenge 4 \\
        // given a single string, write a function that will return whether or not that string is a palendrome
        // Palindrome - a hand cannon in Destiny - a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
        // Do we need to account for whitespaces again? YEEEEES

        static void IsPalindrome()
        {
            string myString = "Hannah";
            string lowerString = myString.ToLower();

            bool check = lowerString.SequenceEqual(lowerString.Reverse());
            Console.WriteLine(check);
        }

        // Challenge 5 \\
        // Determine if the input number is an Armstrong number
        // Armstrong number - number that is equal to the sum of the nth powers of its digits (Narcissistic Number)
        // example 
        // 407 
        // 4^3 + 0^3 + 7^3 = 407

        static void ArmstrongNum()
        {
            
            int mynum, remainder, res = 0;
            Console.Write("Please enter an integer number: ");
            mynum = int.Parse(Console.ReadLine());
            for (int m = mynum; m > 0; m = m / 10)
            {
                remainder = m % 10;
                res = res + remainder * remainder * remainder;
            }
            Console.WriteLine(res == mynum);
        
        }

        // Challenge 6 \\
        // Given one array of integers(numbers), return ineces of two numbers that add up to the target.
        // will each input have exactly one solution? yes
        // can we use the same element twice? no

        static void TwoSum()
        {
            int[] nums = { 20, 80, 13, 27, 8 };
            int target = 100;

            for (int i = 0; i < nums.Length; i++)
            {
                for (int j = i+1; j < nums.Length; j++)
                {
                    if (nums[i]+nums[j] == target)
                    {
                        Console.WriteLine(nums[i] + " " + nums[j] + " = " + target);
                    }
                }
            }
        }

        static void Main(string[] args)
        {
            // LongestString();
            // CharacterCount();
            // Anagram();
            // IsPalindrome();
            // ArmstrongNum();
            // TwoSum();

        }
    }
}
