import { NextFunction, Request, Response } from "express";

const notFound = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(404).json({
    success: false,
    message: "API Not Found !!",
  });

  next();
};

export default notFound;
