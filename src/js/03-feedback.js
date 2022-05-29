import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const formInput = document.querySelector("input");
const formTextarea = document.querySelector("textarea");
const FORM_DATA_KEY = "feedback-form-state";

form.addEventListener("submit", submitBtn);
form.addEventListener("input", throttle(inputData, 500));

updateForm()
  function updateForm() {
    try {
      const data = localStorage.getItem(FORM_DATA_KEY);
      const formData = data ? JSON.parse(data) : string("");
      formInput.value = formData.email;
      formTextarea.value = formData.message;
    } catch (error) {
      console.log("Parcing error")
    }
    
  }

function inputData (event) {
    event.preventDefault();

    const {
            elements: { email, message }
          } = event.currentTarget;

    const formData ={
        email: email.value,
        message: message.value
    }
   
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

