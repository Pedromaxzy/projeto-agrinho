// Garante que o script só rode após o HTML estar totalmente pronto na tela
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. CRIAÇÃO DOS ESTILOS DA ANIMAÇÃO (CSS)
    const estilos = document.createElement("style");
    estilos.innerHTML = `
        #loader-agrinho {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(11, 60, 29, 0.98);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 99999;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
            color: #ffffff;
        }
        #loader-agrinho.ativo {
            opacity: 1;
            pointer-events: auto;
        }
        .loader-box { text-align: center; font-family: sans-serif; }
        .engrenagem { font-size: 5rem; display: inline-block; animation: girar 1s linear infinite; }
        @keyframes girar {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .loader-box p { margin-top: 20px; font-weight: bold; color: #ffcc00; font-size: 1.2rem; }
    `;
    document.head.appendChild(estilos);

    // 2. CRIAÇÃO DO ELEMENTO DO LOADER NO HTML
    const loader = document.createElement("div");
    loader.id = "loader-agrinho";
    loader.innerHTML = `
        <div class="loader-box">
            <div class="engrenagem">⚙️</div>
            <p>Processando Conexões Agro-Tech...</p>
        </div>
    `;
    document.body.appendChild(loader);

    // 3. ANIMAÇÃO DE TRANSIÇÃO E ROLAGEM SUAVE
    const links = document.querySelectorAll(".nav-links a, .btn-tech");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            const alvoId = link.getAttribute("href");

            if (alvoId && alvoId.startsWith("#")) {
                e.preventDefault();
                const elementoAlvo = document.querySelector(alvoId);

                if (elementoAlvo) {
                    // Ativa o loading girando
                    loader.classList.add("ativo");

                    // Espera 1 segundo com a tela girando, depois vai para a seção
                    setTimeout(() => {
                        loader.classList.remove("ativo");
                        elementoAlvo.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });
                    }, 1000);
                }
            }
        });
    });

    // 4. LÓGICA DO SIMULADOR (CALCULADORA)
    const inputHectares = document.getElementById("hectares");
    const txtResultado = document.getElementById("resultado");

    function calcular() {
        if (!inputHectares || !txtResultado) return; // Evita quebra caso não ache os IDs
        
        const hectares = Number(inputHectares.value) || 0;
        const economiaPorHectare = 45000;
        const total = hectares * economiaPorHectare;

        txtResultado.innerText = total.toLocaleString("pt-BR");
    }

    if (inputHectares) {
        inputHectares.addEventListener("input", calcular);
    }
});