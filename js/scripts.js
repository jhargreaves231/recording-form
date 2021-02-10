// Business logic:


function convert(variables) {

  const newArray = [];

  for (let i = 0; i <= variables; i++) {
    debugger;
    if ([i].includes("I")) {
      newArray.push(1);
    }
    else if ([i].includes("V")) {
      newArray.push(5);
    }
    else {
      newArray.push(0);
    }
  }

  return newArray;

};

/*function addThem(secondArray) {
  for (let i = 0; i <= secondArray; i++) {
    sum += [i];
  }
  return sum;
};*/

// UI logic:
$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
  
    const input = $("input#sentence").val();
    
    const array = input.toUpperCase().split("");
    
    console.log(array);

    let newArray = [];
    
    array.forEach(function(number) {
      debugger;
      if (number === "I") {
        newArray.push(1);
      }
      else if (number === "V") {
          newArray.push(5);
      }
      else {
            newArray.push(0);
     }
     return newArray;
    });

    const numberConvert = convert(array);

    console.log(newArray);
  });
});    

/* function convert(variables) {

      let newArray = [];

      for (let i = 0; i <= variables; i++) {
        debugger;
        if ([i] === "I")) {
          newArray.push(1);
        }
        else if ([i] === "V")) {
          newArray.push(5);
        }
        else {
          newArray.push(0);
        }
      }

      return newArray;

    };

   

    console.log(numberConvert);

    //const secondArray = convert(array);

    //console.log(secondArray);

    //const result = addThem(secondArray);

    //$("#reveal").show(text(numberConvert));

  });
});*/