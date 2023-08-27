import { OfferedCourse } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { asyncForEach } from "../../../shared/utils";
import { ICreateOfferedCourse } from "./offeredCourse.interface";

const insertIntoDB = async (data: ICreateOfferedCourse): Promise<OfferedCourse[]> => {
    const { academicDepartmentId, semesterRegistrationId, courseIds } = data;
    const result: OfferedCourse[] = [];

    await asyncForEach(courseIds, async (courseId: string) => {
        const alreadyExist = await prisma.offeredCourse.findFirst({
            where: {
                academicDepartmentId,
                semesterRegistrationId,
                courseId
            }
        })

        if (!alreadyExist) {
            const insertOfferedCourse = await prisma.offeredCourse.create({
                data: {
                    academicDepartmentId,
                    semesterRegistrationId,
                    courseId
                },
                include: {
                    academicDepartment: true,
                    semesterRegistration: true,
                    course: true
                }
            })

            result.push(insertOfferedCourse)
        }
    })

    return result;
}

export const offeredCourseService = {
    insertIntoDB
}