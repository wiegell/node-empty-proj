import test from "node:test";
import { TestClass } from "./test-class";

console.log("Hello world");
const testClass = new TestClass();
console.log(testClass.getSomething());
