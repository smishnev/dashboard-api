import { NextFunction, Response, Request, Router } from "express";


export interface IControllerRoute {
    path: string;
    method: keyof Pick<Router, 'get' | 'post' | 'put' | 'delete' | 'patch'>
    func: (res: Response, req: Request, next: NextFunction) => void;
}