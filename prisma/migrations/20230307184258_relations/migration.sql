/*
  Warnings:

  - You are about to drop the `Exercises` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sets` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Students` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Teachers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Students" DROP CONSTRAINT "Students_student_id_fkey";

-- DropTable
DROP TABLE "Exercises";

-- DropTable
DROP TABLE "Sets";

-- DropTable
DROP TABLE "Students";

-- DropTable
DROP TABLE "Teachers";

-- CreateTable
CREATE TABLE "teachers" (
    "id" SERIAL NOT NULL,
    "teacher_name" TEXT NOT NULL,
    "teacher_register" INTEGER NOT NULL,
    "teacher_cpf" INTEGER NOT NULL,
    "teacher_turn" TEXT NOT NULL,
    "teacher_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "teachers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "id" SERIAL NOT NULL,
    "student_name" TEXT NOT NULL,
    "student_objective" TEXT NOT NULL,
    "student_rg" INTEGER NOT NULL,
    "student_cpf" INTEGER NOT NULL,
    "student_address" TEXT NOT NULL,
    "student_contact_number" INTEGER NOT NULL,
    "student_email" TEXT NOT NULL,
    "student_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sets" (
    "id" SERIAL NOT NULL,
    "set_quantity" INTEGER NOT NULL,
    "set_type" TEXT NOT NULL,
    "set_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exercises" (
    "id" SERIAL NOT NULL,
    "exercise_name" TEXT NOT NULL,
    "exercise_reps" INTEGER NOT NULL,
    "exercise_type" TEXT NOT NULL,
    "exercise_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "exercises_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "teachers_teacher_register_key" ON "teachers"("teacher_register");

-- CreateIndex
CREATE UNIQUE INDEX "teachers_teacher_cpf_key" ON "teachers"("teacher_cpf");

-- CreateIndex
CREATE UNIQUE INDEX "teachers_teacher_id_key" ON "teachers"("teacher_id");

-- CreateIndex
CREATE UNIQUE INDEX "students_student_rg_key" ON "students"("student_rg");

-- CreateIndex
CREATE UNIQUE INDEX "students_student_cpf_key" ON "students"("student_cpf");

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "teachers"("teacher_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sets" ADD CONSTRAINT "sets_set_id_fkey" FOREIGN KEY ("set_id") REFERENCES "teachers"("teacher_id") ON DELETE RESTRICT ON UPDATE CASCADE;
