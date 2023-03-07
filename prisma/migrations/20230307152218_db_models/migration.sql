-- CreateTable
CREATE TABLE "Teachers" (
    "id" SERIAL NOT NULL,
    "teacher_name" TEXT NOT NULL,
    "teacher_register" INTEGER NOT NULL,
    "teacher_cpf" INTEGER NOT NULL,
    "teacher_turn" TEXT NOT NULL,
    "teacher_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Teachers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Students" (
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

    CONSTRAINT "Students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sets" (
    "id" SERIAL NOT NULL,
    "set_quantity" INTEGER NOT NULL,
    "set_type" TEXT NOT NULL,
    "set_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercises" (
    "id" SERIAL NOT NULL,
    "exercise_name" TEXT NOT NULL,
    "exercise_reps" INTEGER NOT NULL,
    "exercise_type" TEXT NOT NULL,
    "exercise_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Exercises_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teachers_teacher_register_key" ON "Teachers"("teacher_register");

-- CreateIndex
CREATE UNIQUE INDEX "Teachers_teacher_cpf_key" ON "Teachers"("teacher_cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Students_student_rg_key" ON "Students"("student_rg");

-- CreateIndex
CREATE UNIQUE INDEX "Students_student_cpf_key" ON "Students"("student_cpf");

-- AddForeignKey
ALTER TABLE "Students" ADD CONSTRAINT "Students_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
