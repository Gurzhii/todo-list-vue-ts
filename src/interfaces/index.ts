export interface Headers {
  Accept: string;
  Pragma?: string;
  "Content-Type": string;
  "Cache-Control"?: string;
}

export interface TaskRawData {
  id?: string;
  title?: string;
  isCompleted?: boolean;
  updatedAt?: Date | null;
  createdAt?: Date | null;
  deletedAt?: Date | null;
}
