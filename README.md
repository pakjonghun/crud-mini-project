## crud 게시판 입니다.

### 페이지 구성

1. 글 조회 페이지
2. 글 작성페이지
3. 글 수정페이지
4. 글 디테일 페이지

### api 구성

1. 모든 글 조회
2. 글 작성
3. 글 수정
4. 1개 글 읽어오기
5. 글 삭제하기

## 라우터 구성

---

1. /view - get - 모든 글 조회페이지
<!-- 2. /view/title - get - 제목순 정렬
2. /view/createdAt - get - 날짜순 정렬
3. /view/writer - get - 작성자순 정렬 -->

---

1. /write - get - 글 작성 페이지
2. /write/:id - post - 글 등록

---

1. /edit/:id - get - 글 수정 페이지
2. /edit/:id - patch - 글 수정

---

1. /detail/:id - get - 글 디페일 페이지
2. /detail/remove/:id - delete - 글 삭제

---

1. /search/title - get - 제목 검색
2. /search/date - get - 날짜 검색
3. /search/writer - get - 작성자 검색

---

추가 할 기능입니다.

1. /comment/write/:id - post - 댓글쓰기
2. /comment/edit/:id - patch - 댓글수정
3. /comment/delete/:id - delete - 댓글 삭제

---

고민중인. 추가 할 기능 입니다.

1. 로그인 기능(로그인 기능 없는 게시판이므로 패스)
2. 소켓 리얼타임 카운팅 기능(좋아요, 조회수)
3. jwt로 session cookie 이용 한 10초간 댓글 입력 금지 기능

--
진행 계획 입니다.

1. 일 - 커멘트 기능까지 추가, 소켓통신 세션 쿠키 구글링, wil
2. 월 - 소켓 리얼타임 카운팅 기능 추가
3. 화 - jwt session cookie 이용 10초간 댓글 입력 금지 추가
4. 수 - 배포준비 및 배운 내용 점검 및 게시판 코드 최적화
5. 목 - 배포 완료 및 과제 제출
