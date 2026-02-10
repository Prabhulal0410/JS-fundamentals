// 1. Hoisting-Dependent Function
// Used when a function must be callable before definition.

initApp();

function initApp() {
  loadConfig();
  startServer();
}

function loadConfig() {
  console.log("Config loaded");
}

function startServer() {
  console.log("Server started");
}
