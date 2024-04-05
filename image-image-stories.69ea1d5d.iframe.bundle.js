"use strict";(self.webpackChunk_freecodecamp_ui=self.webpackChunk_freecodecamp_ui||[]).push([[150],{"./src/image/image.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Responsive:()=>Responsive,__namedExportsOrder:()=>__namedExportsOrder,default:()=>image_stories});var react=__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Image=react.forwardRef(((_ref,ref)=>{let{alt,src,responsive,className,...props}=_ref;const classes=responsive?[className,"block max-w-full h-auto"].join(" "):className;return react.createElement("img",_extends({ref,alt,src,className:classes},props))}));Image.displayName="Image";try{Image.displayName="Image",Image.__docgenInfo={description:"",displayName:"Image",props:{alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},responsive:{defaultValue:null,description:"Whether the image should be resized and contained within its parent.",name:"responsive",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/image/image.tsx#Image"]={docgenInfo:Image.__docgenInfo,name:"Image",path:"src/image/image.tsx#Image"})}catch(__react_docgen_typescript_loader_error){}const Default={args:{alt:"camper's avatar",src:"https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png",responsive:!1}},Responsive={args:{alt:"camper's avatar",src:"https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png",responsive:!0}},image_stories={title:"Example/Image",component:Image,argTypes:{responsive:{control:{type:"boolean"}}},decorators:[Story=>react.createElement("div",{style:{width:"100px",height:"100px"}},Story())]};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    alt: "camper\'s avatar",\n    src: "https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png",\n    responsive: false\n  }\n}',...Default.parameters?.docs?.source}}},Responsive.parameters={...Responsive.parameters,docs:{...Responsive.parameters?.docs,source:{originalSource:'{\n  args: {\n    alt: "camper\'s avatar",\n    src: "https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png",\n    responsive: true\n  }\n}',...Responsive.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Responsive"]}}]);