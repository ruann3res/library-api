import { PrismaClient } from "@prisma/client";

export class PrisaBaseRepository {
    protected prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }
}