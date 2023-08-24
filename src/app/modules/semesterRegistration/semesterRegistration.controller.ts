import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { SemesterRegistrationService } from "./semesterRegistration.service";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
    const result = await SemesterRegistrationService.insertIntoDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Semester Registration created",
        data: result
    })
})

export const SemesterRegistrationController = {
    insertIntoDB
}