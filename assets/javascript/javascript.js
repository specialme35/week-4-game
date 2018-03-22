var randomBCount = 1;
var totalScores = [];
var rightNumber = true;
var wrongNumber = false;

var crystal = 
{
    crystalOne:
    {
        name:'crystal-1',
        value:0
    },
    crystalTwo:
    {
        name:'crystal-2',
        value:0
    }
    ,crystalThree:
    {
        name:'crystal-3',
        value:0
    },
    crystalFour:
    {
        name:'crystal-4',
        value:0
    },
}

var currentScore = 0;
var targetScore = 0;

var randomNum = function(min,max){
    return Math.floor(Math.random()* (max-min + 1))+ min;
}

function startup ()
{
    currentSCore = 0;
    targetScore = randomNum(19,120);
    console.log('TARGET SCORE: '+ targetScore)

    /*-----------------------------
     give crystals random numbers
     ------ ----------------------*/

     crystal.crystalOne.value = randomNum(1,12);
     crystal.crystalTwo.value = randomNum(1,12);
     crystal.crystalThree.value = randomNum(1,12);
     crystal.crystalFour.value = randomNum(1,12);
     console.log('CRYSTAL ONE VALUE' + crystal.crystalOne.value)

  

    $('#target-score').text(targetScore)

    for (var i=0; i<randomNumber.length; i++)
        if (randomNumber == rightNumber)
        {
            totalScores = Wins;
        }
}



$("#crystal-1").on("click", function()
{
    consol.log("")   
 
})
