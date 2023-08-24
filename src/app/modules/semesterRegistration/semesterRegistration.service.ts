import { SemesterRegistration, SemesterRegistrationStatus } from "@prisma/client";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import prisma from "../../../shared/prisma";

const insertIntoDB = async (data: SemesterRegistration): Promise<SemesterRegistration> => {

    const isAnySemesterRegUpcomingOrOngoing = await prisma.semesterRegistration.findFirst({
        where: {
            OR: [
                {
                    status: SemesterRegistrationStatus.UPCOMING
                },
                {
                    status: SemesterRegistrationStatus.ONGOING
                }
            ]
        }
    })

    if (isAnySemesterRegUpcomingOrOngoing) {
        throw new ApiError(httpStatus.BAD_REQUEST,
            `Thers is already an ${isAnySemesterRegUpcomingOrOngoing.status} registration.`
        )
    }

    const result = await prisma.semesterRegistration.create({
        data
    })

    return result;
}

export const SemesterRegistrationService = {
    insertIntoDB
}