const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createFleet = async (data) => {
    return prisma.fleet.create({
        data
    });
};
const deleteFleet = async (id) => {
    return prisma.fleet.delete({
        where: {
            id
        }
    });
};
const getAllFleets = async () => {
    return prisma.fleet.findMany();
};
const getFleetById = async (id) => {
    return prisma.fleet.findUnique({
        where: {
            id
        }
    });
};
const updateFleet = async (id, data) => {
    return prisma.fleet.update({
        where: {
            id
        },
        data
    });
};
module.exports = { createFleet, deleteFleet , getAllFleets, getFleetById, updateFleet};
