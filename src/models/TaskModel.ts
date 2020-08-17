import { BaseModel } from "./BaseModel";
import { TaskRawData } from "./../interfaces";

const defaultValues = { title: "", isCompleted: false };

export class TaskModel extends BaseModel implements TaskRawData {
  id?: string;
  isCompleted?: boolean;
  title?: string;

  constructor(params: TaskRawData = defaultValues) {
    super();
    Object.assign(this, params);
  }

  get isValid() {
    return this.title && this.title.trim() !== "";
  }

  get isInvalid() {
    return !this.isValid;
  }
}
