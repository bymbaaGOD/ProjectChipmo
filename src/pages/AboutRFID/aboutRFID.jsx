import React from "react";
import InfoCard from "../../components/InfoCard/infoCard"
import HorizontalCard from "../../components/HorizontalCard/horizontalCard";
import Image from "../../assets/images/image.jpg"

export default function ExamplePage() {
  const cards = [
    {
      id: 1,
      image: Image,
      title: "Into the Forest",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae viverra sapien. Sed eu semper turpis. Curabitur ultricies ligula in felis egestas, et commodo enim viverra. Suspendisse potenti. Vivamus vel augue at lacus sagittis laoreet. Mauris dictum lacus id tellus gravida sodales. Donec tincidunt mattis lorem, sed pellentesque dolor facilisis vitae.`,
    },
    {
      id: 2,
      image: Image,
      title: "City Lights",
      description: `Curabitur vel mauris eu orci faucibus tempor. Praesent sollicitudin malesuada leo, at lobortis erat bibendum sit amet. Nulla facilisi. Phasellus sit amet rhoncus massa, non vestibulum lectus. Nunc ultricies purus vel dolor molestie pulvinar. Sed feugiat mauris enim, ut aliquet ipsum hendrerit et. Sed nec est sit amet erat fringilla vehicula non vel velit. Kirem hsadhasdhhasmu akuweb uef ehew fwfbewu fbwuf gwuf dhyh fdhfdhfdbfdhfsdhfbsdhfbsdfdbsjsufjejefiwebiwfhwfbwiefbwjfwofnwofwo`,
    },
  ];

  return (
    <>
    <div style={{ minHeight: '100vh', padding: '40px', display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center' }}>
      {cards.map((card) => (
        <InfoCard key={card.id} image={card.image} title={card.title} description={card.description} />
      ))}
    </div>
    <div style={{ padding: "40px", display: "flex", justifyContent: "center" }}>
      <HorizontalCard
        image={Image}
        title="Sunset Boulevard"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta ultricies purus, nec fermentum nisi viverra sed."
      />
    </div>
    </>
  );
}