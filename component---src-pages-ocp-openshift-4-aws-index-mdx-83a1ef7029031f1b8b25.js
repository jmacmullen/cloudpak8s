(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{Q85f:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return s}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),o=n("013z");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={},l={_frontmatter:i},c=o.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(c,r({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Documentation on installing Openshift 4 on AWS can be found\n",Object(a.b)("a",r({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/installing/installing_aws/installing-aws-account.html"}),"here"),"."),Object(a.b)("p",null,"If possible, using the\n",Object(a.b)("a",r({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/installing/installing_aws/installing-aws-default.html"}),"installer-provisioned infrastructure"),"\n(IPI) method is preferred."),Object(a.b)("p",null,"For custom requirements, the\n",Object(a.b)("a",r({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/installing/installing_aws/installing-aws-customizations.html"}),"user-provisioned infrastructure"),"\n(UPI) method can be used."),Object(a.b)("p",null,"If the UPI method must be used, a terraform automation configuration may be\nhelpful. A sample configuration can be found here:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/terraform-openshift4-aws/"}),"https://github.com/ibm-cloud-architecture/terraform-openshift4-aws/"))),Object(a.b)("h3",null,Object(a.b)("strong",{parentName:"h3"},"Troubleshooting")),Object(a.b)("ul",null),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Problem"),": When using ",Object(a.b)("a",r({parentName:"p"},{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default"}),"automatic encryption of EBS volumes")," for EC2 instances, OpenShift Worker nodes will be terminated immediately as the generated user does not have the authority to use the default encryption key and the OpenShift installer will time out."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Solution:")," "),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Add the ",Object(a.b)("a",r({parentName:"p"},{href:"https://console.aws.amazon.com/iam/home"}),"generated user")," ",Object(a.b)("em",{parentName:"p"},"(whose name will be in the form of ",Object(a.b)("inlineCode",{parentName:"em"},"<infrastructureID>-openshift-machine-api-aws-<randomString>"),")")," to allow use the default EBS volume encryption key in ",Object(a.b)("a",r({parentName:"p"},{href:"https://us-east-2.console.aws.amazon.com/kms/home"}),"AWS Key Management Service"),".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Scale Worker MachineSets to 0 via ",Object(a.b)("inlineCode",{parentName:"p"},"oc --kubeconfig /path/to/install/dir/auth/kubeconfig scale machineset --all -n openshift-machine-api --replicas=0"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Scale Worker MachineSets back to previous values via ",Object(a.b)("inlineCode",{parentName:"p"},"oc --kubeconfig /path/to/install/dir/auth/kubeconfig scale machineset --all -n openshift-machine-api --replicas=1"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Verify Worker nodes are visible in the ",Object(a.b)("a",r({parentName:"p"},{href:"https://us-east-2.console.aws.amazon.com/ec2/v2/home"}),"AWS Console")," and via ",Object(a.b)("inlineCode",{parentName:"p"},"oc get nodes"),".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Wait until all Operators in the ",Object(a.b)("inlineCode",{parentName:"p"},"oc get clusteroperators")," list are as expected."))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ocp-openshift-4-aws-index-mdx-83a1ef7029031f1b8b25.js.map