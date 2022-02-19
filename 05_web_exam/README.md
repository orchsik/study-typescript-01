## 목표

- User는 { 아이디, 이름, 나이 } data 필드와 한 이벤트 이름에 여러 기능을 갖는 events 필드를 갖는다.
- User 클래스는 데이터 CRUD 기능이 있어야 한다. - get / set / fetch / save
  - fetch: db에 저장된 데이터로 user 인스턴스 data를 채웁니다.
  - save: 현재 user 데이터를 db에 UPSERT 합니다.
- 어떤 데이터가 변경되면 애플리케이션의 다른 부분에 알려주는 기능이 있어야한다. - on / trigger
- 서버가 종료되도 데이터가 유지되어야 한다.
- User의 이름과 나이를 보여주는 화면을 만든다.

## 구현

1. 패키지 설치 axios / parcel / json-server
2. User 클래스 구현 (기능만 생각 & 화면단 ㄴㄴ)
3. User 클래스에서 Sync, Eventing, Attributes 클래스 추출해내기
   - Sync: fetch, save 와 같이 db와 동기화하는 기능
   - Eventing: trigger, on 와 같이 이벤트 관련 기능
   - Attributes: get, getAll, set 와 같이 속성 핸들링 기능
4. User에 구현된 기능은 인터페이스만 달라지면 다른 모델에서 사용할 수 있다. Model 클래스로 따리 분리하자.
