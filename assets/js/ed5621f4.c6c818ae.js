"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[1584],{88902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"development-plan/Intro","title":"Software Development Plan","description":"Purpose","source":"@site/docs/development-plan/Intro.md","sourceDirName":"development-plan","slug":"/development-plan/Intro","permalink":"/docs/development-plan/Intro","draft":false,"unlisted":false,"editUrl":"https://github.com/undefined/software-design/edit/main/documentation/docs/development-plan/Intro.md","tags":[],"version":"current","lastUpdatedBy":"Ian Applebaum","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Use-case descriptions","permalink":"/docs/requirements/use-case-descriptions"},"next":{"title":"Activities","permalink":"/docs/development-plan/activities"}}');var a=n(74848),r=n(28453);const i={},o="Software Development Plan",l={},d=[{value:"Purpose",id:"purpose",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Example Gantt Chart in MermaidJS",id:"example-gantt-chart-in-mermaidjs",level:2},{value:"Examples of Development Plan Documents",id:"examples-of-development-plan-documents",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"software-development-plan",children:"Software Development Plan"})}),"\n",(0,a.jsx)(t.h2,{id:"purpose",children:"Purpose"}),"\n",(0,a.jsx)(t.p,{children:"The Software Development Plan describes the activities and tasks to be performed to develop the\nsoftware product."}),"\n",(0,a.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,a.jsx)(t.p,{children:"In addition to the general requirements the Software Development Plan will contain the\nfollowing sections:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Activities - requirements gathering, top-level design, detailed design, test."}),"\n",(0,a.jsx)(t.li,{children:"Tasks - A task is the performance of an activity leading to a specific feature in a\nproduct. E.G. Design of unit x. Associated with each task is predecessor tasks (what\ntasks must be complete before this task can start) an estimated effort estimated\nfinish data responsible individual successor tasks (what tasks cannon start until this\ntask is complete)"}),"\n",(0,a.jsx)(t.li,{children:"Schedule - A graphical layout of the tasks in the form of a Gantt chart. Mark the chart\nfor the milestone demos and decide the features shown in each demo."}),"\n",(0,a.jsx)(t.li,{children:"Development Environment - The required hardware and software to be used to\ndevelop the project. This includes the selected IDE, compilers, editors, test tools, etc.\nMap the effort of hardware and software setting up as tasks as well and mark your\nchart for the completion of such tasks."}),"\n",(0,a.jsx)(t.li,{children:"Version Control - The selected version control tool and procedures for maintaining a\ndefined master configuration."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"example-gantt-chart-in-mermaidjs",children:"Example Gantt Chart in MermaidJS"}),"\n",(0,a.jsxs)(t.p,{children:["In our Docusaurus project you can add MermaidJS diagrams directly in markdown. Docusaurus will automatically render this markup to the desired chart.\nHere is a link to MermaidJS documentation ",(0,a.jsx)(t.a,{href:"https://mermaid-js.github.io/mermaid/#/gantt",children:"https://mermaid-js.github.io/mermaid/#/gantt"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"```mermaid\ngantt\n    YOUR GANTT MARKUP\n```\n"})}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:(0,a.jsx)(t.p,{children:"Markdown Code for Gantt"})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"```mermaid\ngantt\n    dateFormat  YYYY-MM-DD\n    title       Project Schedule\n\n    section Elaboration Phase\n    Completed task            :done,    des1, 2022-09-06,2022-09-11\n    Active task               :active,  des2, 2022-09-12, 3d\n    Future task               :         des3, after des2, 5d\n    Future task 2             :         des4, after des3, 5d\n\n    section Construction Phase\n    Future task 3             :         des5, 2022-10-06, 5d\n    Future task 4             :         des6, after des5, 5d\n    Completed task in the critical line :crit, done, 2022-10-10,24h\n    Implement parser and jison          :crit, done, after des1, 2d\n    Create tests for parser             :crit, active, 3d\n    Future task in critical line        :crit, 5d\n    Create tests for renderer           :2d\n    Add to mermaid                      :1d\n   Milestone Demo 1                     :milestone, 2022-10-18, 0d\n   Milestone Demo 2                     :milestone, 2022-11-01, 0d\n   Milestone Demo 3                     :milestone, 2022-11-15, 0d\n   Final Demo                           :milestone, 2022-12-01, 0d\n\n\n```\n"})})]}),"\n",(0,a.jsx)(t.mermaid,{value:"gantt\n    dateFormat  YYYY-MM-DD\n    title       Project Schedule\n\n    section Elaboration Phase\n    Completed task            :done,    des1, 2022-09-06,2022-09-11\n    Active task               :active,  des2, 2022-09-12, 3d\n    Future task               :         des3, after des2, 5d\n    Future task 2             :         des4, after des3, 5d\n\n    section Construction Phase\n    Future task 3             :         des5, 2022-10-06, 5d\n    Future task 4             :         des6, after des5, 5d\n    Completed task in the critical line :crit, done, 2022-10-10,24h\n    Implement parser and jison          :crit, done, after des1, 2d\n    Create tests for parser             :crit, active, 3d\n    Future task in critical line        :crit, 5d\n    Create tests for renderer           :2d\n    Add to mermaid                      :1d\n   Milestone Demo 1                     :milestone, 2022-10-18, 0d\n   Milestone Demo 2                     :milestone, 2022-11-01, 0d\n   Milestone Demo 3                     :milestone, 2022-11-15, 0d\n   Final Demo                           :milestone, 2022-12-01, 0d\n"}),"\n",(0,a.jsx)(t.h2,{id:"examples-of-development-plan-documents",children:"Examples of Development Plan Documents"}),"\n",(0,a.jsxs)("p",{children:["Example Software Development Plans are here ",(0,a.jsx)("a",{class:"instructure_file_link instructure_scribd_file inline_disabled",title:"V2_Software Development Plan - Temple Cats (1).docx",href:"https://templeu.instructure.com/courses/114202/files/19367287?wrap=1",target:"_blank",rel:"noopener","data-canvas-previewable":"false","data-api-endpoint":"https://templeu.instructure.com/api/v1/courses/114202/files/19367287","data-api-returntype":"File",children:"Best Example Plan - Temple Cats"}),", ",(0,a.jsx)("a",{class:"instructure_file_link instructure_scribd_file inline_disabled",title:"Example SW Development Plan-Fiscal.docx",href:"https://templeu.instructure.com/courses/114202/files/19367276?wrap=1",target:"_blank",rel:"noopener","data-canvas-previewable":"false","data-api-endpoint":"https://templeu.instructure.com/api/v1/courses/114202/files/19367276","data-api-returntype":"File",children:"Example SW Development Plan-Fiscal.docx"})," , ",(0,a.jsx)("a",{class:"instructure_file_link instructure_scribd_file inline_disabled",title:"Example SW Dev Plan - DevOWLCIS.docx",href:"https://templeu.instructure.com/courses/114202/files/19367249?wrap=1",target:"_blank",rel:"noopener","data-canvas-previewable":"false","data-api-endpoint":"https://templeu.instructure.com/api/v1/courses/114202/files/19367249","data-api-returntype":"File",children:"Example SW Dev Plan - DevOWLCIS.docx. "})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(96540);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);