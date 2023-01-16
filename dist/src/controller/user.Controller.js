"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_Service_1 = require("../service/user.Service");
class UserController {
    constructor() {
        this.login = async (req, res) => {
            let user = await this.userService.checkLogin(req.body);
            if (user.check) {
                res.json(user);
            }
            else {
                res.json({
                    mess: 'Sai tên tài khoản hoặc mật khẩu',
                });
            }
        };
        this.register = async (req, res) => {
            let checkRegister = await this.userService.checkRegister(req.body);
            console.log(checkRegister);
            if (checkRegister) {
                res.json({
                    mess: "Tài khoản đã tồn tại"
                });
            }
            else {
                await this.userService.createUser(req.body);
                res.json({
                    mess: "Tạo tài khoản thành công"
                });
            }
        };
        this.changePassword = async (req, res) => {
            let user = await this.userService.checkChangePassword(req.params.id, req.body.oldPassword, req.body.newPassword);
            if (!user.check) {
                res.json({
                    user,
                    mess: "Nhập mật khẩu cũ không đúng"
                });
            }
            else {
                res.json({
                    user,
                    mess: "Đổi mật khẩu thành công"
                });
            }
        };
        this.showUsers = async (req, res) => {
            let users = await this.userService.getAll();
            res.json(users);
        };
        this.deleteUser = async (req, res) => {
            await this.userService.remove(req.params.id);
            res.json({
                mess: "Xóa User thành công"
            });
        };
        this.userService = new user_Service_1.UserService();
    }
}
exports.UserController = UserController;
exports.default = new UserController();
//# sourceMappingURL=user.Controller.js.map