"use client";

import React from "react";
import { ShowMoreProps } from "@/types";

import { useRouter } from "next/navigation";
import { handleUrlChange } from "@/utils";
import { Button } from "@nextui-org/button";

interface ShowMorePropsExtended extends ShowMoreProps {
  setLimit: (value: number) => void;
}

const ShowMore = ({ isNext, pageNumber, setLimit }: ShowMorePropsExtended) => {
  const router = useRouter();

  const handleClick = () => {
    const newLimit = (pageNumber + 1) * 20;
    setLimit(newLimit);
  };

  return (
    <div className="flex-center mt-10 w-full gap-5">
      {!isNext && (
        <Button
          color="primary"
          radius="full"
          variant="solid"
          size="lg"
          className="bg-primary-blue font-bold text-white"
          onPress={handleClick}
        >
          Show More
        </Button>
      )}
    </div>
  );
};

export default ShowMore;
