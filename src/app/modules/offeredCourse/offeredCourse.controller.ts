import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { offeredCourseService } from "./offeredCourse.service";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
    const result = await offeredCourseService.insertIntoDB(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Offered Course Created",
        data: result
    })
})

export const OfferedCourseController = {
    insertIntoDB
}