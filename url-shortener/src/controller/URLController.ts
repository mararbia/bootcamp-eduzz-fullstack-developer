import { URLModel } from "./../database/model/URL";
import { config } from "../config/Constants";
import { Request, Response } from "express";
import shortId from "shortid";

export class URLController {
  public async shorten(req: Request, resp: Response): Promise<void> {
    const { originURL } = req.body;
    const url = await URLModel.findOne({ originURL });
    if (url) {
      resp.json(url);
      return;
    }

    const hash = shortId.generate();
    const shortURL = `${config.API_URL}/${hash}`;
    const newUrl = await URLModel.create({ hash, shortURL, originURL });
    resp.json(newUrl);
  }
  public async redirect(req: Request, resp: Response): Promise<void> {
    const { hash } = req.params;
    const url = await URLModel.findOne({ hash });

    if (url) {
      resp.redirect(url.originURL);
      return;
    }
    resp.status(400).json({ error: "URL Not Found" });
  }
}
