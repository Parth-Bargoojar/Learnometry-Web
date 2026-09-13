/**
 * Renders a JSON-LD @graph document into the page.
 *
 * Server-rendered so crawlers see it in the initial HTML. The payload is stringified and
 * `<` escaped so a stray sequence in the data can never close the script tag early.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\u003c"),
      }}
    />
  );
}
