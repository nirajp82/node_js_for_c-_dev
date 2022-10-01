import { Config } from './config/config';
import { UsersRouter } from './controllers_eq_routers/usersRouter';
import { Server } from './servers/server';
import { UserService } from './services/userService';

const config = new Config()
    .setPort(3001)
    .setTransientService("UserService", UserService);

new Server(config)
    .addRouter("/api/users", new UsersRouter(config))
    .start();