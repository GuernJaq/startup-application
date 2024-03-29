function loadTestData(){
    localStorage.setItem('Pikachu',15)
    localStorage.setItem('Eevee',3)
    localStorage.setItem('Ditto',22)
    localStorage.setItem('Alomomola',5)
    localStorage.setItem('numVotes',45)
}

    async function loadScores(){
        let votes = [];
        try{
            const response = await fetch('api/votes');
            votes = await response.json();
        } catch {
            const votesText = localStorage.getItem('votes');
            if(votesText){
                votes = JSON.parse(votesText);
            }
        }
        updateLocal(votes);
        displayVotes(votes);
    }

    function updateLocal(votes){
        localStorage.setItem('votes',votes);
        aloCount = 0;
        pikaCount = 0;
        dittoCount = 0;
        eeveeCount = 0;
        unknownCount = 0;
        votes.forEach((vote) =>{
            const currVote = vote.vote;
            if(currVote === 'Alomomola'){
                aloCount++;
            }else if(currVote === 'Pikachu'){
                pikaCount++;
            }else if(currVote === 'Ditto'){
                dittoCount++;
            }else if(currVote === 'Eevee'){
                eeveeCount++;
            }else{
                unknownCount++;
            }
        })
        totCount = aloCount + pikaCount + eeveeCount + dittoCount;
        localStorage.setItem('Pikachu',pikaCount)
        localStorage.setItem('Eevee',eeveeCount)
        localStorage.setItem('Ditto',dittoCount)
        localStorage.setItem('Alomomola',aloCount)
        localStorage.setItem('numVotes',totCount)
        console.log("Unknown: "+unknownCount)
    }

    function displayVotes(votes){
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

function insertRule(rule) {
    var sheet = window.document.styleSheets[0];
    sheet.insertRule(rule, sheet.cssRules.length);
}


function delay(milliseconds){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, milliseconds);
    });
}