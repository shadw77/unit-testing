const myFun = require("../index.js");
const chai = require("chai");
// const expect = require("chai").expect;
// const should = require("chai").should();
// const assert = require("chai").assert;

const expect = chai.expect;
const assert = chai.assert;

// chaiHttp = require("chai-http");
// expect.use(chaiHttp);

describe("test function capitalizeText", function () {
  it.skip("test that it return string", function () {
    expect(myFun.capitalizeText("iti")).to.be.a("string");
  });

  it("test that it return correct result", function () {
    expect(myFun.capitalizeText("iti")).to.equal("ITI");
  });

  it("test that it iti not equal hello", function () {
    expect(myFun.capitalizeText("iti")).to.not.equal("hello");
  });

  it("test that parameter should be string", function () {
    expect(function () {
      myFun.capitalizeText(123);
    }).throw(TypeError, "parameter should be string");
  });
});

describe("test function createArray", function () {
  let counter = 1;
  beforeEach((done) => {
    counter += 1;
    setTimeout(function () {
      done();
    }, 900);
  });

  it("test that it return array", function () {
    console.log(counter);
    assert.isArray(myFun.createArray(7));
  });

  it("test length of the array and test it's include", function () {
    console.log(counter);
    expect(myFun.createArray(7)).that.have.lengthOf(7).that.includes(6);
  });
});
