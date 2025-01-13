const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updateUser = async (id, data) => {
  return prisma.user.update({
    where: {
      id
    },
    data
  });
};

module.exports = { updateUser };
