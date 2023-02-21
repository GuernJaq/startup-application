# startup-application
For my startup application, I am going to build off the prompt of a voting platform, and make a game-site similar to the "Who's that Pokemon?" segment on TV. The main concept is a page with an image of a pokemon, and four options for the type of pokemon that the user can choose from. After they have made a choice, they will be shown how other people voted, as well as which option is the correct answer. Depending on complexity, I would like to have the image of the pokemon start blacked out with a solid color, and then slowly fade to show all the details. Users would log in after a prompt from a "Professor Tree" and their responses would be saved in order to show to other users. Again depending on complexity, I would like to have several different "guesses" with users able access past prompts and have new ones generated every so often (concept image is for daily prompts but could be any frequency). 

![StartupApplicationSketch](https://user-images.githubusercontent.com/101128049/215238322-15184b38-522e-421c-a017-3b5c458e22aa.png)

EXIT VIM: esc :wq (escape key, then shift-semicolon, w and q) don't need to be held down!

Command to update webpage: pscp -r .\website-html\ ubuntu@pokeguesser.click:public_html

NOTES FOR SIMON: 
VSCode made creating and changing the website super easy, since I could just use the live server extension and then refresh the browser page to watch my changes in real-time. The most difficult part was getting out of Safe Mode and then finding the button to launch the server. As I followed along with the example code and typed it all out, I was able to see some of the structures that we had used in earlier lessons put to use, and how the formatting worked all together. It's going to be very interesting to put this knowledge and experience to work in my application later on.

SIMON CSS NOTES:
Use 
<code>link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
            crossorigin="anonymous"
</code>
to include Bootstrap and make styling easier, goes directly in html, works by having class in each element to define behavior and color
Define separate elements with class="" in the name and giving details in the css file
Use flex and/or grid to have page dynamically resize with window, and use @media(condition) to create specific states based on window size/shape
flex: proportion minimum-size, proportion meaning if you have one with 1 and another with 3, first is 1/4 and second is 3/4 of page
        
