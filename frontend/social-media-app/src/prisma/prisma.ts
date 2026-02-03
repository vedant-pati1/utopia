import { PrismaClient as PrismaAuthClient } from "../../prisma/auth";
import { PrismaClient as PrismaUtopiaClient } from "../../prisma/utopia";

const globalForPrisma = global as unknown as {
  authPrisma: PrismaAuthClient;
  utopiaPrimsa: PrismaUtopiaClient;
};

const authPrisma = globalForPrisma.authPrisma || new PrismaAuthClient();
const utopiaPrisma = globalForPrisma.utopiaPrimsa || new PrismaUtopiaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.authPrisma = authPrisma;
  globalForPrisma.utopiaPrimsa = utopiaPrisma;
}

export { authPrisma };
export { utopiaPrisma };