import { Router } from 'express';
import dnasController from '../controllers/dnasController'

class DnasRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', dnasController.list);
        this.router.get('/:string', dnasController.getOne);
        this.router.post('/', dnasController.create);
    }
}

const dnasRoutes = new DnasRoutes();
export default dnasRoutes.router;