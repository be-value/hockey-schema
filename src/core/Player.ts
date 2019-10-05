export class Player {
  public name: string;
  public position: string;
  public alternative: string;
  public missed: number;
  public duty: number;

  constructor() {
    this.name = "";
    this.position = "";
    this.alternative = "";
    this.missed = 0;
    this.duty = 0;
  }
}