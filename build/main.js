"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(cors_1.default({ origin: '*' }));
app.get('/', (_, res) => res.status(200).json({ message: 'OOLALA' }));
app.listen(3001, () => console.log('Server started'));
