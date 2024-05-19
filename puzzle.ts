import dotenv from 'dotenv'

import express,{type Application} from 'express'

import morgan from 'morgan'

import cors from 'cors'

import inquirer from 'inquirer'

import chalk from 'chalk'

import openai from 'openai'

import bull from 'bull'

import commander from 'commander'

dotenv.config()




class Puzzle {
    
    constructor(public name: string, public attemptsAllowed: number,  public score: number,public isCorrect: boolean, public correctAnswer: number, public proficiency: number) {
        this.name = name;
        this.attemptsAllowed = attemptsAllowed;
        this.score = score;
        this.proficiency = proficiency;

    }

    async getInput(): Promise<any>{

    }

   




    isCorrectAnswer():boolean {
        if(this.isCorrect){
            this.correctAnswer++
            return true
        }
        return false
    }

    calculateProficiency():number {
        if(this.attemptsAllowed > 0 && this.correctAnswer ){
            var proficiency = this.correctAnswer/ this.attemptsAllowed
            return proficiency
        }
        
        console.error('Error: Proficiency cannot be calculated. Check the number of attempts and correct answers.')
        return 0

    }

    startSession(){

    }

    endSession(){

    }


    print() {
        console.log(this.name);
    }


}

export class PuzzleCLI extends Puzzle{


}

export class PuzzleServer extends Puzzle {
    app: Application = express()

    PORT:string

    constructor(name:string, PORT:string){
        super(name, 0, 0,false, 0, 0,)
        this.PORT = PORT
    }

    run(){
        this.app.use(morgan('dev'))

        this.app.use(cors())

        this.app.use(express.json())

        this.app.get('/', (req, res) => {
            res.send('Welcome to the Puzzle Server')
        })

        this.app.listen(this.PORT, () => {
            console.log(`Server is running on port ${this.PORT}`)
        })
    }

    async getInput():Promise<any>{
        this.app.post('/input', (req, res) => {
            const {input} = req.body

            if(!input){
                res.status(400).send('Input is required')
            }

            res.status(200).send('Input received').json(input)

        })

        
    }

    async sendResponse():Promise<any>{


    }

}


export default Puzzle