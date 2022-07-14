import { NextApiRequest, NextApiResponse } from "next";
import type { User } from "../../lib/types";
import { validateRoute } from "../../lib/auth";

/**
 * 1. call validateRoute() which returns a function with just req and res as expected
 * 2. the expected funstion will also call the passed in function
 */
export default validateRoute(
  (req: NextApiRequest, res: NextApiResponse, user: User) => {
    res.json(user);
  }
);
