import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateQuestXpDto {
    @IsString()
    readonly name: string;

    @IsNumber()
    readonly points: number;

    @IsBoolean()
    readonly IsFixed: boolean;
}
