import {AppDataSource} from "../data-source";
import {Question} from "../model/question";
import {Answer} from "../model/answer";

export class QuestionService {
    private questionRepository: any;
    private answerRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.questionRepository = AppDataSource.getRepository(Question);
            this.answerRepository = AppDataSource.getRepository(Answer);
        })
    }

    getAll = async () => {
        return await this.questionRepository.query(`select *
                                                    from question`)
    }

    getQuestionByIdTest = async (idTest) => {
        let data = [];
        let questions = await this.questionRepository.query(`select *
                                                    from question where idTest = ${idTest}`);
        for (let item of questions) {
            let answers = await this.answerRepository.query(`select * from answer where idQuestion = ${item.idQuestion}`)
            data = [...data, {question: JSON.parse((JSON.stringify(item))), answers: JSON.parse((JSON.stringify(answers)))}]

        }

        return data
    }

    createQuestion = async (question) => {
       let a= await this.questionRepository.save(question);
       return a
    }

    remove = async (idDelete) => {
        await this.questionRepository.delete(idDelete);
    }

    updateQuestion = async (idEdit, newQuestion) => {
        await this.questionRepository.update({idQuestion: idEdit}, newQuestion)
    }

    setPointQuestion = async (idTest) => {
        const count = await this.questionRepository.query(`select COUNT(idTest) as quantityQuestion
                                                           from question
                                                           where idTest = ${idTest}`)
        await this.questionRepository.query(`UPDATE question
                                             SET pointQuestion = 100 / ${count[0].quantityQuestion}
                                             where idTest = ${idTest}`)
    }
}