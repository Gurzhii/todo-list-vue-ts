import { Factory, Model, Server, RestSerializer } from "miragejs";
import faker from "faker";

const ApplicationSerializer = RestSerializer.extend({});

const TaskModel = Model.extend({});

const TaskFactory = Factory.extend({
  title: faker.lorem.paragraph(),
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
  isCompleted() {
    return Math.random() >= 0.5;
  }
});

export function makeServer() {
  return new Server({
    trackRequests: true,
    logging: true,

    models: {
      task: TaskModel
    },

    factories: {
      task: TaskFactory
    },

    serializers: {
      application: ApplicationSerializer
    },

    routes() {
      // NOTE: URL's to be skipped by the miragejs
      this.urlPrefix = "http://localhost:3000";

      this.namespace = "api";

      this.get("/tasks");
      this.put("/tasks/:id", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);

        return schema.db.tasks.update(attrs);
      });
      this.delete("/tasks/:id");
      this.post("/tasks", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);

        return schema.db.tasks.insert(attrs);
      });
    }
  });
}
