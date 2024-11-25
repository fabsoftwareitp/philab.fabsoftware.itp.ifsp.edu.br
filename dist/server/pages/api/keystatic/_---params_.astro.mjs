import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { parseString } from 'set-cookie-parser';
import { jsx } from 'react/jsx-runtime';
import { config as config$1, collection, fields } from '@keystatic/core';
export { renderers } from '../../../renderers.mjs';

function makeHandler(_config) {
  return async function keystaticAPIRoute(context) {
    var _context$locals, _ref, _config$clientId, _ref2, _config$clientSecret, _ref3, _config$secret;
    const envVarsForCf = (_context$locals = context.locals) === null || _context$locals === void 0 || (_context$locals = _context$locals.runtime) === null || _context$locals === void 0 ? void 0 : _context$locals.env;
    const handler = makeGenericAPIRouteHandler({
      ..._config,
      clientId: (_ref = (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_ID) !== null && _ref !== void 0 ? _ref : tryOrUndefined(() => {
        return undefined                                          ;
      }),
      clientSecret: (_ref2 = (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_SECRET) !== null && _ref2 !== void 0 ? _ref2 : tryOrUndefined(() => {
        return undefined                                              ;
      }),
      secret: (_ref3 = (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_SECRET) !== null && _ref3 !== void 0 ? _ref3 : tryOrUndefined(() => {
        return undefined                                ;
      })
    }, {
      slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG"
    });
    const {
      body,
      headers,
      status
    } = await handler(context.request);
    let headersInADifferentStructure = /* @__PURE__ */ new Map();
    if (headers) {
      if (Array.isArray(headers)) {
        for (const [key, value] of headers) {
          if (!headersInADifferentStructure.has(key.toLowerCase())) {
            headersInADifferentStructure.set(key.toLowerCase(), []);
          }
          headersInADifferentStructure.get(key.toLowerCase()).push(value);
        }
      } else if (typeof headers.entries === "function") {
        for (const [key, value] of headers.entries()) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
        if ("getSetCookie" in headers && typeof headers.getSetCookie === "function") {
          const setCookieHeaders2 = headers.getSetCookie();
          if (setCookieHeaders2 !== null && setCookieHeaders2 !== void 0 && setCookieHeaders2.length) {
            headersInADifferentStructure.set("set-cookie", setCookieHeaders2);
          }
        }
      } else {
        for (const [key, value] of Object.entries(headers)) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
      }
    }
    const setCookieHeaders = headersInADifferentStructure.get("set-cookie");
    headersInADifferentStructure.delete("set-cookie");
    if (setCookieHeaders) {
      for (const setCookieValue of setCookieHeaders) {
        var _options$sameSite;
        const {
          name,
          value,
          ...options
        } = parseString(setCookieValue);
        const sameSite = (_options$sameSite = options.sameSite) === null || _options$sameSite === void 0 ? void 0 : _options$sameSite.toLowerCase();
        context.cookies.set(name, value, {
          domain: options.domain,
          expires: options.expires,
          httpOnly: options.httpOnly,
          maxAge: options.maxAge,
          path: options.path,
          sameSite: sameSite === "lax" || sameSite === "strict" || sameSite === "none" ? sameSite : void 0
        });
      }
    }
    return new Response(body, {
      status,
      headers: [...headersInADifferentStructure.entries()].flatMap(([key, val]) => val.map((x) => [key, x]))
    });
  };
}
function tryOrUndefined(fn) {
  try {
    return fn();
  } catch {
    return void 0;
  }
}

const config = config$1({
  storage: {
    kind: "local"
    // kind: 'github',
    // repo: {
    //   owner: 'fabsoftwareitp',
    //   name: 'philab.fabsoftware.itp.ifsp.edu.br' 
    // }  
  },
  collections: {
    professores: collection({
      label: "Professores",
      slugField: "title",
      path: "src/content/professores/*",
      format: { contentField: "emptyContent" },
      schema: {
        emptyContent: fields.emptyContent({ extension: "md" }),
        title: fields.slug({ name: { label: "Nome" } }),
        cargo: fields.text({
          label: "Cargo"
        }),
        nomeCompleto: fields.text({
          label: "Nome completo"
        }),
        curriculo: fields.url({
          label: "Curriculum Lattes"
        }),
        contato: fields.text({
          label: "Contato"
        }),
        avatar: fields.image({
          label: "Avatar",
          directory: "public/images/professores",
          publicPath: "/images/professores/"
        })
      }
    }),
    paginaInicial: collection({
      label: "Página inicial",
      slugField: "title",
      path: "src/content/pagInicial/*",
      format: { contentField: "emptyContent" },
      schema: {
        emptyContent: fields.emptyContent({ extension: "md" }),
        title: fields.slug({ name: { label: "Nome" } }),
        sobre: fields.text({
          label: "Sobre o lab",
          multiline: true
        }),
        img1: fields.image({
          label: "Imagem 1",
          directory: "public/images/pagInicial",
          publicPath: "/images/pagInicial/"
        }),
        img2: fields.image({
          label: "Imagem 2",
          directory: "public/images/pagInicial",
          publicPath: "/images/pagInicial/"
        }),
        img3: fields.image({
          label: "Imagem 3",
          directory: "public/images/pagInicial",
          publicPath: "/images/pagInicial/"
        }),
        sobreProf: fields.text({
          label: "Descrição professores",
          multiline: true
        })
      }
    }),
    disciplinas: collection({
      label: "Disciplinas",
      slugField: "title",
      path: "src/content/disciplinas/*",
      format: { contentField: "emptyContent" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        emptyContent: fields.emptyContent({ extension: "md" }),
        curso: fields.text({
          label: "Curso"
        }),
        disciplinas: fields.array(
          fields.object({
            disciplina: fields.text({ label: "Disciplina" }),
            descricao: fields.text({ label: "Descrição", multiline: true }),
            link: fields.url({
              label: "link"
            })
          }),
          // Labelling options
          {
            label: "Disciplina",
            itemLabel: (props) => props.fields.disciplina.value
          }
        )
      }
    })
  },
  ui: {
    brand: {
      name: "Philab",
      mark: ({ colorScheme }) => {
        let path = colorScheme === "dark" ? "/fundos/logo-claro.svg" : "/fundos/logo-claro.svg";
        return /* @__PURE__ */ jsx("img", { src: path, height: 24 });
      }
    }
  }
});

const all = makeHandler({ config });
const ALL = all;

const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL,
  all,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
