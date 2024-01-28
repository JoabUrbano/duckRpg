import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateQuestXpDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly description: string;

    @IsNumber()
    readonly points: number;

    @IsBoolean()
    readonly isFixed: boolean;
}
