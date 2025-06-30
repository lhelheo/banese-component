import {
  clsx,
  type ClassValue,
} from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(
  ...inputs: ClassValue[]
) {
  return twMerge(clsx(inputs));
}

export function formatDate(
  dateString: string
): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(
    "pt-BR",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }
  );
}

export function generateId(): string {
  return Math.random()
    .toString(36)
    .substr(2, 9);
}
