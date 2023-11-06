import jwt from "jsonwebtoken"

export function gerarJwt(payload){
    const tokenjwt = jwt.sign(payload, process.env.JWT_SEGREDO, {
        expiresIn: "1h"
    })

    return tokenjwt;
}