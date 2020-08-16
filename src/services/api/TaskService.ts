import { Client } from "./index";
import { TaskModel } from "./../../models/TaskModel";
import { AxiosResponse } from "axios";
import { TaskRawData } from "./../../interfaces";

export class TaskService extends Client {
  path = "/tasks";

  public async getAll(): Promise<TaskModel[]> {
    const res: AxiosResponse<TaskModel[]> = await this.get<
      TaskModel,
      AxiosResponse<TaskModel[]>
    >(this.path);

    return [];
  }

  public async save(item: TaskModel): Promise<TaskModel> {
    const normalized = this.normalize(item);

    const response = await this.api.post(this.path, normalized);

    return response.data;
  }

  public async update(item: TaskModel): Promise<TaskModel> {
    const normalized = this.normalize(item);

    delete normalized.id;

    return this.api.put(`${this.path}/${item.id}`, normalized);
  }

  public async destroy(item: TaskModel): Promise<TaskModel> {
    return this.api.delete(`${this.path}/${item.id}`);
  }

  private normalize(item: TaskModel): TaskRawData {
    return {
      id: item.id,
      deletedAt: item.deletedAt,
      createdAt: item.createdAt,
      isCompleted: item.isCompleted,
      title: item.title,
      updatedAt: item.updatedAt
    };
  }
}

export const taskService = new TaskService();
