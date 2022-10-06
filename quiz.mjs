import questions from './questions.mjs'

let startbtn = document.querySelector(".startbtn")
let questionblock = document.querySelector(".questionblock")
let scoreblock = document.querySelector(".scoreblock")
let timings = document.querySelector(".timings")

scoreblock.style.display = 'none'
questionblock.parentElement.style.display = 'none'

let qsn = [...questions]
let i = 0;
let ans = 0;
let n = 0;

//  todo function for start quesions
startbtn.addEventListener("click", () => {

    startbtn.parentElement.parentElement.style.display = 'none'
    questionblock.parentElement.style.display = 'flex'
    onequestion()
    setInterval(time, 100000)
    n = 0;
    setInterval(() => {
        timings.innerHTML = `Time : ${n++}`
    },1000)
})



function time() {
    i = 0;
    scoreblock.style.display = 'flex'
    questionblock.innerHTML = ''
    questionblock.parentElement.style.display = 'none'
    scoreblock.children[0].children[0].children[0].innerHTML = ans

    scoreblock.children[0].children[1].addEventListener("click", () => {
        scoreblock.style.display = 'none'
        startbtn.parentElement.parentElement.style.display = 'flex'
        clearInterval(time())
    })
}

//  todo function to display each question
function onequestion() {
    questionblock.innerHTML = `
 <h1>${qsn[i].que}</h1>
 <ul class='select'>
 <li>${qsn[i].answer[0].text}</li>
 <li>${qsn[i].answer[1].text}</li>
 <li>${qsn[i].answer[2].text}</li>
 <li>${qsn[i].answer[3].text}</li>
 </ul>
 <button class='submit'>Submit</button>
 `

    let btn = document.querySelector(".submit")
    let select = document.querySelector(".select")

    select.addEventListener("click", (e) => {
        console.log(e.target.innerHTML)
        e.target.style.background = '#777'


        btn.onclick = function () {
            for (let j = 0; j < 4; j++) {
                if (qsn[i].answer[j].answer == true) {
                    if (e.target.innerHTML == qsn[i].answer[j].text) {
                        console.log("answer is true")
                        ans++
                    }
                    else {
                        console.log("answer is wrong")
                    }
                }
            }

            if (i < qsn.length - 1) {
                i++
                onequestion()
            } else {
                i = 0;
                scoreblock.style.display = 'flex'
                questionblock.innerHTML = ''
                questionblock.parentElement.style.display = 'none'
                scoreblock.children[0].children[0].children[0].innerHTML = ans

                scoreblock.children[0].children[1].addEventListener("click", () => {
                    scoreblock.style.display = 'none'
                    startbtn.parentElement.parentElement.style.display = 'flex'
                })
            }
        }
    })
}

