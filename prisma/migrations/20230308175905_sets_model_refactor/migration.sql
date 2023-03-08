/*
  Warnings:

  - You are about to drop the column `exercise_name` on the `exercises` table. All the data in the column will be lost.
  - You are about to drop the column `exercise_reps` on the `exercises` table. All the data in the column will be lost.
  - You are about to drop the column `exercise_type` on the `exercises` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `sets` table. All the data in the column will be lost.
  - Added the required column `name` to the `exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reps` to the `exercises` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "exercises" DROP COLUMN "exercise_name",
DROP COLUMN "exercise_reps",
DROP COLUMN "exercise_type",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "reps" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "sets" DROP COLUMN "quantity";
