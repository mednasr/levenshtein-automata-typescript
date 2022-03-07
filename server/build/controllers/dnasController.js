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
const database_1 = __importDefault(require("../database"));
class DnasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const dnas = yield database_1.default.query('SELECT * FROM dnas');
            res.json(dnas);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { string } = req.params;
            const dnas = yield database_1.default.query('SELECT * FROM dnas Where string = ?', [string]);
            if (dnas.length > 0) {
                return res.json(dnas[0]);
            }
            res.status(404).json({ message: "The dna doesn't exist" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO dnas set ?', [req.body]);
            res.json({ message: 'Dna saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const dnas = yield database_1.default.query('UPDATE dnas set ? Where id = ?', [req.body, id]);
            res.json({ message: "The dna " + [id] + " was updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const dnas = yield database_1.default.query('DELETE FROM dnas Where id = ?', [id]);
            res.json({ message: "The dna " + [id] + " was deleted" });
        });
    }
}
const dnasController = new DnasController();
exports.default = dnasController;
