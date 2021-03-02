// bu array barcha belgilar, ularning nomi kiritilgan
let signsArr = [{
        id: 1,
        title: `Angular Js`,
        source: `../images/signs/angular.png`
    },
    {
        id: 2,
        title: `React Js`,
        source: `../images/signs/react.svg`
    },
    {
        id: 3,
        title: `Vue Js`,
        source: `../images/signs/vue.png`
    },
    {
        id: 4,
        title: `Javascript`,
        source: `../images/signs/Javascript.png`
    },
    {
        id: 5,
        title: `Python`,
        source: `../images/signs/python.png`
    },
    {
        id: 6,
        title: `Flutter`,
        source: `../images/signs/flutter-logo.svg`
    },
    {
        id: 7,
        title: `Swift`,
        source: `../images/signs/swift.png`
    },
    {
        id: 8,
        title: `Node Js`,
        source: `../images/signs/nodejs.png`
    },
    {
        id: 9,
        title: `Java`,
        source: `../images/signs/java.png`
    },
    {
        id: 10,
        title: `HTML5`,
        source: `../images/signs/html.png`
    },
    {
        id: 11,
        title: `Golang`,
        source: `../images/signs/go.png`
    },
    {
        id: 12,
        title: `Dart`,
        source: `../images/signs/dart.png`
    },
    {
        id: 13,
        title: `CSS3`,
        source: `../images/signs/css3.png`
    },
    {
        id: 14,
        title: `C++`,
        source: `../images/signs/cpp.png`
    },
    {
        id: 15,
        title: `C`,
        source: `../images/signs/c.webp`
    },
    {
        id: 16,
        title: `TypeScript`,
        source: `../images/signs/ts.png`
    },
    {
        id: 17,
        title: `Scala`,
        source: `../images/signs/scala.png`
    },
    {
        id: 18,
        title: `Rust`,
        source: `../images/signs/rust.png`
    },
    {
        id: 19,
        title: `Ruby`,
        source: `../images/signs/ruby.png`
    },
    {
        id: 20,
        title: `Perl`,
        source: `../images/signs/perl.png`
    },
    {
        id: 21,
        title: `Kotlin`,
        source: `../images/signs/kotlin.png`
    },
    {
        id: 22,
        title: `C#`,
        source: `../images/signs/csharp.png`
    },
    {
        id: 23,
        title: `CoffeeScript`,
        source: `../images/signs/coffescript.svg`
    },
    {
        id: 24,
        title: `Hamler`,
        source: `../images/signs/hamler.png`
    },
    {
        id: 25,
        title: `Erlang`,
        source: `../images/signs/erlang.png`
    },
    {
        id: 26,
        title: `Elixir`,
        source: `../images/signs/elixir.png`
    },
    {
        id: 27,
        title: `Elm`,
        source: `../images/signs/elm.png`
    },
    {
        id: 28,
        title: `Objective C`,
        source: `../images/signs/obj.png`
    },
    {
        id: 29,
        title: `Lua`,
        source: `../images/signs/lua.png`
    },
    {
        id: 30,
        title: `Clojure`,
        source: `../images/signs/clojure.png`
    },
    {
        id: 31,
        title: `R`,
        source: `../images/signs/r.svg`
    },
    {
        id: 32,
        title: `PHP`,
        source: `../images/signs/php.png`
    },
    {
        id: 33,
        title: `Delphi`,
        source: `../images/signs/delphi.png`
    },
    {
        id: 34,
        title: `Pascal.png`,
        source: `../images/signs/pascal.jpeg`
    },
    {
        id: 35,
        title: `SQL`,
        source: `../images/signs/sql.png`
    },
    {
        id: 36,
        title: `Assembly`,
        source: `../images/signs/assembly.png`
    },
    {
        id: 37,
        title: `Django`,
        source: `../images/signs/django.png`
    },
    {
        id: 38,
        title: `XML`,
        source: `../images/signs/xml.png`
    },
    {
        id: 39,
        title: `Arduino`,
        source: `../images/signs/arduino.png`
    },
    {
        id: 40,
        title: `.NET`,
        source: `../images/signs/net.png`
    },
    {
        id: 41,
        title: `Git`,
        source: `../images/signs/git.png`
    },
    {
        id: 42,
        title: `Rails`,
        source: `../images/signs/rails.png`
    },
    {
        id: 43,
        title: `Matlab`,
        source: `../images/signs/matlab.png`
    },
    {
        id: 44,
        title: `Lisp`,
        source: `../images/signs/lisp.png`
    },
    {
        id: 45,
        title: `Julia`,
        source: `../images/signs/julia.png`
    },
]

// tasodifiy tanlab olingan object lar uchun arraydir bu - 
let selectedArr = [];

