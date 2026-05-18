// Classe que representa uma propriedade rural sustentável
class PropriedadeRural {
    constructor(nome, tamanhoHectares, usaDrones, usaBioinsumos) {
        this.nome = nome;
        this.tamanhoHectares = Number(tamanhoHectares);
        this.usaDrones = Boolean(usaDrones);
        this.usaBioinsumos = Boolean(usaBioinsumos);
    }

    // Calcula a pontuação de sustentabilidade
    calcularScoreSustentabilidade() {
        let score = 50; // Pontuação base
        if (this.usaDrones) score += 25;      
        if (this.usaBioinsumos) score += 25;  
        return score;
    }

    // Retorna a classificação ecológica
    obterClassificacao(score) {
        if (score >= 90) return "AGRO FORTE E SUSTENTÁVEL (Padrão Ouro Agrinho)";
        if (score >= 75) return "Em Transição Tecnológica (Padrão Prata)";
        return "Necessita de Adequação Ambiental (Alerta)";
    }
}

// Simulador de Banco de Dados de Fazendas
const listaFazendas = [];

// Função para cadastrar uma nova fazenda
function cadastrarFazenda(nome, area, drones, bioinsumos) {
    if (!nome || isNaN(area)) {
        console.error("❌ Erro: Dados inválidos para cadastro.");
        return null;
    }

    const novaFazenda = new PropriedadeRural(nome, area, drones, bioinsumos);
    listaFazendas.push(novaFazenda);
    
    console.log(`✅ Fazenda "${nome}" cadastrada com sucesso!`);
    return novaFazenda;
}

// Função para listar e gerar o relatório ambiental no terminal
function gerarRelatorioAmbiental() {
    if (listaFazendas.length === 0) {
        console.log("⚠️ Nenhuma fazenda cadastrada no sistema.");
        return;
    }

    console.log("\n=================================================");
    console.log("      RELATÓRIO INTEGRADO AGRINHO 2026          ");
    console.log("   Equilíbrio entre Produção e Meio Ambiente    ");
    console.log("=================================================");

    listaFazendas.forEach((fazenda, index) => {
        const score = fazenda.calcularScoreSustentabilidade();
        const classificacao = fazenda.obterClassificacao(score);

        console.log(`\n🚜 [Propriedade #${index + 1}]`);
        console.log(`   Produtor: ${fazenda.nome}`);
        console.log(`   Área: ${fazenda.tamanhoHectares} Hectares`);
        console.log(`   Tecnologias: ${fazenda.usaDrones ? "Drones/Sensores" : "Nenhuma"}`);
        console.log(`   Manejo: ${fazenda.usaBioinsumos ? "Bioinsumos Orgânicos" : "Tradicional"}`);
        console.log(`   Índice Ecológico: ${score}/100`);
        console.log(`   Status: ${classificacao}`);
        console.log("-------------------------------------------------");
    });
}

// ==========================================
// ÁREA DE TESTE AUTOMÁTICO (Simulação)
// ==========================================
// Cadastrando exemplos para testar o sistema no GitHub
cadastrarFazenda("Fazenda Chapadão", 150, true, true);   // Ouro
cadastrarFazenda("Sítio Primavera", 45, false, true);    // Prata
cadastrarFazenda("Estância Progresso", 320, false, false); // Alerta

// Executa a listagem automática no console
gerarRelatorioAmbiental();