// // import React, { useState } from 'react';
// // import { Box, Chip, Button, Typography, Paper, Avatar, TextField } from '@mui/material';

// // const ChatBot = () => {
// //   const [chatOpen, setChatOpen] = useState(false);
// //   const [messages, setMessages] = useState([]);
// //   const [inputText, setInputText] = useState('');

// //   // Predefined questions (chips)
// //   const predefinedQuestions = [
// //     'What pet to choose?',
// //     'Tell me about a specific pet breed',
// //     'What to do if I lost a pet?',
// //     'How can I adopt a pet?',
// //     'How to care for my pet?',
// //   ];

// //   // Handle chip click (add a message to the chat)
// //   const handleChipClick = (question) => {
// //     setMessages((prevMessages) => [
// //       ...prevMessages,
// //       { text: question, isUser: false },
// //     ]);
// //   };

// //   // Handle message send (user input)
// //   const handleMessageSend = () => {
// //     if (inputText.trim()) {
// //       setMessages((prevMessages) => [
// //         ...prevMessages,
// //         { text: inputText, isUser: true },
// //       ]);
// //       setInputText('');
// //     }
// //   };

// //   // Toggle chat visibility
// //   const toggleChat = () => setChatOpen(!chatOpen);

// //   return (
// //     <Box>
// //       {/* Chatbot icon to open chat */}
// //       {!chatOpen && (
// //         <Button
// //           onClick={toggleChat}
// //           style={{
// //             position: 'fixed',
// //             bottom: 16,
// //             right: 16,
// //             backgroundColor: '#0EB9F0',
// //             borderRadius: '50%',
// //             width: '60px',
// //             height: '60px',
// //             display: 'flex',
// //             justifyContent: 'center',
// //             alignItems: 'center',
// //             color: '#fff',
// //             boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
// //             zIndex: 9999,
// //           }}
// //         >
// //           <Avatar
// //             src="https://via.placeholder.com/40" // Placeholder for pet avatar
// //             alt="Pet Avatar"
// //           />
// //         </Button>
// //       )}

// //       {/* Chatbot UI when chat is open */}
// //       {chatOpen && (
// //         <Box
// //           style={{
// //             position: 'fixed',
// //             bottom: 16,
// //             right: 16,
// //             width: '300px',
// //             height: '400px',
// //             display: 'flex',
// //             flexDirection: 'column',
// //             backgroundColor: '#fff',
// //             borderRadius: '12px',
// //             boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
// //             zIndex: 9999,
// //           }}
// //         >
// //           <Box
// //             style={{
// //               backgroundColor: '#0EB9F0',
// //               color: '#fff',
// //               padding: '10px',
// //               borderTopLeftRadius: '12px',
// //               borderTopRightRadius: '12px',
// //               display: 'flex',
// //               alignItems: 'center',
// //               justifyContent: 'space-between',
// //             }}
// //           >
// //             <Typography variant="h6">ChatBot</Typography>
// //             <Button onClick={toggleChat} style={{ color: '#fff' }}>
// //               Close
// //             </Button>
// //           </Box>

// //           <Box
// //             style={{
// //               padding: '10px',
// //               flexGrow: 1,
// //               overflowY: 'auto',
// //               display: 'flex',
// //               flexDirection: 'column',
// //             }}
// //           >
// //             {/* Render chat messages */}
// //             {messages.map((message, index) => (
// //               <Box
// //                 key={index}
// //                 style={{
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   marginBottom: '10px',
// //                   justifyContent: message.isUser ? 'flex-end' : 'flex-start',
// //                 }}
// //               >
// //                 {!message.isUser && (
// //                   <Avatar
// //                     style={{ width: 30, height: 30, marginRight: 10 }}
// //                     src="https://via.placeholder.com/30"
// //                     alt="Pet Avatar"
// //                   />
// //                 )}
// //                 <Paper
// //                   style={{
// //                     maxWidth: '70%',
// //                     padding: '10px',
// //                     borderRadius: '12px',
// //                     backgroundColor: message.isUser ? '#0EB9F0' : '#f1f1f1',
// //                     color: message.isUser ? '#fff' : '#000',
// //                     textAlign: message.isUser ? 'right' : 'left',
// //                   }}
// //                 >
// //                   {message.text}
// //                 </Paper>
// //               </Box>
// //             ))}

// //             {/* Predefined question chips */}
// //             <Box
// //               style={{
// //                 display: 'flex',
// //                 gap: '10px',
// //                 marginTop: '10px',
// //                 flexWrap: 'wrap',
// //               }}
// //             >
// //               {predefinedQuestions.map((question, index) => (
// //                 <Chip
// //                   key={index}
// //                   label={question}
// //                   onClick={() => handleChipClick(question)}
// //                   color="primary"
// //                   style={{
// //                     cursor: 'pointer',
// //                   }}
// //                 />
// //               ))}
// //             </Box>
// //           </Box>

