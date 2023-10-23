import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { studentSemesterPaymentFilterableFields } from "./studentSemesterPayment.constants";
import { StudentSemesterPaymentService } from "./studentSemesterPayment.service";

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, studentSemesterPaymentFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await StudentSemesterPaymentService.getAllFromDB(filters, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Student semester payment fetched successfully',
        meta: result.meta,
        data: result.data
    });
});
const getMySemesterPayments = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, studentSemesterPaymentFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const user = (req as any).user;

    const result = await StudentSemesterPaymentService.getMySemesterPayments(
        filters,
        options,
        user
    );
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Student semester payment fetched successfully',
        meta: result.meta,
        data: result.data
    });
});

const initiatePayment = catchAsync(async (req: Request, res: Response) => {
    const user = (req as any).user;
    console.log(user);
    const result = await StudentSemesterPaymentService.initiatePayment(req.body, user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Payment initiated!',
        data: result
    })
})
const completePayment = catchAsync(async (req: Request, res: Response) => {
    const result = await StudentSemesterPaymentService.completePayment(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Payment completed!',
        data: result
    })
})

export const StudentSemesterPaymentController = {
    getAllFromDB,
    initiatePayment,
    completePayment,
    getMySemesterPayments
}