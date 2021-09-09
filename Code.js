
function test () { 

 // 
  let sheet = SpreadsheetApp.getActive();
  let results = sheet.getSheetByName("HA1결과");

// HA결과 시트에 있는 이메일 정보와, 심사 결과를 배열에 담는다.
  // ex [['@youjin.lee@codestates.com', '기수이동']]
  // 해당 배열의 길이 만큼 반복 하면서 
  // 만약 n번째 인덱스 배열의 1번째 인덱스가 '기수이동' 이라면
  // n번째 인덱스 배열의 0번째 인덱스인 이메일을 가지고 있는 수강생의 '기수이동'의 count를 1회 증가 시켜주고
  // n번째 인덱스 배열의 0번째 인덱스인 이메일로 새로운 기수 초대 (이동기수)
  // n번째 인덱스 배열의 0번째 인덱스인 이메일이 초대 되어 있는 구글 캘린더(현재기수) 삭제


  // 기수이동 count가 3이라면?


 // 일단 기본 칼럼 하나만 지정해서 테스트 
 // 캘린더로 초대 오는 지만 확인
  let result = results.getRange("E26").getValue();

  if (result === '기수이동') {
// Replace the following values with your own
  let email = results.getRange("C26").getValue()
  let calendarId = 'c_no0j9eilqjcntopjtcqugossk4@group.calendar.google.com'; 
  let startDate = new Date("2021-09-09"); 
  let endDate = new Date("2021-09-10");

  let calendar = CalendarApp.getCalendarById(calendarId);
    if (calendar === null) {
    // Calendar not found
    console.log('Calendar not found', calendarId);
    return;
  }

  let calEvents = calendar.getEvents(startDate,endDate);
  console.log(calEvents.length); 

  for (let i = 0; i < calEvents.length; i++) {
  let event = calEvents[i];
  event.addGuest(email);
    }
  }
}