// When the page loads, call renderLyrics to start my song
$(document).ready(function() {
  console.log("Loaded, bro");
  renderLyrics();
  // renderLyricsAgain();
});

var songLyrics = [
  "Is this the real life?",
  "Is this just fantasy?",
  "Caught in a landslide,",
  "No escape from reality.",
  "Open your eyes,",
  "Look up to the skies and see,",
  "I'm just a poor boy, I need no sympathy,",
  "Because I'm easy come, easy go,",
  "Little high, little low,",
  "Anyway the wind blows doesn't really matter to me, to me.",
  "Mama, just killed a man,",
  "Put a gun against his head,",
  "Pulled my trigger, now he's dead.",
  "Mama, life had just begun,",
  "But now I've gone and thrown it all away.",
  "Mama, ooh,",
  "Didn't mean to make you cry,",
  "If I'm not back again this time tomorrow,",
  "Carry on, carry on as if nothing really matters.",
  "Too late, my time has come,",
  "Sent shivers down my spine,",
  "Body's aching all the time.",
  "Goodbye, everybody, I've got to go,",
  "Gotta leave you all behind and face the truth.",
  "Mama, ooh (anyway the wind blows),",
  "I don't wanna die,",
  "I sometimes wish I'd never been born at all.",
  "I see a little silhouetto of a man,",
  "Scaramouche, Scaramouche, will you do the Fandango?",
  "Thunderbolt and lightning,",
  "Very, very frightening me.",
  "(Galileo) Galileo.",
  "(Galileo) Galileo,",
  "Galileo Figaro",
  "Magnifico.",
  "I'm just a poor boy, nobody loves me.",
  "He's just a poor boy from a poor family,",
  "Spare him his life from this monstrosity.",
  "Easy come, easy go, will you let me go?",
  "Bismillah! No, we will not let you go. (Let him go!)",
  "Bismillah! We will not let you go. (Let him go!)",
  "Bismillah! We will not let you go. (Let me go!)",
  "Will not let you go. (Let me go!)",
  "Never, never let you go",
  "Never let me go, oh.",
  "No, no, no, no, no, no, no.",
  "Oh, mama mia, mama mia (Mama mia, let me go.)",
  "Beelzebub has a devil put aside for me, for me, for me.",
  "So you think you can stone me and spit in my eye?",
  "So you think you can love me and leave me to die?",
  "Oh, baby, can't do this to me, baby,",
  "Just gotta get out, just gotta get right outta here.",
  "(Oh, yeah, oh yeah)",
  "Nothing really matters,",
  "Anyone can see,",
  "Nothing really matters,",
  "Nothing really matters to me.",
  "Anyway the wind blows."
];

// Solution 1 using .shift()

function renderLyrics() {
  $('.song').append('<li>');
  var intervalId = setInterval(


    function() {
    if (songLyrics.length === 0){
      clearInterval(intervalId); // No more lyrics
    } else {


      var lyric = songLyrics.shift();

      console.log(lyric);
  		$('li').text(lyric).hide().slideDown();
      $('li').addClass('line');
    }
  }

  ,  2000);
};

// Solution 2 using an incrementer

// function renderLyricsAgain() {
//   var i = 0;
//   $('.song').append('<li>');
//   var intervalId = setInterval(function() {
//   		if (i === songLyrics.length) {
//   			clearInterval(intervalId);
//   		} else {
//     		$('li').text(songLyrics[i]).hide().slideDown();
//         $('li').addClass('line');
//     		i++;
//       }
//   }, 2500);
// };