// //           <Box
// //             style={{
// //               display: 'flex',
// //               padding: '10px',
// //               backgroundColor: '#f7f7f7',
// //               borderBottomLeftRadius: '12px',
// //               borderBottomRightRadius: '12px',
// //             }}
// //           >
// //             <TextField
// //               fullWidth
// //               variant="outlined"
// //               size="small"
// //               value={inputText}
// //               onChange={(e) => setInputText(e.target.value)}
// //               placeholder="Type your message..."
// //             />
// //             <Button
// //               onClick={handleMessageSend}
// //               color="primary"
// //               style={{ marginLeft: '10px' }}
// //             >
// //               Send
// //             </Button>
// //           </Box>
// //         </Box>
// //       )}
// //     </Box>
// //   );
// // };

// // export default ChatBot;
// // import React, { useState } from 'react';
// // import { Box, Chip, Button, Typography, Paper, Avatar, TextField } from '@mui/material';
// // import chatlogo from "../pages/images/avatars/avatars/Dog.svg"
// // const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// // const ChatBot = () => {
// //   const [chatOpen, setChatOpen] = useState(false);
// //   const [messages, setMessages] = useState([]);
// //   const [inputText, setInputText] = useState('');

// //   // Predefined questions (chips)
// //   const predefinedQuestions = [
// //     'What pet to choose?',
// //     'Tell me about a specific pet breed',
// //     'What to do if I lost a pet?',
// //     'How can I adopt a pet?',
// //     'How to care for my pet?',
// //   ];

// //   // Handle chip click (add a message to the chat)
// //   const handleChipClick = (question) => {
// //     setMessages((prevMessages) => [
// //       ...prevMessages,
// //       { text: question, isUser: true },
// //     ]);
// //     sendMessageToBackend(question);
// //   };

// //   // Handle message send (user input)
// //   const handleMessageSend = async () => {
// //     if (inputText.trim()) {
// //       setMessages((prevMessages) => [
// //         ...prevMessages,
// //         { text: inputText, isUser: true },
// //       ]);
// //       setInputText('');
// //       await sendMessageToBackend(inputText);
// //     }
// //   };

// //   // Send the message to the backend and get a response
// //   const sendMessageToBackend = async (message) => {
// //     try {
// //         const accessToken = localStorage.getItem("access_token");
  
// //         if (!accessToken) {
// //           console.error("No access token found");
// //           return;
// //         }
// //       const response = await fetch(`${API_BASE_URL}/chat/`, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //           Authorization: `Bearer ${accessToken}`,
// //         },
// //         body: JSON.stringify({ message }), // Send message to backend
// //       });

// //       const data = await response.json();

// //       if (data.reply) {
// //         setMessages((prevMessages) => [
// //           ...prevMessages,
// //           { text: data.reply, isUser: false },
// //         ]);
// //       } else {
// //         setMessages((prevMessages) => [
// //           ...prevMessages,
// //           { text: 'Sorry, I didn\'t understand that.', isUser: false },
// //         ]);
// //       }
// //     } catch (error) {
// //       console.error('Error sending message to backend:', error);
// //     }
// //   };

// //   // Toggle chat visibility
// //   const toggleChat = () => setChatOpen(!chatOpen);

// //   return (
// //     <Box>
// //       {/* Chatbot icon to open chat */}
// //       {!chatOpen && (
// //         <Button
// //           onClick={toggleChat}
// //           style={{
// //             position: 'fixed',
// //             bottom: 16,
// //             right: 16,
// //             backgroundColor: '#0EB9F0',
// //             borderRadius: '50%',
// //             width: '60px',
// //             height: '60px',
// //             display: 'flex',
// //             justifyContent: 'center',
// //             alignItems: 'center',
// //             color: '#fff',
// //             boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
// //             zIndex: 9999,
// //           }}
// //         >
// //           <Avatar
// //             src={chatlogo} // Placeholder for pet avatar
// //             alt="Pet Avatar"
// //           />
// //         </Button>
// //       )}

// //       {/* Chatbot UI when chat is open */}
// //       {chatOpen && (
// //         <Box
// //           style={{
// //             position: 'fixed',
// //             bottom: 16,
// //             right: 16,
// //             width: '300px',
// //             height: '400px',
// //             display: 'flex',
// //             flexDirection: 'column',
// //             backgroundColor: '#fff',
// //             borderRadius: '12px',
// //             boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
// //             zIndex: 9999,
// //           }}
// //         >
// //           <Box
// //             style={{
// //               backgroundColor: '#0EB9F0',
// //               color: '#fff',
// //               padding: '10px',
// //               borderTopLeftRadius: '12px',
// //               borderTopRightRadius: '12px',
// //               display: 'flex',
// //               alignItems: 'center',
// //               justifyContent: 'space-between',
// //             }}
// //           >
// //             <Typography variant="h6">ChatBot</Typography>
// //             <Button onClick={toggleChat} style={{ color: '#fff' }}>
// //               Close
// //             </Button>
// //           </Box>

