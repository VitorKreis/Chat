import jwt from "jsonwebtoken"

export function gerarJwt(payload){
    const tokenjwt = jwt.sign(payload, "superSegredo", {
        expiresIn: "1h"
    })

    return tokenjwt;
}