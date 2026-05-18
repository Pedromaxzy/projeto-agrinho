// ==========================================================================
// CODE INTEGRADO PARA O main.js (GitHub / Produção)
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. INJEÇÃO DINÂMICA DO DESIGN DA ANIMAÇÃO (CSS NO JAVASCRIPT)
    // Isso cria os estilos da engrenagem girando sem precisar mexer no HTML
    const estilosAgrinho = document.createElement("style");
    estilosAgrinho.innerHTML = `
        /* Tela de fundo do carregamento */
        #loader-agrinho {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(11, 60, 29, 0.97); /* Verde escuro institucional */
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 99999;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.4s ease;
            color: #ffffff;
            font-family: sans-serif;
        }

        /* Classe que ativa a animação na tela */
        #loader-agrinho.ativo {
            opacity: 1;
            pointer-events: auto;
        }

        .loader-box {
            text-align: center;
        }

        /* Efeito de rotação contínua da engrenagem */
        .engrenagem-rotativa {
            font-size: 5rem;
            display: inline-block;
            animation: rodarEngrenagem 1.2s linear infinite;
        }

        @keyframes rodarEngrenagem {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .loader-box p {
            margin-top: 20px;
            font-weight: bold;
            font-size: 1.2rem;
            letter-spacing: 1px;
            color: #ffcc00; /* Amarelo Ouro Agrinho */
        }
    `;
    document.head.appendChild(estilosAgrinho);

    // 2. CRIAÇÃO E INJEÇÃO DO HTML DO LOADER
    const elementoLoader = document.createElement("div");
    elementoLoader.id = "loader-agrinho";
    elementoLoader.innerHTML = `
        <div class="loader-box">
            <div class="engrenagem-rotativa">⚙️</div>
            <p>Conectando ao Ecossistema Agro-Tech...</p>
        </div>
    `;
    document.body.appendChild(elementoLoader);


    // 3. ANIMAÇÃO DE INTERAÇÃO (AO CLICAR NOS LINKS OU BOTÕES)
    // Seleciona os links do menu e botões de ação do seu site
    const linksDoMenu = document.querySelectorAll(".nav-links a, .btn-tech, .btn-modern, a[href^='#']");

    linksDoMenu.forEach(link => {
        link.addEventListener("click", (evento) => {
            const destinoHref = link.getAttribute("href");

            // Verifica se o clique é para uma seção interna do site (começa com #)
            if (destinoHref && destinoHref.startsWith("#")) {
                evento.preventDefault(); // Cancela o pulo seco padrão do navegador
                const secaoAlvo = document.querySelector(destinoHref);

                if (secaoAlvo) {
                    // Passo A: Mostra a engrenagem girando na tela inteira
                    elementoLoader.classList.add("ativo");

                    // Passo B: Espera 1.2 segundos (tempo do efeito visual)
                    setTimeout(() => {
                        // Passo C: Esconde a animação
                        elementoLoader.classList.remove("ativo");

                        // Passo D: Faz o navegador deslizar suavemente até a seção
                        secaoAlvo.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });
                    }, 1200);
                }
            }
        });
    });


    // 4. LÓGICA DO SIMULADOR E CALCULADORA DE IMPACTO
    const inputHectares = document.getElementById("hectares");
    const containerResultado = document.getElementById("resultado");

    function atualizarCalculoAgro() {
        if (!inputHectares || !containerResultado) return; // Evita erros caso o elemento sumer da tela
        
        const valorDigitado = Number(inputHectares.value) || 0;
        const litrosPorHectare = 45000; // Constante de economia com tecnologia IoT
        const resultadoFinal = valorDigitado * litrosPorHectare;

        // Atualiza o texto na tela formatado com os pontos de milhar
        containerResultado.innerText = resultadoFinal.toLocaleString('pt-BR');
    }

    // Se o elemento de input existir no HTML, ativa o ouvinte de digitação
    if (inputHectares) {
        inputHectares.addEventListener("input", atualizarCalculoAgro);
        atualizarCalculoAgro(); // Executa uma vez no início para setar o valor inicial
    }
});