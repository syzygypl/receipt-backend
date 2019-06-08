import { IsOptional, IsString, ValidateNested } from "class-validator";
import { EventPositionModel } from "./EventPositionModel";
import { Type } from "class-transformer";
import { Event } from "../../models/Event";
import { Member } from "../../models/Member";
import { Position } from "../../models/Position";

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
  @Type(() => EventPositionModel)
  positions: Array<EventPositionModel>;

  public toEvent(): Event {
    return new Event(
      this.name,
      this.account,
      this.imageUrl,
      new Member(this.ownerName),
      this.createPositions()
    );
  }

  private createPositions(): Array<Position> {
    return this.positions.map((positionModel: EventPositionModel) => positionModel.toPosition());
  }
}
