import { BaseModel } from "./BaseModel";
import { TaskRawData } from "./../interfaces";

const defaultValues = { title: "", isCompleted: false };

export class TaskModel extends BaseModel implements TaskRawData {
  id: string;
  isCompleted: boolean;
  title: string;

  constructor(params: TaskRawData = defaultValues) {
    super();

    this.id = params.id!;
    this.deletedAt = params.deletedAt!;
    this.createdAt = params.createdAt!;
    this.isCompleted = params.isCompleted!;
    this.title = params.title!;
    this.updatedAt = params.updatedAt!;
  }

  get isValid() {
    return this.title.trim() !== "";
  }

  get isInvalid() {
    return !this.isValid;
  }
}
