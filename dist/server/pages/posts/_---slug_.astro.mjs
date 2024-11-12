import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderSlot, e as createAstro, a as renderComponent } from '../../chunks/astro/server_BANiJAcv.mjs';
import 'kleur/colors';
import { a as getEntry } from '../../chunks/_astro_content_BGh2niKS.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$MarkdownPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1>${frontmatter.title}</h1> ${renderSlot($$result, $$slots["default"])}`;
}, "/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/layouts/MarkdownPostLayout.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const entry = await getEntry("posts", slug);
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "MarkdownPostLayout", $$MarkdownPostLayout, { "frontmatter": entry.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/pages/posts/[...slug].astro", void 0);

const $$file = "/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/pages/posts/[...slug].astro";
const $$url = "/posts/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
