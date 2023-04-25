class ExampleOne {
  constructor(arr, dataType, itemToFind) {
    this.arr = arr;
    this.dataType = dataType;
    this.itemToFind = itemToFind;
  }

  set arr(value) {
    if (!Array.isArray(value)) {
      // arr 이 배열이 아니라면
      console.log('배열이 아닙니다.')
      // 콘솔 출력
    }
    this._arr = value
  }

  get findNcheck() {
    if (this.dataTypeCheck() && this.arrInitemToFind()) {
      // 두 함수가 true 라면
      console.log(`${this.itemToFind}은(는) 배열에 존재합니다.`)
    }
  }

  dataTypeCheck() {
    // itemToFind와 dataType이 일치하지 않는다면
    if (typeof (this.itemToFind) !== this.dataType) {
      console.log(`찾으려는 항목은 ${this.dataType} 데이터타입이 아닙니다.`)
      return false;
    } else {
      // 같으면 true 반환
      return true;
    }
  }

  arrInitemToFind() {
    // 배열에 itemToFind 가 포함되어있지 않다면
    if (this._arr.includes(this.itemToFind) === false) {
      console.log(`${this.itemToFind}은(는) 배열에 존재하지 않습니다.`)
      return false
    } else {
      // 포함되어있다면 true 반환
      return true;
    }
  }
}


const basicData = ["안녕하세요", "어디선가", "입력된", "데이터를", "찾아보는", "함수입니다."]
const exampleOne = new ExampleOne(basicData, "string", "어디선가")

// 킬포, getter를 호출할때 함수라고 () 하면 에러가 발생
console.log(exampleOne.findNcheck)
console.log(exampleOne)


// 기본 문제 틀
// function exampleOne(arr, dataType, itemToFind){
//   if(Array.isArray(arr)===false){
//     console.log("배열이 아닙니다.");
//     return false;
//   }
//   const isDataTypeMatched=(typeof(itemToFind)===dataType);
//   const isItemExist = arr.includes(itemToFind)

//   if(isDataTypeMatched === true && isItemExist ===true){
//     console.log(`${itemToFind}은(는) 배열에 존재합니다.`);
//     return true;
//   }else if(isItemExist === false){
//     console.log(`${itemToFind}은(는) 배열에 존재하지 않습니다.`);
//     return false
//   }else if(isDataTypeMatched === false){
//     console.log(`찾으려는 항목은 ${dataType} 데이터 타입이 아닙니다.`)
//     return false
//   }
// }

//  만들고 보니 위 예제와 다를 바 없는 함수
// function exampleOne(arr, dataType, itemToFind) {
//   if (Array.isArray(arr)) {
//     const itemToFindMatched = arr.includes(itemToFind)
//     const itemToFindType = typeof (itemToFind) === dataType
//     console.log(itemToFindMatched)
    // console.log(itemToFindType)
//     if (itemToFindMatched && itemToFindType) {
//       console.log(`${itemToFind}은(는) 배열에 존재합니다.`);
//     } else if (itemToFindMatched===false) {
//       console.log(`${itemToFind}은(는) 배열에 존재하지 않습니다.`)
//     }else{
//       console.log(`찾으려는 항목은 ${dataType} 데이터 타입이 아닙니다.`)
//     }
//   } else {
//     console.log("배열이 아닙니다.");
//   }
// }