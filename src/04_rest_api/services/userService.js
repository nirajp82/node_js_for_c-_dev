export class UserService {
    async getAsync() {
        return new Promise((resolve, reject) => {
            return resolve([{
                id: 101,
                name: "Raj"
            }, {
                id: 102,
                name: "Two"
            }]);
        });
    }
}