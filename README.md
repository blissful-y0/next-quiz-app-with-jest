# Simple Quiz Web App with Next.js

[![Netlify Status](https://api.netlify.com/api/v1/badges/e4bd35f8-846e-424a-acfb-f1b57170a934/deploy-status)](https://app.netlify.com/sites/zealous-jones-605671/deploys)

https://zealous-jones-605671.netlify.app/

Next.js - Typescript 기반으로 만든 간단한 퀴즈 어플리케이션입니다. 사용자 이름을 지정하면, 퀴즈 풀이 이후 리포트를 생성할 수 있습니다.

## 사용된 기술 스택

- Typescirpt
- React.js
- Next.js
- Recharts
- Jest
- react-spinners

### 시연 GIF

![quiz-test](https://user-images.githubusercontent.com/71304578/132312095-81e80fee-6b89-4857-80d3-07a34c7a4a7f.gif)

- 반응형으로 제작했다. 가능한 모바일에서도 대응이 가능하도록 설정했다.

![loader](https://user-images.githubusercontent.com/71304578/132312074-642c46d9-4a53-49b8-b252-42e9d2e15d89.gif)

- 실제 서비스처럼 구현하는 것이 목표기 때문에, 가능한 유저 익스피리언스에서 불편함 없도록 로딩을 시각화했다.

![result](https://user-images.githubusercontent.com/71304578/132312105-4c5f5015-77ff-4cf6-b725-ab6999baf87f.gif)

- 이후 쿼리스트링으로 유저명을 주소로 넘긴다, 오답노트와 간단한 그래프, 풀이까지 걸린 시간이 나온다.
- 풀이 시간은 가능한 유저가 실제로 퀴즈를 푸는데 걸리는 시간만 계산하고 싶었기 때문에, 다음 문제로 넘어가는 시간, 버튼 누르는 시간은 제외하고 카운트할 수 있도록 hook을 짰다.

### 아쉬웠던 점

- TDD 개발 방식에 흥미는 가지고 있었으나, 함수를 구현하고 이후 함수의 return 값을 테스트하는 것 이외에 컴포넌트에 적용하는 것은 이번이 처음이라 그런지 아직 어떻게 사용해야 하는지 감을 잡기 조금 어려웠다
- React + Typescript + Jest 조합은 많았으나, Next + TS + Jest는 개발 문서가 적어 세팅부터 헤맸다
- Custom Hook 테스트를 위해 이것저것 구글링을 해 보았으나, custom hook + setTimeout을 이용한 테스트 방식은 여전히 감 잡기 어렵다...
- 제출 이후로도 계속 여러가지 시도를 해 볼 생각이다, Jest를 좀 더 공부해 봐야겠다
