import {
  deleteData,
  retriveData,
  signUp,
  updateData,
} from "@/common/services/firebase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();
  const data = await signUp(res, (error: any) => {
    if (error) {
      return NextResponse.json({
        success: false,
        statusCode: 400,
        message: error.message,
        data: {},
      });
    }
    return NextResponse.json({
      success: true,
      statusCode: 200,
      message: "Success",
      data: data,
    });
  });
  return NextResponse.json({
    success: true,
    statusCode: 200,
    message: "Success",
    data: data,
  });
}

export async function GET(request: NextRequest, response: NextResponse) {
  const users = await retriveData("users");
  const data = users.map((user: any) => {
    delete user.password;
    return user;
  });

  return NextResponse.json({
    success: true,
    statusCode: 200,
    message: "Success",
    data: data,
  });
}

export async function PATCH(request: NextRequest, response: NextResponse) {
  const { id, data } = await request.json();
  const result = await updateData("users", id, data, (result: boolean) => {
    if (!result) {
      return NextResponse.json({
        success: false,
        statusCode: 400,
        message: "Error",
        data: {},
      });
    }
    return NextResponse.json({
      success: true,
      statusCode: 200,
      message: "Success",
      data: result,
    });
  });
  return NextResponse.json({
    success: true,
    statusCode: 200,
    message: "Success",
    data: result,
  });
}

export async function DELETE(request: NextRequest, response: NextResponse) {
  const { id } = await request.json();
  const result = await deleteData("users", id, (result: boolean) => {
    if (!result) {
      return NextResponse.json({
        success: false,
        statusCode: 400,
        message: "Error",
        data: {},
      });
    }
    return NextResponse.json({
      success: true,
      statusCode: 200,
      message: "Success",
      data: result,
    });
  });
  return NextResponse.json({
    success: true,
    statusCode: 200,
    message: "Success",
    data: result,
  });
}
