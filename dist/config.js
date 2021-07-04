"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SYSTEM = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { PORT = 3001, CORS } = process.env;
exports.SYSTEM = {
    PORT: Number(PORT),
    CORS,
};
