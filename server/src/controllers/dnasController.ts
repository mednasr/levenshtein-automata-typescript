import { Request, Response } from 'express'
import pool from '../database'

class DnasController{

    public async list(req: Request, res: Response):Promise<void>{
        const dnas = await pool.query('SELECT * FROM dnas');
        res.json(dnas);
    }

    public async getOne(req: Request, res: Response): Promise<any>{
        const { string } = req.params;
        const dnas = await pool.query('SELECT * FROM dnas Where string = ?', [string]);
        if(dnas.length>0){
            return res.json(dnas[0]);
        }
        res.status(404).json({message: "The dna doesn't exist"});
    }

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO dnas set ?', [req.body]);
        res.json({message:'Dna saved'});
    }
}

const dnasController = new DnasController();
export default dnasController;