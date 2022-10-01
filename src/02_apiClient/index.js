"use strict";
import { ApiClient } from './apiClient';
const apiClient = new ApiClient();
apiClient.getTasks().then(data => {
    console.table(data);
}).catch(err => {
    console.error(`Something went wrong ${err.message}`);
});