// //           <Box
// //             style={{
// //               padding: '10px',
// //               flexGrow: 1,
// //               overflowY: 'auto',
// //               display: 'flex',
// //               flexDirection: 'column',
// //             }}
// //           >
// //             {/* Render chat messages */}
// //             {messages.map((message, index) => (
// //               <Box
// //                 key={index}
// //                 style={{
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   marginBottom: '10px',
// //                   justifyContent: message.isUser ? 'flex-end' : 'flex-start',
// //                 }}
// //               >
// //                 {!message.isUser && (
// //                   <Avatar
// //                     style={{ width: 30, height: 30, marginRight: 10 }}
// //                     src={chatlogo}
// //                     alt="Pet Avatar"
// //                   />
// //                 )}
// //                 <Paper
// //                   style={{
// //                     maxWidth: '70%',
// //                     padding: '10px',
// //                     borderRadius: '12px',
// //                     backgroundColor: message.isUser ? '#0EB9F0' : '#f1f1f1',
// //                     color: message.isUser ? '#fff' : '#000',
// //                     textAlign: message.isUser ? 'right' : 'left',
// //                   }}
// //                 >
// //                   {message.text}
// //                 </Paper>
// //               </Box>
// //             ))}

// //             {/* Predefined question chips */}
// //             <Box
// //               style={{
// //                 display: 'flex',
// //                 gap: '10px',
// //                 marginTop: '10px',
// //                 flexWrap: 'wrap',
// //               }}
// //             >
// //               {predefinedQuestions.map((question, index) => (
// //                 <Chip
// //                   key={index}
// //                   label={question}
// //                   onClick={() => handleChipClick(question)}
// //                   color="primary"
// //                   style={{
// //                     cursor: 'pointer',
// //                   }}
// //                 />
// //               ))}
// //             </Box>
// //           </Box>

// //           <Box
// //             style={{
// //               display: 'flex',
// //               padding: '10px',
// //               backgroundColor: '#f7f7f7',
// //               borderBottomLeftRadius: '12px',
// //               borderBottomRightRadius: '12px',
// //             }}
// //           >
// //             <TextField
// //               fullWidth
// //               variant="outlined"
// //               size="small"
// //               value={inputText}
// //               onChange={(e) => setInputText(e.target.value)}
// //               placeholder="Type your message..."
// //             />
// //             <Button
// //               onClick={handleMessageSend}
// //               color="primary"
// //               style={{ marginLeft: '10px' }}
// //             >
// //               Send
// //             </Button>
// //           </Box>
// //         </Box>
// //       )}
// //     </Box>
// //   );
// // };

// // export default ChatBot;
// // import React, { useState } from 'react';
// // import { Box, Chip, Button, Typography, Paper, Avatar, TextField } from '@mui/material';
// // import chatlogo from "../pages/images/avatars/avatars/Dog.svg"

// // const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// // const ChatBot = () => {
// //   const [chatOpen, setChatOpen] = useState(false);
// //   const [messages, setMessages] = useState([]);
// //   const [inputText, setInputText] = useState('');

// //   // Predefined questions (chips)
// //   const predefinedQuestions = [
// //     'What pet to choose?',
// //     'Tell me about a specific pet breed',
// //     'What to do if I lost a pet?',
// //     'How can I adopt a pet?',
// //     'How to care for my pet?',
// //   ];

// //   // Handle chip click (add a message to the chat)
// //   const handleChipClick = (question) => {
// //     setMessages((prevMessages) => [
// //       ...prevMessages,
// //       { text: question, isUser: true },
// //     ]);
// //     sendMessageToBackend(question);
// //   };

// //   // Handle message send (user input)
// //   const handleMessageSend = async () => {
// //     if (inputText.trim()) {
// //       setMessages((prevMessages) => [
// //         ...prevMessages,
// //         { text: inputText, isUser: true },
// //       ]);
// //       setInputText('');
// //       await sendMessageToBackend(inputText);
// //     }
// //   };

// //   // Send the message to the backend and get a response
// //   const sendMessageToBackend = async (message) => {
// //     try {
// //       const accessToken = localStorage.getItem("access_token");

// //       if (!accessToken) {
// //         console.error("No access token found");
// //         return;
// //       }

// //       // Logging request for debugging
// //       console.log("Sending message to backend:", message);

// //       const response = await fetch(`${API_BASE_URL}/chat/`, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //           Authorization: `Bearer ${accessToken}`,
// //         },
// //         body: JSON.stringify({ message }), // Send message to backend
// //       });

// //       const data = await response.json();

// //       // Logging response for debugging
// //       console.log("Received response from backend:", data);

// //       if (data.response) {
// //         // If reply exists in the response, add it to the messages
// //         setMessages((prevMessages) => [
// //           ...prevMessages,
// //           { text: data.response, isUser: false },
// //         ]);
// //       } else {
// //         // If no reply is found, handle it with a default message
// //         setMessages((prevMessages) => [
// //           ...prevMessages,
// //           { text: 'Sorry, I didn\'t understand that.', isUser: false },
// //         ]);
// //       }
// //     } catch (error) {
// //       console.error('Error sending message to backend:', error);
// //     }
// //   };

// //   // Toggle chat visibility
// //   const toggleChat = () => setChatOpen(!chatOpen);

