import React from "react";

const CountryNamePage = async ({
  params,
}: {
  params: Promise<{ name: string }>;
}) => {
  const { name } = await params;
  return (
    <div className="flex min-h-screen flex-col items-center">
      Country Name is: <b> {name}</b>
    </div>
  );
};

export default CountryNamePage;
