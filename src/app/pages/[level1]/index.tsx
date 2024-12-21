"use client";

import { useRouter } from "next/router";
import React from "react";

const Level1Page: React.FC = () => {
  const router = useRouter();
  const { level1 } = router.query;

  return (
    <div>
      <h1>Level 1 Page</h1>
      <p>Level 1 Param: {level1}</p>
      <a href={`/level1/${level1}/level2/example`}>Go to Level 2</a>
    </div>
  );
};

export default Level1Page;
