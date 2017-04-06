import { Pipe, PipeTransform } from '@angular/core';
import { Campaign } from './campaign.model';

@Pipe({
  name: 'goalAmount',
  pure: true
})

export class GoalAmountPipe implements PipeTransform {

  transform(input: Campaign[], desiredGoalAmount) {
    console.log(input);
    var output: Campaign[] = [];
    if (desiredGoalAmount === "more10000") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].goal > 10000) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredGoalAmount === "less10000") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].goal <= 10000) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
