import router from "express";
import questionController from "../controller/question.Controller";

export const questionRouter = router();
questionRouter.get('/', questionController.showQuestions)
questionRouter.get('/:id', questionController.showQuestionByIdTest)
questionRouter.post('/', questionController.createQuestion)
questionRouter.delete('/:id', questionController.deleteQuestion)
questionRouter.put('/:id', questionController.editQuestion)