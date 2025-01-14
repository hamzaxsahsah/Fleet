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

const createRole = async (data) => {
    return prisma.role.create({
        data
    });
};
const deleteRole = async (id) => {
    return prisma.role.delete({
        where: {
            id
        }
    });
};
const getAllRoles = async () => {
    return prisma.role.findMany();
};
const getRoleById = async (id) => {
    return prisma.role.findUnique({
        where: {
            id
        }
    });
};
const assignRole = async (userId, roleId) => {
    return prisma.user.update({
        where: {
            id: userId
        },
        data: {
            role: {
                connect: {
                    id: roleId
                }
            }
        }
    });
};
const removeRole = async (userId, roleId) => {
    return prisma.user.update({
        where: {
            id: userId
        },
        data: {
            role: {
                disconnect: {
                    id: roleId
                }
            }
        }
    });
};

module.exports = { createUser, deleteUser , getAllUsers, getUserById, updateUser , createRole, deleteRole , getAllRoles, getRoleById,assignRole,removeRole};
