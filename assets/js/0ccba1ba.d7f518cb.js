"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[2654],{46062:(t,e,n)=>{n.d(e,{A:()=>r});n(96540);var a=n(74848);function r(t){function e(){return e=t.id?t.id:(e=(e=(e=t.caption).replaceAll("."," ")).replaceAll(" ","-")).toLowerCase()}return(0,a.jsxs)("figure",{id:e(),align:t.align?t.align:"center",style:t.style?t.style:{},children:[t.children,t.src?(0,a.jsx)("img",{src:t.src,alt:t.alt}):(0,a.jsx)(a.Fragment,{}),(0,a.jsx)("figcaption",{align:t.align?t.align:"center",style:{fontWeight:"bold"},children:t.caption}),(0,a.jsx)("figcaption",{align:t.align?t.align:"center",style:{},children:t.subcaption})]})}},29657:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"behavioral-patterns/strategy","title":"Strategy Pattern","description":"Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.","source":"@site/design-patterns/behavioral-patterns/strategy.mdx","sourceDirName":"behavioral-patterns","slug":"/behavioral-patterns/strategy","permalink":"/design-patterns/behavioral-patterns/strategy","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Behavioral Design Patterns","permalink":"/design-patterns/category/behavioral-design-patterns"},"next":{"title":"Structural Design Patterns","permalink":"/design-patterns/category/structural-design-patterns"}}');var r=n(74848),s=n(28453),i=n(46062);const o={},l="Strategy Pattern",c={},h=[{value:"Slides",id:"slides",level:2},{value:"Step by Step Implementation",id:"step-by-step-implementation",level:2}];function d(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"strategy-pattern",children:"Strategy Pattern"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Strategy"})," is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://refactoring.guru/design-patterns/strategy",children:"~ Refactoring Guru"})}),"\n"]}),"\n",(0,r.jsx)(i.A,{caption:"Strategy Pattern UML Class Diagram",children:(0,r.jsx)(e.mermaid,{value:'classDiagram\ndirection RL\nclass Context {\n- strategy\n+ setStrategy(strategy)\n+ doSomething()\n}\nnote for Context "strategy.execute()"\nContext <-- Client\nnote for Client "str = new SomeStrategy()\ncontext.setStrategy(str)\ncontext.doSomething()\n\n// \u2026 More stuff happens\u2026\n\nother = new OtherStrategy()\ncontext.setStrategy(other)\ncontext.doSomething()"\n\nContext o--\x3e Strategy\n\nclass Strategy {\n<<interface>>\n+execute(data)\n}\n\nStrategy <|.. ConcreteStrategies\nConcreteStrategies <.. Client'})}),"\n",(0,r.jsx)(e.p,{children:"The Strategy design pattern allows for the creation of a family of algorithms, each encapsulated in a separate class, making them interchangeable. This pattern is useful when a class has multiple ways of performing a task, as it allows for the extraction of these algorithms into separate classes, reducing code bloat and improving maintainability. The context class delegates work to a linked strategy object, abstracting away the specific implementation details."}),"\n",(0,r.jsx)(e.p,{children:"The Strategy pattern allows for the interchangeable use of different algorithms within an object at runtime. It enables the isolation of algorithm implementation details from the code that uses them. The pattern is useful when there are multiple similar classes that differ only in their execution behavior."}),"\n",(0,r.jsx)(e.h2,{id:"slides",children:"Slides"}),"\n",(0,r.jsx)(i.A,{caption:"Strategy Pattern",subcaption:(0,r.jsx)(e.a,{href:"/slides-html/Strategy-Pattern/#0",target:"_blank",rel:"noopener noreferrer",children:"full screen click here"}),children:(0,r.jsx)("iframe",{height:"500",width:"100%",src:"/slides-html/Strategy-Pattern/#0",title:"W3Schools Free Online Web Tutorials"})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"step-by-step-implementation",children:"Step by Step Implementation"}),"\n",(0,r.jsx)(e.p,{children:"Let\u2019s use the Strategy Pattern to create a system that calculates discounts in a shopping cart. Different discount algorithms (e.g., percentage discount, fixed amount discount, or no discount) will act as interchangeable strategies. The steps follow your instructions."}),"\n",(0,r.jsx)("table",{children:(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("div",{className:"",children:(0,r.jsx)("iframe",{height:"651px",width:"294px",src:"/slides-html/Strategy-Pattern-Implementation/#0",title:"W3Schools Free Online Web Tutorials"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",metastring:"live",live:!0,children:'function StrategyDemo() {\n    class ShoppingCart {\n        constructor() {\n            this.totalAmount = 0;\n            this.discountAlgorithm = null; // Placeholder for strategy\n        }\n\n        setDiscountAlgorithm(discountAlgorithm) {\n            this.discountAlgorithm = discountAlgorithm;\n        }\n\n        calculateTotal() {\n            if (!this.discountAlgorithm) {\n                throw new Error("No discount algorithm set!");\n            }\n            return this.discountAlgorithm.calculate(this.totalAmount);\n        }\n\n        addItem(price) {\n            this.totalAmount += price;\n        }\n    }\n\n    return <div>Step 1: Context class ShoppingCart defined with discount algorithm placeholder.</div>;\n}\n'})})})]})})})]})}function g(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>o});var a=n(96540);const r={},s=a.createContext(r);function i(t){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),a.createElement(s.Provider,{value:e},t.children)}}}]);