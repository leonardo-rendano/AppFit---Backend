/*
  Warnings:

  - You are about to drop the column `teacher_cpf` on the `teachers` table. All the data in the column will be lost.
  - You are about to drop the column `teacher_name` on the `teachers` table. All the data in the column will be lost.
  - You are about to drop the column `teacher_register` on the `teachers` table. All the data in the column will be lost.
  - You are about to drop the column `teacher_turn` on the `teachers` table. All the data in the column will be lost.
  - Added the required column `cpf` to the `teachers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `teachers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register` to the `teachers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `turn` to the `teachers` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "teachers_teacher_cpf_key";

-- DropIndex
DROP INDEX "teachers_teacher_register_key";

-- AlterTable
ALTER TABLE "teachers" DROP COLUMN "teacher_cpf",
DROP COLUMN "teacher_name",
DROP COLUMN "teacher_register",
DROP COLUMN "teacher_turn",
ADD COLUMN     "cpf" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "register" INTEGER NOT NULL,
ADD COLUMN     "turn" TEXT NOT NULL;
