const chai = window.chai
const expect = chai.expect

describe('Wheel of Doom', () => {
  it('puedo elegir candidatas aleatoriamente y las quito de la lista', () => {

    let coders = ["Carmen", "Valentina", "Desi"];
    let position = 1;

    let coder = seleccionarCoder(coders, position);

    expect(coder).to.equal("Valentina")
    expect(coders).to.have.same.members(["Carmen", "Desi"])
  })
})