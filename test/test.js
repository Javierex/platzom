const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){

	it('Si la palabra termina en "ar", se le quitan esos dos caracteres',function () {
		const translation = platzom("Programar")
		expect(translation).to.equal("Program")
	})

	it('Si la plabara inicia con Z, se le añade "pe" al final',function () {
		const translation = platzom("Zorro")
		const translation2 = platzom("Zarpar")

		expect(translation).to.equal("Zorrope")
		expect(translation2).to.equal("Zarppe")
	})

	it('Si la la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir on un guion en el medio',function () {
		const translation = platzom("Abecedario")
		expect(translation).to.equal("Abece-dario")
	})

	it('Si la palabra original es un Palíndromo, ninguna regla anterionr cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas',function () {
		const translation = platzom("sometemos")
		expect(translation).to.equal("SoMeTeMoS")
	})
})
