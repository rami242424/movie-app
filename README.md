# 🎬 Movie Search App

영화 제목을 검색하면 영화 정보를 보여주는 React 기반 웹 애플리케이션입니다.

---

## 🚀 기능

- 영화 제목 검색 (TMDB API 사용)
- 로딩 / 에러 / 결과 없음 상태 처리
- 반응형 UI (모바일 ~ 데스크탑)
- 카드형 UI로 영화 정보 표시
- Enter 키로 검색 가능
- 로딩 중 버튼 비활성화

---

## 🛠️ 기술 스택

- React (with TypeScript)
- Tailwind CSS
- Vite
- TMDB API

---

## 📌 주요 구현 포인트

### 1. 상태 관리 구조 설계

- `status`를 통해 loading / success / error 상태를 통합 관리
- 불필요한 state를 줄이고 조건문을 단순화

### 2. 컴포넌트 분리

- SearchBar: 입력 및 검색
- MovieList: 리스트 렌더링
- MovieItem: 카드 UI

### 3. 사용자 경험 개선

- 로딩 상태 표시
- 에러 메시지 처리
- 검색 결과 없음 처리
- 버튼 disabled 처리

### 4. 반응형 UI

- Tailwind grid 사용
- 화면 크기에 따라 카드 개수 자동 조절

---

## 📷 미리보기

(여기에 캡쳐 이미지 추가)

---

## ⚙️ 실행 방법

```bash
npm install
npm run dev
```

---

## 🔐 환경 변수 설정

`.env` 파일 생성 후:

```env
VITE_API_KEY=YOUR_API_KEY
```

---

## 📈 개선 예정

- 영화 상세 페이지 추가
- 즐겨찾기 기능
- Skeleton UI 적용
