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
2. /view/title - get - 제목순 정렬
3. /view/createdAt - get - 날짜순 정렬
4. /view/writer - get - 작성자순 정렬

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
