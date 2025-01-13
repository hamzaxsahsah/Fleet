const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const deleteUser = async (id) => {
  return prisma.user.delete({
    where: {
      id
    }
  });
};

module.exports = { deleteUser };
