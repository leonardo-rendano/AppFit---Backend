/*
  Warnings:

  - You are about to drop the column `exercise_id` on the `exercises` table. All the data in the column will be lost.
  - You are about to drop the column `set_id` on the `sets` table. All the data in the column will be lost.
  - You are about to drop the column `student_id` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `teacher_id` on the `teachers` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "teachers_teacher_id_key";

-- AlterTable
ALTER TABLE "exercises" DROP COLUMN "exercise_id";

-- AlterTable
ALTER TABLE "sets" DROP COLUMN "set_id";

-- AlterTable
ALTER TABLE "students" DROP COLUMN "student_id";

-- AlterTable
ALTER TABLE "teachers" DROP COLUMN "teacher_id";
