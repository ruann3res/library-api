import { PrisaBaseRepository } from "@/infrastructure/repository/contracts/prisma";
import { Category } from "@prisma/client";

export class CategoryRepository extends PrisaBaseRepository {
    async create(name: string) {
        return await this.prisma.category.create({
            data: {
                name
            }
        })
    }

    async getByName(name: string) {
        return await this.prisma.category.findUnique({
            where: {
                name
            }
        })
    }

    async getAll(): Promise<Category[] | []> {
        return await this.prisma.category.findMany();
    }
}