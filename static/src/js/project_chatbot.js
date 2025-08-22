// Project Dify Chatbot JavaScript
console.log('Project Dify Chatbot loaded');

// Dify Chatbot Configuration
window.difyChatbotConfig = {
    token: "5sEPV0Y8ZNynnsDB",
    baseUrl: "http://dify.fadoo.ir:8080",
    inputs: {
        // You can define the inputs from the Start node here
        // key is the variable name
        // e.g.
        // name: "NAME"
    },
    systemVariables: {
        // user_id: 'YOU CAN DEFINE USER ID HERE',
        // conversation_id: 'YOU CAN DEFINE CONVERSATION ID HERE, IT MUST BE A VALID UUID',
    },
    userVariables: {
        // avatar_url: 'YOU CAN DEFINE USER AVATAR URL HERE',
        // name: 'YOU CAN DEFINE USER NAME HERE',
    },
};

// Initialize Dify Chatbot
function initializeDifyChatbot() {
    // Check if the script is already loaded
    if (document.getElementById('5sEPV0Y8ZNynnsDB')) {
        console.log('Dify chatbot script already loaded');
        return;
    }

    // Create and load the Dify chatbot script
    const script = document.createElement('script');
    script.src = 'http://dify.fadoo.ir:8080/embed.min.js';
    script.id = '5sEPV0Y8ZNynnsDB';
    script.defer = true;
    document.head.appendChild(script);
    
    console.log('Dify chatbot script loaded');
}

// Show/Toggle Dify Chatbot
function showDifyChatbot() {
    // Initialize chatbot if not already done
    initializeDifyChatbot();
    
    // Try to trigger the chatbot popup
    setTimeout(() => {
        const chatbotButton = document.querySelector('#dify-chatbot-bubble-button');
        if (chatbotButton) {
            chatbotButton.click();
        } else {
            console.log('Chatbot button not found, chatbot may still be loading');
        }
    }, 1000);
}

// Updated function implementations
function toggleProjectChatbot() {
    console.log('Toggle project chatbot');
    showDifyChatbot();
}

function showProjectChatbot() {
    console.log('Show project chatbot');
    showDifyChatbot();
}

function openProjectAssistant() {
    console.log('Open project assistant');
    showDifyChatbot();
}

function launchProjectHelper() {
    console.log('Launch project helper');
    showDifyChatbot();
}

// Initialize the chatbot when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeDifyChatbot();
});

// For Odoo's dynamic loading, also try to initialize when the script loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDifyChatbot);
} else {
    initializeDifyChatbot();
}