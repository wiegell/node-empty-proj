export class TestClass {
  private testVar: String = "This is a private class var";

  constructor() {
    console.log("This is an imported class");
  }

  public getSomething() {
    return this.testVar;
  }
}
