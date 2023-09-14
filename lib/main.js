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
const mongodb_notes_data_source_1 = __importDefault(require("./data/data-sources/mongodb/mongodb-notes-data-source"));
const Note_1 = __importDefault(require("./data/data-sources/mongodb/schemas/Note"));
const notes_repository_1 = __importDefault(require("./domain/repositories/notes-repository"));
const create_note_1 = require("./domain/use-cases/create-note");
const delete_note_1 = __importDefault(require("./domain/use-cases/delete-note"));
const get_all_notes_1 = __importDefault(require("./domain/use-cases/get-all-notes"));
const get_one_note_1 = __importDefault(require("./domain/use-cases/get-one-note"));
const update_note_1 = __importDefault(require("./domain/use-cases/update-note"));
const notes_router_1 = __importDefault(require("./presentation/routers/notes-router"));
const server_1 = __importDefault(require("./server"));
const Database_1 = __importDefault(require("./utils/Database"));
function getMongoDS() {
    return __awaiter(this, void 0, void 0, function* () {
        Database_1.default.connect();
        const notesDatabase = {
            find: function (query) {
                return Note_1.default.find(query);
            },
            findOne: function (id) {
                return Note_1.default.findOne({ _id: id });
            },
            insertOne: function (data) {
                return Note_1.default.create(data);
            },
            updateOne: function (id, data) {
                return Note_1.default.findByIdAndUpdate(id, data);
            },
            deleteOne: function (id) {
                Note_1.default.findByIdAndRemove(id);
            },
        };
        return new mongodb_notes_data_source_1.default(notesDatabase);
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    const dataSource = yield getMongoDS();
    const notesRouter = (0, notes_router_1.default)(new delete_note_1.default(new notes_repository_1.default(dataSource)), new create_note_1.CreateNote(new notes_repository_1.default(dataSource)), new update_note_1.default(new notes_repository_1.default(dataSource)), new get_all_notes_1.default(new notes_repository_1.default(dataSource)), new get_one_note_1.default(new notes_repository_1.default(dataSource)));
    server_1.default.use('/notes', notesRouter);
    server_1.default.listen(4000, () => console.log('Running on http://localhost:4000'));
}))();
