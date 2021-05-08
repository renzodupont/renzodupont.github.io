// Currency formatter
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

// Main function in charge of searching and rendering
function renderPosts(boston, container) {
    const people = boston.data;
    const topSalaries = createElementWithId('topSalaries', container);
    const topEmployees = createElementWithId('topEmployees', container);
    const top5Title = document.createElement('h1');
    const above200kTitle = document.createElement('h1');
    
    top5Title.textContent = 'Top 5 Salaries';
    above200kTitle.textContent = 'Above 200k';

    sortPeopleBySalary( people );
    const peopleWithTopSalaries = people.filter( person => person[11] > 200000 );
    
    topSalaries.appendChild(top5Title);
    buildPeopleHtml( people, 5, 'alert-warning', topSalaries );

    topEmployees.appendChild(above200kTitle);
    buildPeopleHtml( people, peopleWithTopSalaries.length, 'alert-success', topEmployees );
  }

  // Just an accessible method to create an element and set an ID
  const createElementWithId = (id, container) => {
    const elem = document.createElement('div');
    elem.id = id;
    container.appendChild(elem);
    return elem;
  }
  
  // Sort the array using the index 11, which represents the salary in the source data
  const sortPeopleBySalary = (theArray) => {
   theArray.sort((a, b) => {
      return parseFloat(a[11]) - parseFloat(b[11]);
    }).reverse();
  }
  
  // Builds how people will show in UI using 8 as index for the name and 11 for salary
  const buildPeopleHtml = (theArray, limit, className, container) => {

    for (let i = 0; i < limit; i++) { 
        container.appendChild( buildCard( theArray[i][8], theArray[i][11], className ) ); 
    }

  }

  // Builds the actual cards that is shown in each container
  const buildCard = ( name, salary, className ) => {
    const card = document.createElement('div');
    card.className += `alert ${className}`;
    card.setAttribute('role', 'alert');

    const nameElement = document.createElement('p');
    nameElement.textContent = `Name: ${name}`;

    const salaryElement = document.createElement('p');
    salaryElement.textContent = `Salary: ${formatter.format(salary)}`;
    
    card.appendChild(nameElement);
    card.appendChild(salaryElement);

    return card;
  }
  
  // Container does not exist until the document is loaded
  window.onload = function() {
    renderPosts(boston, document.getElementById('container'));
  };