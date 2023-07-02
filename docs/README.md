<p align="middle" >
  <img src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/0fefce79602043a9b3281ee1dd8f4be6" width="400">
</p>
<h2 align="middle">Level2 - 페이먼츠</h2>
<p align="middle">React 모바일 페이먼츠 애플리케이션</p>
</p>

![GIFMaker_me (1)](https://github.com/woowacourse/prolog/assets/72205402/e2b58967-983f-48c8-9875-7d7d0bf82971)

## 🔗 링크
[홈페이지 링크](https://thriving-malasada-009498.netlify.app/#/)<br>
[스토리북 링크](https://644b673fa2e9bbb9cb5a211e-lrslwmuvsi.chromatic.com/?path=/story/bank--%EC%9A%B0%EB%A6%AC%EC%B9%B4%EB%93%9C)<br>
[NPM패키지 배포 링크](https://www.npmjs.com/package/react-modal-patrick)

## 🚀 Getting Started
Component-Driven Development 에 따라 UI를 구성하고 재사용 가능한 Component를 작성합니다.

✔️ 모바일 타겟의 웹 앱을 구현하며 사용하기 편리한 모바일 UI/UX에 대해 고민해봅니다.  
✔️ 다른 라이브러리나 프레임워크 없이 오로지 React만으로 상태를 관리하고 컴포넌트를 설계합니다.  
✔️ 재사용 가능한 Component를 직접 작성하고 사용합니다.  
✔️ React Hooks API를 활용합니다.  
✔️ Controlled & Uncontrolled Components에 입각하여 Form을 핸들링합니다.  
✔️ 라이브러리를 사용하는 개발자에게 친절한 API 문서를 제공합니다.  
✔️ 라이브러리를 사용하는 개발자와 코드로 소통합니다.  
✔️ 다양한 모듈 대응 케이스를 고민해보고 실제로 NPM에 출시합니다.  
✔️ Semantic Versioning이 왜 필요한지 고민해봅니다.  

## 📝 필수 요구 사항
### 카드 등록을 위한 form을 CDD로 구현한다.
- Storybook으로 UI 컴포넌트 렌더링
- REQUIREMENTS.md에 요구 사항 도출
- 재사용 가능한 Component 작성
### 카드 등록 과정에서 발생할 수 있는 여러 스토리를 고려하여 구현한다.
- 주요 컴포넌트에 대한 Storybook 상호 작용 테스트
- Controlled & Uncontrolled Components에 입각하여 Form 핸들링
- Context API를 활용해 전역 상태 관리 및 계층 재구성
### 재사용과 리팩터링
- 사용하던 모달을 분리해서 npm으로 배포하고, 그 라이브러리를 직접 import해서 사용하기
- 문서로서 스토리북을 고도화하기 위해 리팩터링
- '카드를 등록중입니다' 스피너 추가

## ✅ 프로그래밍 요구사항

### Readability
- API 요청을 처리하는 공통 함수나 커스텀 훅을 작성하여 재사용 가능하게 만든다.
- 페이지 간 공통 스타일이 있는 경우 스타일 컴포넌트를 분리하여 재사용한다.
- custom hook을 이용해 재사용 가능한 기능을 추출한다.
- 공통적으로 사용되는 UI 컴포넌트를 재사용 가능하게 구현한다.
### Reusability
- 서버와의 통신을 담당하는 코드와 UI를 렌더링하는 코드를 분리하여 관심사를 분리한다.
- 에러 처리 로직을 명확하게 작성하여 코드의 가독성을 높인다.
- 각 스토리에 명확한 이름을 지정하고, 스토리 이름을 통해 컴포넌트의 사용 사례를 쉽게 이해할 수 있도록 한다.
- 변동 가능한 값에 대해 사용자가 직접 조작해볼 수 있게 하여 컴포넌트를 더욱 쉽게 이해할 수 있도록 한다.
### Performance
- 불필요한 상태 관리를 최소화하고, 상태 업데이트를 최적화한다.
- 컴포넌트의 리렌더링을 최소화하기 위해 memoization을 적용한다.
- react에서 제공하는 hook을 이용하여 성능 최적화를 고려한다.
- Controlled & Uncontrolled Components를 고려하여 Form을 핸들링한다.

### 실행방법

```bash
yarn install
yarn start
```

### 테스트 실행방법

```bash
yarn test
```
