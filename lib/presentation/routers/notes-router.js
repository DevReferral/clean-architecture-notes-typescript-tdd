"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
function NotesRouter(deleteNoteUseCase, createNoteUseCase, updateNoteUseCase, getAllNotesUseCase, getOneNoteUseCase) {
    const router = express_1.default.Router();
    router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const note = yield getAllNotesUseCase.execute();
            res.json(note);
        }
        catch (err) {
            res.status(500).send({ message: 'Error fetching notes' });
        }
    }));
    router.get('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const note = yield getOneNoteUseCase.execute(req.params.id);
            res.json(note);
        }
        catch (err) {
            res.status(500).send({ message: 'Note with id not found' });
        }
    }));
    router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const note = yield createNoteUseCase.execute(req.body);
            res.status(201).json(note);
        }
        catch (err) {
            res.status(500).send({ message: 'Error creating note' });
        }
    }));
    router.put('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const note = yield updateNoteUseCase.execute(req.params.id, req.body);
            res.status(200).json(note);
        }
        catch (err) {
            res.status(500).send({ message: 'Error updating note' });
        }
    }));
    return router;
}
exports.default = NotesRouter;
