/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
export class MessageDto {
    message: String[] = [];

    constructor(message: string){
        this.message[0] = message;
    }
}