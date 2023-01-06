import { NextApiRequest, NextApiResponse } from "next"

export default function(req:NextApiRequest, res:NextApiResponse) {
    console.log(req.body);
    

    return res.send(req.body)
}