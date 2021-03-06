const posts = [
  {
    id: 12,
    title: 'ReactJS Meetup Talk on Bash Scripting in Webpack',
    image: './bash-scripts-talk.png',
    alt: 'Shot from the slidedeck for the talk.',
    interactiveLink: 'https://docs.google.com/presentation/d/1zdsfh6ut2TF5NOwfsC9LhXUiyQ_QXynoif1oVJV4MpQ/edit?usp=sharing',
    interactiveLinkTitle: 'Link to the Slide Deck',
    body: 'I was happy to be able to present my first ReactJS meetup talk on Bash scripting with Webpack. In front of perhaps 70 or 80 people, I discussed how I have used Bash scripts to make the process of configuring Webpack less painful. In a nutshell, these scripts allow one to do a lot of the repetitive and tedious work of setting up the file structure, the config, boilerplate code, etc (and isn\'t the whole point of programming to make our lives easier and leave the repetitive stuff to the machines?) I got a good reception and some thought-provoking questions, especially as concerns how this approach might translate to Windows. All in all, it was a very rewarding event! If you want to learn more, check out the slide deck (linked above).',
    secondPara: '',
    thirdPara: '',
    date: 'January 17, 2017',
  },
  {
    id: 11,
    title: 'Whiteboarding 101',
    image: './whiteboarding.jpg',
    alt: 'Me teaching the whiteboarding lesson.',
    note: 'Image courtesy of Mike Limberg via Twitter.',
    github: 'https://github.com/gness1804/whiteboarding-101',
    body: 'I had the privilege of giving a lesson today on whiteboarding during a Friday Spike at Turing. I spoke about principles of whiteboarding for technical interviews, such as understanding the primacy of communication and the problem-solving process. We then worked through two problems together and divided into groups afterwards to go through other problems.',
    secondPara: 'The turnout was significant, and I feel that the session made a positive impact. It provided me with valuable teaching and whiteboarding experience, and it helped others (particularly from the earlier modules) understand the process of whiteboarding. For more details, check out my repo linked at the top of this post.',
    date: 'December 23, 2016',
  },
  {
    id: 10,
    title: 'Turing and Name.com Hackathon',
    image: './hackathon-12-8-16.jpg',
    alt: 'Our group working at the hackathon.',
    note: 'Image courtesy of Casey Cross via Twitter',
    body: 'On December 8, I participated in my first hackathon, which was hosted by Turing School and Name.com. I wasn\'t sure what to expect, but it turned out to be a tremendously fun and rewarding experience. After plying us with pizza and soda, the organizers presented us with a merry little challenge: create an application based on the theme of "regifting" in only an hour and a half. Several dozen members of the Turing community comprised several teams, all of which bore holiday-related names.',
    secondPara: 'Our team consisted of Susi Irwin (back end), Casey Cross (front end), David Knott (back end), MaryJane Valade (front end), and me (front end). After brainstorming various ideas, we decided to go with an application that would allow users to track their gifts (using barcodes) in order to monitor the notorious practice of regifting. We decided to do the project in vanilla JavaScript and a basic html, css, and JS structure. Our workflow consisted of the front-enders taking charge of the styling and page structure while the back enders pitched in with innovative ideas, such as a carousel-style display of epically bad gifts, and crucial insights on programming logic.',
    thirdPara: 'Our MVP was a website with a login page and site guidelines in addition to a landing page. Though these features were of course not actually implemented, the site mocked a dynamic login and Amazon integration with a three-tiered subscription plan. We all worked really well together, and I came to appreciate the kindness and sense of humor of my teammates as much as their programming skills. Indeed, this experience is reflective of how Turing really has made me into a better person in addition to a better developer. I\'d highly recommend a hackathon like this for any programmer looking to have a fun time and contribute to the larger community. Thanks to Turing and Name.com for a great event!',
    date: 'December 10, 2016',
  },
  {
    id: 9,
    title: 'How to Draw an Owl',
    image: './how-to-draw-owl.jpg',
    alt: 'Me giving the tutorial.',
    note: 'Photo courtesy of Chelsea Skovgaard',
    github: 'https://github.com/gness1804/how-to-draw-an-owl',
    body: 'Yesterday, I presented a workshop for the Verou posse at Turing called "How to Draw an Owl." This was an interactive tutorial on HTML5 Canvas. If you\'re not familiar with Canvas, it is a powerful tool for drawing images using JavaScript.',
    secondPara: 'In the tutorial, we discussed how to draw rectangles, triangles, and circles using the technology. It turns out that Canvas is in some ways simple and complex: simple in that it involves relatively small number of methods for the core functionality, and complex in that there are so many moving parts and spatial challenges to consider, especially in larger projects. In our session, we are able to draw the head and discuss ways to create the beak.',
    thirdPara: 'It is great to work with such energetic and passionate people. I look forward to our next event!',
    date: 'December 3, 2016',
  },
  {
    id: 8,
    title: 'Flash Shopper',
    image: './flash-shopper.png',
    alt: 'Screen shot of Flash Shopper.',
    note: '',
    github: 'https://github.com/gness1804/grocery-list-react',
    interactiveLink: 'https://grocery-list-caef5.firebaseapp.com/',
    body: 'So it\'s been quite a long time since I\'ve written an entry. A lot has happened in the world and in my life since then. Those curious about the various projects I have done can check out my project page (https://gness1804.github.io/portfolio-site/index.html#/projmenu); this entry will focus on one personal project that I have been working on called Flash Shopper. This is a grocery list app that allows the user to enter in an item with an aisle number, quantity, and a note; sort items alphabetically and by aisle; delete items; and delete all items from the page. It is a handy application that I use in my own grocery shopping.',
    secondPara: 'This application\'s evolution began in the summer, when I needed a convenient way to render my grocery list. My first attempt was a simple listing app that contained no local storage, since I did not yet know how to persist data (if you are curious, it is at https://github.com/gness1804/king-soopers-list). My second iteration involved local storage, but the main problem was that it only stored data on a given browser in one device. Thankfully, after learning about Firebase, I was able to implement this technology to solve this problem with my most recent version.',
    thirdPara: 'In the future, I hope to use Redux to allow easy editing of items and to add functionality to show when an item is in the cart.',
    date: 'November 27, 2016',
  },
  {
    id: 7,
    title: 'iOS Class with Erika Carlson, 10-02-16',
    image: './iOS-class.jpg',
    alt: 'Our class hard at work.',
    note: 'Image courtesy of Erika Carlson',
    body: 'I just completed a two-day course on iOS development with Erika Carlson of Detroit Labs (www.detroitlabs.com). I learned a great deal about developing for iOS during this intensive session. In particular, we delved into the Swift language and built some basic apps. I was excited to learn from Erika and to work with such talented and passionate people during this experience. Thanks to them and most of all to Erika for everything! It certainly gave me a lot to think about moving forward.',
    date: 'October 2, 2016',
  },

  {
    id: 6,
    title: 'Bluecifer\'s Revenge',
    image: './game-time.png',
    alt: 'Screen shot of Bluecifer\'s Revenge.',
    github: 'https://github.com/gness1804/game-time',
    interactiveLink: 'https://gprocell927.github.io/game-time/',
    body: 'My fellow students Gabi Procell and Lacey Knaff and I just finished Bluecifer\'s Revenge, a side-scrolling game where you must keep your avatar, the eponymous demonic horse from Denver International Airport (DIA), from hitting airplanes or falling to the ground as he flies (yes, flies) back home to DIA. The airplanes get faster as the score increases, and I also added an "Easter Egg" that the intrepid gamer might just encounter.',
    secondPara: 'The two most difficult parts of the project were figuring out a way to make the airplanes spawn and keep track of them, as well as re-creating the game\'s functionality after breaking up all the JS files as discussed above. With respect to the first challenge, we initially devised a method of controlling and spawning enemies based on a combination of JS requestAnimationFrame and setTimeout. In short, we created three enemies with independent JS functions, and "staggered" their appearance using setTimeouts. (We made the enemies "loop" by resetting their x positions when they flew off the screen.) While this approach had the benefit of relative simplicity, as it did not necessitate an array, we found that it greatly increased the game\'s lag, since all those setTimeouts were continually firing. In order to solve this problem, we ended up creating an array that stored all the enemies and could also be used to remove all enemies from the screen when needed (such as then the player wins or loses).',
    thirdPara: 'The second, and more painful, problem mentioned above--the problem of re-creating functionality after a major revision to the code--taught us a sobering lesson: never perform open-heart surgery on your code without making atomic tests to make sure everything that you change is working, when you change it. That is, console log, alert, or use another method to test functionality each time you make a change in the code, rather than after you have moved most of your JS to new pages. We spent hours re-establishing all of the functionality; much of that time could have been saved with methodical, atomic tests as we progressed. It was a hard lesson that will serve us well moving forward as programmers.',
    date: 'September 25, 2016.',
  },

  {
    id: 5,
    title: 'Idea Box',
    image: './idea-box.png',
    alt: 'Screen shot of Idea Box.',
    github: 'https://github.com/gness1804/IdeaBox',
    interactiveLink: 'https://adam-rice.github.io/IdeaBox/',
    body: 'So I\'ve been a bit sluggish on blogging...two projects back to back will do that do you. I\'m writing an update now on the first of these projects, known as "Idea Box", that I completed with Adam Rice, a fellow student in my cohort. Idea Box is an application that seems simple on the surface, but its execution involved many complex moving parts. The concept is as follows: the user enters in a title and body of an idea, which then both appear in separate lines at the bottom of the application. The application stores these attributes as well as the idea\'s "quality" ("genius", "plausible", or "swill") in local storage. The user can change an idea\'s quality, delete an idea, and search for text within the title and body of ideas presently on the page. Using JSON and local storage, the application keeps track of which ideas currently exist and their quality.',
    secondPara: 'In terms of division of labor, I wrote most of the JavaScript and Adam completed the bulk of the CSS. Our biggest challenge was learning to use JSON and local storage to enable data to persist after page reloads. After experimenting with many ideas, we achieved data persistence using object constructors and object literals. By pushing each idea into an array, we found that we could keep track of each and pinpoint its location in order to modify and delete it in local storage according to user input.',
    thirdPara: 'This project serves as the foundation for many other front-end web applications, as its core functionalities of retrieving, storing, modifying, and deleting user information are the basis for a wide range of technologies and platforms. As such, this project afforded me the opportunity to built a strong basis for subsequent work in areas ranging from social networking to travel.',
    date: 'September 25, 2016',
  },

  {
    id: 4,
    title: 'A "Linked List"',
    image: './linked-list.png',
    alt: 'Screen shot of Linked List.',
    github: 'https://github.com/gness1804/linked-list',
    interactiveLink: 'https://gness1804.github.io/linked-list/',
    body: 'I just completed my second project at Turing, a "linked list" with fellow student Alex Pilewski. Our project involved creating a site where the user could enter in a title and url of favorite sites. The program organizes the user\'s entries into bookmarks that can be toggle "read" and "unread". The user has the option of marking all bookmarks on the page as read, removing all bookmarks, and removing all read bookmarks. The program keeps track of the number of bookmarks on the page as well as the number of read and unread ones currently on the page.',
    secondPara: 'Our biggest challenge was coordinating all of the functions to keep count of the read and unread bookmarks and all those currently on the page. I initially wrote some jQuery that used the global variable count = 0 and reassigned this variable when the user submitted a bookmark and removed a bookmark, but the addition of the functionality to keep track of read and unread bookmarks, and in particular the fact that the "Mark as Read" button within each bookmark toggled the class of "read", necessitated a different approach.',
    thirdPara: 'At the end of the day, we created a functional program using jQuery, CSS, and HTML. Alex did the majority of the CSS, and I focused on the JavaScript. This project not only helped us improve out JavaScript and jQuery skills but also afforded us the opportunity to learn how to write focused, well-organized CSS by creating several logically-organized stylesheets. The project also enhanced our knowledge of semantic HTML. I look forward to our next challenge!',
    date: 'September 3, 2016',
  },

  {
    id: 3,
    title: 'Number Guesser Project with Kinan Whyte',
    image: './number-guesser.png',
    alt: 'Screen shot of Number Guesser.',
    github: 'https://github.com/gness1804/number-guesser',
    interactiveLink: 'https://kswhyte.github.io/number-guesser/',
    body: 'I constructed a number guesser program with colleague Kinan Whyte during Module 1 at the Turing School of Software and Design, where I am a front-end engineering student. We created a program with basic functionality, albeit with a few hiccups. Our program accepts a number from the user (default range 0-100) and generates a pseudo-random number which it compares to the user\'s number. The program tells the user whether his/her number is too low, too high, out of the acceptable range, or not a number (such as text). If the user correctly guesses the computer\'s number, the program regenerates another pseudo-random value and adjusts the max and min by +10 and -10 respectively. The program also accepts optional max and min values from the user. Upon user submission of these values, the program regenerates a pseudo-random within the new range.',
    secondPara: 'Our main accomplishment was constructing an interactive quantitative program that responds to user input. We used JavaScript, CSS, and of course HTML in building this program. Kinan did most of the CSS and I wrote much of the JavaScript (though Kinan also made some crucial contributions in the latter area). We employed the Atom text editor to complete the project and made use of online resources such as a random number generator from MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random), which was the basis for our number generator.',
    thirdPara: 'We learned a great deal from this project. We both significantly improved our JavaScript skills, particularly in the areas of interactions between functions, structuring a JavaScript page, and refactoring JS to make it more readable and logically organized. The major snags we confronted were struggles to fix parts of the program that one of us had "broken" in revisions and attempting to make the program store the pseudo-random number during sessions while also resetting it when the user wins or hits the "reset" button, which returns the game to its default state (we also included a "clear" button to clear the input box). We successfully worked through these challenges with the invaluable assistance of colleagues and teachers at Turing.',
    date: 'August 25, 2016',
  },

  {
    id: 2,
    title: 'My New Cairn Terrier Site!',
    image: './images/puck.jpg',
    alt: 'Puck, my mom\'s Cairn Terrier.',
    interactiveLink: 'https://gness1804.github.io/cairn-terriers/',
    body: 'Check out my new Cairn Terrier site! It\'s a tribute to the dog breed coded from scratch. There\'s also a fun quiz where you can see how strong of a "fit" you are with a Cairn.',
    date: 'August 10, 2016.',
  },

  {
    id: 1,
    title: 'Charleston Wedding (May 21, 2016)',
    image: './images/charleston.jpeg',
    alt: 'The Charleston waterfront.',
    note: 'Photo taken by me in Charleston, May 21, 2016.',
    github: '',
    interactiveLink: '',
    body: 'I had been meaning to post about this for a while, but never got around to it. I recently attended the beautiful wedding of my cousin, Bruce, to Darim, whom he met in the Army. It was a great event and a precious time for family to converge.',
    secondPara: 'I was particularly happy to see my brother and mother there. I look forward to seeing the latter soon, when I return to Blacksburg!',
    thirdPara: 'All best wishes to Bruce and Darim!',
    date: 'June 3, 2016',
  },

];

export default posts;
