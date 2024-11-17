import { sanityClient as client } from "sanity:client";

export const prerender = false;

export async function GET({ params }: { params: { title: string } }) {
  const { title } = params;

  try {
    const decodedTitle = decodeURIComponent(title);

    const result = await client.fetch(
      `*[_type == "carCover" && title match $title]`,
      { title: `"${decodedTitle}"` }
    );

    if (!result.length) {
      return new Response(JSON.stringify({ error: "Cover not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
