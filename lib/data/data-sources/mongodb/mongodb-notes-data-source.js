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
class MongoDbNotesDataSource {
    constructor(db) {
        this.db = db;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.db.find({});
            return result.map((item) => ({
                id: item._id,
                content: item.content,
                important: item.important,
            }));
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.db.findOne(id);
            return {
                id: item._id.toString(),
                content: item.name,
                important: item.important,
            };
        });
    }
    create(note) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.db.insertOne(note);
            return {
                id: item._id.toString(),
                content: item.name,
                important: item.important,
            };
        });
    }
    updateOne(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.db.updateOne(id, data);
            return {
                id: item._id.toString(),
                content: item.name,
                important: item.important,
            };
        });
    }
    deleteOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.db.deleteOne(id);
        });
    }
}
exports.default = MongoDbNotesDataSource;
