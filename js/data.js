let q1s1 = "당신은 환상의 문 앞에 도착했습니다.<br>힘든 일상에 지친 당신은 이제 새로운 직업을 가지고 여행을 떠나게 됩니다."
let q1s2 = "여행중 마주하게 될 힘든 상황을 극복하기 위해서 당신에게 가장 필요한 능력이 무엇일지 상상해보세요.<br>선택은 온전히 당신의 몫입니다."

let q2s1 = "하늘로 이어지는 초록의 숲에 도착한 당신은 자유롭게 행동할 수 있습니다.</br>당신을 매료하는 풍경들 속에서 무엇을 하기를 원하십니까?"
let q2s2 = "평화로운 시간 속에서 하는 행동은 당신이 조우하게 될 환상속 동물에게 큰 영향을 줄 수도 있습니다."


const qnaList = [
  {
    q: q1s1 + q1s2,
    a: [
      { answer: 'a. 강인한 체력을 바탕으로 용맹하게 나아가는 </br><strong>전사.</strong>', type: [3,1,2] },
      { answer: 'b. 민첩하게 위험을 회피하고 기회를 노리는 </br><strong>도적.</strong>', type: [1,2,3] },
      { answer: 'c. 기민한 정신력을 바탕으로 자연과 소통하는 </br><strong>마법사.</strong>', type: [2,3,1] },
    ],
    im: 'https://cdn.pixabay.com/photo/2017/10/23/03/05/fantasy-2880028_960_720.jpg'
  },
  {
    q: q2s1+q2s2,
    a: [
      { answer: 'a. 하늘을 향해 나아가서, 달에게 말을 건낸다.', type: [3,1,2] },
      { answer: 'b. 초록의 숲속에 몸을 맡긴채 나무에게 손을 내민다.', type: [1,2,3] },
      { answer: 'c. 부유하는 암석을 따라가기 위해 하늘로 높이 뛰어오른다.', type: [2,3,1] },
    ],
    im: 'https://cdn.pixabay.com/photo/2014/08/19/11/33/photo-manipulation-421405_960_720.jpg'
  },
  {
    q: '3. 당신의 고백 스타일은?',
    a: [
      { answer: 'a. 이성 사이에 친구가 어딨어? 절대 없어', type: [3,1,2] },
      { answer: 'b. 친구 있지, 절대 이성으로만 안 보일뿐', type: [1,2,3] },
      { answer: 'c. 난 잘 모르겠어..', type: [2,3,1] },
    ],
    im: 'https://cdn.pixabay.com/photo/2015/05/24/16/47/fantasy-782001__340.jpg'
  },
  {
    q: '4. 호감가는 고백 멘트를 고른다면?',
    a: [
      { answer: 'a. 이성 사이에 친구가 어딨어? 절대 없어', type: [3,1,2] },
      { answer: 'b. 친구 있지, 절대 이성으로만 안 보일뿐', type: [1,2,3] },
      { answer: 'c. 난 잘 모르겠어..', type: [2,3,1] },
    ],
    im: 'https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_960_720.jpg'
  }
]

const infoList = [
  {
    name: '연애 뭐 식은 죽 먹기죠, 연애 재능 만땅 <쥐>',
    desc: '연애의 프로재능러인 당신! 쥐에 해당하는 당신은 연애의 모든 것들을 알고 있어, 쉽게 연애에 성공하는 스타일이랍니다. 주로 포부가 크고 성격이 낙천적인 성향을 가지고 있고, 논리적이면서 두뇌회전이 매우 빠르다고 할 수 있어요. 말재주 또한 좋아 사교성이 좋고 유쾌하지만 화려한 것을 좋아해 허영심을 부리거나 사치를 부리기 때문에 이 점들을 주의해야 돼요. 뛰어난 능력에 자만하는 경우도 종종 있기 때문에 겸손이 필요하답니다! ',
    resImg: 'https://cdn.pixabay.com/photo/2018/06/08/17/23/dragon-3462724_960_720.jpg'
  },
  {
    name: '연애 뭐 식은 죽 먹기죠, 연애 재능 만땅 <쥐>',
    desc: '연애의 프로재능러인 당신! 쥐에 해당하는 당신은 연애의 모든 것들을 알고 있어, 쉽게 연애에 성공하는 스타일이랍니다. 주로 포부가 크고 성격이 낙천적인 성향을 가지고 있고, 논리적이면서 두뇌회전이 매우 빠르다고 할 수 있어요. 말재주 또한 좋아 사교성이 좋고 유쾌하지만 화려한 것을 좋아해 허영심을 부리거나 사치를 부리기 때문에 이 점들을 주의해야 돼요. 뛰어난 능력에 자만하는 경우도 종종 있기 때문에 겸손이 필요하답니다! ',
    resImg: 'https://cdn.pixabay.com/photo/2018/06/08/17/23/dragon-3462724_960_720.jpg'
  },
  {
    name: '연애 뭐 식은 죽 먹기죠, 연애 재능 만땅 <쥐>',
    desc: '연애의 프로재능러인 당신! 쥐에 해당하는 당신은 연애의 모든 것들을 알고 있어, 쉽게 연애에 성공하는 스타일이랍니다. 주로 포부가 크고 성격이 낙천적인 성향을 가지고 있고, 논리적이면서 두뇌회전이 매우 빠르다고 할 수 있어요. 말재주 또한 좋아 사교성이 좋고 유쾌하지만 화려한 것을 좋아해 허영심을 부리거나 사치를 부리기 때문에 이 점들을 주의해야 돼요. 뛰어난 능력에 자만하는 경우도 종종 있기 때문에 겸손이 필요하답니다! ',
    resImg: 'https://cdn.pixabay.com/photo/2018/06/08/17/23/dragon-3462724_960_720.jpg'
  },
  {
    name: '연애 뭐 식은 죽 먹기죠, 연애 재능 만땅 <쥐>',
    desc: '연애의 프로재능러인 당신! 쥐에 해당하는 당신은 연애의 모든 것들을 알고 있어, 쉽게 연애에 성공하는 스타일이랍니다. 주로 포부가 크고 성격이 낙천적인 성향을 가지고 있고, 논리적이면서 두뇌회전이 매우 빠르다고 할 수 있어요. 말재주 또한 좋아 사교성이 좋고 유쾌하지만 화려한 것을 좋아해 허영심을 부리거나 사치를 부리기 때문에 이 점들을 주의해야 돼요. 뛰어난 능력에 자만하는 경우도 종종 있기 때문에 겸손이 필요하답니다! ',
    resImg: 'https://cdn.pixabay.com/photo/2018/06/08/17/23/dragon-3462724_960_720.jpg'
  },
  {
    name: '연애 뭐 식은 죽 먹기죠, 연애 재능 만땅 <쥐>',
    desc: '연애의 프로재능러인 당신! 쥐에 해당하는 당신은 연애의 모든 것들을 알고 있어, 쉽게 연애에 성공하는 스타일이랍니다. 주로 포부가 크고 성격이 낙천적인 성향을 가지고 있고, 논리적이면서 두뇌회전이 매우 빠르다고 할 수 있어요. 말재주 또한 좋아 사교성이 좋고 유쾌하지만 화려한 것을 좋아해 허영심을 부리거나 사치를 부리기 때문에 이 점들을 주의해야 돼요. 뛰어난 능력에 자만하는 경우도 종종 있기 때문에 겸손이 필요하답니다! ',
    resImg: 'https://cdn.pixabay.com/photo/2018/06/08/17/23/dragon-3462724_960_720.jpg'
  },
]
