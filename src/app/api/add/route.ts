import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  const body = await request.json();

  const { content } = body;
  const time = new Date().toISOString();
  const filename = `${time}.txt`;
  const filepath = path.join(process.cwd(), "src", "content", filename);

  fs.writeFileSync(filepath, content);

  return NextResponse.json({ body });
}
