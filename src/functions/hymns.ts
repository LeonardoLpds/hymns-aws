import { Request, Response } from "express";

export async function putHymn(req: Request, res: Response) {
  res.status(201).json({ msg: "created" });
}

export async function getHymn(req: Request, res: Response) {
  res.status(201).json({ msg: "read" });
}

export async function updateHymn(req: Request, res: Response) {
  res.status(201).json({ msg: "update" });
}

export async function deleteHymn(req: Request, res: Response) {
  res.status(201).json({ msg: "delete" });
}