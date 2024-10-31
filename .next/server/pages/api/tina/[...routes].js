"use strict";(()=>{var e={};e.id=103,e.ids=[103],e.modules={8133:e=>{e.exports=require("mongodb-level")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},3243:e=>{e.exports=require("tinacms-authjs")},7277:e=>{e.exports=require("tinacms-gitprovider-github")},2054:e=>{e.exports=import("@tinacms/datalayer")},5530:e=>{e.exports=import("tinacms/dist/client")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},4977:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>c,default:()=>l,routeModule:()=>d});var s=r(1802),n=r(7153),o=r(6249),i=r(2594),u=e([i]);i=(u.then?(await u)():u)[0];let l=(0,o.l)(i,"default"),c=(0,o.l)(i,"config"),d=new s.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/tina/[...routes]",pathname:"/api/tina/[...routes]",bundlePath:"",filename:""},userland:i});a()}catch(e){a(e)}})},2594:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>c});var s=r(2054),n=r(3243),o=r(6639),i=e([s,o]);[s,o]=i.then?(await i)():i;let u="true"===process.env.TINA_PUBLIC_IS_LOCAL,l=(0,s.TinaNodeBackend)({authProvider:u?(0,s.LocalBackendAuthProvider)():(0,n.AuthJsBackendAuthProvider)({authOptions:(0,n.TinaAuthJSOptions)({databaseClient:o.ZP,secret:process.env.NEXTAUTH_SECRET})}),databaseClient:o.ZP}),c=(e,t)=>l(e,t);a()}catch(e){a(e)}})},6639:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{ZP:()=>d});var s=r(2054),n=r(9930),o=r(1710),i=e([s,n,o]);async function u({query:e,variables:t,user:r}){return await (0,s.resolve)({config:{useRelativeMedia:!0},database:o.Z,query:e,variables:t,verbose:!0,ctxUser:r})}async function l({username:e,password:t}){return u({query:`query auth($username:String!, $password:String!) {
              authenticate(sub:$username, password:$password) {
               id:username name email _password: password { passwordChangeRequired }
              }
            }`,variables:{username:e,password:t}})}async function c(e){return u({query:"query authz { authorize { id:username name email _password: password { passwordChangeRequired }} }",variables:{},user:e})}[s,n,o]=i.then?(await i)():i;let d=function({queries:e}){let t=async({query:e,variables:t,user:r})=>{let a=await u({query:e,variables:t,user:r});return{data:a.data,query:e,variables:t,errors:a.errors||null}};return{queries:e({request:t}),request:t,authenticate:l,authorize:c}}({queries:n.o$});a()}catch(e){a(e)}})},9930:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{o$:()=>f});var s=r(5530),n=e([s]);function o(e,...t){let r="";return e.forEach((e,a)=>{r+=e+(t[a]||"")}),r}s=(n.then?(await n)():n)[0];let i=o`
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
    `,u=o`
    fragment PostParts on Post {
  __typename
  title
  body
}
    `,l=o`
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
    ${i}`,c=o`
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
    ${i}`,d=o`
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
    ${u}`,p=o`
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
    ${u}`,P=e=>async(t,r,a)=>{let s=e.apiUrl;if(a?.branch){let t=e.apiUrl.lastIndexOf("/");s=e.apiUrl.substring(0,t+1)+a.branch}let n=await e.request({query:t,variables:r,url:s},a);return{data:n?.data,errors:n?.errors,query:t,variables:r||{}}},f=e=>{let t=P(e);return function(e){return{user:(t,r)=>e(l,t,r),userConnection:(t,r)=>e(c,t,r),post:(t,r)=>e(d,t,r),postConnection:(t,r)=>e(p,t,r)}}(t)};a()}catch(e){a(e)}})},1710:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>l});var s=r(2054),n=r(7277),o=r(8133),i=e([s]);s=(i.then?(await i)():i)[0];let u=process.env.GITHUB_BRANCH||process.env.VERCEL_GIT_COMMIT_REF||process.env.HEAD||"next",l="true"===process.env.TINA_PUBLIC_IS_LOCAL?(0,s.createLocalDatabase)():(0,s.createDatabase)({gitProvider:new n.GitHubProvider({branch:u,owner:process.env.GITHUB_OWNER,repo:process.env.GITHUB_REPO,token:process.env.GITHUB_PERSONAL_ACCESS_TOKEN}),databaseAdapter:new o.MongodbLevel({collectionName:"tinacms",dbName:"tinacms",mongoUri:process.env.MONGODB_URI}),namespace:u});a()}catch(e){a(e)}})},7153:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1802:(e,t,r)=>{e.exports=r(145)}};var t=require("../../../webpack-api-runtime.js");t.C(e);var r=t(t.s=4977);module.exports=r})();