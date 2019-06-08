import { IsNumber, IsString } from "class-validator";
import { Position } from "../../models/Position";

export class EventPositionModel {
  @IsString()
  name: string;

  @IsNumber()
  count: number;

  @IsNumber()
  price: number;

  public toPosition(): Position {
    return new Position(this.name, this.count, this.price);
  }
}
