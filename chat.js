const socket = io();
const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", () => {
  const message = chatInput.value.trim();
  if (message) {
    socket.emit("userMessage", message);
    appendMessage("You", message, "user");
    chatInput.value = "";
  }
});

socket.on("adminMessage", (message) => {
  appendMessage("Admin", message, "admin");
});

function appendMessage(sender, message, type) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", type);
  messageElement.innerText = `${sender}: ${message}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}
