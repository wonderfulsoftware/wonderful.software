import 'littlefoot/dist/littlefoot.css'
import './InteractiveFootnotes.css'
let latest

export async function setupInteractiveFootnotes() {
  // littlefoot requires a DOM to initialize; it will crash when prerendering
  const { default: littlefoot } = await import('littlefoot/dist/littlefoot')

  if (latest) {
    latest.unmount()
  }
  latest = littlefoot({
    buttonTemplate: `<button
  aria-expanded="false"
  aria-label="Footnote <% number %>"
  class="littlefoot__button"
  id="<% reference %>"
  title="See Footnote <% number %>"
/>
  <% number %>
</button>`
  })
}