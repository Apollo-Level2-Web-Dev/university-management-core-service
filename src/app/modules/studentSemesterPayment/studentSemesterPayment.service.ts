import { PrismaClient } from "@prisma/client";
import { DefaultArgs, PrismaClientOptions } from "@prisma/client/runtime/library";

// const createSemesterPayemnt = async (
//     prismaClient: Omit<PrismaClient<PrismaClientOptions, never, DefaultArgs>, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends">,
//     payload: {
//         studentId: string,
//         academicSemesterId: string,
//         totalPaymentAmount: number
//     }
// ) => {

//     const dataToInsert = {
//         studentId: payload.studentId,
//         academicSemesterId: payload.academicSemesterId,
//         fullPaymentAmount: payload.totalPaymentAmount,
//         partialPaymentAmount: payload.totalPaymentAmount * 0.5,
//         totalDueAmount: payload.totalPaymentAmount,
//         totalPaidAmount: 0
//     }

//     await prismaClient.studentSemesterPayment.create({
//         data: dataToInsert
//     })
//     console.log("payment inserted")
// }

const createSemesterPayment = async (
    prismaClient: Omit<PrismaClient<PrismaClientOptions, never, DefaultArgs>, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends">,
    payload: {
        studentId: string;
        academicSemesterId: string;
        totalPaymentAmount: number;
    }
) => {
    const isExist = await prismaClient.studentSemesterPayment.findFirst({
        where: {
            student: {
                id: payload.studentId
            },
            academicSemester: {
                id: payload.academicSemesterId
            }
        }
    })

    if (!isExist) {
        const dataToInsert = {
            studentId: payload.studentId,
            academicSemesterId: payload.academicSemesterId,
            fullPaymentAmount: payload.totalPaymentAmount,
            partialPaymentAmount: payload.totalPaymentAmount * 0.5,
            totalDueAmount: payload.totalPaymentAmount,
            totalPaidAmount: 0
        }

        await prismaClient.studentSemesterPayment.create({
            data: dataToInsert
        })
    }
};

export const StudentSemesterPaymentService = {
    createSemesterPayment
}