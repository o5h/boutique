
export interface Order {
    id: number;
    status: string;
    description: string;
    created: number;
}

export const EmptyOrder: Order = {
    id: 0,
    status: "",
    description: "",
    created: 0
}