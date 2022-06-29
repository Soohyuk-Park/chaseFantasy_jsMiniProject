const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const endPoint = qnaList.length;
const result = document.querySelector("#result");
const select = [];
// const endPoint = qnaList.length;



function calResult(){
  let pointArray =[0,0,0,0]

  for( let i = 0; i < endPoint; i++){
    let target = qnaList[i].a[select[i]].type;
    for( let j = 0; j < target.length; j++){
      pointArray[j+1] += target[j];
    }
  }
  let result = pointArray.indexOf(Math.max(...pointArray));
  console.log(result);
  return result;
}

function setResult(){
  let point = calResult();
  console.log(point);
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[point-1].name;

  let resultImg = document.createElement('img');
  let imgDiv = document.querySelector('.resultImg')
  resultImg.classList.add('resultImage');
  resultImg.classList.add("img-fluid")
  resultImg.src = infoList[point-1].resImg;
  imgDiv.appendChild(resultImg);
  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;
}

function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
      result.style.WebkitAnimation = "fadeIn 1s";
      result.style.animation = "fadeIn 1s";
      setTimeout(() => {
        qna.style.display = "none";
        result.style.display = "block"
      }, 440)
    })
    setResult();
}

  function addAnswer(answerText, qIdx, idx) {
    let a = document.querySelector('.answerBox');
    let answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');
    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", () => {
      let children = document.querySelectorAll('.answerList');
      let childIm = document.querySelector('.nowImage')
      let iBox = document.querySelector(".iBox")
      for (let i = 0; i < children.length; i++) {
        children[i].disabled = true;
        children[i].style.WebkitAnimation = 'fadeOut 0.5s';
        children[i].style.animation = 'fadeOut 0.5s';
      }
      setTimeout(() => {
        select[qIdx] = idx;
        iBox.removeChild(childIm);
        for (let i = 0; i < children.length; i++) {
          children[i].style.display = 'none';
        }
        goNext(++qIdx);
      }, 550)
    }, false);
  }

  function goNext(qIdx) {
    if (qIdx === endPoint) {
      goResult();
      return;
    }
    let q = document.querySelector(".qBox");
    let ii = document.querySelector(".iBox")
    let nowIm = document.createElement('img');
    nowIm.classList.add('nowImage');
    nowIm.src = qnaList[qIdx].im;
    // nowIm.classList.add('img-fluid');
    // nowIm.classList.add("col-lg-6 col-md-8 col-sm-10 mx-auto");
    ii.appendChild(nowIm)
    q.innerHTML = qnaList[qIdx].q;
    for (let i in qnaList[qIdx].a) {
      addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    };
    let status = document.querySelector('.statusBar');
    status.style.width = (100 / endPoint) * (qIdx) + '%';
  }

  function begin() {
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
      qna.style.WebkitAnimation = "fadeIn 1s";
      qna.style.animation = "fadeIn 1s";
      setTimeout(() => {
        main.style.display = "none";
        qna.style.display = "block"
      }, 440)
      let qIdx = 0;
      goNext(qIdx);
    }, 440);

    // main.style.display = "none";
    // qna.style.display = "block";
  }
