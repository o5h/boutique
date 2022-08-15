import { Order } from "./order";

export const ORDERS: Order[] = [
    { id: 1, status: "created", description: "description", created: Date.now() },
    { id: 2, status: "created", description: "description 2", created: Date.now() },
    { id: 3, status: "created", description: "description 3", created: Date.now() }
];