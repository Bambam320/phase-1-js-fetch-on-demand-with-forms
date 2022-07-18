const init = () => {
    const inputForm = document.querySelector('form');
  
      inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const searchTerm = document.querySelector('input#searchByID');

      //console.log(searchTerm.value);
    
      fetch(`http://localhost:3000/movies`)
      .then(response => response.json())
       .then(data => {
        for (let key in data) {
            //console.log(key)
            //console.log(data[key].id)
            if (data[key].title === searchTerm.value) {
                populatePage(data[key])      
                //console.log(data[key].summary)
            }
        }
        function populatePage (info) { 
            title = document.querySelector('section#movieDetails h4')
            summary = document.querySelector('section#movieDetails p')
            console.log(info.title)  
            //console.log(title)
            //console.log(summary)  
            title.innerText = info.title
            summary.innerText = info.summary
        //console.log(`${thisID} will work outside of the inner scope`)
            }
       });   
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);