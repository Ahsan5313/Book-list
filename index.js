// dom selector
// add even listener
// basic validation
//create element
// append

const title = document.querySelector('#title');
const authors = document.querySelector('#authors');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

btn.addEventListener('click', function (e){
      
      e.preventDefault();
   if (title.value == ''){

    alert('Hey man you have to pay title in this file');
   } else if (authors.value == ''){

    alert('Hey man you have to pay authors in this file');
   } else if (year
    .value == ''){

    alert('Hey man you have to pay year in this file');
   }else{

    const newRow = document.createElement('tr');
      
    const newTitle = document.createElement('th')
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

   
    const newAuthors = document.createElement('th');
    newAuthors.innerHTML = authors.value;
    newRow.appendChild(newAuthors);
   
    const newYear = document.createElement('th');
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    bookList.appendChild(newRow);
   
   }
   
})