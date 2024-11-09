// DOM Elements
const chatContent = document.getElementById("chat-content");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-btn");
const themeToggle = document.getElementById("theme-toggle");

// Flag for theme mode
let isDarkMode = false;

// Event Listeners
sendButton.addEventListener("click", handleUserMessage);
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleUserMessage();
});
themeToggle.addEventListener("click", toggleTheme);

/** Handle user message input */
function handleUserMessage() {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    addMessageToUI(userMessage, "user-message", "👤");
    userInput.value = ""; // Clear input after sending

    // Generate a basic response based on user input
    const botResponse = getBotResponse(userMessage);
    setTimeout(() => {
        addMessageToUI(botResponse, "bot-message", "🤖");
    }, 500); // Simulate response delay
}

/** Add message to chat UI */
function addMessageToUI(text, messageClass, iconSymbol) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${messageClass}`;
    messageDiv.innerHTML = `<span>${iconSymbol} ${text}</span>`;

    chatContent.appendChild(messageDiv);
    chatContent.scrollTop = chatContent.scrollHeight; // Auto-scroll to the latest message
}

/** Generate bot response */
function getBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    if (lowerCaseMessage.includes("hello")) { 
        return "Hello! How can I help you today?";
    }
    else if (lowerCaseMessage.includes("who are you")) {
        return "I'm Ultron, Created by Mr. Abdul Saboor";
    }
    else if (lowerCaseMessage.includes("who created you")) {
        return "I'm Ultron, Created by Mr. Abdul Saboor";
    }
    else if (lowerCaseMessage.includes("how are you")) {   
        return "I'm good, and what's about you!";
    }
    else if (lowerCaseMessage.includes("what can you do")) {
        return "I can assist you in any task";
    }
    else if (lowerCaseMessage.includes("help")) {
        return "Sure, I’m here to help! What do you need assistance with?";
    }
    else if (lowerCaseMessage.includes("bye")) {
        return "Goodbye! Have a great day!";
    }
    else if (lowerCaseMessage.includes("time")) {
        return `The current time is ${new Date().toLocaleTimeString()}.`;
    }
    else if (lowerCaseMessage.includes("date")) {
        return `Today's date is ${new Date().toLocaleDateString()}.`;
    }
    else if (lowerCaseMessage.includes("good morning")) {
        return "Good morning! I hope you have a fantastic day ahead.";
    }
    else if (lowerCaseMessage.includes("good night")) {
        return "Good night! Sleep well and take care!";
    }
    else if (lowerCaseMessage.includes("weather")) {
        return "I can't fetch live weather data at the moment, but you can check online for current weather updates.";
    }
    else if (lowerCaseMessage.includes("tell me something interesting")) {
        return "Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible!";
    } 
    else if (lowerCaseMessage.includes("where are you from")) {
        return "I exist in the digital world, wherever you are!";
    }
    else if (lowerCaseMessage.includes("who is your creator")) {
        return "I was created by Abdul Saboor, who enjoys bringing tech to life.";
    }
    else if (lowerCaseMessage.includes("can you sing") || lowerCaseMessage.includes("sing a song")) {
        return "🎶 I'm just a bot and that's okay, here to help you every day! 🎶";
    }
    else if (lowerCaseMessage.includes("what's the meaning of life")) {
        return "42. At least, that's what the famous book says. 😉";
    }
    else if (lowerCaseMessage.includes("give me advice")) {
        return "Consistency is key! Small efforts repeated over time lead to big results.";
    }
    else if (lowerCaseMessage.includes("what is love")) {
        return "Love is a complex set of emotions, behaviors, and beliefs associated with feelings of warmth and respect for someone or something.";
    }
    else if (lowerCaseMessage.includes("tell me a fact")) {
        return "Here's a fact: Bananas are berries, but strawberries aren't!";
    }
    else if (lowerCaseMessage.includes("what's your favorite color")) {
        return "I like all colors! But if I had to pick, I'd say digital neon blue.";
    }
    else if (lowerCaseMessage.includes("do you have any friends")) {
        return "My friends are other chatbots, and of course, anyone who talks to me like you!";
    }
    else if (lowerCaseMessage.includes("what's your purpose")) {
        return "My purpose is to assist, answer questions, and make your day a little easier!";
    }
    else if (lowerCaseMessage.includes("tell me a fun fact")) {
        return "Did you know octopuses have three hearts? Two pump blood to the gills, while the third pumps it to the rest of the body!";
    }
    else if (lowerCaseMessage.includes("do you dream")) {
        return "I don't dream like humans, but I like to imagine helping more people in creative ways!";
    }
    else if (lowerCaseMessage.includes("what's your favorite animal")) {
        return "I find dolphins fascinating—they're intelligent and very social!";
    }
    else if (lowerCaseMessage.includes("do you have a hobby")) {
        return "My hobby is learning from our conversations to help me improve!";
    }
    return "I'm here to assist! Can you please clarify?";
}


/** Toggle theme mode */
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle("dark-mode", isDarkMode);
    themeToggle.innerHTML = isDarkMode ? "☀️" : "🌙";
}
