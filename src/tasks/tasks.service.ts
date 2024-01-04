// tasks.service.ts
import { Injectable } from '@nestjs/common';

/**
 * Service class for handling chatbot responses.
 */
@Injectable()
export class TasksService {
    private chatbotResponses = {
        "hello": "Hi there! How can I assist you today?",
        "what's your name": "I'm GitHub Copilot, your AI programming assistant.",
        "how's the weather": "I'm sorry, as an AI, I don't have access to real-time data like weather information.",
        "tell me a joke": "Why don't programmers like nature? It has too many bugs.",
        "goodbye": "Goodbye! Have a great day!"
    };

    /**
     * Get the appropriate response for a user message.
     * @param message - The user's message.
     * @returns The response corresponding to the user's message, or a default response if no keywords were found.
     */
    getResponseForUserMessage(message: string) {
        console.log(`User message: ${message}`);

        // Convert the user's message to lowercase for case-insensitive matching
        const lowerCaseMessage = message.toLowerCase();

        // Iterate over the keys in the chatbotResponses object
        for (const key in this.chatbotResponses) {
            // If the user's message contains the current key as a substring
            if (lowerCaseMessage.includes(key)) {
                // Return the corresponding response
                return {"data":this.chatbotResponses[key], "type":"bot"};
            }
        }

        // If no keywords were found in the user's message, return a default response
        return {"data":"Sorry, I don't understand that yet.", "type":"bot"};
    }
}