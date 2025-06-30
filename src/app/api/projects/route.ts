import { getAllProjects } from "@/app/services/project";
import { NextResponse } from "next/server";

export async function GET(
  request: Request
) {
  try {
    const authHeader =
      request.headers.get(
        "authorization"
      );
    if (
      !authHeader ||
      !authHeader.startsWith("Bearer ")
    ) {
      return NextResponse.json(
        {
          error:
            "Token de autorização necessário",
        },
        { status: 401 }
      );
    }

    const token =
      authHeader.split(" ")[1];
    if (token !== "demo-token-123") {
      return NextResponse.json(
        { error: "Token inválido" },
        { status: 401 }
      );
    }

    const projects =
      await getAllProjects();

    return NextResponse.json({
      success: true,
      data: projects,
      total: projects.length,
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      {
        error:
          "Erro interno do servidor",
      },
      { status: 500 }
    );
  }
}