// //   return (
// //     <Box>
// //       {/* Chatbot icon to open chat */}
// //       {!chatOpen && (
// //         <Button
// //           onClick={toggleChat}
// //           style={{
// //             position: 'fixed',
// //             bottom: 16,
// //             right: 16,
// //             backgroundColor: '#0EB9F0',
// //             borderRadius: '50%',
// //             width: '60px',
// //             height: '60px',
// //             display: 'flex',
// //             justifyContent: 'center',
// //             alignItems: 'center',
// //             color: '#fff',
// //             boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
// //             zIndex: 9999,
// //           }}
// //         >
// //           <Avatar
// //             src={chatlogo} // Placeholder for pet avatar
// //             alt="Pet Avatar"
// //           />
// //         </Button>
// //       )}

// //       {/* Chatbot UI when chat is open */}
// //       {chatOpen && (
// //         <Box
// //           style={{
// //             position: 'fixed',
// //             bottom: 16,
// //             right: 16,
// //             width: '300px',
// //             height: '400px',
// //             display: 'flex',
// //             flexDirection: 'column',
// //             backgroundColor: '#fff',
// //             borderRadius: '12px',
// //             boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
// //             zIndex: 9999,
// //           }}
// //         >
// //           <Box
// //             style={{
// //               backgroundColor: '#0EB9F0',
// //               color: '#fff',
// //               padding: '10px',
// //               borderTopLeftRadius: '12px',
// //               borderTopRightRadius: '12px',
// //               display: 'flex',
// //               alignItems: 'center',
// //               justifyContent: 'space-between',
// //             }}
// //           >
// //             <Typography variant="h6">ChatBot</Typography>
// //             <Button onClick={toggleChat} style={{ color: '#fff' }}>
// //               Close
// //             </Button>
// //           </Box>

// //           <Box
// //             style={{
// //               padding: '10px',
// //               flexGrow: 1,
// //               overflowY: 'auto',
// //               display: 'flex',
// //               flexDirection: 'column',
// //             }}
// //           >
// //             {/* Render chat messages */}
// //             {messages.map((message, index) => (
// //               <Box
// //                 key={index}
// //                 style={{
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   marginBottom: '10px',
// //                   justifyContent: message.isUser ? 'flex-end' : 'flex-start',
// //                 }}
// //               >
// //                 {!message.isUser && (
// //                   <Avatar
// //                     style={{ width: 30, height: 30, marginRight: 10 }}
// //                     src={chatlogo}
// //                     alt="Pet Avatar"
// //                   />
// //                 )}
// //                 <Paper
// //                   style={{
// //                     maxWidth: '70%',
// //                     padding: '10px',
// //                     borderRadius: '12px',
// //                     backgroundColor: message.isUser ? '#0EB9F0' : '#f1f1f1',
// //                     color: message.isUser ? '#fff' : '#000',
// //                     textAlign: message.isUser ? 'right' : 'left',
// //                   }}
// //                 >
// //                   {message.text}
// //                 </Paper>
// //               </Box>
// //             ))}

// //             {/* Predefined question chips */}
// //             <Box
// //               style={{
// //                 display: 'flex',
// //                 gap: '10px',
// //                 marginTop: '10px',
// //                 flexWrap: 'wrap',
// //               }}
// //             >
// //               {predefinedQuestions.map((question, index) => (
// //                 <Chip
// //                   key={index}
// //                   label={question}
// //                   onClick={() => handleChipClick(question)}
// //                   color="primary"
// //                   style={{
// //                     cursor: 'pointer',
// //                   }}
// //                 />
// //               ))}
// //             </Box>
// //           </Box>

// //           <Box
// //             style={{
// //               display: 'flex',
// //               padding: '10px',
// //               backgroundColor: '#f7f7f7',
// //               borderBottomLeftRadius: '12px',
// //               borderBottomRightRadius: '12px',
// //             }}
// //           >
// //             <TextField
// //               fullWidth
// //               variant="outlined"
// //               size="small"
// //               value={inputText}
// //               onChange={(e) => setInputText(e.target.value)}
// //               placeholder="Type your message..."
// //             />
// //             <Button
// //               onClick={handleMessageSend}
// //               color="primary"
// //               style={{ marginLeft: '10px' }}
// //             >
// //               Send
// //             </Button>
// //           </Box>
// //         </Box>
// //       )}
// //     </Box>
// //   );
// // };

// // export default ChatBot;
// // import React, { useState, useEffect } from 'react';
// // import { Box, Chip, Button, Typography, Paper, Avatar, TextField } from '@mui/material';
// // import dogAvatar from "../pages/images/avatars/avatars/Dog.svg";
// // import catAvatar from "../pages/images/avatars/avatars/Cat.svg";

// // const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// // const ChatBot = () => {
// //   const [chatOpen, setChatOpen] = useState(false);
// //   const [messages, setMessages] = useState([]);
// //   const [inputText, setInputText] = useState('');
// //   const [petType] = useState(Math.random() > 0.5 ? 'dog' : 'cat'); // Random on load
// //   const [showSpeechBubble, setShowSpeechBubble] = useState(true); // Speech bubble toggle

