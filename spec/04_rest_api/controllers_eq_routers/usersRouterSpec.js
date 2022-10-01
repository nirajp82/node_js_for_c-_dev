const Config = require('../../../.compiled/04_rest_api/config/config').Config;
const UsersRouter = require('../../../.compiled/04_rest_api/controllers_eq_routers/usersRouter').UsersRouter;
const UserService = require('../../../.compiled/04_rest_api/services/userService').UserService;

describe("UsersRouter", () => {
    it("throws error if config is not defined", () => {
        expect(() => new UsersRouter(null)).toThrow(new Error("Config not defined!"));
    });

    it("Calls Config.getTransientService", () => {
        const config = new Config();
        spyOn(config, "getUserService").and.returnValue(new UserService());
        var router = new UsersRouter(config);
        expect(config.getUserService).toHaveBeenCalledTimes(1);
    });
});