"use strict";(self.webpackChunk_freecodecamp_ui=self.webpackChunk_freecodecamp_ui||[]).push([[540],{"./src/link/link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Block:()=>Block,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>link_stories});var react=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");const Link=react.forwardRef(((_ref,ref)=>{let{children,to,target,block}=_ref;const classes=(0,react.useMemo)((()=>{const cls=["text-foreground-primary","text-center","hover:no-underline","hover:bg-background-tertiary"];return block&&cls.push("block","w-full"),cls.join(" ")}),[block]);return react.createElement("a",{className:classes,href:to,target,ref,rel:"noopener noreferrer"},children)}));Link.displayName="Link";try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{block:{defaultValue:null,description:"",name:"block",required:!1,type:{name:"boolean | undefined"}},to:{defaultValue:null,description:"",name:"to",required:!1,type:{name:"string | undefined"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/link/link.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/link/link.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}const Default={args:{children:"Go to freeCodeCamp",to:"https://www.freecodecamp.org"}},Block={args:{children:"Go to freeCodeCamp",to:"https://www.freecodecamp.org",block:!0}},link_stories={title:"Example/Link",component:Link};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Go to freeCodeCamp",\n    to: "https://www.freecodecamp.org"\n  }\n}',...Default.parameters?.docs?.source}}},Block.parameters={...Block.parameters,docs:{...Block.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Go to freeCodeCamp",\n    to: "https://www.freecodecamp.org",\n    block: true\n  }\n}',...Block.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Block"]}}]);