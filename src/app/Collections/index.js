import React from "react";
import "./index.css";

const Collections = ({ collectionsData }) => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <div className="collections-wrapper d-flex justify-content-center">
        <h1>--- Bộ sưu tập ---</h1>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {listCollections.map((item) => (
          <div
            className="card-parent"
            style={{
              height: 200,
              width: 287,
              backgroundColor: "#ffffff",
            }}
          >
            <img
              key={item.id}
              src={item.imageUrl}
              alt={`Customer ${item.id}`}
              className="card-child"
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;

const listCollections = [
  {
    id: 1,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/image%2F1.png?alt=media&token=6aebb33f-45ae-4fb0-b043-572911c635c2",
  },
  {
    id: 2,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/image%2F10.png?alt=media&token=eedce5e3-1cae-4e81-b47d-a83c45f0eede",
  },
  {
    id: 3,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/image%2F11.png?alt=media&token=fee5a9d9-1f4b-4a9a-9f2b-63c06d174eb6",
  },
  {
    id: 4,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/image%2F12.png?alt=media&token=da60a3b3-e7fb-4c99-ba06-4d72f749118d",
  },
  {
    id: 5,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/image%2F13.png?alt=media&token=c6abe640-c6c5-4019-8ff2-5148f776f9df",
  },
  {
    id: 6,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/image%2F14.png?alt=media&token=a36a9c29-5e60-43c9-914b-a698098abbc8",
  },
  {
    id: 7,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/image%2F15.png?alt=media&token=4a4f7571-f2c7-4068-bcde-a313031189f9",
  },
  {
    id: 8,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/image%2F16.png?alt=media&token=c24a24aa-f381-4f7a-8d09-6187c2c28ef2",
  },
  {
    id: 9,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/image%2F17.png?alt=media&token=57e3162a-3189-47f4-be89-987323f6d348",
  },
  {
    id: 10,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/image%2F18.png?alt=media&token=c980e83e-f763-4100-b338-e089fd2d80fa",
  },
  {
    id: 11,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/image%2F19.png?alt=media&token=e407de4e-af6c-4608-89cd-b775c12978ed",
  },
  {
    id: 12,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/image%2F2.png?alt=media&token=f7356d67-b876-4dcc-bea9-66ae9204b940",
  },
  {
    id: 13,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/image%2F20.png?alt=media&token=2bf9e2b9-9531-4486-bd66-ffb83fef50e0",
  },
  {
    id: 14,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/image%2F3.png?alt=media&token=970c1396-0144-4da2-a663-631239a01c56",
  },
  {
    id: 15,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/image%2F4.png?alt=media&token=b5dfa1da-8b57-4ffb-91d6-14210babcf12",
  },
  {
    id: 16,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/image%2F5.png?alt=media&token=e310128e-de47-406a-a73f-cd1ebc16e398",
  },
  {
    id: 17,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/image%2F6.png?alt=media&token=dab2897f-e5a4-4929-b670-7a569224cd3e",
  },
  {
    id: 18,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/image%2F7.png?alt=media&token=33e0cece-5b1c-4769-a3d1-eb34e7755f7f",
  },
  {
    id: 19,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/image%2F8.png?alt=media&token=871bb6f9-00d0-4535-876c-595c12ba7bfc",
  },
  {
    id: 20,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/image%2F9.png?alt=media&token=88d355ee-1acc-4384-a08b-920f1e379d44",
  },
];
