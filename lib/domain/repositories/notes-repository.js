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
Object.defineProperty(exports, "__esModule", { value: true });
class NotesRepositoryImpl {
    constructor(notesDataSource) {
        this.notesDataSource = notesDataSource;
    }
    getAllNotes() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.notesDataSource.getAll();
            return result;
        });
    }
    createNote(note) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.notesDataSource.create(note);
            return result;
        });
    }
    deleteNote(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.notesDataSource.deleteOne(id);
            return result;
        });
    }
    updateNote(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.notesDataSource.updateOne(id, data);
            return result;
        });
    }
    getNote(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.notesDataSource.getOne(id);
            return result;
        });
    }
}
exports.default = NotesRepositoryImpl;