// //   const avatar = petType === 'dog' ? dogAvatar : catAvatar;

// //   const predefinedQuestions = [
// //     'Kā pareizi izvēlēties mājdzīvnieku?',
// //     'Pastāsti par haskija šķirni',
// //     'Ko darīt, ja esmu pazaudējis savu mājdzīvnieku?',
// //     'Kā pareizi rūpēties par mājdzīvnieku?',
// //   ];

// //   const handleChipClick = (question) => {
// //     setMessages((prevMessages) => [
// //       ...prevMessages,
// //       { text: question, isUser: true },
// //     ]);
// //     sendMessageToBackend(question);
// //   };

// //   const handleMessageSend = async () => {
// //     if (inputText.trim()) {
// //       setMessages((prevMessages) => [
// //         ...prevMessages,
// //         { text: inputText, isUser: true },
// //       ]);
// //       setInputText('');
// //       await sendMessageToBackend(inputText);
// //     }
// //   };

// //   const sendMessageToBackend = async (message) => {
// //     try {
// //       const accessToken = localStorage.getItem("access_token");
// //       if (!accessToken) {
// //         console.error("No access token found");
// //         return;
// //       }

// //       const response = await fetch(`${API_BASE_URL}/chat/`, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //           Authorization: `Bearer ${accessToken}`,
// //         },
// //         body: JSON.stringify({ message }),
// //       });

// //       const data = await response.json();
// //       if (data.response) {
// //         setMessages((prevMessages) => [
// //           ...prevMessages,
// //           { text: data.response, isUser: false },
// //         ]);
// //       } else {
// //         setMessages((prevMessages) => [
// //           ...prevMessages,
// //           { text: 'Sorry, I didn\'t understand that.', isUser: false },
// //         ]);
// //       }
// //     } catch (error) {
// //       console.error('Error sending message to backend:', error);
// //     }
// //   };

// //   const toggleChat = () => setChatOpen(!chatOpen);

// //   useEffect(() => {
// //     // Add shake keyframe
// //     const style = document.createElement('style');
// //     style.innerHTML = `
// //       @keyframes shake {
// //         0%, 100% { transform: translateX(0); }
// //         25% { transform: translateX(-3px); }
// //         75% { transform: translateX(3px); }
// //       }
// //     `;
// //     document.head.appendChild(style);

// //     // Auto-hide speech bubble
// //     const timer = setTimeout(() => {
// //       setShowSpeechBubble(false);
// //     }, 4000); // Hide after 4 seconds

// //     return () => clearTimeout(timer);
// //   }, []);

// //   return (
// //     <Box>
// //       {/* Chat bubble speech */}
// //       {!chatOpen && showSpeechBubble && (
// //         <Typography
// //           variant="caption"
// //           style={{
// //             position: 'fixed',
// //             bottom: 90,
// //             right: 90,
// //             backgroundColor: '#fff',
// //             padding: '4px 10px',
// //             borderRadius: '10px',
// //             boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
// //             fontSize: '12px',
// //             zIndex: 9999,
// //             transition: 'opacity 0.5s ease',
// //           }}
// //         >
// //           {petType === 'dog' ? 'Woof!' : 'Meow!'}
// //         </Typography>
// //       )}

// //       {/* Chatbot toggle button */}
// //       {!chatOpen && (
// //         <Button
// //           onClick={toggleChat}
// //           style={{
// //             position: 'fixed',
// //             bottom: 16,
// //             right: 16,
// //             backgroundColor: '#0EB9F0',
// //             borderRadius: '50%',
// //             width: '60px',
// //             height: '60px',
// //             display: 'flex',
// //             justifyContent: 'center',
// //             alignItems: 'center',
// //             color: '#fff',
// //             boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
// //             animation: 'shake 0.5s ease-in-out 1s 3',
// //             zIndex: 9999,
// //           }}
// //         >
// //           <Avatar src={avatar} alt="Pet Avatar" />
// //         </Button>
// //       )}

// //       {/* Chat window */}
// //       {chatOpen && (
// //         <Box
// //           style={{
// //             position: 'fixed',
// //             bottom: 16,
// //             right: 16,
// //             width: '300px',
// //             height: '400px',
// //             display: 'flex',
// //             flexDirection: 'column',
// //             backgroundColor: '#fff',
// //             borderRadius: '12px',
// //             boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
// //             zIndex: 9999,
// //           }}
// //         >
// //           <Box
// //             style={{
// //               backgroundColor: '#0EB9F0',
// //               color: '#fff',
// //               padding: '10px',
// //               borderTopLeftRadius: '12px',
// //               borderTopRightRadius: '12px',
// //               display: 'flex',
// //               alignItems: 'center',
// //               justifyContent: 'space-between',
// //             }}
// //           > <Box
// //           style={{
       

          
  
// //             display: 'flex',
// //             alignItems: 'center',
// //             justifyContent: 'space-between',
// //           }}
// //         ><Avatar src={avatar} alt="Pet Avatar"/>
// //             <Typography  marginLeft={1} variant="h6">AI ChatBot</Typography>
// //             </Box>
// //             <Button onClick={toggleChat} style={{ color: '#fff' }}>
// //               Aizvērt
// //             </Button>
// //           </Box>

