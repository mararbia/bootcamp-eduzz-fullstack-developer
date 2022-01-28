import { NextFunction, Request, Response } from "express";
import JWT from "jsonwebtoken";
import ForbiddenError from "../models/errors/forbidden.error.models";
// {
// 	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjQzMzEzODAwLCJzdWIiOiJiYzE0Yzk0Yy1iYWFlLTRlZjMtYmYyZi05MWZlN2M5MmU5ZTcifQ.R-Uh87v98XObo4PJICWI-VlTv_2uIdOg9dFQszk6LIc"
// }

async function bearerAuthenticationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authorizationHeader = req.headers["authorization"];

    if (!authorizationHeader) {
      throw new ForbiddenError("Credenciais não informadas");
    }

    const [authenticationType, token] = authorizationHeader.split(" ");

    if (authenticationType !== "Bearer" || !token) {
      throw new ForbiddenError("Tipo de autenticação inválido");
    }

    const tokenPayload = JWT.verify(token, "my_secret_key");

    if (typeof tokenPayload !== "object" || !tokenPayload.sub) {
      throw new ForbiddenError("Token inválido");
    }

    //As duas próximas linhas podem ser substituídas pelo trecho de código abaixo.
    //O que evitará uma consulta desnecessária ao BD

    // const uuid = tokenPayload.sub;
    // const user = await userRepository.findById(uuid);

    const user = {
      uuid: tokenPayload.sub,
      username: tokenPayload.username,
    };

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
}

export default bearerAuthenticationMiddleware;
