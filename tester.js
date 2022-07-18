const init = () => {
    const inputForm = document.querySelector('form');
  
      inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const searchTerm = event.target.children[1].value;

      console.log(searchTerm);
    
      fetch('http://localhost:3000/movies')
      .then(response => response.json())
       .then(data => {
              console.log(data);

       });   
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);