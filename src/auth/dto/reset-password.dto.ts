import { IsNotEmpty, IsUUID } from "class-validator";

export class RessetPasswordDto {
    @IsNotEmpty()
    @IsUUID("4")
    resetPasswordToken: string;

    password: string
}