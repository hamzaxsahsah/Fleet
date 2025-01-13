const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllUsers = async () => {
  return prisma.user.findMany();
};

module.exports = { getAllUsers };
