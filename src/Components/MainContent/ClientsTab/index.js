import React from "react";
import ClientsCard from "./ClientsComponents/ClientsCard";
import ClientsTitle from "./ClientsComponents/ClientsTitle";

const clientsData = [
  {
    Key: 1,
    Image: "http://www.lokmanecza.com/img/logoyatay.png",
    Title: "Lokman Ecza Deposu",
  },
  {
    Key: 2,
    Image:
      "https://inbio-react.netlify.app/static/315fa9d000ebf4a2995d16d13b17852e/e94a9/client1.webp",
    Title: "Uğurcan Uçar",
  },
  {
    Key: 3,
    Image:
      "https://inbio-react.netlify.app/static/ae9a364ba8f6a2ba5c51e131b6cf2819/be9e0/client2.webp",
    Title: "Anya Mercan",
  },
  {
    Key: 4,
    Image:
      "https://inbio-react.netlify.app/static/16363f191081b46b987bb6f1d6c71479/6d8f3/client3.webp",
    Title: "Adon Smith",
  },
  {
    Key: 5,
    Image:
      "https://inbio-react.netlify.app/static/207f1409973e74a824c9e2824b48c8e8/8dc3e/client4.webp",
    Title: "Sultana Mila",
  },
  {
    Key: 6,
    Image:
      "https://inbio-react.netlify.app/static/207f1409973e74a824c9e2824b48c8e8/8dc3e/client4.webp",
    Title: "Sultana Mila",
  },
  {
    Key: 7,
    Image:
      "https://inbio-react.netlify.app/static/207f1409973e74a824c9e2824b48c8e8/8dc3e/client4.webp",
    Title: "Sultana Mila",
  },
  {
    Key: 8,
    Image:
      "https://inbio-react.netlify.app/static/207f1409973e74a824c9e2824b48c8e8/8dc3e/client4.webp",
    Title: "Sultana Mila",
  },
  {
    Key: 9,
    Image:
      "https://inbio-react.netlify.app/static/207f1409973e74a824c9e2824b48c8e8/8dc3e/client4.webp",
    Title: "Sultana Mila",
  },
  {
    Key: 10,
    Image:
      "https://inbio-react.netlify.app/static/207f1409973e74a824c9e2824b48c8e8/8dc3e/client4.webp",
    Title: "Sultana Mila",
  },
  {
    Key: 11,
    Image:
      "https://inbio-react.netlify.app/static/207f1409973e74a824c9e2824b48c8e8/8dc3e/client4.webp",
    Title: "Sultana Mila",
  },
  {
    Key: 12,
    Image:
      "https://inbio-react.netlify.app/static/207f1409973e74a824c9e2824b48c8e8/8dc3e/client4.webp",
    Title: "Sultana Mila",
  },
];

const index = () => {
  return (
    <div id="clients" className="scroll-m-40">
      <ClientsTitle />
      <div className="grid gap-10 mt-4 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
        {clientsData.map((e) => {
          return (
            <React.Fragment key={e.Key}>
              <ClientsCard data={e} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default index;
