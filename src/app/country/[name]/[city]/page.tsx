import React from "react";

const CityPage = async ({ params }: { params: Promise<{ city: string }> }) => {
  const { city } = await params;

  return (
    <div className="flex min-h-screen flex-col items-center">{city} Page</div>
  );
};

export default CityPage;
