import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Timeline {
  @PrimaryGeneratedColumn("increment")
  id: string;
}
