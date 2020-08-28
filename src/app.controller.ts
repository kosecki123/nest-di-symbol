import { Controller, Get, Inject } from "@nestjs/common";
import { IAppService } from "./app.service";

@Controller()
export class AppController {
  constructor(@Inject(IAppService) private readonly appService: IAppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
