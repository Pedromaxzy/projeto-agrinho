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
// ==========================================
// 1. SISTEMA DE ANIMAÇÃO AO CLICAR NO MENU
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    // Cria dinamicamente o elemento visual do "Loader" giratório
    const loader = document.createElement("div");
    loader.id = "custom-loader";
    loader.innerHTML = `
        <div class="spinner-container">
            <div class="spinner-gear">⚙️</div>
            <p>Processando Dados Agro-Ambientais...</p>
        </div>
    `;
    document.body.appendChild(loader);

    // Adiciona estilos necessários para a animação direto pelo JS
    const estilo = document.createElement("style");
    estilo.innerHTML = `
        #custom-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(11, 60, 29, 0.95); /* Verde escuro com transparência */
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.4s ease;
            color: white;
            font-family: sans-serif;
        }
        #custom-loader.active {
            opacity: 1;
            pointer-events: auto;
        }
        .spinner-container {
            text-align: center;
        }
        .spinner-gear {
            font-size: 4rem;
            display: inline-block;
            animation: girar 1.5s linear infinite;
        }
        @keyframes girar {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .spinner-container p {
            margin-top: 15px;
            font-weight: bold;
            letter-spacing: 1px;
            color: #ffcc00; /* Amarelo Agrinho */
        }
    `;
    document.head.appendChild(estilo);

    // Captura todos os links do menu que apontam para seções (#)
    const linksMenu = document.querySelectorAll(".nav-links a, .btn-tech, .btn-modern");

    linksMenu.forEach(link => {
        link.addEventListener("click", (evento) => {
            const href = link.getAttribute("href");

            // Só aplica a animação se for um link interno válido
            if (href.startsWith("#")) {
                evento.preventDefault(); // Pausa o salto seco do navegador
                const alvo = document.querySelector(href);

                if (alvo) {
                    // 1. Ativa a animação do elemento girando
                    loader.classList.add("active");

                    // 2. Espera 1 segundo (tempo para o usuário ver o efeito "girando")
                    setTimeout(() => {
                        // Desativa o efeito giratório
                        loader.classList.remove("active");

                        // Faz a rolagem suave até o local desejado
                        alvo.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });
                    }, 1000); 
                }
            }
        });
    });
});


// ==========================================
// 2. LÓGICA ANTERIOR DA CALCULADORA (Mantida)
// ==========================================
function calcularEconomia() {
    const hectares = document.getElementById('hectares')?.value;
    if (!hectares) return;
    
    const economiaPorHectare = 45000;
    const total = hectares * economiaPorHectare;
    
    const campoResultado = document.getElementById('resultado');
    if (campoResultado) {
        campoResultado.innerText = total.toLocaleString('pt-BR');
    }
}

// Vincula o cálculo ao input se ele existir na tela
document.addEventListener("DOMContentLoaded", () => {
    const inputHectares = document.getElementById('hectares');
    if (inputHectares) {
        inputHectares.addEventListener("input", calcularEconomia);
        calcularEconomia(); // roda primeira vez
    }
});