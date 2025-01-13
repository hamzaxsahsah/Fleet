const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getUserById = async (id) => {
  return prisma.user.findUnique({
    where: {
      id
    }
  });
};

module.exports = { getUserById };
