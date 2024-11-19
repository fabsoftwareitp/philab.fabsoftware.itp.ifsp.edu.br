import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_9jjUVFrS.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"image":"/images/posts/hello-world/image.svg","title":"Hello World!"};
				const file = "/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/posts/hello-world.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
