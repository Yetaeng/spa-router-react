# 👩‍💻 React와 History API를 사용하여 SPA Router 기능 구현해보기

## 📌 Intro
원티드 프리온보딩 챌린지 과제로 '리액트를 통해 간단한 SPA 만들어보기'를 진행했다.
Router, Route 컴포넌트를 직접 구현하고, 최소한의 push 기능을 가진 useRouter Hook을 만들어보았다.
<br /><br />

## 📌 I learned
### ✅ 부수 효과 (Side Effect)
부수 효과란, 리턴 값을 계산하는 것과 같이 함수의 주요 기능이 아닌 것 또는 함수 외부에 영향을 주는 것을 말한다.
```javascript
  window.onpopstate = () => {
    setCurrentPath(location.pathname);
  }
```
Router 함수에 위와 같은 코드가 있는데, 함수 외부인 window에 접근하므로 부수 효과를 발생시킨다. 이를 막기위해 useEffect를 사용하여 이벤트를 내부로 옮겨준다.
<br /><br />

## 📌 Next time
* replaceState 사용해서 같은 페이지로 이동했을 때 스택에 있는 이전 주소를 없애고 path 추가하기(push가 아닌 replace하기)