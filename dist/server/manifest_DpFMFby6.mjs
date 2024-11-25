import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_C9eqlJZV.mjs';
import 'es-module-lexer';
import { i as decodeKey } from './chunks/astro/server_-SSQX_S1.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/","adapterName":"@astrojs/node","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/keystatic/[...params]","pattern":"^\\/api\\/keystatic(?:\\/(.*?))?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-api.js","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","isIndex":false,"route":"/keystatic/[...params]","pattern":"^\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-astro-page.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-api@_@js":"pages/api/keystatic/_---params_.astro.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-astro-page@_@astro":"pages/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_DpFMFby6.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/disciplinas/curso-de-graduacao-em-engenharia-mecanica.md?astroContentCollectionEntry=true":"chunks/curso-de-graduacao-em-engenharia-mecanica_MyvgQ_EZ.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/disciplinas/curso-tecnico-em-eletromecanica-integrado-ao-ensino-medio.md?astroContentCollectionEntry=true":"chunks/curso-tecnico-em-eletromecanica-integrado-ao-ensino-medio_Dh8wsywK.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/disciplinas/curso-tecnico-em-eletromecanica.md?astroContentCollectionEntry=true":"chunks/curso-tecnico-em-eletromecanica_BvRnAhFV.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/disciplinas/curso-tecnico-em-mecanica.md?astroContentCollectionEntry=true":"chunks/curso-tecnico-em-mecanica_DVDXyvOc.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/pagInicial/pagina-inicial.md?astroContentCollectionEntry=true":"chunks/pagina-inicial_BotIQc2Y.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/professores/cristhiano-da-costa.md?astroContentCollectionEntry=true":"chunks/cristhiano-da-costa_DnnCMYvx.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/professores/francisco-mateus.md?astroContentCollectionEntry=true":"chunks/francisco-mateus_CErgA9_X.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/professores/rafael-dos-santos.md?astroContentCollectionEntry=true":"chunks/rafael-dos-santos_IWdrdvXO.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/disciplinas/curso-de-graduacao-em-engenharia-mecanica.md?astroPropagatedAssets":"chunks/curso-de-graduacao-em-engenharia-mecanica_DKvFjqJ_.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/disciplinas/curso-tecnico-em-eletromecanica-integrado-ao-ensino-medio.md?astroPropagatedAssets":"chunks/curso-tecnico-em-eletromecanica-integrado-ao-ensino-medio_mdSF055O.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/disciplinas/curso-tecnico-em-eletromecanica.md?astroPropagatedAssets":"chunks/curso-tecnico-em-eletromecanica_OyMoG8r1.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/disciplinas/curso-tecnico-em-mecanica.md?astroPropagatedAssets":"chunks/curso-tecnico-em-mecanica_DcuizYAm.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/pagInicial/pagina-inicial.md?astroPropagatedAssets":"chunks/pagina-inicial_13wixSlP.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/professores/cristhiano-da-costa.md?astroPropagatedAssets":"chunks/cristhiano-da-costa_BCYRFco-.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/professores/francisco-mateus.md?astroPropagatedAssets":"chunks/francisco-mateus_CnKOOG8I.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/professores/rafael-dos-santos.md?astroPropagatedAssets":"chunks/rafael-dos-santos_Qr7_bC9P.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/disciplinas/curso-de-graduacao-em-engenharia-mecanica.md":"chunks/curso-de-graduacao-em-engenharia-mecanica_CV8Sw_c-.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/disciplinas/curso-tecnico-em-eletromecanica-integrado-ao-ensino-medio.md":"chunks/curso-tecnico-em-eletromecanica-integrado-ao-ensino-medio_qhH6OzR2.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/disciplinas/curso-tecnico-em-eletromecanica.md":"chunks/curso-tecnico-em-eletromecanica_BV495Sp8.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/disciplinas/curso-tecnico-em-mecanica.md":"chunks/curso-tecnico-em-mecanica_C6QfoJ3q.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/pagInicial/pagina-inicial.md":"chunks/pagina-inicial_D2aBCBTq.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/professores/cristhiano-da-costa.md":"chunks/cristhiano-da-costa_B0UYGsUe.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/professores/francisco-mateus.md":"chunks/francisco-mateus_CO_1uZxp.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/professores/rafael-dos-santos.md":"chunks/rafael-dos-santos_ruZR4MbR.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/node_modules/@keystatic/astro/internal/keystatic-page.js":"_astro/keystatic-page.D_flqft3.js","@astrojs/react/client.js":"_astro/client.ib7v9FQf.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/client.ib7v9FQf.js","/_astro/index.6UxExMu4.js","/_astro/keystatic-page.D_flqft3.js","/bancadaCH/3A.jpeg","/bancadaCH/3B.jpeg","/bancadaCH/3C.jpeg","/bancadaCP/2A.jpeg","/bancadaCP/2B.jpeg","/bancadaCP/2C.jpeg","/bancadaMF/4A.jpeg","/bancadaMF/4B.jpeg","/bancadaMF/4C.jpeg","/fundos/1A.jpeg","/fundos/1B.jpeg","/fundos/1C.jpeg","/fundos/2H.jpeg","/fundos/3A.jpeg","/fundos/4B.jpeg","/fundos/fabrica.png","/fundos/fundoInicial.png","/fundos/logo-claro.svg","/fundos/logo-if.png","/fundos/print.png","/profs/5.jpeg","/profs/6.jpeg","/profs/lontra.jpg","/styles/style.css","/images/pagInicial/pagina-inicial/img1.jpeg","/images/pagInicial/pagina-inicial/img2.jpeg","/images/pagInicial/pagina-inicial/img3.jpeg","/images/posts/hello-world/image.svg","/images/posts/hello-world/image2.svg","/images/professores/cristhiano-da-costa/avatar.jpeg","/images/professores/francisco-mateus/avatar.jpg","/images/professores/rafael-dos-santos/avatar.jpeg","/images/pagInicial/pagina-inicial/imagensSobre/0.jpeg","/images/pagInicial/pagina-inicial/imagensSobre/1.jpeg","/images/pagInicial/pagina-inicial/imagensSobre/2.jpeg","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"RkJtziwmX6270Naech5FsBrg6VUNY/sG5kTABt7vjwY=","experimentalEnvGetSecretEnabled":false});

export { manifest };