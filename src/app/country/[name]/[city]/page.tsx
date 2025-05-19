import React from "react";

const CityPage = async ({ params }: { params: Promise<{ city: string }> }) => {
  const { city } = await params;

  return <div>{city} Page</div>;
};

export default CityPage;
