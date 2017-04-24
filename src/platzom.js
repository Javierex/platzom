 export default function platzom (str) {
	let translation = str

	// Si la palabra original es un Palíndromo,
	// ninguna regla anterionr cuenta y se devuelve
	// la misma palabra intercalando mayusculas y minusculas
	const reverse = (str) => str.split('').reverse().join('')
	
	function minMay(str){
		const length = str.length
		let translation = ''
		let capitalize = true
		for (let i = 0; i < length; i++) {
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}
		return translation
	}

	if (str == reverse(str)) {
		return minMay(str)

	}

	//Si la palabra termina en "ar", se le quitan esos dos caracteres
	if (str.toLowerCase().endsWith('ar')) {//toLoweCase= sirve para convertir un string en minuscula
		//endWith = sirve ver las ultimas letras de un String
		translation = str.slice(0, -2)//slice = sirve para cortar caracteres de un string

	}
	//Si la plabara inicia con Z, se le añade "pe" al final
	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe'
	}
	//Si la la palabra traducida tiene 10 0 as letras 
	//se debe partir a la mitad y unir on un guion en el medio
	const length = translation.length
	if (length>=10) {
		const firstHalf = translation.slice(0, Math.round(length/2))
		const secondHalf = translation.slice(Math.round(length/2))
		translation = `${firstHalf}-${secondHalf}`
	}

	return translation
}
