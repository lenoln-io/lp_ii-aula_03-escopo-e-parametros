let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

// Atualizar contador total
document.getElementById("totalSlides").textContent = totalSlides;

function showSlide(index) {
	slides.forEach((slide) => {
		slide.classList.remove("active");
		slide.classList.add("hidden");
	});
	slides[index].classList.remove("hidden");
	slides[index].classList.add("active", "slide-transition");

	document.getElementById("currentSlide").textContent = index + 1;

	// Atualizar botões de navegação
	document.getElementById("prevBtn").disabled = index === 0;
	document.getElementById("nextBtn").disabled = index === totalSlides - 1;
}

function changeSlide(direction) {
	const newIndex = currentSlideIndex + direction;
	if (newIndex >= 0 && newIndex < totalSlides) {
		currentSlideIndex = newIndex;
		showSlide(currentSlideIndex);
	}
}

// Navegação por teclado
document.addEventListener("keydown", (event) => {
	if (event.key === "ArrowLeft") {
		changeSlide(-1);
	} else if (event.key === "ArrowRight") {
		changeSlide(1);
	}
});

// Funções para demonstração interativa
const arrayOriginal = [64, 34, 25, 12, 22, 11, 90];
let arrayDemo = [...arrayOriginal];

function demonstrarModificacao() {
	const output = document.getElementById("output");

	output.textContent = `=== DEMONSTRAÇÃO: Modificar Original ===

Array antes: [${arrayDemo.join(", ")}]

Executando ordenarOriginal(array)...
`;

	setTimeout(() => {
		// Simula a ordenação
		ordenarArray(arrayDemo);

		output.textContent += `
Array depois: [${arrayDemo.join(", ")}]

⚠️ OBSERVE: O array original foi MODIFICADO!
Isso é um efeito colateral.`;
	}, 1000);
}

function demonstrarCopia() {
	const output = document.getElementById("output");

	output.textContent = `=== DEMONSTRAÇÃO: Retornar Cópia ===

Array original: [${arrayDemo.join(", ")}]

Executando obterCopiaOrdenada(array)...
`;

	setTimeout(() => {
		// Simula a criação de cópia ordenada
		const copiaOrdenada = [...arrayDemo];
		ordenarArray(copiaOrdenada);

		output.textContent += `
Array original: [${arrayDemo.join(", ")}]
Cópia ordenada: [${copiaOrdenada.join(", ")}]

✅ OBSERVE: O array original NÃO foi modificado!
Sem efeitos colaterais.`;
	}, 1000);
}

function resetarDemo() {
	arrayDemo = [...arrayOriginal];
	document.getElementById("output").textContent = `Demonstração resetada!

Array restaurado para: [${arrayDemo.join(", ")}]

Clique nos botões acima para testar novamente.`;
}

function ordenarArray(array) {
	// Bubble Sort simples
	const n = array.length;
	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < n - i - 1; j++) {
			if (array[j] > array[j + 1]) {
				// Troca
				const temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
}

// Inicializar apresentação
showSlide(0);
