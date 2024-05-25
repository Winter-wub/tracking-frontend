export enum Status {
  InTransit = "InTransit",
  Delivered = "Delivered",
  Exception = "Exception",
}

type User = {
  name: string;
  address: string;
};

type ParcelStatus = {
  status: Status;
  createdAt: Date;
};

export type Parcel = {
  trackingNumber: string;
  sender: User;
  receiver: User;
  status: ParcelStatus;
  history: ParcelStatus[];
};
