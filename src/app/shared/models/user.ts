export class User {
    constructor(
        public userId: string,
        public username: string,
        public firstName: string,
        public lastName: string,
        public bio: string,
        public email: string,
        public phoneNumber: string,
        public imageUrl: string,
        public messageCount: number
    ){}
}
