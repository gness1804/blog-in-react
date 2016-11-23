const posts = [
  {
    title: 'iOS Class with Erika Carlson, 10-02-16',
    image: '../../images/iOS-class.jpg',
    note: 'Image courtesy of Erika Carlson',
    body: 'I just completed a two-day course on iOS development with Erika Carlson of Detroit Labs (www.detroitlabs.com). I learned a great deal about developing for iOS during this intensive session. In particular, we delved into the Swift language and built some basic apps. I was excited to learn from Erika and to work with such talented and passionate people during this experience. Thanks to them and most of all to Erika for everything! It certainly gave me a lot to think about moving forward.',
    date: 'October 2, 2016',
  },

  {
    title: 'Bluecifer\'s Revenge',
    image: '../../images/game-time.png',
    github: 'https://github.com/gness1804/game-time',
    interactiveLink: 'https://gprocell927.github.io/game-time/',
    body: 'My fellow students Gabi Procell and Lacey Knaff and I just finished Bluecifer\'s Revenge, a side-scrolling game where you must keep your avatar, the eponymous demonic horse from Denver International Airport (DIA), from hitting airplanes or falling to the ground as he flies (yes, flies) back home to DIA. The airplanes get faster as the score increases, and I also added an "Easter Egg" that the intrepid gamer might just encounter.',
    secondPara: 'The two most difficult parts of the project were figuring out a way to make the airplanes spawn and keep track of them, as well as re-creating the game\'s functionality after breaking up all the JS files as discussed above. With respect to the first challenge, we initially devised a method of controlling and spawning enemies based on a combination of JS requestAnimationFrame and setTimeout. In short, we created three enemies with independent JS functions, and "staggered" their appearance using setTimeouts. (We made the enemies "loop" by resetting their x positions when they flew off the screen.) While this approach had the benefit of relative simplicity, as it did not necessitate an array, we found that it greatly increased the game\'s lag, since all those setTimeouts were continually firing. In order to solve this problem, we ended up creating an array that stored all the enemies and could also be used to remove all enemies from the screen when needed (such as then the player wins or loses).',
    thirdPara: 'The second, and more painful, problem mentioned above--the problem of re-creating functionality after a major revision to the code--taught us a sobering lesson: never perform open-heart surgery on your code without making atomic tests to make sure everything that you change is working, when you change it. That is, console log, alert, or use another method to test functionality each time you make a change in the code, rather than after you have moved most of your JS to new pages. We spent hours re-establishing all of the functionality; much of that time could have been saved with methodical, atomic tests as we progressed. It was a hard lesson that will serve us well moving forward as programmers.',
    date: 'September 25, 2016.',
  },

];

export default posts;
