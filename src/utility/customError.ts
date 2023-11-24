export class CustomError extends Error {
  constructor(name: string, message: string) {
    super(message);
    this.name = name;
    // Ensure the error object is an instance of the custom error class
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
