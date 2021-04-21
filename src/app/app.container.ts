import "reflect-metadata";

import { Container } from "inversify";

import { CoreModule } from "./core/providers";
import { AuthModule } from "./features/login";

const container = new Container({
  defaultScope: "Singleton",
});

const containerBuilder = async (): Promise<Container> => {
  await container.loadAsync(CoreModule.providers());
  await container.loadAsync(AuthModule.providers());

  return container;
};

export { container, containerBuilder };
