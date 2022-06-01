import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const formInput = document.querySelector("input");
const formTextarea = document.querySelector("textarea");
const FORM_DATA_KEY = "feedback-form-state";
const formData = {};

form.addEventListener("submit", submitBtn);
form.addEventListener("input", throttle(inputData, 500));

updateForm()
  function updateForm() {
      const data = JSON.parse(localStorage.getItem(FORM_DATA_KEY));
      
      
        formInput.value = data.email ? data.email : null;
        formTextarea.value = data.message ? data.message : null;
      
      
  }

function inputData (event) {
    event.preventDefault();

    formData[event.target.name] = event.target.value;
   
  localStorage.setItem(FORM_DATA_KEY,JSON.stringify(formData));
  
}


function submitBtn(event) {
  event.preventDefault();

  const {
    elements: { email, message }
  } = event.currentTarget;


  if (email.value === "" || message.value === "") {
    return alert("Заповніть будь ласка всі поля форми");
  }

  const data = {
      email: email.value,
      message: message.value
  }

  console.log(`Email: ${data.email}, Message: ${data.message}`);
  event.currentTarget.reset();

  localStorage.removeItem(FORM_DATA_KEY);

}

