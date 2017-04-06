export class Campaign {
  public currentamount: number = 0;
  constructor(public title: string, public author: string, public description: string, public reward: string, public goal: number, public image: string) { }
}
