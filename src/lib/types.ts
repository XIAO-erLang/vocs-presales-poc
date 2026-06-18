export type Role = "sales" | "owner" | "engineer" | "factory" | "learner";

export type Need = "ask" | "template" | "process" | "draft" | "review";

export type ProjectStatus = "active" | "partial" | "none" | "unknown";

export type NextAction = "sample" | "fullPack" | "submitProject" | "manualReview";

export type IntentOption =
  | "freeSample"
  | "fullPack"
  | "packWithTemplate"
  | "projectCheck"
  | "manualReview";

export interface Option<T extends string> {
  value: T;
  label: string;
  hint?: string;
}

export interface LeadPayload {
  name: string;
  contact: string;
  role: Role;
  hasProject: ProjectStatus;
  desiredContent: string;
  intent: IntentOption;
  message: string;
}

export interface ResultContent {
  title: string;
  description: string;
  recommended: string;
  includes: string[];
  nextStep: string;
}
