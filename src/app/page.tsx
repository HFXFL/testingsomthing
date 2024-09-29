"use client";
import { client } from "./client";
import { PayEmbed, getDefaultToken } from "thirdweb/react";
import { base } from "thirdweb/chains";

export default function Home() {
  return (
    <PayEmbed
      client={client}
      theme={"light"}
      payOptions={{
        mode: "direct_payment",
        paymentInfo: {
          amount: "35",
          chain: base,
          token: getDefaultToken(base, "USDC"),
          sellerAddress:
            "0xEb0effdFB4dC5b3d5d3aC6ce29F3ED213E95d675",
        },
        metadata: {
          name: "Black Hoodie (Size L)",
          image: "/drip-hoodie.png",
        },
      }}
    />
  );
}
