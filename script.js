//write first method
function sleepIn(weekday,vacation) {
    if(!weekday || vacation){
        return true;
    }else {
        return false;
    }
}


//write second method
function monkey_trouble(a_smile, b_smile) {
    if(a_smile && b_smile){
        return true;
    }
    if(!a_smile && !b_smile){
        return true;
    }
    if((!a_smile && b_smile) || (a_smile && !b_smile)){
        return false;
    }
}

function string_times (word, times){
    var answer = "";
    for(var i=0; i<times; i++){
        answer = answer + word;
    }
    return answer;
}



function front_times (word, times){
    var answer = "";
    for(var i=0; i<times; i++){
        answer = answer + word.substring(0, 3);
    }
    return answer;
}

function string_bits(word){
    var answer = "";
    for(var i=0; i<word.length; i+=2){
        answer = answer + word[i];
    }
    return  answer;
}


function caughtSpeeding(speed, birthday){
    if(birthday == false) {
        if (speed <= 60) {
            return 0;
        }
        if (speed >= 81) {
            return 2;
        }
        if (speed <= 80 && speed >= 61) {
            return 1;
        }
    }
    if(birthday == true){
        if(speed <=65){
            return 0;
        }
        if(speed >= 86){
            return 2;
        }
        if(speed <=85 && speed >= 66){
            return 1;
        }
    }
}


function fizz_buzz(x){
    if((x % 3 == 0) && (x % 5 == 0)){
        return "FizzBuzz";
    }
    if((x % 5 !== 0) && (x % 3 !== 0)){
        return x + "!";
    }
    if(x % 5 == 0){
        return "Buzz";
    }
    if(x % 3 == 0){
        return "Fizz";
    }

}


function teaParty(tea,candy){
    if(tea < 5 || candy < 5){
        return 0;
    }
    if(tea >= candy*2 || candy >= tea*2){
        return 2;
    }
    if(tea >= 5 && candy >= 5){
        return 1;
    }
}


function blackjack(x,y){
    if(x<=21 && y>21){
        return x;
    }
    if(y<=21 && x>21){
        return y;
    }
    if(x>21 && y>21){
        return 0;
    }
    if(21 - x > 21-y){
        return y;
    }

    if(21 - x < 21 - y){
        return x;
    }
    if(21 - x == 21 - y){
        return 0;
    }
}


function loneSum(a,b,c){
    if(a !== b && b!== c && a !== c){
        return a + b + c;
    }
    if(a == b && b!==c){
        return c;
    }
    if(a !== b && b!== c && a == c){
        return b;
    }
    if(a !== b && b == c){
        return a;
    }
    if(a == b && b == c && c == a){
        return 0;
    }
}






//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}