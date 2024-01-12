import { retriveDataById, signUp } from "@/common/services/firebase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();
  return NextResponse.json({
    success: true,
    statusCode: 200,
    message: "Success",
    data: res,
  });
}

// export async function GET(request: NextRequest) {
//   const { searchParams } = new URL(request.url);
//   const id = searchParams.get("id");
//   if (id) {
//     const detailUser = await retriveDataById("users", id);
//     if (detailUser) {
//       return NextResponse.json({
//         success: true,
//         statusCode: 200,
//         message: "Success",
//         data: detailUser,
//       });
//     }
//     return NextResponse.json({
//       success: false,
//       statusCode: 404,
//       message: "Not Found",
//       data: {},
//     });
//   }

//   return NextResponse.json({
//     status: 200,
//     message: "successfully",
//     data: [],
//   });
// }
