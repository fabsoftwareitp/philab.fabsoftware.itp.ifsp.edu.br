"use strict";(()=>{var e={};e.id=718,e.ids=[718,660],e.modules={1323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},2981:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>x,default:()=>f,getServerSideProps:()=>m,getStaticPaths:()=>g,getStaticProps:()=>p,reportWebVitals:()=>b,routeModule:()=>S,unstable_getServerProps:()=>w,unstable_getServerSideProps:()=>j,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>P});var s=r(7093),n=r(5244),i=r(1323),o=r(5290),l=r.n(o),d=r(3802),c=r.n(d),u=r(90),h=e([u]);u=(h.then?(await h)():h)[0];let f=(0,i.l)(u,"default"),p=(0,i.l)(u,"getStaticProps"),g=(0,i.l)(u,"getStaticPaths"),m=(0,i.l)(u,"getServerSideProps"),x=(0,i.l)(u,"config"),b=(0,i.l)(u,"reportWebVitals"),P=(0,i.l)(u,"unstable_getStaticProps"),v=(0,i.l)(u,"unstable_getStaticPaths"),y=(0,i.l)(u,"unstable_getStaticParams"),w=(0,i.l)(u,"unstable_getServerProps"),j=(0,i.l)(u,"unstable_getServerSideProps"),S=new s.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/demo/blog/[filename]",pathname:"/demo/blog/[filename]",bundlePath:"",filename:""},components:{App:c(),Document:l()},userland:u});a()}catch(e){a(e)}})},3802:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let a=r(5577),s=r(997),n=a._(r(6689)),i=r(9903);async function o(e){let{Component:t,ctx:r}=e;return{pageProps:await (0,i.loadGetInitialProps)(t,r)}}class l extends n.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,s.jsx)(e,{...t})}}l.origGetInitialProps=o,l.getInitialProps=o,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},90:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>f,getStaticPaths:()=>h,getStaticProps:()=>u});var s=r(997),n=r(968),i=r.n(n),o=r(3081),l=r(3273),d=r(340),c=e([o,l,d]);[o,l,d]=c.then?(await c)():c;let u=async({params:e})=>{let t={},r={},a={relativePath:`${e.filename}.md`};try{let e=await d.ZP.queries.post(a);r=e.query,t=e.data,a=e.variables}catch{}return{props:{variables:a,data:t,query:r}}},h=async()=>({paths:(await d.ZP.queries.postConnection()).data.postConnection.edges.map(e=>({params:{filename:e.node._sys.filename}})),fallback:!1}),f=e=>{let{data:t}=(0,o.useTina)({query:e.query,variables:e.variables,data:e.data});return(0,s.jsxs)(s.Fragment,{children:[s.jsx(i(),{children:s.jsx("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.7/tailwind.min.css",integrity:"sha512-y6ZMKFUQrn+UUEVoqYe8ApScqbjuhjqzTuwUMEGMDuhS2niI8KA3vhH2LenreqJXQS+iIXVTRL2iaNfJbDNA1Q==",crossOrigin:"anonymous",referrerPolicy:"no-referrer"})}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{style:{textAlign:"center"},children:[s.jsx("h1",{className:"text-3xl m-8 text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl",children:t.post.title}),s.jsx(g,{content:t.post.body})]}),(0,s.jsxs)("div",{className:"bg-green-100 text-center",children:["Lost and looking for a place to start?",(0,s.jsxs)("a",{href:"https://tina.io/guides/tina-cloud/getting-started/overview/",className:"text-blue-500 underline",children:[" ","Check out this guide"]})," ","to see how add TinaCMS to an existing Next.js site."]})]})]})},p={PageSection:e=>(0,s.jsxs)(s.Fragment,{children:[s.jsx("h2",{children:e.heading}),s.jsx("p",{children:e.content})]})},g=({content:e})=>(0,s.jsxs)("div",{className:"relative py-16 bg-white overflow-hidden text-black",children:[s.jsx("div",{className:"hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full",children:(0,s.jsxs)("div",{className:"relative h-full text-lg max-w-prose mx-auto","aria-hidden":"true",children:[(0,s.jsxs)("svg",{className:"absolute top-12 left-full transform translate-x-32",width:404,height:384,fill:"none",viewBox:"0 0 404 384",children:[s.jsx("defs",{children:s.jsx("pattern",{id:"74b3fd99-0a6f-4271-bef2-e80eeafdf357",x:0,y:0,width:20,height:20,patternUnits:"userSpaceOnUse",children:s.jsx("rect",{x:0,y:0,width:4,height:4,className:"text-gray-200",fill:"currentColor"})})}),s.jsx("rect",{width:404,height:384,fill:"url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"})]}),(0,s.jsxs)("svg",{className:"absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32",width:404,height:384,fill:"none",viewBox:"0 0 404 384",children:[s.jsx("defs",{children:s.jsx("pattern",{id:"f210dbf6-a58d-4871-961e-36d5016a0f49",x:0,y:0,width:20,height:20,patternUnits:"userSpaceOnUse",children:s.jsx("rect",{x:0,y:0,width:4,height:4,className:"text-gray-200",fill:"currentColor"})})}),s.jsx("rect",{width:404,height:384,fill:"url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"})]}),(0,s.jsxs)("svg",{className:"absolute bottom-12 left-full transform translate-x-32",width:404,height:384,fill:"none",viewBox:"0 0 404 384",children:[s.jsx("defs",{children:s.jsx("pattern",{id:"d3eb07ae-5182-43e6-857d-35c643af9034",x:0,y:0,width:20,height:20,patternUnits:"userSpaceOnUse",children:s.jsx("rect",{x:0,y:0,width:4,height:4,className:"text-gray-200",fill:"currentColor"})})}),s.jsx("rect",{width:404,height:384,fill:"url(#d3eb07ae-5182-43e6-857d-35c643af9034)"})]})]})}),s.jsx("div",{className:"relative px-4 sm:px-6 lg:px-8",children:s.jsx("div",{className:"text-lg max-w-prose mx-auto",children:s.jsx(l.TinaMarkdown,{components:p,content:e})})})]});a()}catch(e){a(e)}})},340:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{ZP:()=>u});var s=r(2054),n=r(3620),i=r(2093),o=e([s,n,i]);async function l({query:e,variables:t,user:r}){return await (0,s.resolve)({config:{useRelativeMedia:!0},database:i.Z,query:e,variables:t,verbose:!0,ctxUser:r})}async function d({username:e,password:t}){return l({query:`query auth($username:String!, $password:String!) {
              authenticate(sub:$username, password:$password) {
               id:username name email _password: password { passwordChangeRequired }
              }
            }`,variables:{username:e,password:t}})}async function c(e){return l({query:"query authz { authorize { id:username name email _password: password { passwordChangeRequired }} }",variables:{},user:e})}[s,n,i]=o.then?(await o)():o;let u=function({queries:e}){let t=async({query:e,variables:t,user:r})=>{let a=await l({query:e,variables:t,user:r});return{data:a.data,query:e,variables:t,errors:a.errors||null}};return{queries:e({request:t}),request:t,authenticate:d,authorize:c}}({queries:n.o$});a()}catch(e){a(e)}})},3620:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{o$:()=>p});var s=r(5530),n=e([s]);function i(e,...t){let r="";return e.forEach((e,a)=>{r+=e+(t[a]||"")}),r}s=(n.then?(await n)():n)[0];let o=i`
    fragment UserParts on User {
  __typename
  users {
    __typename
    username
    name
    email
    password {
      value
      passwordChangeRequired
    }
  }
}
    `,l=i`
    fragment PostParts on Post {
  __typename
  title
  body
}
    `,d=i`
    query user($relativePath: String!) {
  user(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...UserParts
  }
}
    ${o}`,c=i`
    query userConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: UserFilter) {
  userConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...UserParts
      }
    }
  }
}
    ${o}`,u=i`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostParts
  }
}
    ${l}`,h=i`
    query postConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostFilter) {
  postConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostParts
      }
    }
  }
}
    ${l}`,f=e=>async(t,r,a)=>{let s=e.apiUrl;if(a?.branch){let t=e.apiUrl.lastIndexOf("/");s=e.apiUrl.substring(0,t+1)+a.branch}let n=await e.request({query:t,variables:r,url:s},a);return{data:n?.data,errors:n?.errors,query:t,variables:r||{}}},p=e=>{let t=f(e);return function(e){return{user:(t,r)=>e(d,t,r),userConnection:(t,r)=>e(c,t,r),post:(t,r)=>e(u,t,r),postConnection:(t,r)=>e(h,t,r)}}(t)};a()}catch(e){a(e)}})},2093:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>d});var s=r(2054),n=r(7277),i=r(8133),o=e([s]);s=(o.then?(await o)():o)[0];let l=process.env.GITHUB_BRANCH||process.env.VERCEL_GIT_COMMIT_REF||process.env.HEAD||"next",d="true"===process.env.TINA_PUBLIC_IS_LOCAL?(0,s.createLocalDatabase)():(0,s.createDatabase)({gitProvider:new n.GitHubProvider({branch:l,owner:process.env.GITHUB_OWNER,repo:process.env.GITHUB_REPO,token:process.env.GITHUB_PERSONAL_ACCESS_TOKEN}),databaseAdapter:new i.MongodbLevel({collectionName:"tinacms",dbName:"tinacms",mongoUri:process.env.MONGODB_URI}),namespace:l});a()}catch(e){a(e)}})},5244:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},8133:e=>{e.exports=require("mongodb-level")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},7277:e=>{e.exports=require("tinacms-gitprovider-github")},5315:e=>{e.exports=require("path")},2054:e=>{e.exports=import("@tinacms/datalayer")},5530:e=>{e.exports=import("tinacms/dist/client")},3081:e=>{e.exports=import("tinacms/dist/react")},3273:e=>{e.exports=import("tinacms/dist/rich-text")}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[290],()=>r(2981));module.exports=a})();