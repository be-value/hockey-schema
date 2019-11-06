export class Player {
  public name: string;
  public position: string;
  public alternative: string;
  public missed: number;
  public duty: number;
  public comments: string;

  constructor() {
    this.name = "";
    this.position = "";
    this.alternative = "";
    this.missed = 0;
    this.duty = 0;
    this.comments = "";
  }
}