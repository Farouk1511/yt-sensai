/*
  Warnings:

  - You are about to drop the column `skils` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "skils",
ADD COLUMN     "skills" TEXT[];
