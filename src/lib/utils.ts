import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getGradientColor(color: string | undefined): string {
  const baseColor = color || "blue";
  return `bg-gradient-to-bl from-${baseColor}-500 via-${baseColor}-500 to-${baseColor}-800`;
}
