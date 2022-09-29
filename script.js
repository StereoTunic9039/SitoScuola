
function ScegliClasse (){

	let Rimozione = document.querySelectorAll(".Docente")
	Rimozione.forEach(Docente => {Docente.remove();})

	let Professori = [["Alessandro", "Bartolo", "Christian"],["Dora", "Christian", "Enea"],["Enea", "Francesca", "Bartolo"]]

    let Nclasse = document.getElementById("Classe").value
	let currentProfs = Professori[Nclasse]
	let l = currentProfs.length

	const currentDiv = document.getElementById("divv");
	let form = document.getElementById("form")
	currentDiv.value = Nclasse

	for(let i=0; i<l; i++){
		let div = document.createElement("div")
		let cbox = document.createElement("input")
		cbox.classList.add("casella")
		cbox.type = "checkbox"
		cbox.value = i
		let testo = document.createTextNode(currentProfs[i])
		div.appendChild(cbox); div.appendChild(testo) 
	  	form.insertBefore(div, currentDiv);
	  	div.classList.add("Docente")
	}


}

function Controlla (){
	let Professori = [["Alessandro", "Bartolo", "Christian"],["Dora", "Christian", "Enea"],["Enea", "Francesca", "Bartolo"]]
	let Nclasse = document.getElementById("divv").value
	let currentProfs = Professori[Nclasse]
	let ProfPresenti = []
	let Caselle = document.querySelectorAll(".casella")
	let Assenza = Array.from(Caselle)
	let ll = Assenza.length

	for(let i=0; i<ll; i++){
		Assenza[i] = Assenza[i].checked
		if(Assenza[i] == false){
			ProfPresenti.push(currentProfs[i])
		}
	}
	
	console.log(Assenza, ProfPresenti, Nclasse)
}
