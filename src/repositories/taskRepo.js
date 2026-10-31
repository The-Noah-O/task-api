import prisma from '../config/db.js';

export async function findAll(completed) {
  if (completed === undefined) {
    return prisma.task.findMany();
  }

  return prisma.task.findMany({
    where: {
      completed: completed === 'true',
    },
  });
}

export async function create(data) {
  return prisma.task.create({
    data,
  });
}