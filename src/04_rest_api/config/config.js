export class Config {
    setTransientService(svcKey, svcType) {
        this[svcKey] = svcType;
        return this;
    };
    getTransientService(svcKey) {
        const type = this[svcKey];
        if (!type)
            return null;
        return new type();
    };
    getUserService() {
        return this.getTransientService("UserService");
    };
    setPort(port) {
        this.port = port;
        return this;
    };
    getPort() {
        return this.port;
    }
}