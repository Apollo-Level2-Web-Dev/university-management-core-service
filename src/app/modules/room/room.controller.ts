import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { RoomService } from "./room.service";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
    const result = await RoomService.insertIntoDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Room created successfully!",
        data: result
    })
})


export const RoomController = {
    insertIntoDB
}