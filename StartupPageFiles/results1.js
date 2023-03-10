function loadTestData(){
    localStorage.setItem('Pikachu',15)
    localStorage.setItem('Eevee',3)
    localStorage.setItem('Ditto',22)
    localStorage.setItem('Alomomola',5)
    localStorage.setItem('numVotes',45)
}

function loadScores(){
    let names = ['Pikachu','Eevee','Ditto','Alomomola'];
    let total = localStorage.getItem('numVotes')

    const tableBodyEl = document.getElementById('bar-graph');

    if(names.length){
        names.forEach((name) => {
            const nameTdEl = document.createElement('td');
            const meterTdEl = document.createElement('td');
            const votesText = localStorage.getItem('Eevee');
            console.log(votesText)

            nameTdEl.textContent = name;
            
            fullMeter = document.createElement('meter')
            meterTdEl.textContent = '<meter id="meter" min="0" max="'+total+'" value="'+localStorage.getItem(name)+'" low="33" high="66" optimum="'+localStorage.getItem('Alomomola')+'"></meter>'

            const rowEl = document.createElement('tr');
            rowEl.appendChild(nameTdEl);
            rowEl.appendChild(meterTdEl);

            tableBodyEl.appendChild(rowEl);
        })
    }else{
        tableBodyEl.innerHTML = '<tr><td colSpan=4>Oopsie</td></tr>';
    }
}
