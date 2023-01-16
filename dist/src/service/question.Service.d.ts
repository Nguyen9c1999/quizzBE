export declare class QuestionService {
    private questionRepository;
    private answerRepository;
    constructor();
    getAll: () => Promise<any>;
    getQuestionByIdTest: (idTest: any) => Promise<any[]>;
    createQuestion: (question: any) => Promise<any>;
    remove: (idDelete: any) => Promise<void>;
    updateQuestion: (idEdit: any, newQuestion: any) => Promise<void>;
    setPointQuestion: (idTest: any) => Promise<void>;
}
