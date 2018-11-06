var count = 1;

function calculateCurrentGrade(){
    var catGrade = "";
    var catWeight = "";
    var gradeArr = "";
    var numArr = "";
    var average = 0;
    var grade = 0;
    var totalGrade = 0;
    var totalWeight = 0;

    for(var i = 0; i < count; i++){
        catGrade = document.getElementById("inOne" + i).value;
        catWeight = parseInt(document.getElementById("inTwo" + i).value);

        gradeArr = catGrade.split(",");
        numArr = convertArrayStringToNumber(gradeArr);
        average = averageArray(numArr);
        grade = average * (catWeight / 100);

        totalGrade += grade;
        totalWeight += catWeight;
    }

    if(totalWeight == 100){
        document.getElementById("ave").innerHTML = "Your grade is " + totalGrade + "%";
    }else{
        alert("Category weights must add to 100%");
    }

    return totalGrade;
}

function convertArrayStringToNumber(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = parseInt(arr[i]);
    }
    return arr;
}

function averageArray(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    var ave = sum / arr.length;
    return ave;
}

function calculateGradeNeeded(){
    var gradeWanted = parseInt(document.getElementById("gradeWanted").value);
    var finalWeight = parseInt(document.getElementById("final").value);

    var gradeNow = calculateCurrentGrade();
    var weightNow = 1 - (finalWeight / 100);
    var gradeWeight = gradeNow * weightNow;

    var gradeNeeded = (gradeWanted - gradeWeight) / (finalWeight / 100);

    document.getElementById("gradeNeeded").innerHTML = "You need a " + gradeNeeded + "% on the final to get a " + gradeWanted + "% in the class";
}

function addRow(){
    if(count < 6){
        //creates headings based on user input
        var headingGrades = document.createElement("th");
        headingGrades.innerHTML = document.getElementById("category").value + " Grades";
        var headingWeight = document.createElement("th");
        headingWeight.innerHTML = document.getElementById("category").value + " Weight";

        //creates rows for headings and input fields
        var categoryName = document.createElement("tr");
        var category = document.createElement("tr");

        //creates td elements
        var dataOne = document.createElement("td");
        var dataTwo = document.createElement("td");

        //creates input fields
        var inputOne = document.createElement("input");
        var inputTwo = document.createElement("input");

        //appends input fields to td elements
        dataOne.appendChild(inputOne);
        dataTwo.appendChild(inputTwo);

        //appends headings to headings row
        categoryName.appendChild(headingGrades);
        categoryName.appendChild(headingWeight);

        //appends td to tr
        category.appendChild(dataOne);
        category.appendChild(dataTwo);

        //appends tr to table
        document.getElementById("table").appendChild(categoryName);
        document.getElementById("table").appendChild(category);


        inputOne.id = "inOne" + count;
        inputTwo.id = "inTwo" + count;

        count++;
    }else{
        alert("Too many categories");
    }
}