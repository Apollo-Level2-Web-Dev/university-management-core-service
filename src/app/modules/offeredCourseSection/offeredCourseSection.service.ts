import { OfferedCourseSection } from "@prisma/client";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import prisma from "../../../shared/prisma";

const insertIntoDB = async (data: any): Promise<OfferedCourseSection> => {

    const isExistOfferedCourse = await prisma.offeredCourse.findFirst({
        where: {
            id: data.offeredCourseId
        }
    })

    console.log(isExistOfferedCourse)
    console.log("data: ", data)

    if (!isExistOfferedCourse) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Offered Course does not exist!")
    }

    data.semesterRegistrationId = isExistOfferedCourse.semesterRegistrationId;

    const result = await prisma.offeredCourseSection.create({
        data
    })

    return result;
}

export const OfferedCourseSectionService = {
    insertIntoDB
}