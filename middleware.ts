import winston from 'winston'


export class LoggerMiddleware{
  

}

export class ErrorMiddleware extends Error{
    status: number;
    message: string;

    constructor(status:number, message:string){
        super(message)
        this.status = status
        this.message = message
    }

    toJSON() {
    return {
      status: this.status,
      message: this.message,
    };
  }
}