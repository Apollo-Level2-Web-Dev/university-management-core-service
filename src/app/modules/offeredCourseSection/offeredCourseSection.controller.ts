import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { OfferedCourseSectionService } from "./offeredCourseSection.service";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
    const result = await OfferedCourseSectionService.insertIntoDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Offered Course Section created",
        data: result
    })
})

export const OfferedCourseSectionController = {
    insertIntoDB
}