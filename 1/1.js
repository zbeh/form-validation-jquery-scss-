const firstName =  document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const subject = document.getElementById('subject')
const modal = document.querySelectorAll('div')[2]
const p = document.querySelectorAll('p')
console.log(p)
console.log(modal);
const submitBtn = document.getElementById('submit')
const cloze = document.getElementById('close')
function validInfo(e){
    e.preventDefault();
    const firstNameValue = firstName.value
    const lastNameValue = lastName.value
    if(firstNameValue==="" || lastNameValue===""){
        alert('You should fill the form correctly')
        return false
    } else if(firstNameValue.length<3){
        firstName.classList.add("invalid")
        p[0].classList.toggle('hide')
        return false
    } else if(lastNameValue.length<3){
       lastName.classList.add('invalid')
       p[1].classList.toggle('hide')
       return false
    }else{
        modal.classList.toggle('hide')
        cloze.addEventListener('click',(e)=>{
            modal.classList.toggle('hide')
        })
        firstName.value =""
        lastName.value =""
        subject.value = ""
        firstName.classList.remove('invalid')
        p[0].classList.add('hide')
        lastName.classList.remove('invalid')
        p[1].classList.add('hide')
    }
    
    setTimeout(() => {
        window.location.href = "http://www.javatpoint.com/javascriptpages/valid.jsp"
    }, 8000);
}   