// //           <Box
// //             style={{
// //               padding: '10px',
// //               flexGrow: 1,
// //               overflowY: 'auto',
// //               display: 'flex',
// //               flexDirection: 'column',
// //             }}
// //           >
// //             {messages.map((message, index) => (
// //               <Box
// //                 key={index}
// //                 style={{
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   marginBottom: '10px',
// //                   justifyContent: message.isUser ? 'flex-end' : 'flex-start',
// //                 }}
// //               >
// //                 {!message.isUser && (
// //                   <Avatar
// //                     style={{ width: 30, height: 30, marginRight: 10 }}
// //                     src={avatar}
// //                     alt="Pet Avatar"
// //                   />
// //                 )}
// //                 <Paper
// //                   style={{
// //                     maxWidth: '70%',
// //                     padding: '10px',
// //                     borderRadius: '12px',
// //                     backgroundColor: message.isUser ? '#0EB9F0' : '#f1f1f1',
// //                     color: message.isUser ? '#fff' : '#000',
// //                     textAlign: message.isUser ? 'right' : 'left',
// //                   }}
// //                 >
// //                   {message.text}
// //                 </Paper>
// //               </Box>
// //             ))}

// //             <Box
// //               style={{
// //                 display: 'flex',
// //                 gap: '10px',
// //                 marginTop: '10px',
// //                 flexWrap: 'wrap',
// //               }}
// //             >
// //               {predefinedQuestions.map((question, index) => (
// //                 <Chip
// //                   key={index}
// //                   label={question}
// //                   onClick={() => handleChipClick(question)}
// //                   color="primary"
// //                   style={{ cursor: 'pointer' }}
// //                 />
// //               ))}
// //             </Box>
// //           </Box>

// //           <Box
// //             style={{
// //               display: 'flex',
// //               padding: '10px',
// //               backgroundColor: '#f7f7f7',
// //               borderBottomLeftRadius: '12px',
// //               borderBottomRightRadius: '12px',
// //             }}
// //           >
// //             <TextField
// //               fullWidth
// //               variant="outlined"
// //               size="small"
// //               value={inputText}
// //               onChange={(e) => setInputText(e.target.value)}
// //               placeholder="Type your message..."
// //             />
// //             <Button
// //               onClick={handleMessageSend}
// //               color="primary"
// //               style={{ marginLeft: '10px' }}
// //             >
// //               Sūtīt
// //             </Button>
// //           </Box>
// //         </Box>
// //       )}
// //     </Box>
// //   );
// // };

// // export default ChatBot;
// import React, { useState, useEffect } from 'react';
// import {
//   Box, Chip, Button, Typography, Paper, Avatar, TextField, CircularProgress
// } from '@mui/material';
// import dogAvatar from "../pages/images/avatars/avatars/Dog.svg";
// import catAvatar from "../pages/images/avatars/avatars/Cat.svg";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// const ChatBot = () => {
//   const [chatOpen, setChatOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [inputText, setInputText] = useState('');
//   const [petType] = useState(Math.random() > 0.5 ? 'dog' : 'cat');
//   const [showSpeechBubble, setShowSpeechBubble] = useState(true);
//   const [loading, setLoading] = useState(false); // NEW

//   const avatar = petType === 'dog' ? dogAvatar : catAvatar;

//   const predefinedQuestions = [
//     'Kā pareizi izvēlēties mājdzīvnieku?',
//     'Pastāsti par haskija šķirni',
//     'Ko darīt, ja esmu pazaudējis savu mājdzīvnieku?',
//     'Kā pareizi rūpēties par mājdzīvnieku?',
//   ];

//   const handleChipClick = (question) => {
//     if (loading) return; // Prevent sending if waiting
//     setMessages((prev) => [...prev, { text: question, isUser: true }]);
//     sendMessageToBackend(question);
//   };

//   const handleMessageSend = async () => {
//     if (inputText.trim() && !loading) {
//       setMessages((prev) => [...prev, { text: inputText, isUser: true }]);
//       const messageToSend = inputText;
//       setInputText('');
//       await sendMessageToBackend(messageToSend);
//     }
//   };

//   const sendMessageToBackend = async (message) => {
//     try {
//       setLoading(true); // Start loading
//       const accessToken = localStorage.getItem("access_token");
//       if (!accessToken) {
//         console.error("No access token found");
//         setLoading(false);
//         return;
//       }

//       const response = await fetch(`${API_BASE_URL}/chat/`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${accessToken}`,
//         },
//         body: JSON.stringify({ message }),
//       });

//       const data = await response.json();
//       setMessages((prev) => [
//         ...prev,
//         {
//           text: data.response || "Atvainojiet, nesapratu jautājumu.",
//           isUser: false,
//         },
//       ]);
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setLoading(false); // End loading
//     }
//   };

//   const toggleChat = () => setChatOpen(!chatOpen);

