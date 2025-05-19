import React from "react";

const CountryNamePage = async ({
  params,
}: {
  params: Promise<{ name: string }>;
}) => {
  const { name } = await params;
  return (
    <div>
      Country Name is: <b> {name}</b>
    </div>
  );
};

export default CountryNamePage;
