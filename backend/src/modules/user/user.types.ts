export interface IUser extends Document {
    id: string;
    name: string;
    email?: string;
    telephone: string;
    password: string;
    role: 'admin' | 'user';
    paymentDueDate?: Date;
    gracePeriodEnd?: Date;
    status: 'active' | 'inactive' | 'suspended';
    subscriptionType: 'Regular Plan' | 'Premium Plan';
    monthlyFee: number;
    createdAt: Date;
    updatedAt: Date;
}