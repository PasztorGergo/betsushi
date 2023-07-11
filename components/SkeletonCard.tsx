import React from "react";

export const SkeletonCard = () => {
  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-center bg-contain bg-no-repeat p-4 flex justify-between items-end h-48 lg:h-64 w-72 lg:w-96 transition-all animate-[skeleton_1s_infinite_alternate_linear]`}
    ></div>
  );
};
