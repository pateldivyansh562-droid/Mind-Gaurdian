// document.addEventListener("DOMContentLoaded", () => {

//   const input = document.getElementById("ai-input-2");
//   const send = document.getElementById("ai-send-2");
//   const messages = document.getElementById("ai-messages");

//   const KEY = "AIzaSyDJdpC2tguHMxFvRDbVx6MC7HnfDsnZBAI";  // <-- Add your Gemini API Key here

//   function addMessage(text, type) {
//     const div = document.createElement("div");
//     div.className = "ai-message " + type;
//     div.innerText = text;
//     messages.appendChild(div);
//     messages.scrollTop = messages.scrollHeight;
//   }

//   async function askAI(userText) {
//     addMessage("Typing...", "bot");

//     try {
//       const response = await fetch("https://gemini-proxy.vercel.app/api/generate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           apiKey: KEY,
//           prompt: `
// You are a calm, empathetic emotional support assistant.
// Reply gently, supportively, and with warmth.

// User: ${userText}
//           `
//         })
//       });

//       const data = await response.json();

//       messages.lastChild.remove(); // remove "Typing..."

//       let reply = data?.reply || "I'm here for you 💚 Tell me more.";

//       addMessage(reply, "bot");

//     } catch (err) {
//       messages.lastChild.remove();
//       addMessage("AI error. Please check your internet.", "bot");
//       console.error(err);
//     }
//   }

//   send.addEventListener("click", () => {
//     const text = input.value.trim();
//     if (!text) return;

//     addMessage(text, "user");
//     askAI(text);
//     input.value = "";
//   });

// });
