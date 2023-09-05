import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { StudentEnrolledCourseMarkService } from "./studentEnrolledCourseMark.service";

const updateStudentMarks = catchAsync(async (req: Request, res: Response) => {
    const result = await StudentEnrolledCourseMarkService.updateStudentMarks(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "marks updated!",
        data: result
    })
});

export const StudentEnrolledCourseMarkConroller = {
    updateStudentMarks
}