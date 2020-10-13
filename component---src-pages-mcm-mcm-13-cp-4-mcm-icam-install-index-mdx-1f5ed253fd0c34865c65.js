(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{DUYe:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return m}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},c=i("Tabs"),p=i("Tab"),b={_frontmatter:o},s=r.a;function m(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(s,l({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Overview"),Object(n.b)("p",null,"In this section we will walk through the installation of the IBM Cloud Application Manager version 2019.4.0 component of the Cloud Pak for Multicloud Management. This document is specifically written for installations on OpenShift 4.2 with Multicloud Manager installed running on an x86 architecture."),Object(n.b)("h3",null,"Prerequisites"),Object(n.b)("p",null,"This document does not describe how to install or configure the underlying OpenShift platform. So prior to installing make sure you have a working OpenShift cluster with Multicloud manager installed with the required capacity."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Check the requirements doc to make sure you have size your cluster appropriately and you have capacity"),Object(n.b)("li",{parentName:"ul"},"For offline installs make sure you have downloaded the Cloud Pak for Multicloud Management Passport Advantage Archive (PPA) file (see requirements) and copied it to the installation server"),Object(n.b)("li",{parentName:"ul"},"For online installs make sure you have an entitlement key to access the IBM Entitled Docker Registry"),Object(n.b)("li",{parentName:"ul"},"The installation is performed from the Command line (CLI) so you will need the required CLI tools to interface with the cluster. Instructions on setting up the required CLI tools here: ",Object(n.b)("a",l({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSFC4F_1.2.0/cli/cli_guide_mcm.html"}),"https://www.ibm.com/support/knowledgecenter/en/SSFC4F_1.2.0/cli/cli_guide_mcm.html")),Object(n.b)("li",{parentName:"ul"},"Offline installation will require the docker client install on the installation server")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"/content/mcm/cp4mcm_mcm_install/"}),"Install MCM"))),Object(n.b)("h2",null,"Online Installation"),Object(n.b)("ul",null),Object(n.b)("h2",null,"Offline Installation"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Download the Cloud Application Management Archive file"),Object(n.b)("table",{parentName:"li"},Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:"center"}),"File Name"),Object(n.b)("th",l({parentName:"tr"},{align:"center"}),"Part Number"),Object(n.b)("th",l({parentName:"tr"},{align:"center"}),"Version"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"center"}),"icam_ppa_2019.4.0_prod.tar.gz"),Object(n.b)("td",l({parentName:"tr"},{align:"center"}),"CC4KNEN"),Object(n.b)("td",l({parentName:"tr"},{align:"center"}),"1.2")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"center"}),"icam_ppa_2020.1.0_prod.tar.gz"),Object(n.b)("td",l({parentName:"tr"},{align:"center"}),"CC5WFEN"),Object(n.b)("td",l({parentName:"tr"},{align:"center"}),"1.3"))))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Create a ",Object(n.b)("inlineCode",{parentName:"p"},"cluster")," directory and move the ppa into the new directory"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",l({parentName:"pre"},{}),"mkdir cluster\ncd cluster\nmv <PACKAGE_NAME> .\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Use admin access to login to the MCM console"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",l({parentName:"pre"},{}),"cloudctl login -a < my_cluster_URL > -n kube-system --skip-ssl-validation\n")),Object(n.b)("p",{parentName:"li"},"Where ",Object(n.b)("inlineCode",{parentName:"p"},"< my_cluster_URL >")," is the name that you defined for your cluster."),Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Ex.")," ",Object(n.b)("inlineCode",{parentName:"p"},"https://cluster_address:443"),", where cluster_address looks something like ",Object(n.b)("inlineCode",{parentName:"p"},"icp-console.apps.hostname-icp-mst.domain.com"),"\nFor future reference to the console use the value for cluster_address.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Login to OpenShift as an administrator:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",l({parentName:"pre"},{}),"oc login\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Login to the OCP Docker registry (assuming the OpenShift registry has been exposed - see ",Object(n.b)("a",l({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.2/registry/securing-exposing-registry.html"}),"exposing registry"),"):"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",l({parentName:"pre"},{}),"docker login $(oc registry info) -u $(oc whoami) -p $(oc whoami -t)\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Load the installation image into IBM’s Docker Registry:"),Object(n.b)(c,{mdxType:"Tabs"},Object(n.b)(p,{label:"CloudPak v1.3",mdxType:"Tab"},Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",l({parentName:"pre"},{}),"cloudctl catalog load-archive --archive ./icam_ppa_2020.1.0_prod.tar.gz  --registry $(oc registry info)/kube-system\n"))),Object(n.b)(p,{label:"CloudPak v1.2",mdxType:"Tab"},Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",l({parentName:"pre"},{}),"cloudctl catalog load-archive --archive ./icam_ppa_2019.4.0_prod.tar.gz  --registry $(oc registry info)/kube-system\n"))))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Prepare Persistent Storage"),Object(n.b)("p",{parentName:"li"},"Unless your storage class can handle 5000 IO Operations per second, IBM recommends setting up Persistant Storage backed by local disks or partitions."),Object(n.b)("p",{parentName:"li"},"For help configuring persistent storage, see ",Object(n.b)("a",l({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSBS6K_3.2.1/manage_cluster/kub_storage.html"}),"Understanding Kubernetes Storage"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Log in to the console UI of your target cluster from ",Object(n.b)("inlineCode",{parentName:"p"},"https://icp-console.apps.< cluster >.< domain >/"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click ",Object(n.b)("strong",{parentName:"p"},"Catalog")," in the Upper right-hand icon; select the ",Object(n.b)("strong",{parentName:"p"},"Repositories")," > ",Object(n.b)("strong",{parentName:"p"},"local-charts"),".\nOpen the ",Object(n.b)("inlineCode",{parentName:"p"},"ibm-cloud-appmgmt-prod")," tile.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click ",Object(n.b)("strong",{parentName:"p"},"Configure")," and specify the following:"))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Helm relase name: ibmcloudappmgmt")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Target namespace: kube-system")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Target cluster: local-cluster")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"License accepted: (checked)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Expand all parameters as you must customize more parameters than just the default, specify at least the following")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Create CRD (checked)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Create TLS Certs (checked)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Cloud Console FQDN: ",Object(n.b)("inlineCode",{parentName:"p"},"icp-console.apps.< cluster >.< domain >"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Cloud Console Port: 443")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Cloud Proxy FQDN: ",Object(n.b)("inlineCode",{parentName:"p"},"icp-proxy.apps.< cluster >.< domain >"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Cloud Master FQDN: ",Object(n.b)("inlineCode",{parentName:"p"},"icp-console.apps.< cluster >.< domain >"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Cloud Master Port: 443")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Image Repository: ",Object(n.b)("inlineCode",{parentName:"p"},"image-registry.openshift-image-registry.svc:5000/kube-system")),Object(n.b)("p",{parentName:"li"},"For configuration parameters, reference ",Object(n.b)("a",l({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/install_mcm_server_script_full_monitoring.html?cp=SSFC4F_1.2.0#task_install_mcm_server_script__d441e497"}),"Table 1")," in the Knowledge Center iCAM workbook."))),Object(n.b)("ol",{start:11},Object(n.b)("li",{parentName:"ol"},"Click ",Object(n.b)("strong",{parentName:"li"},"Install")," to deploy the ",Object(n.b)("inlineCode",{parentName:"li"},"ibm-cloud-appmgmt-prod")," Helm chart.")),Object(n.b)("h2",null,"Post Installation"),Object(n.b)("p",null,"Now that your iCAM instance is successfuly installed, you can register with OIDC."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"1.")," In your MCM console, select ",Object(n.b)("strong",{parentName:"p"},"Monitor Health")," > ",Object(n.b)("strong",{parentName:"p"},"Helm Releases"),", then select the release name that you gave for iCAM."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"2.")," Scroll to the notes section at the bottom of your release and complete ",Object(n.b)("strong",{parentName:"p"},"Step 3 (OIDC Registration)")," of the ",Object(n.b)("em",{parentName:"p"},"Notes")," section. Run the two ",Object(n.b)("strong",{parentName:"p"},"kubectl")," commands that are displayed there."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Command 1")," registers your iCAM instance with OIDC, and ",Object(n.b)("strong",{parentName:"p"},"Command 2")," adds two policy registrations."),Object(n.b)("h2",null,"Next Steps"),Object(n.b)("p",null,"Next, you can deploy the ",Object(n.b)("strong",{parentName:"p"},"ICAM Klusterlet")," to monitor applications in your MCM environment. For more information, see ",Object(n.b)("a",l({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/install_mcm_klusterlet.html?cp=SSFC4F_1.2.0"}),"Installing the ICAM klusterlet on the managed cluster")," guide for installing via the helm chart, or check out ",Object(n.b)("a",l({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/install_mcm_klusterlet_no_helm.html?cp=SSFC4F_1.2.0"}),"Installing the ICAM klusterlet on the managed cluster without helm")," for a non-helm installation."),Object(n.b)("h2",null,"Additional Resources"),Object(n.b)("p",null,Object(n.b)("a",l({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/install_mcm_server_script_full_monitoring.html?cp=SSFC4F_1.2.0"}),"Knowledge Center - iCAM")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mcm-mcm-13-cp-4-mcm-icam-install-index-mdx-1f5ed253fd0c34865c65.js.map