//   useEffect(() => {
//     const style = document.createElement('style');
//     style.innerHTML = `
//       @keyframes shake {
//         0%, 100% { transform: translateX(0); }
//         25% { transform: translateX(-3px); }
//         75% { transform: translateX(3px); }
//       }
//     `;
//     document.head.appendChild(style);

//     const timer = setTimeout(() => {
//       setShowSpeechBubble(false);
//     }, 4000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Box>
//       {!chatOpen && showSpeechBubble && (
//         <Typography
//           variant="caption"
//           style={{
//             position: 'fixed',
//             bottom: 90,
//             right: 90,
//             backgroundColor: '#fff',
//             padding: '4px 10px',
//             borderRadius: '10px',
//             boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
//             fontSize: '12px',
//             zIndex: 9999,
//           }}
//         >
//           {petType === 'dog' ? 'Vau!' : 'Mjau!'}
//         </Typography>
//       )}

//       {!chatOpen && (
//         <Button
//           onClick={toggleChat}
//           style={{
//             position: 'fixed',
//             bottom: 16,
//             right: 16,
//             backgroundColor: '#0EB9F0',
//             borderRadius: '50%',
//             width: '60px',
//             height: '60px',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             color: '#fff',
//             animation: 'shake 0.5s ease-in-out 1s 3',
//             zIndex: 9999,
//           }}
//         >
//           <Avatar src={avatar} alt="Pet Avatar" />
//         </Button>
//       )}

//       {chatOpen && (
//         <Box
//           style={{
//             position: 'fixed',
//             bottom: 16,
//             right: 16,
//             width: '300px',
//             height: '400px',
//             display: 'flex',
//             flexDirection: 'column',
//             backgroundColor: '#fff',
//             borderRadius: '12px',
//             boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//             zIndex: 9999,
//           }}
//         >
//           <Box
//             style={{
//               backgroundColor: '#0EB9F0',
//               color: '#fff',
//               padding: '10px',
//               borderTopLeftRadius: '12px',
//               borderTopRightRadius: '12px',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//             }}
//           >
//             <Box style={{ display: 'flex', alignItems: 'center' }}>
//               <Avatar src={avatar} alt="Pet Avatar" />
//               <Typography marginLeft={1} variant="h6">AI ChatBot</Typography>
//             </Box>
//             <Button onClick={toggleChat} style={{ color: '#fff' }}>
//               Aizvērt
//             </Button>
//           </Box>

//           <Box
//             style={{
//               padding: '10px',
//               flexGrow: 1,
//               overflowY: 'auto',
//               display: 'flex',
//               flexDirection: 'column',
//             }}
//           >
//             {messages.map((message, index) => (
//               <Box
//                 key={index}
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   marginBottom: '10px',
//                   justifyContent: message.isUser ? 'flex-end' : 'flex-start',
//                 }}
//               >
//                 {!message.isUser && (
//                   <Avatar
//                     style={{ width: 30, height: 30, marginRight: 10 }}
//                     src={avatar}
//                     alt="Pet Avatar"
//                   />
//                 )}
//                 <Paper
//                   style={{
//                     maxWidth: '70%',
//                     padding: '10px',
//                     borderRadius: '12px',
//                     backgroundColor: message.isUser ? '#0EB9F0' : '#f1f1f1',
//                     color: message.isUser ? '#fff' : '#000',
//                   }}
//                 >
//                   {message.text}
//                 </Paper>
//               </Box>
//             ))}

//             <Box
//               style={{
//                 display: 'flex',
//                 gap: '10px',
//                 marginTop: '10px',
//                 flexWrap: 'wrap',
//               }}
//             >
//               {predefinedQuestions.map((question, index) => (
//                 <Chip
//                   key={index}
//                   label={question}
//                   onClick={() => handleChipClick(question)}
//                   color="primary"
//                   style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
//                   disabled={loading}
//                 />
//               ))}
//             </Box>
//           </Box>

