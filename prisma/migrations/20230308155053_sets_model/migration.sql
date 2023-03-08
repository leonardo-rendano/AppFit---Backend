/*
  Warnings:

  - You are about to drop the column `set_quantity` on the `sets` table. All the data in the column will be lost.
  - You are about to drop the column `set_type` on the `sets` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `sets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `sets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sets" DROP COLUMN "set_quantity",
DROP COLUMN "set_type",
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
