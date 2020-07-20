# homework-week-3

Link to the Github Pages for this repository: https://nardacyon.github.io/homework-week-3/

This page is a password generator. The page itself is pretty self explanatory, once the user click the "Generate Password" button the user will be asked questions relating to how they want their password.

"How many characters do you want in your password?" (Length must be between 8-128)
"Do you want to include uppercase letters?" ("QWERTYUIOPASDFGHJKLZXCVBNM")
"Do you want to include lowercase letters?" ("qwertyuiopasdfghjklzxcvbnm")
"Do you want to include numbers?" (0-9)
"Do you want to include special characters?"  !@#$%^&*(){}[]

The page will create passwords based on the criteria, but there are still problems that need to be fixed:
  1. The program is a bit too random. Meaning that even if you choose a criteria, it is possible that the generator will not include it in the password created (ex. if you choose to have lowercase, uppercase, numbers, and special characters, there is no guarantee that you will have a number in the generated pw.)
  2. There are some special characters that will appear blank, but it will still count toward the length you provided in the initial prompt. I will look further into what symbols do not appear in the future.
  
  
However, the randomness of the Password Generator, in and of itself means that it does its job correctly. But I do understand that it is a bit of a nuisance to start the entire process over to create a password to the User's liking. And hopefully I find a better way to run the generator so that it MUST include at least one of every criteria the user selects. But overall, I am proud of this and I think that it is still viable for its purpose.