//           <Box
//             style={{
//               display: 'flex',
//               padding: '10px',
//               backgroundColor: '#f7f7f7',
//               borderBottomLeftRadius: '12px',
//               borderBottomRightRadius: '12px',
//             }}
//           >
//             <TextField
//               fullWidth
//               variant="outlined"
//               size="small"
//               value={inputText}
//               onChange={(e) => setInputText(e.target.value)}
//               placeholder="Ieraksti savu ziņu..."
//               disabled={loading}
//             />
//             <Button
//               onClick={handleMessageSend}
//               color="primary"
//               disabled={loading || inputText.trim() === ''}
//               style={{ marginLeft: '10px', minWidth: '64px' }}
//             >
//               {loading ? <CircularProgress size={20} color="inherit" /> : 'Sūtīt'}
//             </Button>
//           </Box>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default ChatBot;
import React, { useState, useEffect } from 'react';
import {
  Box, Chip, Button, Typography, Paper, Avatar, TextField, CircularProgress
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

import dogAvatar from "../pages/images/avatars/avatars/Dog.svg";
import catAvatar from "../pages/images/avatars/avatars/Cat.svg";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ChatBot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [petType] = useState(Math.random() > 0.5 ? 'dog' : 'cat');
  const [showSpeechBubble, setShowSpeechBubble] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const avatar = petType === 'dog' ? dogAvatar : catAvatar;

  const predefinedQuestions = [
    'Kā pareizi izvēlēties mājdzīvnieku?',
    'Pastāsti par haskija šķirni',
    'Ko darīt, ja esmu pazaudējis savu mājdzīvnieku?',
    'Kā pareizi rūpēties par mājdzīvnieku?',
  ];

  const handleChipClick = (question) => {
    if (loading) return;
    setMessages((prev) => [...prev, { text: question, isUser: true }]);
    sendMessageToBackend(question);
  };

  const handleMessageSend = async () => {
    if (inputText.trim() && !loading) {
      setMessages((prev) => [...prev, { text: inputText, isUser: true }]);
      const messageToSend = inputText;
      setInputText('');
      await sendMessageToBackend(messageToSend);
    }
  };

  const sendMessageToBackend = async (message) => {
    try {
      setLoading(true);
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        setLoading(false);
        return;
      }

      const response = await fetch(`${API_BASE_URL}/chat/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          text: data.response || "Atvainojiet, nesapratu jautājumu.",
          isUser: false,
        },
      ]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleChat = () => setChatOpen(!chatOpen);

  

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-3px); }
        75% { transform: translateX(3px); }
      }
    `;
    document.head.appendChild(style);

    const timer = setTimeout(() => {
      setShowSpeechBubble(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      {!chatOpen && showSpeechBubble && (
        <Typography
          variant="caption"
          style={{
            position: 'fixed',
            bottom: 90,
            right: 90,
            backgroundColor: '#fff',
            padding: '4px 10px',
            borderRadius: '10px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            fontSize: '12px',
            zIndex: 9999,
          }}
        >
          {petType === 'dog' ? 'Vau!' : 'Mjau!'}
        </Typography>
      )}

      {!chatOpen && (
        <Button
          onClick={toggleChat}
          style={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            backgroundColor: '#0EB9F0',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            animation: 'shake 0.5s ease-in-out 1s 3',
            zIndex: 9999,
          }}
        >
          <Avatar src={avatar} alt="Pet Avatar" />
        </Button>
      )}

      {chatOpen && (
        <Box
          style={{
            position: 'fixed',
            bottom: isFullscreen ? 0 : 16,
            right: isFullscreen ? 0 : 16,
            width: isFullscreen ? '100vw' : '300px',
            height: isFullscreen ? '100vh' : '400px',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fff',
            borderRadius: isFullscreen ? 0 : '12px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 9999,
            transition: 'all 0.3s ease',
          }}
        >
          <Box
            style={{
              backgroundColor: '#0EB9F0',
              color: '#fff',
              padding: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTopLeftRadius: isFullscreen ? 0 : '12px',
              borderTopRightRadius: isFullscreen ? 0 : '12px',
            }}
          >
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              <Avatar src={avatar} alt="Pet Avatar" />
              <Typography marginLeft={1} variant="h6">AI ChatBot</Typography>
            </Box>
            <Box>
              <Button onClick={() => setIsFullscreen(prev => !prev)} style={{ color: '#fff' }}>
                {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
              </Button>
              <Button onClick={toggleChat} style={{ color: '#fff' }}>
                <CloseIcon />
              </Button>
            </Box>
          </Box>

          <Box
            style={{
              padding: '10px',
              flexGrow: 1,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {messages.map((message, index) => (
              <Box
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  justifyContent: message.isUser ? 'flex-end' : 'flex-start',
                }}
              >
                {!message.isUser && (
                  <Avatar
                    style={{ width: 30, height: 30, marginRight: 10 }}
                    src={avatar}
                    alt="Pet Avatar"
                  />
                )}
                <Paper
                  style={{
                    maxWidth: '70%',
                    padding: '10px',
                    borderRadius: '12px',
                    backgroundColor: message.isUser ? '#0EB9F0' : '#f1f1f1',
                    color: message.isUser ? '#fff' : '#000',
                  }}
                >
                  {message.text}
                </Paper>
              </Box>
            ))}

            <Box
              style={{
                display: 'flex',
                gap: '10px',
                marginTop: '10px',
                flexWrap: 'wrap',
              }}
            >
              {predefinedQuestions.map((question, index) => (
                <Chip
                  key={index}
                  label={question}
                  onClick={() => handleChipClick(question)}
                  color="primary"
                  style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
                  disabled={loading}
                />
              ))}
            </Box>
          </Box>

          <Box
            style={{
              display: 'flex',
              padding: '10px',
              backgroundColor: '#f7f7f7',
              borderBottomLeftRadius: isFullscreen ? 0 : '12px',
              borderBottomRightRadius: isFullscreen ? 0 : '12px',
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ieraksti savu ziņu..."
              disabled={loading}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey && !loading) {
                  e.preventDefault();
                  handleMessageSend();
                }
              }}
            />
            <Button
              onClick={handleMessageSend}
              color="primary"
              disabled={loading || inputText.trim() === ''}
              style={{ marginLeft: '10px', minWidth: '64px' }}
            >
              {loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ChatBot;
