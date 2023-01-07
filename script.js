/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  let arr1 = [
    { id: 5, name: "Leo", age: "23", profession: "actor" },
    { id: 6, name: "Paul", age: "25", profession: "HR" },
    { id: 7, name: "Harry", age: "22", profession: "Dr" },
  ];
  function PrintDeveloperswithMap() {
    //Write your code here
         arr.map((item) => {
        if (item.profession == "developer") {
          console.log(item);
        }
      });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here
    arr.forEach((item) => {
        if (item.profession == "developer") {
          console.log(item);
        }
      });
    
  }
  
  function addData() {
    //Write your code here
            arr.push({ id: 4, name: "Gaurav", age: "24", profession: "Dev" });
            console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here
        arr = arr.filter((item) => item.profession != "admin");
        console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here
    const add = arr.concat(arr1);
    console.log(add);
  }