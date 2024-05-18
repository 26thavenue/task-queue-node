

class Puzzle {
    constructor(public name: string) {
        this.name = name;
    }

    print() {
        console.log(this.name);
    }




}

export class PuzzleCLI extends Puzzle{

}

export class PuzzleServer extends Puzzle {

}


export default Puzzle