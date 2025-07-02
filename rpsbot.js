//2500 rounds, 100 dynamite/water, 766.666 RPS
//0.04 dynamite/water
//2300 RPS total (0.92) 

class Bot {
    makeMove(gamestate) {
        // firstround(gamestate);
        // let dynamitecount = gamestate[dynamite];
        let dynamite;
        if (gamestate.hasOwnProperty(dynamite)) {
            dynamite = gamestate[dynamite]
        } else {
            dynamite = 100;
        }

        // rounds = gamestate[rounds].map((round) => round[p2]);
        const rand = newrandom();
        if (rand > 0.96) {
            if (dynamite == 0) {
                return this.makeMove(gamestate);
            }
            gamestate[dynamite] = dynamite - 1;
            return 'D';
        } else if (rand > 0.92){
            return 'W';
        } else {
            switch (Math.floor(rand * (3 / 0.92))) {
                case 0:
                    return 'R';
                case 1:
                    return 'P';
                case 2:
                    return 'S';
            }
        }

        //maybe if there is a cyclic pattern, bosh that, otherwise, go against whatever has been played least

        gamestate[dynamite] = dynamite;
        return 'R';
    }

}

module.exports = new Bot();

function firstround(gamestate){
    if (gamestate[rounds].length == 0) {
            gamestate[dynamite] = 99;
            return 'D' //TODO pick first go
        }
}

function newrandom(){
    return Math.random()
}