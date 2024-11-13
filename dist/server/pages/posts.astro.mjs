import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BANiJAcv.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_DAN-jREV.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("posts");
  return renderTemplate`${maybeRenderHead()}<ul> ${posts.map((post) => renderTemplate`<li> <a${addAttribute(`/posts/${post.slug}`, "href")}>${post.data.title}</a> </li>`)} </ul>`;
}, "/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/pages/posts/index.astro", void 0);

const $$file = "/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/pages/posts/index.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
