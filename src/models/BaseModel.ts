export abstract class BaseModel {
  id?: string;
  deletedAt: null | Date;
  createdAt: null | Date;
  updatedAt: null | Date;

  constructor() {
    this.deletedAt = null;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  isDeleted() {
    return null !== this.deletedAt;
  }
}
