# xtend홈페이지 메인 리뉴얼
2023.07.23 디자인 진행 <br/>
2023.07.24 퍼블리싱 및 모션 구현 진행 <br/>
2023.07.25 GNB스크롤에 따라 노출/비노출, 푸터 하단 카피라이트 영역 추가, container div를 section으로 변경 <br/><br/>

## 기술스택
HTML, CSS, JavaScript
<br/><br/>
## 디자인 시 고려한 부분
XTEND는 단백질 보충제 브랜드입니다.<br/>
기존 사이트는 XTEND제품 할인판매와 구독 정책에 초점이 맞춰져 있었고 XTEND 이미지를 브랜딩하는 요소가 없어 아쉽게 느껴졌습니다.<br/> 
그래서 기존의 할인 및 구독 강조는 유지하되, 역동적인 타이틀 폰트, 와이드한 화면 구성, 활기찬 느낌의 모션으로 느낀 사이트 경험을 통해 XTEND에 트렌디한 이미지를 주고자 했습니다. <br/> 
<br/>
### 메인비주얼, 영역1
![](https://velog.velcdn.com/images/mimizl/post/8c26b36a-cc10-4658-a5f0-8d0f6e0099b7/image.gif)
- 기존에 홈페이지에 초점이 맞춰졌던 할인 판매를 메인비주얼 바로 아래에 배치했습니다,<br/>
- SUBSCRIBE NOW버튼은 hover시 신제품 컬러로 강조했고, 기울어진 사각형을 만들어 ease-in형태의 베지어곡선으로 채워지는 모션을 구현해 활기찬 느낌을 의도했습니다.
  <br/>
  <br/>
### 영역2 : 베스트셀러 제품 소개 영역
![](https://velog.velcdn.com/images/mimizl/post/29ad6fbe-96ae-4827-b0a3-42284d70939d/image.gif)
- 기존 사이트에서는 9개의 전제품을 베스트셀러에 모두 소개하고 있어 제품의 정보가 잘 들어오지 않았습니다.<br/> 베스트셀러 제품을 강조하기 위해 3가지 상위권 제품들만 소개했고 할인 구매 버튼에 강조색을 써 할인 이벤트를 각인시키려 했습니다.
<br/>
<br/>

### 영역3 : 제품 소개 영역
![](https://velog.velcdn.com/images/mimizl/post/b135c3b4-015f-47db-8fd6-2609d1171d24/image.gif)
- 타이틀은 transform: rotateX(90deg)에서 transform: rotateX(0deg)으로 트랜지션을 주었습니다.<br/>
- 기존 사이트에서 제품 소개가 눈에 잘 들어오지 않아 제품 소개 글 영역 스크롤 시 각 라인에 on 클래스가 토글되는 효과로 강조했습니다.
<br/>
<br>


### 영역4 : 태그 챌린지 소개 영역
![](https://velog.velcdn.com/images/mimizl/post/266cc2e3-1505-46dc-a2e6-edfd3fb15283/image.gif)
- 태그챌린지를 사용자에게 각인시키기 위해 태그명 영역을 따로 빼서 블러 트랜지션 했고, 베지어곡선으로 만진 강조된 ease-in느낌 모션을 추가했습니다.<br/>
- 챌린지에 참여한 유저들의 사진을 추가해 챌린지 참여를 유도했습니다.
