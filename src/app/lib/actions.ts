"use server";
import { revalidatePath } from "next/cache";
import { ICreateProjectData } from "../interfaces/project";

export async function createProjectAction(
  formData: FormData
) {
  try {
    const data: ICreateProjectData = {
      name: formData.get(
        "name"
      ) as string,
      description: formData.get(
        "description"
      ) as string,
      thematicArea: formData.get(
        "thematicArea"
      ) as string,
      startDate: formData.get(
        "startDate"
      ) as string,
    };

    // Validação básica
    if (
      !data.name ||
      !data.description ||
      !data.thematicArea ||
      !data.startDate
    ) {
      throw new Error(
        "Todos os campos são obrigatórios"
      );
    }

    // await createProject(data);
    revalidatePath("/");

    return {
      success: true,
      message:
        "Projeto criado com sucesso!",
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Erro ao criar projeto",
    };
  }
}
