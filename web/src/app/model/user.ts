

export interface User {
    id: number;
    email: string;
    pictureURL: string;
}
export const GuestUser: User = { id: 0, email: "", pictureURL: "" }