const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createVehicule = async (data) => {
    return prisma.vehicule.create({
        data
    });
};
const deleteVehicule = async (id) => {
    return prisma.vehicule.delete({
        where: {
            id
        }
    });
};
const getAllVehicules = async () => {
    return prisma.vehicule.findMany();
};
const getVehiculeById = async (id) => {
    return prisma.vehicule.findUnique({
        where: {
            id
        }
    });
};
const updateVehicule = async (id, data) => {
    return prisma.vehicule.update({
        where: {
            id
        },
        data
    });
};
module.exports = { createVehicule, deleteVehicule , getAllVehicules, getVehiculeById, updateVehicule};
