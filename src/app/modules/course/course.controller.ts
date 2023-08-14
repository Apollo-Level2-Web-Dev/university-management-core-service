import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { CourseService } from "./course.service";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
    console.log(req.body)
    const result = await CourseService.insertIntoDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Course created successufully",
        data: result
    })
})

export const CourseController = {
    insertIntoDB
}