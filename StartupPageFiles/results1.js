function loadTestData(){
    localStorage.setItem('Pikachu',15)
    localStorage.setItem('Eevee',3)
    localStorage.setItem('Ditto',22)
    localStorage.setItem('Alomomola',5)
    localStorage.setItem('numVotes',45)
}
class loadTable{
    loadScores(){
        const names = ['Pikachu','Eevee','Ditto','Alomomola'];
        const total = Number(localStorage.getItem('numVotes'))
        const correctNum = localStorage.getItem('Alomomola')

        const tableBodyEl = document.getElementById('bar-graph');
        tableBodyEl.innerHTML = ''

        if(names.length){
            names.forEach((name) => {
                const nameTdEl = document.createElement('td');
                const meterTdEl = document.createElement('td');

                nameTdEl.textContent = name;
                if(name === 'Alomomola'){
                    meterTdEl.innerHTML = '<meter min="0" max="'+total+'" value="'+localStorage.getItem(name)+'" low="'+correctNum+'" high="'+correctNum+'" optimum="'+correctNum+'"></meter>'
                    let color =  "green" 
                }else{
                    meterTdEl.innerHTML = '<meter min="0" max="'+total+'" value="'+localStorage.getItem(name)+'" low="'+0+'" high="'+1+'" optimum="'+0+'"></meter>'
                    let color =  "red" 
                }

                const rowEl = document.createElement('tr');
                rowEl.appendChild(nameTdEl);
                rowEl.appendChild(meterTdEl);

                tableBodyEl.appendChild(rowEl);
            })
            this.insertRule("meter::-webkit-meter-suboptimum-value{background:red;}")
            this.insertRule("meter::-webkit-meter-optimum-value {background: green;}");
        }else{
            tableBodyEl.innerHTML = '<tr><td colSpan=4>Oopsie</td></tr>';
        }
    }

    insertRule(rule) {
        var sheet = window.document.styleSheets[0];
        sheet.insertRule(rule, sheet.cssRules.length);
      }
}

const currTable = new loadTable()

function delay(milliseconds){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, milliseconds);
    });
}