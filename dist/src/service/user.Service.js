"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const data_source_1 = require("../data-source");
const user_1 = require("../model/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middelware/auth");
class UserService {
    constructor() {
        this.checkLogin = async (userLogin) => {
            let user = {
                check: false,
                token: '',
                userFind: ''
            };
            let userFind = await this.userRepository.query(`select * from user where username = '${userLogin.username}'`);
            if (userFind.length === 0) {
                user.check = false;
            }
            else {
                let compare = await bcrypt_1.default.compare(userLogin.password, userFind[0].password);
                if (!compare) {
                    user.check = false;
                }
                if (compare) {
                    let payload = { username: userFind[0].username };
                    let token = await jsonwebtoken_1.default.sign(payload, auth_1.SECRET, {
                        expiresIn: 36000
                    });
                    user.token = token;
                    user.check = true;
                    user.userFind = userFind;
                }
            }
            return user;
        };
        this.checkRegister = async (userRegister) => {
            let userFind = await this.userRepository.query(`select * from user where username = '${userRegister.username}'`);
            let check;
            if (userFind.length !== 0) {
                check = true;
            }
            else {
                userRegister.password = await bcrypt_1.default.hash(userRegister.password, 10);
                check = false;
            }
            return check;
        };
        this.createUser = async (user) => {
            await this.userRepository.save(user);
        };
        this.checkChangePassword = async (idUser, oldPassword, newPassword) => {
            let user = {
                check: false,
                userFind: ''
            };
            let userFind = await this.userRepository.query(`select * from user where idUser = ${idUser}`);
            if (userFind.length === 0) {
                user.check = false;
            }
            else {
                let compare = await bcrypt_1.default.compare(oldPassword, userFind[0].password);
                if (!compare) {
                    user.check = false;
                    user.userFind = userFind;
                }
                if (compare) {
                    newPassword = await bcrypt_1.default.hash(newPassword, 10);
                    await this.userRepository.query(`UPDATE user SET password = '${newPassword}' where idUser = ${idUser}`);
                    user.check = true;
                    user.userFind = userFind;
                }
            }
            return user;
        };
        this.getAll = async () => {
            return await this.userRepository.query(`select *
                                                from user`);
        };
        this.remove = async (idDelete) => {
            await this.userRepository.delete(idDelete);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.Service.js.map