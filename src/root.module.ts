import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, OrdersModule, ChatModule,],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() { 
    console.log('RootModule initialized');
  }
}
