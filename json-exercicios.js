// ==========================================
// 1. Crie o objeto pessoa
// ==========================================
const pessoa = {
    nome: "João Silva",
    idade: 17,
    email: "joao@email.com",
    endereco: {
        rua: "Rua das Flores",
        numero: 123,
        cidade: "São Paulo"
    },
    hobbies: ["leitura", "videogame", "futebol"]
};

// ==========================================
// 2. JSON.stringify() - Objeto para String
// ==========================================
console.log("=== OBJETO PARA JSON ===");
const pessoaJSON = JSON.stringify(pessoa);
console.log("Tipo:", typeof pessoaJSON);
console.log("Conteúdo:", pessoaJSON);
console.log("\n");

// ==========================================
// 3. JSON.stringify() - Formatação Bonita
// ==========================================
console.log("=== JSON FORMATADO ===");
const pessoaJSONFormatado = JSON.stringify(pessoa, null, 2);
console.log(pessoaJSONFormatado);
console.log("\n");

// ==========================================
// 4. JSON.parse() - String para Objeto
// ==========================================
console.log("=== JSON PARA OBJETO ===");
const jsonRecebido = '{"nome":"Maria","idade":16,"turma":"3A"}';
const mariaObj = JSON.parse(jsonRecebido);

console.log("Tipo:", typeof mariaObj);
console.log("Nome:", mariaObj.nome);
console.log("Idade:", mariaObj.idade);
console.log("\n");

// ==========================================
// 5. Crie um array de filmes
// ==========================================
const filmes = [
    { id: 1, titulo: "Matrix", ano: 1999, genero: "Ficção" },
    { id: 2, titulo: "Titanic", ano: 1997, genero: "Romance" },
    { id: 3, titulo: "Toy Story", ano: 1995, genero: "Animação" }
];

// ==========================================
// 6. Manipulação do array de filmes
// ==========================================
console.log("=== CATÁLOGO DE FILMES ===");

// Converter para JSON formatado
const filmesJSON = JSON.stringify(filmes, null, 2);
console.log("Filmes em JSON:");
console.log(filmesJSON);

// Simular recebimento (Parsing)
const filmesRecebidos = JSON.parse(filmesJSON);

console.log("\nFilmes carregados novamente:");
// Percorrer e exibir
filmesRecebidos.forEach(filme => {
    console.log(`${filme.id}. ${filme.titulo} (${filme.ano}) - ${filme.genero}`);
});
