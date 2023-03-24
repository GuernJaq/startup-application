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

to include Bootstrap and make styling easier, goes directly in html, works by having class in each element to define behavior and color.
Define separate elements with class="" in the name and giving details in the css file.
Use flex and/or grid to have page dynamically resize with window, and use @media(condition) to create specific states based on window size/shape.
flex: proportion minimum-size, proportion meaning if you have one with 1 and another with 3, first is 1/4 and second is 3/4 of page.

STARTUP HTML AND CSS NOTES:
So far I've powered through most of the code using knowledge from past projects, and I'm very happy with how it looks at the moment. As of this moment, I've managed to make a prototype bar graph as depicted in my sketch using meters. While I'm fairly certain there's a better way to do this, I won't be able to implement any of it until I at the very least learn javascript and most likely until I learn about websockets. I'm pretty happy with my placeholder solution, I'm going to convert it from a list to a table so they're all lined up, but other than that they work well as placeholders. I also still need to make several image assets so I have a placeholder image, I may make those before this segment is due though so this may be a moot point. Custom classes are amazing, I've been using several to style specific sections (see also the gross main page of my site). The rest of my pages had similar formatting to the Simon pages, so I was able to rebuild it from memory with the changes and additions to make it my own. Overall, super happy with the visuals and I feel I have enough base understanding of css and html to add more pages if I so desire.
        
SIMON JS NOTES:
Javascript has been a toughie to learn- I intend to come back to this later and write a ton of notes about it because a lot of it confuses me. One thing I discovered while trying to get this deployed to my dev environment is that the webserver extension isn't case-sensitive with filenames, while my website is, leading to a while of fiddling and testing to get the audio files to appear and therefore for the game to work. While building I did get a fairly good idea of what I'll have to do to get my own startup to work the way I want it to. Namely, using DOM and local storage to create percent bars for voting. I should be able to store a total number of votes, and then use that combined with each individual category to create meters of the appropriate lengths. The loadSound() function is also useful because I like to sort my files into folders and that will allow me to clean up declarations in the code. 

GENERAL JS NOTES: 
async functions allow use of await
DOM = document. used for editing html and css in js code

STARTUP JS NOTES:
My startup javascript is very similar to a lot of the Simon code, so I was able to repurpose some of those pieces to get a basis for my application. I've built the results storage and table generation in such a way that once I learn remote storage I'm hoping the transition will be smooth. The hardest part for me was figuring out how to use DOM to change the colors of meters based on their names, since the colors are defined by values within the meter that I don't fully understand. I'm hoping to add some other voting/results pages so I'd like to have code that's easy to adjust for different pokemon guesses, and I believe I've accomplished that. By adjusting some minor values I should be able to make some more guess pages. I won't add those right at this moment but those commits may be up by the time this is graded. 

SIMON SERVICE NOTES
I've been having minor issues using node, especially with curl and whatnot, but I've mostly figured it out. For one, when I use curl the syntax is 
curl http://localhost:8080
and when I use get and post I have to use the built in commands instead of using -x for custom commands. 
Create endpoints for services I need to retrieve remotely
Express package gives functionalities for use get and post, interfacing with middleware
Cookie-parser handles cookie generation and access
Error handlers have regular use cases but also take err param
Need to ssh in to install node on server and restart it 

SIMON DB NOTES
After walking through the mongo code, it should be extremely easy to update my startup, as the code I use to store and update my guess values is very close to the original simon code. I'm really hoping it will go slightly smoother than getting simon to work (I had several minor issues caused by missing sections of the instruction). 
ADDITIONAL NOTES: 
sudo vi /etc/environment to edit environment variables. 
After updating run pm2 restart all --update-env and pm2 save to ensure code uses updated vars.
mongo connection string : mongodb+srv://<username>:<password>@dallark.1fldlo4.mongodb.net
To connect, construct the url with env variables, then make a new client with the url, then make/connect to the needed db and collection. 
Use index.js to process api requests with express and implement actual functions in separate.
Use await for mongo access.
Mongo stores JSON objects in collections. 
