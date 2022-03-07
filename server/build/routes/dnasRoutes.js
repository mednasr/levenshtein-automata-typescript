"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dnasController_1 = __importDefault(require("../controllers/dnasController"));
class DnasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', dnasController_1.default.list);
        this.router.get('/:string', dnasController_1.default.getOne);
        this.router.post('/', dnasController_1.default.create);
        this.router.put('/:id', dnasController_1.default.update);
        this.router.delete('/:id', dnasController_1.default.delete);
    }
}
const dnasRoutes = new DnasRoutes();
exports.default = dnasRoutes.router;
