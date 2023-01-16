import {Request, Response} from "express";
import {QuestionService} from "../service/question.Service";

export class QuestionController {
    private questionService: QuestionService;

    constructor() {
        this.questionService = new QuestionService();
    }

    showQuestions = async (req: Request, res: Response) => {
        let questions = await this.questionService.getAll()
        res.json(questions)
    }

    showQuestionByIdTest = async (req: Request, res: Response) => {
        let questions = await this.questionService.getQuestionByIdTest(req.params.id)
        res.json(questions)
    }

    createQuestion = async (req: Request, res: Response) => {
     let {idQuestion} =   await this.questionService.createQuestion(req.body);
        await this.questionService.setPointQuestion(req.body.idTest);
        res.json({
            mess: "Tạo Question thành công",
            idQuestion :idQuestion
        })
    }

    deleteQuestion = async (req: Request, res: Response) => {
        await this.questionService.remove(req.params.id);
        res.json({
            mess: "Xóa Question thành công"
        })
    }

    editQuestion = async (req: Request, res: Response) => {
        await this.questionService.updateQuestion(req.params.id, req.body);
        res.json({
            mess: "Sửa Question thành công"
        })
    }
}

export default new QuestionController();