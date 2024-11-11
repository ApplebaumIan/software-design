"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[9728],{46062:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(74848);function a(e){function t(){return t=e.id?e.id:(t=(t=(t=e.caption).replaceAll("."," ")).replaceAll(" ","-")).toLowerCase()}return(0,r.jsxs)("figure",{id:t(),align:e.align?e.align:"center",style:e.style?e.style:{},children:[e.children,e.src?(0,r.jsx)("img",{src:e.src,alt:e.alt}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)("figcaption",{align:e.align?e.align:"center",style:{fontWeight:"bold"},children:e.caption}),(0,r.jsx)("figcaption",{align:e.align?e.align:"center",style:{},children:e.subcaption})]})}},76893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"creational-patterns/factory-pattern","title":"Factory Pattern","description":"Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.","source":"@site/design-patterns/creational-patterns/factory-pattern.mdx","sourceDirName":"creational-patterns","slug":"/creational-patterns/factory-pattern","permalink":"/design-patterns/creational-patterns/factory-pattern","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Creational Design Patterns","permalink":"/design-patterns/category/creational-design-patterns"}}');var a=n(74848),s=n(28453),o=n(46062);const i={},c="Factory Pattern",l={},d=[{value:"Slides",id:"slides",level:2},{value:"Step by Step Implementation",id:"step-by-step-implementation",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"factory-pattern",children:"Factory Pattern"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Factory Method"})," is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://refactoring.guru/design-patterns/factory-method",children:"~ Refactoring Guru"})}),"\n"]}),"\n",(0,a.jsx)(o.A,{caption:"Factory Pattern UML Class Diagram",children:(0,a.jsx)(t.mermaid,{value:"classDiagram\nclass Creator{\n    + someOperation()\n    + createProduct() Product\n}\n\nclass Product{\n    << interface >>\n    + doStuff()\n}\n\nProduct <.. Creator : creates\nclass ConcreteCreatorA {\n    + createProduct() Product\n}\n\nclass ConcreteCreatorB {\n    + createProduct() Product\n}\nCreator <|-- ConcreteCreatorA\nCreator <|-- ConcreteCreatorB\nProduct <|.. ConcreteProductA\nProduct <|.. ConcreteProductB"})}),"\n",(0,a.jsx)(t.p,{children:"The Factory Method pattern allows subclasses to alter the type of objects created by a superclass, promoting flexibility and decoupling. It involves a creator class with a factory method that returns products, which must follow a common interface. Concrete creators override the factory method to return different product types, enabling the client code to treat all products interchangeably."}),"\n",(0,a.jsx)(t.p,{children:"The Factory Method pattern creates objects through a factory method, allowing for loose coupling and easy extension. It enables the creation of new product types without modifying existing client code. The pattern can be used to reuse existing objects, saving system resources."}),"\n",(0,a.jsx)(t.p,{children:"Prototype avoids inheritance drawbacks but requires complex initialization, while Factory Method, a Template Method specialization, eliminates initialization."}),"\n",(0,a.jsx)(t.h2,{id:"slides",children:"Slides"}),"\n",(0,a.jsx)(o.A,{caption:"Factory Pattern",subcaption:(0,a.jsx)(t.a,{href:"/slides-html/Factory-Pattern/#0",target:"_blank",rel:"noopener noreferrer",children:"full screen click here"}),children:(0,a.jsx)("iframe",{height:"500",width:"100%",src:"/slides-html/Factory-Pattern/#0",title:"W3Schools Free Online Web Tutorials"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"step-by-step-implementation",children:"Step by Step Implementation"}),"\n",(0,a.jsx)(t.p,{children:"In this tutorial, we\u2019ll use the Factory Method pattern to create different types of buttons based on themes (e.g., round and square buttons). Each button follows the same interface to ensure they share a common structure, but each type has its own unique style."}),"\n",(0,a.jsxs)(t.p,{children:["Let\u2019s begin by creating a ",(0,a.jsx)(t.code,{children:"Button"})," interface with methods that all button types should implement. This will serve as our base interface."]}),"\n",(0,a.jsx)("table",{children:(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("div",{className:"",children:(0,a.jsx)("iframe",{height:"651px",width:"294px",src:"/slides-html/Factory-Pattern-Implementation/#0",title:"W3Schools Free Online Web Tutorials"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:"    function ButtonDemo() {\n    // Button interface with a render method\n        class Button {\n            render() {\n                throw new Error(\"Method 'render()' must be implemented.\");\n            }\n        }\n    // Testing the interface\n    const button = new Button();\n    return <div>{button.render()}</div>; // This should throw an error since render isn't implemented.\n}\n"})})})]})})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);