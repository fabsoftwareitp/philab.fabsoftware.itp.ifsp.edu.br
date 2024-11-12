import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CqLI6kVS.mjs';
import 'es-module-lexer';
import { j as decodeKey } from './chunks/astro/server_BANiJAcv.mjs';
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

const manifest = deserializeManifest({"hrefRoot":"file:///home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/","adapterName":"@astrojs/node","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/keystatic/[...params]","pattern":"^\\/api\\/keystatic(?:\\/(.*?))?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-api.js","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","isIndex":false,"route":"/keystatic/[...params]","pattern":"^\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-astro-page.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts","isIndex":true,"type":"page","pattern":"^\\/posts\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/index.astro","pathname":"/posts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/[...slug]","isIndex":false,"type":"page","pattern":"^\\/posts(?:\\/(.*?))?\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/posts/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/pages/index.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/pages/posts/[...slug].astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/posts/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/pages/posts/index.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/posts/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/node_modules/@astrojs/markdoc/components/Renderer.astro",{"propagation":"in-tree","containsHead":false}],["/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/node_modules/@astrojs/markdoc/components/index.ts",{"propagation":"in-tree","containsHead":false}],["/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/posts/asdaas.mdoc",{"propagation":"in-tree","containsHead":false}],["/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/posts/asdaas.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/posts/hello-world.mdoc",{"propagation":"in-tree","containsHead":false}],["/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/posts/hello-world.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-api@_@js":"pages/api/keystatic/_---params_.astro.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-astro-page@_@astro":"pages/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/posts/index@_@astro":"pages/posts.astro.mjs","\u0000@astro-page:src/pages/posts/[...slug]@_@astro":"pages/posts/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_DA46yFVW.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/posts/asdaas.mdoc?astroContentCollectionEntry=true":"chunks/asdaas_CgpUHeDO.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/posts/hello-world.mdoc?astroContentCollectionEntry=true":"chunks/hello-world_B7HJd6yp.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/posts/asdaas.mdoc?astroPropagatedAssets":"chunks/asdaas_k3ljyNt7.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/posts/hello-world.mdoc?astroPropagatedAssets":"chunks/hello-world_CIVOIF4b.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/posts/asdaas.mdoc":"chunks/asdaas_Ite5HiAR.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/src/content/posts/hello-world.mdoc":"chunks/hello-world_qboda7Nh.mjs","/home/leo/tina/philab.fabsoftware.itp.ifsp.edu.br/node_modules/@keystatic/astro/internal/keystatic-page.js":"_astro/keystatic-page.CooIs8DE.js","@astrojs/react/client.js":"_astro/client.ib7v9FQf.js","/astro/hoisted.js?q=0":"_astro/hoisted.TC6a112T.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/client.ib7v9FQf.js","/_astro/index.6UxExMu4.js","/_astro/keystatic-page.CooIs8DE.js","/bancadaCH/3A.jpeg","/bancadaCH/3B.jpeg","/bancadaCH/3C.jpeg","/bancadaCP/2A.jpeg","/bancadaCP/2B.jpeg","/bancadaCP/2C.jpeg","/bancadaMF/4A.jpeg","/bancadaMF/4B.jpeg","/bancadaMF/4C.jpeg","/fundos/1A.jpeg","/fundos/1B.jpeg","/fundos/1C.jpeg","/fundos/2H.jpeg","/fundos/3A.jpeg","/fundos/4B.jpeg","/fundos/fabrica.png","/fundos/fundoInicial.png","/fundos/logo-if.png","/fundos/print.png","/profs/5.jpeg","/profs/6.jpeg","/profs/lontra.jpg","/styles/style.css","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"DAt1vSk5+9Fvk2agGk8JZBLhBFUVUDnYYWt+LWbmbNw=","experimentalEnvGetSecretEnabled":false});

export { manifest };
