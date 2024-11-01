let students , tempArr;

if(!localStorage.getItem("students")){
    students = [];
}
else{
    students=JSON.parse(localStorage.getItem("students"))
}

if (!sessionStorage.getItem("tempArr")) {
    tempArr = students
    CreateTable(tempArr)
}
else{
    tempArr =JSON.parse(sessionStorage.getItem("tempArr")) 
    CreateTable(tempArr)
}
/////////////////////////////////////////////

let form = document.forms[0]

form.onsubmit= (event)=>{
    event.preventDefault();

    if ( ValidateName( studentName , nameEmptyError , nameRepeatedError)  &&  ValidateGrade( studentGrade , gradeError)) {
        SaveFormData()
        CreateTable(students);
    }
   
}








