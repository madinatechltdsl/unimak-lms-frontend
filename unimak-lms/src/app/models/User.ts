export class User{
    // @ts-ignore
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    profileImageUrl: string;
    lastLoginDate: Date;
    joinDate: Date;
    role: string;
    authorities: string[];
    isActive: boolean;
    isNotLocked: boolean;
   // token?: string;

    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.username = '';
        this.email = '';
        this.password = '';
        this.profileImageUrl = '';
        this.lastLoginDate = new Date();
        this.joinDate = new Date();
        this.role = '';
        this.authorities = [];
        this.isActive = false;
        this.isNotLocked = false;
    }
}
