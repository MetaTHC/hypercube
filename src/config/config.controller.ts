import { Controller } from '@nestjs/common';

@Controller('config')
export class ConfigController {
  public get(key: string): any {
    return this[key];
  }
}
const config = new ConfigController();
export { config };
