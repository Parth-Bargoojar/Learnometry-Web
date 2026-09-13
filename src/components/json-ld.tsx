/**
 * Renders a JSON-LD @graph document into the page.
 *
 * Server-rendered so crawlers see it in the initial HTML.
 *
 * Every `<` in the payload is rewritten to the six-character JSON escape sequence
 * (backslash-u-0-0-3-c), so a `</script>` appearing anywhere in the data cannot close
 * the tag early. The escape is transparent to consumers: a JSON parser decodes it back
 * to `<`, so the data round-trips unchanged.
 *
 * The replacement string must contain a literal backslash. Writing a single-backslash
 * "<" in TypeScript source would be the `<` character itself, making the whole
 * replace a silent no-op — which is exactly the bug this line used to have.
 */
const SCRIPT_SAFE_LT = String.fromCharCode(92) + "u003c";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, SCRIPT_SAFE_LT),
      }}
    />
  );
}
