function loadTestData(){
    localStorage.setItem('Pikachu',15)
    localStorage.setItem('Eevee',3)
    localStorage.setItem('Ditto',22)
    localStorage.setItem('Alomomola',5)
    localStorage.setItem('numVotes',45)
}

function loadScores(){
    const names = ['Pikachu','Eevee','Ditto','Alomomola'];
    const total = Number(localStorage.getItem('numVotes'))
    const correctNum = localStorage.getItem('Alomomola')
    console.log(total)

    const tableBodyEl = document.getElementById('bar-graph');

    if(names.length){
        names.forEach((name) => {
            const nameTdEl = document.createElement('td');
            const meterTdEl = document.createElement('td');

            nameTdEl.textContent = name;
            
            meterTdEl.innerHTML = '<meter min="0" max="'+total+'" value="'+localStorage.getItem(name)+'" low="'+correctNum+'" high="'+correctNum+'" optimum="'+correctNum+'"></meter>'


            const rowEl = document.createElement('tr');
            rowEl.appendChild(nameTdEl);
            rowEl.appendChild(meterTdEl);

            tableBodyEl.appendChild(rowEl);
        })
    }else{
        tableBodyEl.innerHTML = '<tr><td colSpan=4>Oopsie</td></tr>';
    }
}
