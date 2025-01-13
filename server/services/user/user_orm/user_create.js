const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createUser = async (data) => {
  return prisma.user.create({
    data
  });
};

module.exports = { createUser };
