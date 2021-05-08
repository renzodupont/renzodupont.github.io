// Currency formatter
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

// Main function in charge of searching and rendering
const renderPosts = (chicago, container) => {

    const people = chicago.data;
    const totalContainer = createContainer('result-box', 'Total Amount using reduce', container);
    const forEachContainer = createContainer('result-box', 'Top 100 Using forEach and random setTimeout', container);
    const topHundredMappedContainer = createContainer('result-box', 'Top 100 with names changed with map', container);
    const topAmountContainer = createContainer('result-box', '5 Top Amounts with sort and slice', container);
    
    //// Sorts the original array, and then uses reverse to have the top items first
    people.sort((a, b) => { return parseFloat(a[9]) - parseFloat(b[9]); }).reverse();
    
    //// This happens here, even if the container is last, to avoid the name changes using map method below
    let peopleWithTopAmounts = people.slice(0, 5);
    buildPeopleHtml( peopleWithTopAmounts, 'alert-success', topAmountContainer );

    //// Grabs 100 records and use an int to change the background color randomly
    let iteratorExchange = 0;
    let topHundredItems = people.slice(0, 100);
    topHundredItems.forEach( item => {
        iteratorExchange = iteratorExchange === 0 ? 1 : 0;
        let color = iteratorExchange === 0 ? 'black' : 'gray';
        setTimeout( () => {
            forEachContainer.innerHTML += '<div class="pixel" style="background:' + color + '">' + formatter.format(item[9]) + '</div>';
        }, (Math.random() * 10) * 1000 );
    });
    
    //// Reduces and gets the total
    let total = people.reduce( (x, y) => { 
        x[9] += +y[9]; 
        return x;
    }, Array.from(new Array(10).keys()) );
    totalContainer.appendChild( buildCard( `Total: ${formatter.format(total[9])}`, 'Calculated from: ' + people.length + ' records.', 'alert-success' ) );

    //// Using map to add some text to top 100 items at once
    topHundredItems.map( item => item[13] += ' - TEXT ADDED TO TOP 100 ITEMS' );
    topHundredItems.forEach( item => {
        iteratorExchange = iteratorExchange === 0 ? 1 : 0;
        let color = iteratorExchange === 0 ? 'black' : 'gray';
        setTimeout( () => {
            topHundredMappedContainer.innerHTML += '<div class="pixel textPixel" style="background:' + color + '">' + item[13] + '</div>';
        }, (Math.random() * 10) * 1000 );
    });

}

// Just an accessible method to create an element and set a class and title element
const createContainer = (className, title, container) => {
    const elem = document.createElement('div');
    elem.className += className;

    const titleElem = document.createElement('h1');
    titleElem.textContent = title;

    container.appendChild(elem);
    elem.appendChild(titleElem);

    return elem;
}

// Builds how people will show in UI using 13 as index for the name and 9 for amount
const buildPeopleHtml = (theArray, className, container) => {

    theArray.forEach( item => {
        container.appendChild( buildCard( `Amount: ${formatter.format(item[9])}`, item[13], className ) ); 
    });

}

// Builds the actual cards that is shown in each container
const buildCard = ( title, text, className ) => {
    const card = document.createElement('div');
    card.className += `alert ${className}`;
    card.setAttribute('role', 'alert');

    const nameElement = document.createElement('p');
    nameElement.textContent = title;

    const salaryElement = document.createElement('p');
    salaryElement.textContent = text;

    card.appendChild(nameElement);
    card.appendChild(salaryElement);

    return card;
}

// Container does not exist until the document is loaded
window.onload = function() {
    renderPosts(chicago, document.getElementById('container'));
};