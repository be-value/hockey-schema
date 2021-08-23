export class ScheduleItem {
  public when: Date;
  public what: string;
  public where: string;
  public who: Array<string>;
  public comment: string;

  constructor() {
    this.when = new Date();
    this.what = "";
    this.where = "";
    this.who = new Array<string>();
    this.comment = "";
  }
}