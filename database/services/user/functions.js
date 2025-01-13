const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createUser = async (data) => {
    return prisma.user.create({
        data
    });
};
const deleteUser = async (id) => {
    return prisma.user.delete({
        where: {
            id
        }
    });
};
const getAllUsers = async () => {
    return prisma.user.findMany();
};
const getUserById = async (id) => {
    return prisma.user.findUnique({
        where: {
            id
        }
    });
};
const updateUser = async (id, data) => {
    return prisma.user.update({
        where: {
            id
        },
        data
    });
};
module.exports = { createUser, deleteUser , getAllUsers, getUserById, updateUser};
