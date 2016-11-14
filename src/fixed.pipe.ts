import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'fixed'})
export class FixedPipe implements PipeTransform {
	transform(value: number, digits:number=2):string{
		return value.toFixed(digits);
	}
}