"use client";

import { useRouter } from "next/router";
import React from "react";

const Level2Page: React.FC = () => {
  const router = useRouter();
  const { level1, level2 } = router.query;

  return (
    <div>
      <h1>Level 2 Page</h1>
      <p>Level 1 Param: {level1}</p>
      <p>Level 2 Param: {level2}</p>
    </div>
  );
};

export default Level2Page;
