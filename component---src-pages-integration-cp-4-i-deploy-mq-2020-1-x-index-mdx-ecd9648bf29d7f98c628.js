(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"75ev":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return d}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),i=n("013z");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},c=l("InlineNotification"),s=l("AnchorLinks"),b=l("AnchorLink"),p={_frontmatter:r},m=i.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(m,o({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(c,{mdxType:"InlineNotification"},Object(a.b)("p",null,"Version 2020.2 is out for Cloud Pak for Ingegration.  This version is the first to feature Operators and has significant changes to the deployment and operations.  Please refer to the ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSGT7J_20.2/overview.html"}),"Knowledge Center")," while we update this playbook.  Thanks!")),Object(a.b)("p",null,"This page provides the guidance for installing MQ for Red Hat\nOpenShift both on-prem and on IBM Cloud."),Object(a.b)(s,{mdxType:"AnchorLinks"},Object(a.b)(b,{mdxType:"AnchorLink"},"Make sure permissions are set"),Object(a.b)(b,{mdxType:"AnchorLink"},"Create MQ instance in Cloud Pak for Integration"),Object(a.b)(b,{mdxType:"AnchorLink"},"Monitoring the Deployment"),Object(a.b)(b,{mdxType:"AnchorLink"},"Register with Tracing Service")),Object(a.b)("h3",null,Object(a.b)("strong",{parentName:"h3"},"Make sure permissions are set")),Object(a.b)("p",null,"You can open up permissions for install in you ",Object(a.b)("inlineCode",{parentName:"p"},"mq")," namespace by issing\nthe following commands:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"oc adm policy add-scc-to-group ibm-anyuid-scc system:serviceaccounts:mq\noc adm policy add-scc-to-group anyuid system:serviceaccounts:mq\n")),Object(a.b)("ul",null),Object(a.b)("h3",null,Object(a.b)("strong",{parentName:"h3"},"Create MQ instance in Cloud Pak for Integration")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Create an instance of MQ queue manager by clicking on “Add new instance” in the MQ tile in Platform Navigator.\n",Object(a.b)("img",o({parentName:"p"},{src:"/assets/img/integration/deploy-queue-manager/5.mq-nav.png",alt:"Add New Instance"})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"This will open a pop up window showing requirements for deploying MQ.\nClick ",Object(a.b)("strong",{parentName:"p"},"Continue"),".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"This will open the MQ helm chart to deploy MQ to the cluster.\nClick ",Object(a.b)("strong",{parentName:"p"},"Overview")," to review the requirements to deploy MQ chart.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Unless you require fine grained rights to be defined for your\ninstallation, the default rbac settings defined on install will be\nsufficient.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"MQ also requires Storage class or Persistent volume to be pre-defined\nif persistence is being used. It is possible to deploy MQ chart without\nusing persistence. However, it is highly recommended to use persistent\nstorage as any changes you make in the MQ UI will be lost if the pods were\nrecreated.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"If you are using the entitled registry, your image pull secret will\nalready be created for you as ",Object(a.b)("inlineCode",{parentName:"p"},"ibm-entitlement-key"),".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"If you are not using entitled registry, obtain an image pull secret\nusing the command below:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{}),"To obtain the secret for pulling the image login to the OCP CLI and run:\n```\noc get secrets -n mq\n```\nThe pull secret starts with **deployer-dockercfg**\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"After performing the above pre-requisites, click on ",Object(a.b)("strong",{parentName:"p"},"Configuration"),"\ntab to provide the values required to deploy MQ chart.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Provide the name for the chart, select ",Object(a.b)("strong",{parentName:"p"},"mq")," as Target namespace and\nselect ",Object(a.b)("strong",{parentName:"p"},"local-cluster")," as Target-Cluster. Also check the ‘License’ box\nto accept license.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Expand the ‘Quick Start’ twisty to expose the Configuration Settings\nfor TLS.\n",Object(a.b)("img",o({parentName:"p"},{src:"/assets/img/integration/deploy-queue-manager/6.mq-quickstart.png",alt:null})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Set the Cluster Hostname as the proxy node address for your installation.  Omit the ",Object(a.b)("inlineCode",{parentName:"p"},"https://")," in the url.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Next, click to expand ‘All parameters’ to configure the chart for\ndeployment.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Untickthe box “Production usage” box.  Double check your image\nrepository is correct.  For entitled registry it will look like\n",Object(a.b)("inlineCode",{parentName:"p"},"cp.icr.io/ibm-mqadvanced-server-integration"),".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Set the ",Object(a.b)("inlineCode",{parentName:"p"},"Image Pull Secret")," to ",Object(a.b)("inlineCode",{parentName:"p"},"ibm-entitlement-key")," for the entitled\nregistry or the ",Object(a.b)("strong",{parentName:"p"},"deployer-dockercfg")," value specific to your environment\nas indicated in the step above.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Moving down, under the ",Object(a.b)("inlineCode",{parentName:"p"},"IBM Cloud Pak for Integration")," heading it will\nask for the location of your platform navigator is installed at.  In most\ninstallations, this will be the ",Object(a.b)("inlineCode",{parentName:"p"},"integration")," namespace, but check to be\nsure.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Moving down, under the ",Object(a.b)("inlineCode",{parentName:"p"},"TLS")," -> ",Object(a.b)("inlineCode",{parentName:"p"},"Configuration Settings for TLS"),".\nTick the ",Object(a.b)("inlineCode",{parentName:"p"},"Generate Certificate")," box. The cluster hostname value should\nalready be populated with the proxy node value defined earlier.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Under the ",Object(a.b)("inlineCode",{parentName:"p"},"Persistence")," heading.  If you choose to use persistent\nstorage then you will need to tick both the ",Object(a.b)("inlineCode",{parentName:"p"},"Enable persistence")," and\n",Object(a.b)("inlineCode",{parentName:"p"},"Use dynamic provisioning")," boxes.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Under the ",Object(a.b)("inlineCode",{parentName:"p"},"Data PVC")," heading.  Populate the ",Object(a.b)("inlineCode",{parentName:"p"},"Storage Class name")," with\nthe requisite storageclass.  Use ",Object(a.b)("inlineCode",{parentName:"p"},"oc get storageclasses")," to get a list on\nyour system.  If you are using IBM Cloud this can be the ",Object(a.b)("inlineCode",{parentName:"p"},"ibmc-file-bronze"),".\nEither way, file storage (not block) is required for use with MQ.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"There is no need to repeat this for the other sections (Log PVC and QM\nPVC etc) for a dev environment.  If you want to use a separate storage\nclass for these items, you can individually specify the storageclasses as\nrequired.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Moving down, under Security, ensure the check box for\n",Object(a.b)("inlineCode",{parentName:"p"},"Initialize volume as root")," is ticked.  This is the default.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Last item to configure is to enable OD Tracing for the MQ instance.\nAt the bottom of the MQ Chart you will find the\n",Object(a.b)("inlineCode",{parentName:"p"},"Operation Dashboard Configuration"),".\n",Object(a.b)("img",o({parentName:"p"},{src:"/assets/img/integration/deploy-queue-manager/11.tracingchart.png",alt:null})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Click the Tick Box for ",Object(a.b)("inlineCode",{parentName:"p"},"Enable Operations Dashboard"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"At the bottom, populate the ",Object(a.b)("inlineCode",{parentName:"p"},"OD tracing instance namespace")," with the\nname of the tracing namespace, which in this sample is ",Object(a.b)("inlineCode",{parentName:"p"},"tracing"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Scroll to the bottom and then click install."))),Object(a.b)("ul",null),Object(a.b)("h3",null,Object(a.b)("strong",{parentName:"h3"},"Monitoring the Deployment")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Once all the pods are up, it will resemble the following.  Use the\n",Object(a.b)("inlineCode",{parentName:"li"},"oc get pods")," command to view the pods in flight\n",Object(a.b)("img",o({parentName:"li"},{src:"/assets/img/integration/deploy-queue-manager/12.mqpods.png",alt:null})))),Object(a.b)("ul",null),Object(a.b)("h3",null,Object(a.b)("strong",{parentName:"h3"},"Register with Tracing Service")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Near the end of the install of MQ, a job will be created that has the\nname ",Object(a.b)("inlineCode",{parentName:"li"},"odtracing.registration"),".  This job will not complete until the\nRegistration is completed inside of the Tracing capability."),Object(a.b)("li",{parentName:"ol"},"What will happen is that a request will be created inside of tracing\nthat you need to act upon.  Navigate to the Platform Navigator and via\nthe Hamburger menu select Tracing and then when the window pops out\nselect the name of your tracing instance which should be called\n",Object(a.b)("inlineCode",{parentName:"li"},"tracing"),Object(a.b)("img",o({parentName:"li"},{src:"/assets/img/integration/deploy-queue-manager/13.tracing-nav.png",alt:null}))),Object(a.b)("li",{parentName:"ol"},"Within tracing, select the ",Object(a.b)("inlineCode",{parentName:"li"},"Manage")," icon from the menu.  Looks like a\ncog wheel.\n",Object(a.b)("img",o({parentName:"li"},{src:"/assets/img/integration/deploy-queue-manager/14.tracing-from-menu.png",alt:null}))),Object(a.b)("li",{parentName:"ol"},"Click on the ",Object(a.b)("inlineCode",{parentName:"li"},"Registration Requests")," icon."),Object(a.b)("li",{parentName:"ol"},"You should see a new registration request for your MQ install.\nClick the ",Object(a.b)("inlineCode",{parentName:"li"},"approve")," link"),Object(a.b)("li",{parentName:"ol"},"You will see a pop up window with some lines to copy to your clipboard.\nClick the 2 boxes icon in the top right icon to copy the commands required.\n",Object(a.b)("img",o({parentName:"li"},{src:"/assets/img/integration/deploy-queue-manager/15.process-request.png",alt:null}))),Object(a.b)("li",{parentName:"ol"},"Ensuring you have an active ",Object(a.b)("inlineCode",{parentName:"li"},"oc")," session and in the ",Object(a.b)("inlineCode",{parentName:"li"},"mq")," project.\nPaste the commands to the window and it will run then and finish the\nprocessing."),Object(a.b)("li",{parentName:"ol"},"If you are slow in doing the steps above.  It is possible you might\nsee the ",Object(a.b)("inlineCode",{parentName:"li"},"odtracing.registration")," job fail.  No worries.  Once you complete\nthe pasting of the commands to create your secret, the job will re-create\nitself.")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-integration-cp-4-i-deploy-mq-2020-1-x-index-mdx-ecd9648bf29d7f98c628.js.map