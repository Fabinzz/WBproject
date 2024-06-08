// Função para obter clientes do localStorage
const getClients = () => {
    const clients = localStorage.getItem('clients');
    return clients ? JSON.parse(clients) : [];
};

// Função para salvar clientes no localStorage
const saveClients = (clients) => {
    localStorage.setItem('clients', JSON.stringify(clients));
};

// Função para renderizar a lista de clientes na tabela
const renderClientList = () => {
    const clients = getClients();
    const clientTableBody = document.getElementById('clientTableBody');
    clientTableBody.innerHTML = '';

    clients.forEach((client, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${client.name}</td>
            <td>${client.email}</td>
            <td>
                <button onclick="editClient(${index})">Editar</button>
                <button onclick="deleteClient(${index})">Excluir</button>
            </td>
        `;
        clientTableBody.appendChild(row);
    });
};

// Função para adicionar ou atualizar um cliente
const addOrUpdateClient = (event) => {
    event.preventDefault();
    const clients = getClients();
    const clientId = document.getElementById('clientId').value;
    const clientName = document.getElementById('clientName').value;
    const clientEmail = document.getElementById('clientEmail').value;

    const clientData = { name: clientName, email: clientEmail };

    if (clientId !== '') {
        // Atualiza o cliente existente
        clients[clientId] = clientData;
    } else {
        // Adiciona um novo cliente
        clients.push(clientData);
    }

    saveClients(clients);
    renderClientList();
    document.getElementById('clientForm').reset();
    document.getElementById('clientId').value = ''; // Limpa o campo hidden após adicionar/atualizar
};

// Função para editar um cliente
const editClient = (index) => {
    const clients = getClients();
    const client = clients[index];
    document.getElementById('clientId').value = index;
    document.getElementById('clientName').value = client.name;
    document.getElementById('clientEmail').value = client.email;
};

// Função para excluir um cliente
const deleteClient = (index) => {
    const clients = getClients();
    clients.splice(index, 1);
    saveClients(clients);
    renderClientList();
};

// Event listener para o formulário
document.getElementById('clientForm').addEventListener('submit', addOrUpdateClient);

// Renderiza a lista de clientes na inicialização
document.addEventListener('DOMContentLoaded', renderClientList);
