import { Request, Response } from "express";

const authService = require("../services/authService");

const createAccount = async (req: Request, res: Response) => {
  try {
    let account = await authService.createAccountService(req.body);
    console.log(account);
    return res.status(200).json(account);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const loginAccount = async (req: Request, res: Response) => {
  try {
    let account = await authService.loginAccountService(req.body);
    return res.status(200).json(account);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
const loginAccountGoogle = async (req: Request, res: Response) => {
  try {
    let account = await authService.loginAccountGoogleService(req.body);
    return res.status(200).json(account);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createAccount,
  loginAccount,
  loginAccountGoogle,
};
