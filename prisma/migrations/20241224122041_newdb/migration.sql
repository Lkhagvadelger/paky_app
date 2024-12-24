/*
  Warnings:

  - The values [DRIVER] on the enum `UserRole` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `TransportDirection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TransportLocation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Transportation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TransportationExpense` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vehicle` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UserRole_new" AS ENUM ('ADMIN', 'COMPANY');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "UserRole_new" USING ("role"::text::"UserRole_new");
ALTER TYPE "UserRole" RENAME TO "UserRole_old";
ALTER TYPE "UserRole_new" RENAME TO "UserRole";
DROP TYPE "UserRole_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'COMPANY';
COMMIT;

-- DropForeignKey
ALTER TABLE "TransportDirection" DROP CONSTRAINT "TransportDirection_endingLocationId_fkey";

-- DropForeignKey
ALTER TABLE "TransportDirection" DROP CONSTRAINT "TransportDirection_startingLocationId_fkey";

-- DropForeignKey
ALTER TABLE "Transportation" DROP CONSTRAINT "Transportation_driverId_fkey";

-- DropForeignKey
ALTER TABLE "Transportation" DROP CONSTRAINT "Transportation_transportDirectionId_fkey";

-- DropForeignKey
ALTER TABLE "Transportation" DROP CONSTRAINT "Transportation_vehicleId_fkey";

-- DropForeignKey
ALTER TABLE "TransportationExpense" DROP CONSTRAINT "TransportationExpense_transportationId_fkey";

-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_driverId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'COMPANY';

-- DropTable
DROP TABLE "TransportDirection";

-- DropTable
DROP TABLE "TransportLocation";

-- DropTable
DROP TABLE "Transportation";

-- DropTable
DROP TABLE "TransportationExpense";

-- DropTable
DROP TABLE "Vehicle";
