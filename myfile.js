const quoteArr = [
  "First forget inspiration. Habit is more dependable. Habit will sustain you whether you're inspired or not. Habit will help you finish and polish your stories. Inspiration won't. Habit is persistence in practice.",
  "The battles that count aren't the ones for gold medals. The struggles within yourself—the invisible, inevitable battles inside all of us—that's where it's at.",
  'Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.',
  'If the highest aim of a captain were to preserve his ship, he would keep it in port forever.',
  "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.",
  "I do not try to dance better than anyone else. I only try to dance better than myself.",
  "What you do makes a difference, and you have to decide what kind of difference you want to make.",
  "There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind."];

const authorArr = [
  'Octavia Butler',
  'Jesse Owens',
  'Dale Carnegie',
  'Thomas Aquinas',
  'Maya Angelou',
  'Arianna Huffington',
  'Jane Goodall',
  'Mister Rogers'];

const colorArr = ["red","blue","green","yellow","purple"];

$(document).ready(function(){
  myfunction();
  $('#new-quote').click(myfunction);
});

let colorNum = 0;
function getclrNum(){
  let N = Math.floor(Math.random() * colorArr.length);
  if(colorNum != N) {
    colorNum = N;
    return colorNum;
  }
  else getclrNum();
}

let randomNum = 0;
function getNum(){
  let Num = Math.floor(Math.random() * quoteArr.length);
  if(randomNum != Num) {
    randomNum = Num;
    return randomNum;
  }
  else getNum();
}

const myfunction = () => {
  getNum();
  getclrNum();
  $('.text').animate({opacity:0}, 500, function(){
    $(this).animate({opacity:1, "color":colorArr[colorNum]}, 500);
    $('#text').text(quoteArr[randomNum]);
  });
  $('.author').animate({opacity:0}, 500, function(){
    $(this).animate({opacity:1, "color":colorArr[colorNum]}, 500);
    $('#author').text(authorArr[randomNum]);
  });
  $('.main').animate({backgroundColor:colorArr[colorNum]}, 1000);
  $('.icon2').animate({color:colorArr[colorNum]}, 1000);
  $('#new-quote').animate({backgroundColor:colorArr[colorNum]}, 1000);
 
  var user_id = "rahat_jamil17";
  var hash_tags = "Programming";

  $('#tweet-quote').on("click", ShareToTwitter);
  function ShareToTwitter(){
    let text = encodeURIComponent(quoteArr[randomNum]);
    let Shareurl = `https://twitter.com/intent/tweet?text=${text}&hashtags=${hash_tags}&via=${user_id}`;
    window.open(Shareurl,'_blank');
  }
}

