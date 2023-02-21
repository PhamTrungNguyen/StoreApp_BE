const Account = require("../models/account");
const bcrypt = require("bcrypt");
const jwtService = require("jsonwebtoken");
type bodyType = {
  username: string;
  email: string;
  password: string;
  role: string;
};
// code sắp xếp
const createAccountService = async (body: bodyType) => {
  const info = {
    username: body.username,
    email: body.email,
    password: await bcrypt.hash(body.password, 10),
    role: body.role,
  };
  const result = await Account.create(info);
  return { result, message: "success" };
};
const loginAccountGoogleService = async (body: bodyType) => {
  console.log(
    "🚀 ~ file: authService.ts:21 ~ loginAccountGoogleService ~ body:",
    body
  );
  const accessToken = await jwtService.sign(
    body,
    process.env.ACCESS_TOKEN_SECRET
  );
  return { token: accessToken, message: "Đăng nhập thành công" };
};
const loginAccountService = async (body: bodyType) => {
  console.log(
    "🚀 ~ file: authService.ts:21 ~ loginAccountService ~ body:",
    body
  );
  const { email, password } = body;
  const account = await Account.findOne({ email: email });
  if (account) {
    const dataToken = {
      email,
      username: account.username,
      role: account.role,
    };
    const checkPassword = await bcrypt.compare(password, account.password);
    if (checkPassword) {
      const accessToken = await jwtService.sign(
        dataToken,
        process.env.ACCESS_TOKEN_SECRET
      );
      return { token: accessToken, message: "Đăng nhập thành công" };
    }
    throw new Error("Mật khẩu không chính xác");
  }
  throw new Error("Tài khoản không tồn tại");
};
module.exports = {
  createAccountService,
  loginAccountService,
  loginAccountGoogleService,
};
