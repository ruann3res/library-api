import app from '@/main/config/app';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main() {
    try {
        await prisma.$connect();
        console.log('Connected to the database.');
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port http://localhost:${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

main()
    .catch(e => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });