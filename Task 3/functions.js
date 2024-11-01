let studentName = document.getElementById("studentName")
let nameEmptyError = document.getElementById("nameError")
let nameRepeatedError = document.getElementById("nameRepeated")

let studentGrade = document.getElementById("studentGrade")
let gradeError = document.getElementById("gradeError")

let tbody = document.querySelector("tbody")


//////////////////////////////////////////////

function SaveFormData() {
    const formData = new FormData(form);
    let student = {};

    formData.forEach((value, key) => {
        student[key] = value.charAt(0).toUpperCase() + value.slice(1);;
      });

      students.push(student)
      localStorage.setItem("students" , JSON.stringify(students))
      
 }

//////////////////////////////////////////////

function CreateTable(array) {
    tbody.innerHTML = ''
    array.forEach(element => {
         tbody.appendChild(createRow(element))
         
       });
 }

 
const createRow=function(student){
    let trObject=document.createElement("tr");//<tr></tr>
    let tdObject=null,deletButton;

     for(let property in student)
     {
        if (student[property] == "SD") {
            trObject.classList.add("SD")
        }
        else if (student[property] == "OS"){
            trObject.classList.add("OS")
        }
        else if(student[property] == "EL"){
            trObject.classList.add("EL")
        }

        tdObject=document.createElement("td");//<td></td>
        tdObject.innerText=student[property];
        trObject.append(tdObject); 
     }   
     
    tdObject=document.createElement("td");

    deletButton = createDeleteBtn() ;
    tdObject.appendChild(deletButton) 
     
     trObject.append(tdObject); 
     tdObject.classList.add("actions");
 
     return trObject;
 }


function createDeleteBtn() {
    let deletButton=document.createElement("a");
    deletButton.innerHTML= `  <i class="fas fa-trash delete-icon" title="Delete"></i>`;
   
    deletButton.onclick = function(event){

      let toBeDeletedStudent = this.parentElement.parentElement.childNodes[1].innerText;

      students = students.filter(student=> student.studentName != toBeDeletedStudent)

      localStorage.setItem("students" , JSON.stringify(students))

      this.parentElement.parentElement.remove();
    }  
return deletButton
}

 /////////////////////////////////////////////////////////////////////

function ValidateName( studentName , nameEmptyError , nameRepeatedError) {

    if (studentName.value == "" )  {

        nameEmptyError.style.display = "inline";
        nameRepeatedError.style.display = "none";

        studentName.classList.add("invalid");
        studentName.classList.remove("valid");
        return false;
    }
    else if (students.some(student=>student.studentName.toUpperCase()== studentName.value.toUpperCase())){
        nameEmptyError.style.display = "none";
        nameRepeatedError.style.display = "inline"
        studentName.classList.remove("valid");
        studentName.classList.add("invalid");
    }
    else{
        nameEmptyError.style.display = "none";
        nameRepeatedError.style.display = "none"
        studentName.classList.remove("invalid");
        studentName.classList.add("valid");
        return true;
    }
}

function  ValidateGrade( studentGrade , gradeError) {
    
    if (studentGrade.value == "" || studentGrade.value > 100 || studentGrade.value < 0)  {

        gradeError.style.display = "inline";
        studentGrade.classList.add("invalid");
        studentGrade.classList.remove("valid");
        return false;
    }
    else{
        gradeError.style.display = "none";
        studentGrade.classList.add("valid");
        studentGrade.classList.remove("invalid");
        return true;
    }
}

//////////////////////////////////////////////////////////////

let search = document.getElementById("search")
search.oninput = Search

function Search() {
    let text = search.value
    tempArr = students.filter(student => student.studentName.toUpperCase().includes(text.toUpperCase()));
    CreateTable(tempArr)

}
//////////////////////////////////////////////////////////////
let sortBy = document.getElementById("sort")

sortBy.oninput =()=>{
    if(sortBy.value == 'name'){
        tempArr.sort((a,b)=> a.studentName.localeCompare(b.studentName))
        sessionStorage.setItem("tempArr" ,JSON.stringify(tempArr) ) 
        CreateTable(tempArr)
        }
    
        else if(sortBy.value == 'grade'){
            tempArr.sort((a,b)=>a.studentGrade - b.studentGrade)
            sessionStorage.setItem("tempArr" ,JSON.stringify(tempArr) )
            CreateTable(tempArr)
        }
    
        else{
            tempArr.sort((a,b)=>a.Department.localeCompare( b.Department))
            sessionStorage.setItem("tempArr" ,JSON.stringify(tempArr) )
            CreateTable(tempArr)
        }
};

///////////////////////////////////////
let filterBy = document.getElementById("filter")
let filterArr;


filterBy.oninput = ()=>{

    if(filterBy.value == 'all'){
        CreateTable(tempArr)
        }
    
    else if(filterBy.value == 'success'){
        filterArr = JSON.parse(sessionStorage.getItem("tempArr")).filter(student => student.studentGrade >= 60);
        CreateTable(filterArr)
    }

    else {
        filterArr =JSON.parse(sessionStorage.getItem("tempArr")).filter(student => student.studentGrade < 60);
        // sessionStorage.setItem("tempArr" ,JSON.stringify(tempArr) )
        CreateTable(filterArr)
    }
}




