import { ReactNode } from "react";

export interface HelloProps {
  name: string;
  age: number;
}

export interface UserCardProps {
  children: ReactNode;
  name: string;
  role?: string;
}

export interface Catfact {
  fact: string;
  length: number;
}
