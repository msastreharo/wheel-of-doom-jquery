const chai = window.chai
const expect = chai.expect

describe('Wheel of Doom', () => {


  it ("Al comenzar mostramos todas las coders", () => {
    let wheelOfDoom = new WheelOfDoom(["Carmen", "Valentina", "Desi"]);

    expect(wheelOfDoom.remainingCoders()).to.have.same.members(["Carmen", "Valentina", "Desi"])
  })

  it("Cuando elijo una coder, se quita de la lista", () => {  
    let wheelOfDoom = new WheelOfDoom(["Carmen", "Valentina", "Desi"]);

    let coder = wheelOfDoom.chooseCoder()

    expect(wheelOfDoom.remainingCoders()).not.to.include(coder)
    expect(wheelOfDoom.remainingCoders()).to.have.lengthOf(2)
  })

  it("Cuando hago restart de la wheel of Doom, se recarga la lista original de coders", () => {
    let wheelOfDoom = new WheelOfDoom(["Carmen", "Valentina", "Desi"]);

    wheelOfDoom.chooseCoder;
    wheelOfDoom.restart();

    expect(wheelOfDoom.remainingCoders()).to.have.same.members(["Carmen", "Valentina", "Desi"])
  })



})