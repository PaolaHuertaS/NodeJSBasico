import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './users/auth/auth.middleware';
import { PaymentsModule } from '../payments/payments.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [PaymentsModule]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({
      path: '/users', method: RequestMethod.GET
    }, {
      path: '/users',
      method: RequestMethod.POST
    }).apply(AuthMiddleware)
      .forRoutes('users');
  }
}
