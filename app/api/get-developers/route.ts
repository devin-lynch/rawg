import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const grabDevs = async () => {
    const body = await request.json()
    const { developer } = body
    const apiKey = process.env.API_KEY;
    const response = await fetch(`https://api.rawg.io/api/developers?key=${apiKey}&search=${developer}`)
    const data = await response.json()
    return data
  }

  const retrievedDevs = await grabDevs()

  return NextResponse.json(retrievedDevs)
}