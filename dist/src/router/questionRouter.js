"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionRouter = void 0;
const express_1 = __importDefault(require("express"));
const question_Controller_1 = __importDefault(require("../controller/question.Controller"));
exports.questionRouter = (0, express_1.default)();
exports.questionRouter.get('/', question_Controller_1.default.showQuestions);
exports.questionRouter.get('/:id', question_Controller_1.default.showQuestionByIdTest);
exports.questionRouter.post('/', question_Controller_1.default.createQuestion);
exports.questionRouter.delete('/:id', question_Controller_1.default.deleteQuestion);
exports.questionRouter.put('/:id', question_Controller_1.default.editQuestion);
//# sourceMappingURL=questionRouter.js.map