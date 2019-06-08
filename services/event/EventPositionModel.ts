import {IsString} from "class-validator";

export class EventPositionModel {

    @IsString()
    name: string;

    @IsString()
    count: number;

    @IsString()
    price: number;

}
