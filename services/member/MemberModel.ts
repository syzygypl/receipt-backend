import {IsString} from "class-validator";

class MemberModel {
    @IsString()
    name: string;
}
