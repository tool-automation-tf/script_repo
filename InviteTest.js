function test() {
  let result = []
  // HA를 본 모든 수강생 수 만큼 반복
  // HA결과 시트 -> 첫번째 수강생이 적힌 열 부터 마지막 수강생이 적힌 열+1 까지 반복해주면 된다.
  for (let i = 6; i < 17+1; i++) {
    // 모둔 수강생의 이메일
    let email = SpreadsheetApp.getActive().getSheetByName('HA1결과').getRange(i,4).getValue();
    // HA 결과
    let haResult = SpreadsheetApp.getActive().getSheetByName('HA1결과').getRange(i,6).getValue();
    // 기수이동 수강생에게 갈 이메일 내용
    let head = SpreadsheetApp.getActive().getSheetByName('초대메일').getRange(3, 3).getValue();
    let body = SpreadsheetApp.getActive().getSheetByName('초대메일').getRange(4, 3).getValue();
    let tail = SpreadsheetApp.getActive().getSheetByName('초대메일').getRange(5, 3).getValue();
    if (haResult === '기수이동') {
      // 기수이동 수강생에게 캘린더 초대 이메일 발송
      MailApp.sendEmail(email, head, head+body+tail)
    }
  }
}


/* 
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
  let result = results.getRange("E6").getValue();


  if (result === '기수이동') {
// Replace the following values with your own
  let email = results.getRange("C6").getValue()
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
} */


// function myFunction() {
//   let countPerson = SpreadsheetApp.getActive().getSheetByName('HA1결과').getRange(1, 2).getValue();
//   for(let i = 6; i < countPerson + 6; i++ ) {
//     let mail = SpreadsheetApp.getActive().getSheetByName('HA1결과').getRange(i, 4).getValue();
//     let name = SpreadsheetApp.getActive().getSheetByName('HA1결과').getRange(i, 1).getValue();
//     let cohort = SpreadsheetApp.getActive().getSheetByName('HA1결과').getRange(i, 3).getValue();
//     if (name === '곽운도') {
//       Logger.log(head + body + tail)
//       MailApp.sendEmail(mail, head, body + tail)
//     }
//   }
// }
