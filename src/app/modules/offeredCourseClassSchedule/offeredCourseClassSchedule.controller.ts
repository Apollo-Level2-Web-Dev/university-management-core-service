import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { offeredCourseClassScheduleFilterableFields } from "./offeredCourseClassSchedule.constants";
import { OfferedCourseClassScheduleService } from "./offeredCourseClassSchedule.service";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
    const result = await OfferedCourseClassScheduleService.insertIntoDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Offered Course Class Schedule Created!",
        data: result
    })
})

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, offeredCourseClassScheduleFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await OfferedCourseClassScheduleService.getAllFromDB(filters, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'OfferedCourse class schedule fetched successfully',
        meta: result.meta,
        data: result.data
    });
})

export const OfferedCourseClassScheduleController = {
    insertIntoDB,
    getAllFromDB
}