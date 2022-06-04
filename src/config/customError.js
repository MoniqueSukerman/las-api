class CustomError extends Error {
  constructor(message, erroApp) {
    super(message);
    this.erroApp = erroApp;
  }
}

module.exports = CustomError;
