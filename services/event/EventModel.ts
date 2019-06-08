import {IsOptional, IsString, ValidateNested} from "class-validator";
import {EventPositionModel} from "./EventPositionModel";

export class EventModel {

    @IsString()
    name: string;

    @IsString()
    ownerName: string;

    @IsString()
    account: string;

    @IsString()
    @IsOptional()
    imageUrl?: string;

    @ValidateNested()
    positions: Array<EventPositionModel>

}
