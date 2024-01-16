import {
  deleteData,
  retriveData,
  signUp,
  updateData,
} from "@/common/services/firebase";
import { NextRequest, NextResponse } from "next/server";
import Jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  const res = await request.json();
  await signUp(res, (error: any) => {
    if (error) {
      return NextResponse.json({
        success: false,
        statusCode: 400,
        message: error.message,
      });
    }
    return NextResponse.json({
      success: true,
      statusCode: 200,
      message: "Success",
    });
  });
  return NextResponse.json({
    success: true,
    statusCode: 200,
    message: "Success",
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
  const { id, data, token } = await request.json();
  Jwt.verify(
    token,
    process.env.NEXTAUTH_SECRET || "",
    async (error: any, decode: any) => {
      if (decode && decode.role === "admin") {
        await updateData("users", id, data, (result: boolean) => {
          if (!result) {
            return NextResponse.json({
              success: false,
              statusCode: 400,
              message: "Error",
            });
          }
          return NextResponse.json({
            success: true,
            statusCode: 200,
            message: "Success",
          });
        });
      }
    }
  );
  return NextResponse.json({
    success: false,
    statusCode: 500,
    message: "Access Denied",
  });
}

export async function DELETE(request: NextRequest, response: NextResponse) {
  const { id } = await request.json();
  const token = request.headers.get("Authorization")?.split(" ")[1] || "";
  Jwt.verify(
    token,
    process.env.NEXTAUTH_SECRET || "",
    async (error: any, decode: any) => {
      if (decode && decode.role === "admin") {
        await deleteData("users", id, (result: boolean) => {
          if (!result) {
            return NextResponse.json({
              success: false,
              statusCode: 400,
              message: "Error",
            });
          }
          return NextResponse.json({
            success: true,
            statusCode: 200,
            message: "Success",
          });
        });
      }
    }
  );
  return NextResponse.json({
    success: false,
    statusCode: 500,
    message: "Access Denied",
  });
}
