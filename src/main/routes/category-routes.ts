import { Router } from 'express';
import { adaptRoute } from '@/main/adapters';
import { makeCategoryCreateController } from '@/main/factories/controllers/http/category';

export default (router: Router): void => {
    router.post('/category', adaptRoute(makeCategoryCreateController()));
};