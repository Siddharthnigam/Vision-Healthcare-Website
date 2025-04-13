import React, { useState, useRef } from 'react';
import ai from '../Images/ai.png'

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const inputRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newMessage = { user: 'You', text: input };
        setMessages([...messages, newMessage]);

        const url = 'https://ai-doctor-api-ai-medical-chatbot-healthcare-ai-assistant.p.rapidapi.com/chat';
        const options = {
            method: 'POST',
            headers: {

                // 'x-rapidapi-key': '3a0010f792msha31f9e1e87c28fap1c7eeajsn6d9a462d72ea',
                'x-rapidapi-key': '5c50d057bamshf69e66d826e1084p1dcd8fjsn80a0abc7b10e',
                
                'x-rapidapi-host': 'ai-doctor-api-ai-medical-chatbot-healthcare-ai-assistant.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: input,
                specialization: 'psychiatry',
                language: 'en'
            })
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            const botMessage = { user: 'Your Doctor', text: result };
            setMessages([...messages, newMessage, botMessage]);
        } catch (error) {
            console.error(error);
            const errorMessage = { user: 'Bot', text: 'There was an error processing your request.' };
            setMessages([...messages, newMessage, errorMessage]);
        }

        setInput('');
    };

    const handleCopy = () => {
        if (inputRef.current) {
            inputRef.current.select();
            document.execCommand('copy');
        }
    };

    return (
        <div className="flex flex-col items-center ">
            <h1 className='text-[8vh]  font-bold leading-tight text-zinc-900'>Your Health-Care AI Assistant</h1>
            <h1  className='text-[3vh] mt-2  font-bold leading-tight text-zinc-900'>Enter your issue and wait a minute than re-enter it you'll get your information.. </h1>
       <br />   <div className='flex justify-evenly w-[100%]'>
            <div className="w-[60%] h-96 border bg-zinc-200 border-gray-300 p-2 rounded-xl overflow-y-scroll">
            <center> <h1 className='text-[5vh] font-semibold underline text-zinc-900'>Your Information</h1></center>   
                {messages.map((msg, index) => (
                    <p key={index} className="mb-2 text-[3vh] text-zinc-900">
                        <span className="font-bold">{msg.user}:</span> {msg.text}
                    </p>
                ))}
            </div>
            <div className='flex justify-center w-[30%] opacity-23'><img className='w-[80%] h-auto rounded-xl' src={ai} alt="" /></div>
            </div>
            <form onSubmit={handleSubmit} className="w-[50%] bg-zinc-600 mt-4">
                <div className="flex items-center justify-start">
                    <input
                        type="text"
                        value={input}
                        ref={inputRef}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full p-2 border text-zinc-950 text-[3vh] font-semibold border-gray-300 rounded-md"
                        placeholder="Type your message here..."
                        required
                    />
                    <button type="submit" className="ml-2 px-6 py-1 text-[3vh] bg-blue-500 text-white rounded-md">
                        Send
                    </button>
                    <button type="button" onClick={handleCopy} className="ml-2 px-6 py-1 text-[3vh] bg-gray-300 text-zinc-950 rounded-md">
                        Copy
                    </button>
                </div>
            </form><br /><br /><br />
        </div>
    );
};

export default ChatBot;
