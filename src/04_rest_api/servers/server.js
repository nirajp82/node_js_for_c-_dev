const express = require('express');
const bodyParser = require('body-parser');

export class Server {
    constructor(config) {
        this.config = config;
        this.app = express();
        //Add JSON middleware
        this.app.use(bodyParser.json());
    }

    addRouter(path, router) {
        this.app.use(path, router.build());
        return this;
    }

    start() {
        const portNum = this.config.getPort();
        this.app.listen(portNum, () => console.log(`Listening on port ${portNum} http://localhost:${portNum}/api/users`));
    }
}