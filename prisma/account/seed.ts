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
      verified: true,
      public_key: 'admin.metacubic.org',
      wallet_address: 'admin.wallet.metacubic.org',
    },
  });

  const webmaster = await prisma.user.upsert({
    where: { email: 'webmaster@webmaster.com' },
    update: {},
    create: {
      email: 'webmaster@webmaster.com',
      username: 'webmaster',
      password: 'webmaster',
      verified: true,
      public_key: 'webmaster.metacubic.org',
      wallet_address: 'webmaster.wallet.metacubic.org',
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
