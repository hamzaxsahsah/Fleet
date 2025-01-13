const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createOrganisation = async (data) => {
    return prisma.organisation.create({
        data
    });
};
const deleteOrganisation = async (id) => {
    return prisma.organisation.delete({
        where: {
            id
        }
    });
};
const getAllOrganisations = async () => {
    return prisma.organisation.findMany();
};
const getOrganisationById = async (id) => {
    return prisma.organisation.findUnique({
        where: {
            id
        }
    });
};
const updateOrganisation = async (id, data) => {
    return prisma.organisation.update({
        where: {
            id
        },
        data
    });
};
module.exports = { createOrganisation, deleteOrganisation , getAllOrganisations, getOrganisationById, updateOrganisation};
