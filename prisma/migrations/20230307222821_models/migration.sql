/*
  Warnings:

  - You are about to drop the column `student_address` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `student_contact_number` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `student_cpf` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `student_email` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `student_name` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `student_objective` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `student_rg` on the `students` table. All the data in the column will be lost.
  - Added the required column `address` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `objective` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rg` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "students_student_cpf_key";

-- DropIndex
DROP INDEX "students_student_rg_key";

-- AlterTable
ALTER TABLE "students" DROP COLUMN "student_address",
DROP COLUMN "student_contact_number",
DROP COLUMN "student_cpf",
DROP COLUMN "student_email",
DROP COLUMN "student_name",
DROP COLUMN "student_objective",
DROP COLUMN "student_rg",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "contact" INTEGER NOT NULL,
ADD COLUMN     "cpf" INTEGER NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "objective" TEXT NOT NULL,
ADD COLUMN     "rg" INTEGER NOT NULL;
