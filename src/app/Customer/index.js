import React from "react";

export default function Customer() {
  return (
    <div
      className="bg-gray-100 p-4 d-flex justify-content-center flex-column align-items-center"
      style={{
        backgroundColor: "#eeeeee",
      }}
    >
      <h4
        style={{
          marginBottom: 20,
          color: "#545454",
          fontWeight: 300,
          fontSize: 27,
        }}
      >
        --- Khách hàng của chúng tôi ---
      </h4>
      <div
        className="d-flex flex-wrap justify-content-center gap-2"
        style={{
          width: "85%",
        }}
      >
        {listCustomer.map((item) => (
          <img
            key={item.id}
            src={item.imageUrl}
            alt={`Customer ${item.id}`}
            className="object-cover"
            style={{
              height: 80,
              width: 150,
              margin: 1,
              backgroundColor: "#ffffff",
            }}
          />
        ))}
      </div>
    </div>
  );
}

const listCustomer = [
  {
    id: 1,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/customer%2FCBBANK.png?alt=media&token=3a39bb0b-11fe-458f-a0f2-6396ff4b3f6d",
  },
  {
    id: 2,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/customer%2FCHICUCTHUE.png?alt=media&token=7220de94-1f1a-47af-8560-c6d9a44abe6a",
  },
  {
    id: 3,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/customer%2FDAIHOCMO.png?alt=media&token=b4f7d6a9-37fd-479b-a273-b63b7f88746f",
  },
  {
    id: 4,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/customer%2FDSG.png?alt=media&token=26bbd419-f82b-445d-a082-1be656d28695",
  },
  {
    id: 5,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/customer%2FHDBANK.png?alt=media&token=4b89fbf5-f956-4c46-a82b-593af77a5fc2",
  },
  {
    id: 6,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/customer%2FICI.png?alt=media&token=b7a2fc09-9a77-49b1-b0fc-42e45028e15f",
  },
  {
    id: 7,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/customer%2FKLEXPRESS.png?alt=media&token=750b4f6d-6bdc-4ec7-9ffb-c8ef9b9ef76c",
  },
  {
    id: 8,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/customer%2FMNBANK.png?alt=media&token=0d5a853f-3952-495f-9926-8c83375ef4a2",
  },
  {
    id: 9,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/customer%2FMWG.png?alt=media&token=6d2132cd-7eff-4cd1-9804-9c9682f283dc",
  },
  {
    id: 10,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/customer%2FMYANCO.png?alt=media&token=949e7668-25b1-4b2e-b819-a50b7b2388ae",
  },
  {
    id: 11,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/customer%2FPETAZ.png?alt=media&token=2979f16a-ed65-44b7-9237-8b9bf3c49f84",
  },
  {
    id: 12,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/customer%2FSEASKY.png?alt=media&token=8cf7de06-637c-473b-95bf-defddab60a41",
  },
  {
    id: 13,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/customer%2FSOTAINGUYEN.png?alt=media&token=ea197d92-19d4-4e57-8453-f7cdee02eb29",
  },
  {
    id: 14,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/customer%2FGSTECH.png?alt=media&token=8695c8ad-9fff-43d6-a1e9-77b555760c7d",
  },
  {
    id: 15,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/customer%2FTHPTSONGRAY.png?alt=media&token=96b0f5ee-d974-4812-a6df-36ab0ea1d810",
  },
  {
    id: 16,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/customer%2FTINDUNG.png?alt=media&token=4d3bb3b1-4215-4726-b175-9f9699a6c0e8",
  },
  {
    id: 17,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/customer%2FTMA.png?alt=media&token=a9a6af72-0d24-403a-b3e3-6a1e3c73155e",
  },
  {
    id: 18,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/customer%2FVEGITIGI.png?alt=media&token=36d27fd9-bfed-4c2a-ab59-33ade655828b",
  },
  {
    id: 19,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/customer%2FVIB.png?alt=media&token=6cbe1d14-6693-4878-accd-4d511afe85de",
  },
  {
    id: 20,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/customer%2FVIETBANK.png?alt=media&token=bb9f6a2b-776c-422a-8d81-a74645417a9d",
  },
  {
    id: 21,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/customer%2FVIKKI.png?alt=media&token=cc04520c-a59c-40c7-88b7-a9467f5335f9",
  },
];
