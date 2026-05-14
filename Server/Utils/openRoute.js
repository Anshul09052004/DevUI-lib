import axios from 'axios';

export const askAi = async (message) => {

    try {

        if (
            !message ||
            !Array.isArray(message) ||
            message.length === 0
        ) {
            throw new Error(
                'Message should be an array'
            );
        }

        const response = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                model: 'deepseek/deepseek-chat',

                messages: message,

                temperature: 0.5,

                max_tokens: 2000
            },
            {
                headers: {
                    Authorization:
                        `Bearer ${process.env.OPENROUTER_API_KEY}`,

                    'Content-Type': 'application/json'
                }
            }
        );

        const content =
            response.data.choices[0].message.content;

        if (!content || content.trim() === '') {
            throw new Error('Empty AI response');
        }

        return content;

    } catch (error) {

        console.log(
            error.response?.data || error.message
        );

        throw error;

    }

};