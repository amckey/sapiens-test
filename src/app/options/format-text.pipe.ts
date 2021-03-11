import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatText'
})
export class FormatTextPipe implements PipeTransform {

  transform(value: any) {
    
    let receivedText = value;
    let checkedText = value.includes('business use')

    if (checkedText) {
        return '<b>lool</b>'
    } else {
        return 'fuck'
    }

    }
}
