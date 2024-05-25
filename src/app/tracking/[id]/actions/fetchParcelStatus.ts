"use server";
import { type QueryResponse } from "@/app/query/types";
import { Status, type Parcel } from "../types/parcel";

const mockData: Parcel[] = [
  {
    trackingNumber: "1234567890",
    sender: {
      name: "John Doe",
      address: "1234 Main St, Springfield, IL",
    },
    receiver: {
      name: "Jane Doe",
      address: "5678 Elm St",
    },
    status: {
      status: Status.InTransit,
      createdAt: new Date(),
    },
    history: [
      {
        status: Status.InTransit,
        createdAt: new Date(),
      },
    ],
  },
  {
    trackingNumber: "0987654321",
    sender: {
      name: "Jane Doe",
      address: "5678 Elm St",
    },
    receiver: {
      name: "John Doe",
      address: "1234 Main St, Springfield, IL",
    },
    status: {
      status: Status.Delivered,
      createdAt: new Date(),
    },
    history: [
      {
        status: Status.InTransit,
        createdAt: new Date(),
      },
      {
        status: Status.InTransit,
        createdAt: new Date(),
      },
      {
        status: Status.Delivered,
        createdAt: new Date(),
      },
    ],
  },
  {
    trackingNumber: "1357924680",
    sender: {
      name: "John Doe",
      address: "1234 Main St, Springfield, IL",
    },
    receiver: {
      name: "Jane Doe",
      address: "5678 Elm St",
    },
    status: {
      status: Status.Exception,
      createdAt: new Date(),
    },
    history: [
      {
        status: Status.InTransit,
        createdAt: new Date(),
      },
      {
        status: Status.Exception,
        createdAt: new Date(),
      },
    ],
  },
];

export default async function fetchParcelStatus(
  trackingNumber: string
): Promise<QueryResponse<Parcel | null>> {
  const parcel = mockData.find((p) => p.trackingNumber === trackingNumber);
  await new Promise((resolve) => setTimeout(resolve, 2500));
  if (!parcel) {
    return {
      status: "success",
    };
  }
  return {
    status: "success",
    data: parcel,
  };
}
