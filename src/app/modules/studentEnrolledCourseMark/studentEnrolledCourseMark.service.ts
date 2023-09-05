import { ExamType, PrismaClient, StudentEnrolledCourseMark } from "@prisma/client"
import { DefaultArgs, PrismaClientOptions } from "@prisma/client/runtime/library"
import { paginationHelpers } from "../../../helpers/paginationHelper"
import { IGenericResponse } from "../../../interfaces/common"
import { IPaginationOptions } from "../../../interfaces/pagination"
import prisma from "../../../shared/prisma"
import { IStudentEnrolledCourseMarkFilterRequest } from "./studentEnrolledCourseMark.interface"

const createStudentEnrolledCourseDefaultMark = async (
    prismaClient: Omit<PrismaClient<PrismaClientOptions, never, DefaultArgs>, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends">,
    payload: {
        studentId: string,
        studentEnrolledCourseId: string,
        academicSemesterId: string
    }
) => {
    const isExitMidtermData = await prismaClient.studentEnrolledCourseMark.findFirst({
        where: {
            examType: ExamType.MIDTERM,
            student: {
                id: payload.studentId
            },
            studentEnrolledCourse: {
                id: payload.studentEnrolledCourseId
            },
            academicSemester: {
                id: payload.academicSemesterId
            }
        }
    })
    if (!isExitMidtermData) {
        await prismaClient.studentEnrolledCourseMark.create({
            data: {
                student: {
                    connect: {
                        id: payload.studentId
                    }
                },
                studentEnrolledCourse: {
                    connect: {
                        id: payload.studentEnrolledCourseId
                    }
                },
                academicSemester: {
                    connect: {
                        id: payload.academicSemesterId
                    }
                },
                examType: ExamType.MIDTERM
            }
        })
    }

    const isExistFinalData = await prismaClient.studentEnrolledCourseMark.findFirst({
        where: {
            examType: ExamType.FINAL,
            student: {
                id: payload.studentId
            },
            studentEnrolledCourse: {
                id: payload.studentEnrolledCourseId
            },
            academicSemester: {
                id: payload.academicSemesterId
            }
        }
    })

    if (!isExistFinalData) {
        await prismaClient.studentEnrolledCourseMark.create({
            data: {
                student: {
                    connect: {
                        id: payload.studentId
                    }
                },
                studentEnrolledCourse: {
                    connect: {
                        id: payload.studentEnrolledCourseId
                    }
                },
                academicSemester: {
                    connect: {
                        id: payload.academicSemesterId
                    }
                },
                examType: ExamType.FINAL
            }
        })
    }
}

const getAllFromDB = async (
    filters: IStudentEnrolledCourseMarkFilterRequest,
    options: IPaginationOptions
): Promise<IGenericResponse<StudentEnrolledCourseMark[]>> => {
    const { limit, page } = paginationHelpers.calculatePagination(options);

    const marks = await prisma.studentEnrolledCourseMark.findMany({
        where: {
            student: {
                id: filters.studentId
            },
            academicSemester: {
                id: filters.academicSemesterId
            },
            studentEnrolledCourse: {
                course: {
                    id: filters.courseId
                }
            }
        },
        include: {
            studentEnrolledCourse: {
                include: {
                    course: true
                }
            },
            student: true
        }
    });

    return {
        meta: {
            total: marks.length,
            page,
            limit
        },
        data: marks
    };
};

const updateStudentMarks = async (payload: any) => {
    console.log(payload)
}

export const StudentEnrolledCourseMarkService = {
    createStudentEnrolledCourseDefaultMark,
    getAllFromDB,
    updateStudentMarks
}