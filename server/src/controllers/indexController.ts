import { Request, Response, json } from 'express'

class IndexController{

    public index(req: Request, res: Response){
        res.json({text: 'API is api/dnas'});
    }
}

export const indexController = new IndexController();