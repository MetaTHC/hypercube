import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@admin.com' },
    update: {},
    create: {
      email: 'admin@admin.com',
      username: 'admin',
      password: 'admin',
    },
  });

  const webmaster = await prisma.user.upsert({
    where: { email: 'webmaster@webmaster.com' },
    update: {},
    create: {
      email: 'webmaster@webmaster.com',
      username: 'webmaster',
      password: 'webmaster',
    },
  });
  console.log({ admin, webmaster });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
