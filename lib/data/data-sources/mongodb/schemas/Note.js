"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const noteSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true },
    content: { type: String, required: true },
    important: { type: Boolean, required: true },
    updatedAt: { type: Date, required: true },
    createdAt: { type: Date, required: true },
});
exports.default = mongoose_1.default.model('Note', noteSchema);
