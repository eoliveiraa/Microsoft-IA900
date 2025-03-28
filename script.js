async function sendMessage() {
    const chatBox = document.getElementById("chatBox");
    const userInput = document.getElementById("userInput");
    const userMessage = userInput.valuel;

    if (!userMessage) return;

    //Adicionar mensagem do usuario

    const userDiv = document.getElementById("div");
    userDiv.className = "user-message message";
    userDiv.textContent = userMessage;
    chatBox.appendChild(userDiv);

    //Limpar o campo de entrada
    userInput.value = "";

    // Fazer scrool automatico para ultima mensagem 
    chatBox.scrollTop = chatBox.scrollHeight;

    // Configuraçao do endpoint e chave da API
    const endpoint = "https://emill-m8ryr2d9-swedencentral.openai.azure.com";
    const apiKey = "5lySy4nrBEKBMQdotN5aOiAdTg4Dp423wBmvjnR2KGuAj7OJjuhEJQQJ99BCACfhMk5XJ3w3AAAAACOGhvPV";
    const deploymentId = "gpt-35-turbo"; // Nome do deployment no Azure OpenAI
    const apiVersion = "2024-05-01-preview"; // Verifique a versao na documentaçao
}
