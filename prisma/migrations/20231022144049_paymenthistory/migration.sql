-- CreateEnum
CREATE TYPE "PayementMethod" AS ENUM ('CASH', 'ONLINE');

-- CreateTable
CREATE TABLE "student_semester_payament_histories" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "studentSemesterPaymentId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "dueAmount" INTEGER NOT NULL DEFAULT 0,
    "paidAmount" INTEGER NOT NULL DEFAULT 0,
    "paymentMethod" "PayementMethod" NOT NULL DEFAULT 'ONLINE',
    "isPaid" BOOLEAN DEFAULT false,

    CONSTRAINT "student_semester_payament_histories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "student_semester_payament_histories" ADD CONSTRAINT "student_semester_payament_histories_studentSemesterPayment_fkey" FOREIGN KEY ("studentSemesterPaymentId") REFERENCES "student_semester_payments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
