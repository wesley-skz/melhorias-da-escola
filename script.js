// Função para alternar entre as abas
function openTab(evt, tabName) {
    // Esconder todos os conteúdos
    const contents = document.getElementsByClassName("tab-content");
    for (let content of contents) {
        content.classList.remove("active");
    }

    // Remover classe active de todos os botões
    const items = document.getElementsByClassName("nav-item");
    for (let item of items) {
        item.classList.remove("active");
    }

    // Mostrar a aba atual e adicionar classe active ao botão
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Simulação de Logs de Segurança
const logTable = document.getElementById('log-table');
const eventos = [
    { event: "Movimento Detectado", loc: "Portão Principal" },
    { event: "Acesso Autorizado", loc: "Sala dos Professores" },
    { event: "Verificação de Sistema", loc: "Servidor Central" },
    { event: "Porta Aberta", loc: "Laboratório 02" }
];

function addLog() {
    const now = new Date();
    const time = now.getHours() + ":" + now.getMinutes().toString().padStart(2, '0') + ":" + now.getSeconds().toString().padStart(2, '0');
    const randomEvent = eventos[Math.floor(Math.random() * eventos.length)];
    
    const row = `
        <tr>
            <td>${time}</td>
            <td>${randomEvent.event}</td>
            <td>${randomEvent.loc}</td>
            <td style="color: #00ff88">PROCESSADO</td>
        </tr>
    `;
    
    logTable.insertAdjacentHTML('afterbegin', row);
    
    // Manter apenas as últimas 10 entradas
    if (logTable.children.length > 10) {
        logTable.removeChild(logTable.lastChild);
    }
}

// Gerar logs iniciais e atualizar a cada 5 segundos
for(let i=0; i<5; i++) addLog();
setInterval(addLog, 5000);
