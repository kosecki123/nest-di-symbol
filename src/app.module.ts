import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService, IAppService } from "./app.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: IAppService,
      useValue: AppService,
    },
  ],
})
export class AppModule {}
