// Importing necessary modules and data
import { NextResponse } from "next/server";
import { SideIcons } from "@/app/constants/data";

// GET request handler function
export async function GET(request: Request) {
  try {
    // Parsing the ID from the request URL
    const id = JSON.parse(request.url.slice(request.url.lastIndexOf("/") + 1));

    // Finding the object with the matching ID in SideIcons data
    const filteredObject = SideIcons.find((item) => item.id === id);

    // Returning the filtered object as JSON response
    return NextResponse.json(filteredObject);
  } catch (error) {
    // Handling any errors and returning them as JSON response
    return NextResponse.json(error);
  }
}
