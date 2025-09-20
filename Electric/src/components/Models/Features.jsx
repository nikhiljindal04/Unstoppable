import React from "react";
import FeatureCard from "./FeatureCard.jsx";

export default function Features() {
  return (
    <div className="bg-background-dark p-4 sm:p-8 md:p-10 text-white">
      <FeatureCard
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCt7Ab529-eome8ZuWgm5LDmI0KuOzQe4Q3PhZNPhwGJLXugqlCWyboywkKHOszxRs3M4ilwAym4743kSOsMUSqyAMgpBPowr8FPVYAPwxzSBprjXPS3ytIMyiJSWWOr-pBI9QpkHBucJroxKZNX1KkBZNoZ_DFLq0UoBDL9jAcYTHQtCtXUSxTzdyVe5wVQLUr9WVg4g2S7LU28eVqxPaMtPCwIdh8IXUHJ7I--fL27vHFSxhHX5jlOCgZEcR7CXD6ev7OKFV4o28c"
        heading="City Drive"
        paragraph="Navigate urban landscapes with ease, experiencing Electra's smooth acceleration and responsive handling."
      />
      <FeatureCard
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuD1TRHl-VtRL3nmmHR3J2ta2Ai3-i1VDpbKfHApFD1NZybYAWZYLWZE0tFBBooAoWZExMNmv6jliAqTXo-FEpn8W1IMEArumXj9xhJV9ktxgBwGT1UJ6H06YQNCwRDcHiTky5trm5hBALFW32dcwXBr82wqNfCCWKKhgCewEWTdxCGKHbsEm_FDxP-S4-7tRkr0eiTXBNqV_MjU7DcMkzq5trA30a5iZ2c2Og8kC0Ib0COk5jk3jx-7xZ_aqiOQtDovHgD0h1FncaSh"
        heading="Highway Cruise"
        paragraph="Experience the thrill of open roads with Electra's advanced autopilot system and impressive top speed."
      />
      <FeatureCard
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuDFc-TtxLTcm6jPjHat3nmaC13VMzc6BHRyX_T6vjUGQuOsMxKlLc6bW6qeOwY8pdM1vd7GNM2W9ok3ZmH6S501y0_hCvylcpbEV_LOypGCxFjqoLkHoVQXNi805ZOe-HN7g6Dg9Ytd3rN9I8RSxmncYr-3WoS7_qD5iAmNfs2gFsxEXWVd9wH5pc9q7MQhSdGw3Q5XhiK5Dx-36ApQELIpMUpKA0eQna-qSAC0yRqEXZqL73J_56RcGNI1u1E2Oz1EcPaCQr3htxie"
        heading="Mountain Ascent"
        paragraph="Conquer challenging terrains with Electra's powerful electric motor and all-wheel drive capabilities."
      />
      <FeatureCard
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ_f_xlzMf7iNbZbxFQvVcoyFRZKTa7RUAncoN4L6AaC32p292PpaLmppBK4SSZN8NVI7PkNAgbnT_CjU4ku6K7YvnFlj9b5jToPdqSA1IjiOMKmpci6-iHBvlG78CeCW52-BnYXerv2VJbti-Qj61aCUhQbMqwA0iWJmzPfSp55StGFXMsLtEtFQW-OhS5jOrnKuMUQGDj24UUPxiu-ZC-63ZU1GlDfeE-v5pgS6ctLD74jc0OJ0aAPjISvaJWu8ta3zU23tLXX8g"
        heading="Charging Stop"
        paragraph="Recharge quickly and efficiently at Electra's network of charging stations, ensuring a seamless journey."
      />
    </div>
  );
}
