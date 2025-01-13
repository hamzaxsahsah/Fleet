const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createDevice = async (data) => {
    return prisma.device.create({
        data
    });
};
const deleteDevice = async (id) => {
    return prisma.device.delete({
        where: {
            id
        }
    });
};
const getAllDevices = async () => {
    return prisma.device.findMany();
};
const getDeviceById = async (id) => {
    return prisma.device.findUnique({
        where: {
            id
        }
    });
};
const updateDevice = async (id, data) => {
    return prisma.device.update({
        where: {
            id
        },
        data
    });
};
module.exports = { createDevice, deleteDevice , getAllDevices, getDeviceById, updateDevice};
