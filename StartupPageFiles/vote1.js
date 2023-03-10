const btnDescriptions = [
    {name: 'Pikachu',correct:false},
    {name: 'Eevee',correct:false},
    {name: 'Ditto',correct:false},
    {name: 'Alomomola',correct:true},
];
class Button{
    constructor(description, el){
        this.el = el;
        this.correct = description.correct;
    }
}
class UserVote{
    buttons;
    constructor(){
        this.buttons = new Map()
        btnDescriptions.forEach((el) => {
            this.buttons.set(el.name,el.correct);
        });

        const playerNameEl = document.querySelector('.player-name');
        playerNameEl.textContent = this.getPlayerName();
        const alert = document.getElementById('alert')
        alert.innerHTML = '' 
        const result = document.getElementById('result')
        result.innerHTML = '' 
        const resBTN = document.getElementById('result-btn')
        resBTN.innerHTML = '' 
    }

    getPlayerName(){
        return localStorage.getItem('userName') ?? 'Mystery player';
    }

    saveVote(vote){
        const userName = this.getPlayerName();
        let votes = [];
        const votesText = localStorage.getItem('votes');
        console.log(votesText)
        if(votesText){
            votes = JSON.parse(votesText);
        }
        votes = this.updateVotes(userName,vote,votes);

        localStorage.setItem('votes',JSON.stringify(votes));
    }

    updateVotes(userName,vote,votes){
        const newVote = {name: userName, vote: vote};

        let found = false;
        for(const [i,prevVote] of votes.entries()){
            if(userName === prevVote.name){
                found = true;
                break;
            }
        }
        if(found){
            const alert = document.getElementById('alert')
            alert.innerHTML = '<div class="alert alert-warning" role="alert">You have already voted!</div>'
            delay(4000).then((e) => {alert.innerHTML =''})
        }else{
            votes.push(newVote);
            //localStorage.setItem('scores',JSON.stringify(scores))
            const currVotes = localStorage.getItem(vote)
            let newVotes = JSON.parse(currVotes)
            newVotes++;
            localStorage.setItem(vote,newVotes)
            
            const numVotes = localStorage.getItem('numVotes')
            let totVotes = JSON.parse(numVotes)
            totVotes++;
            localStorage.setItem('numVotes',totVotes)

            let correct = this.buttons.get(vote)
            if(correct){
                const result = document.getElementById('result')
                result.innerHTML = '<div class="alert alert-success" role="alert">You got it! Check results to see how others voted</div>'
            }else{
                const result = document.getElementById('result')
                result.innerHTML = '<div class="alert alert-danger" role="alert">That isn\'t right! Check results to see how others voted</div>'
            }
        }
        const resBTN = document.getElementById('result-btn')
        resBTN.innerHTML = '<form method="get" action="results1.html"><button type="submit" class=" btn btn-success">Click for result page!</button></form>'

        return votes;
    }

    pressButton(button){
        this.saveVote(button.id);
    }
}
const userVote = new UserVote();

function delay(milliseconds){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, milliseconds);
    });
}
