export interface IStudent extends Document {
  name: string;
  email: string;
  telephone: string;
  startDate: Date;
  status: "active" | "inactive" | "suspended";
  subscriptionType: string; // plano mensal, trimestral, etc
  monthlyFee: number;
  paymentDueDate: Date;
  gracePeriodEnd: Date; // data limite de tolerância
  createdAt: Date;
  updatedAt: Date;
}