// random funksiyasi keltirilgan bu yerda
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// savol chiqadigan maydon
let quizQuestion = document.querySelector('#quiz__question');
// savollar yachaykasi bu
let quizOptions = document.querySelector('#quiz__options');
// start buttondir bu
let startBtn = document.querySelector('#start-btn');
// section 1 class bilan chaqiriladi
let sectionOne = document.querySelector('.section1');
// section 2 class bilan chaqiriladi
let sectionTwo = document.querySelector('.section2');
// testning levelini tanlash uchun select bu - 
let levelForTest = document.querySelector('#level-for-test');
let timeForTest = document.querySelector('#time-for-test');
// savol maydonchasi
let questionSpace = document.querySelector('#question-space');
let modal = document.querySelector('.modal');
// sahifa yuklangandagi ilk bajariladagan holat va funksiyalar bu -
// window.addEventListener('load', () => {
//     aTagsCreator(levelForTest.value);
// })
function aTagsCreator(processLength) {

    // console.log(processLength.target.value);

    // rasm chiqadigan maydonlarni yaratadigan function bu - 
    console.log(processLength);
    console.log('level' + processLength);
    // bu code maydonni tozalab tashlash uchun ishlatiladi
    randomSelectingItems(processLength);
    quizOptions.textContent = '';
    let randomNumberTitle = getRandomInt(processLength);
    for (i = 1; i <= processLength; i++) {
        // let randomNumberImage = getRandomInt(processLength);

        let aTag = document.createElement('button');
        let image = document.createElement('img');
        image.setAttribute('src', `${selectedArr[i-1].source}`);
        image.setAttribute('class', 'image-area');
        aTag.setAttribute('data-image-id', selectedArr[i - 1].id)
        aTag.setAttribute('class', 'question-area');
        questionSpace.textContent = selectedArr[randomNumberTitle].title;
        questionSpace.setAttribute('data-id', selectedArr[randomNumberTitle].id)

        quizOptions.appendChild(aTag);
        aTag.appendChild(image);
    }

    let btn = document.querySelectorAll('.question-area');
    // console.log(btn);
    // let images = doc1ument.querySelectorAll('.image-area');
    btn.forEach(button => {
        button.addEventListener('click', () => {
            if (button.dataset.imageId == questionSpace.dataset.id) {
                button.style.opacity = '.4';
                button.style.backgroundColor = 'grey';
                button.style.cursor = 'not-allowed';
                button.style.transform = 'scale(1)';
                button.disabled = true;
                selectedArr = selectedArr.filter(el => el.id != button.dataset.imageId)
                document.querySelector('#correct-answer').play();

                btn.forEach(item => {
                    item.classList.remove('wrong-border');
                    item.disabled = false;
                    item.style.cursor = 'pointer'
                })

                if (selectedArr.length == 0) {
                    timingFunction(0);
                    modal.classList.add('active');
                    modalValue.textContent = 'You win the GAME! Great!';
                }

                let randomNumberTitle = getRandomInt(selectedArr.length);
                questionSpace.textContent = selectedArr[randomNumberTitle].title;
                questionSpace.setAttribute('data-id', selectedArr[randomNumberTitle].id);


            } else {
                button.classList.add('wrong-border');
                button.disabled = true;
                button.style.cursor = 'not-allowed';
                document.querySelector('#wrong-answer').play();

            }
        })
    })
}
// level tanlash selecti o'zgartirilganda savollar soni uchun ochiladigan maydor ham o'zgaradigan holatdir bu -
// levelForTest.addEventListener('change', (e) => aTagsCreator(parseInt(e.target.value)))


// start button bosilganda savollar oynasining ochilish hodisasi
let setInt = 0;
startBtn.addEventListener('click', function () {
    sectionOne.classList.remove('active');
    sectionTwo.classList.add('active');

    let gameType = parseInt(levelForTest.value)
    aTagsCreator(gameType)
    let givenTime = parseInt(timeForTest.value) * 60;

    setInt = setInterval(() => {

        timingFunction(givenTime);

        // tanlangan vaqt -1 ga kemayasi har bir secondda
        givenTime--;
    }, 1000);
})

let modalValue = document.querySelector('#modal-value');
let timeTable = document.querySelector('#time-table');

function timingFunction(givenTime1) {

    if (givenTime1 == 0) {
        clearInterval(setInt)
        let buttons = document.querySelectorAll('.question-area');
        buttons.forEach(button => {
            button.disabled = true;
            button.style.opacity = .5;
            button.style.cursor = 'not-allowed';
            button.style.transform = 'scale(1)';
        })
        modal.classList.add('active');
        modalValue.textContent = 'Game over. Try again';
        document.querySelector('#final-answer').pause();
        document.querySelector('#winning').play();
    }

    if (givenTime1 >= 30) {
        document.querySelector('#main-theme').play();
    } else {
        document.querySelector('#main-theme').pause();
    }

    if (givenTime1 == 29) {
        document.querySelector('#final-answer').play();
    }

    minute = Math.floor(givenTime1 / 60);
    second = givenTime1 % 60;

    if (second < 10 && second >= 0) {
        timeTable.innerHTML = `0${minute} : 0${second}`;
    } else {
        timeTable.innerHTML = `0${minute} : ${second}`;
    }
}

let audioChecker = false;
document.querySelector('.audio-checker').addEventListener('click', function () {
    this.classList.toggle('not-active');

    audioChecker = !audioChecker;

    if (audioChecker) {
        document.querySelectorAll('.audios').forEach(item => {
            item.muted = true;
        })
        this.innerHTML = '🔇';
    } else {
        document.querySelectorAll('.audios').forEach(item => {
            item.muted = false;
        })
        this.innerHTML = '🔉';
    }


    console.log(audioChecker);
})



function randomSelectingItems(num) {
    console.log(num);
    for (let i = 1; i <= num;) {

        let randomNumber = getRandomInt(signsArr.length);
        if (!selectedArr.includes(signsArr[randomNumber])) {
            selectedArr.push(signsArr[randomNumber]);
            i++;
        }
        // selectedArr.push(signsArr[randomNumber]);

    }

    console.log(selectedArr);
}