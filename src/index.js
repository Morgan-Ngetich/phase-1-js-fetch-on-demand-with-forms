const init = () => {
  //We want to add an event listener to the form element. We would first target the DOM element we want:
  const inputForm = document.querySelector('form')

  inputForm.addEventListener('submit', (e) => {
    e.preventDefault(); //To stop the page from refreshing and allow us to do something else instead. 

    const input = document.querySelector('input#searchByID')
    console.log(input.value)


    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(res => res.json())
    .then(data=> {console.log(data)

    const title = document.querySelector('section#movieDetails h4')
    const summary = document.querySelector('section#movieDetails p')

    title.innerText = data.title
    summary.innerText = data.summary


    

  })
  });
  
}


document.addEventListener('DOMContentLoaded', init);