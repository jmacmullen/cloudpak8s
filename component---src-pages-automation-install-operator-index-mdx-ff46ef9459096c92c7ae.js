(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{R5lu:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return p})),r.d(t,"default",(function(){return b}));r("91GP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("q1tI");var n=r("7ljp"),a=r("013z");r("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var p={},c={_frontmatter:p},l=a.a;function b(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["components"]);return Object(n.b)(l,o({},c,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Starting with version 19.0.3, the Cloud Pak for Automation components install is supported by an OCP operator.\nThe install steps for the operator are the following."),Object(n.b)("h3",null,"Create your CP4A project"),Object(n.b)("p",null,"Your CP4A project will contain all the components that are deployed through the operator.\nIn the rest of this documentation, we use ",Object(n.b)("inlineCode",{parentName:"p"},"cp4a")," as the name of our OCP project."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Login to your cluster:")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"oc login -u <admin> -p <password>\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Create the project and add privileges to it. ")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"oc new-project cp4a\noc adm policy add-scc-to-user privileged -z default\n")),Object(n.b)("h3",null,"Prepare the PV and PVC"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"On the NFS server, under the root of an exported directory (look at the ",Object(n.b)("inlineCode",{parentName:"li"},"/etc/export")," file to view the exported directories), create a folder for the JDBC drivers and copy these drivers into it:")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"mkdir /storage/persistentvolumes/operator/jdbc/db2\ncp /opt/ibm/db2/V11.1/java/db2jcc4.jar /nfs/persistentvolumes/operator/jdbc/db2/\ncp /opt/ibm/db2/V11.1/java/db2jcc_license_cu.jar /nfs/persistentvolumes/operator/jdbc/db2/\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Copy this ",Object(n.b)("a",o({parentName:"p"},{href:"/assets/automation/operator/operator-shared-pv.yaml"}),Object(n.b)("inlineCode",{parentName:"a"},"operator-shared-pv.yaml"))," template file to your working directory and update it as needed. In particular, update the ",Object(n.b)("inlineCode",{parentName:"p"},"nfs:path")," and ",Object(n.b)("inlineCode",{parentName:"p"},"nfs:server")," properties to fit your NFS setup.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Deploy the PV:"))),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"$ oc apply -f operator-shared-pv.yaml\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Copy this ",Object(n.b)("a",o({parentName:"p"},{href:"/assets/automation/operator/operator-shared-pvc.yaml"}),Object(n.b)("inlineCode",{parentName:"a"},"operator-shared-pvc.yaml"))," template file to your working directory and update it as needed. In particular, update the ",Object(n.b)("inlineCode",{parentName:"p"},"metadata:namespace")," property.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Deploy the PVC:"))),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"$ oc apply -f operator-shared-pvc.yaml\n")),Object(n.b)("h3",null,"Deploy the operator"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"In your working directory, download the necessary scripts and Kubernetes descriptors:")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"$ git clone https://github.com/icp4a/cert-kubernetes.git\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"If you are using local registry, change directory to ",Object(n.b)("inlineCode",{parentName:"li"},"./cert-kubernetes")," and run the ",Object(n.b)("inlineCode",{parentName:"li"},"deployOperator.sh")," script:")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"cd cert-kubernetes/\n./scripts/deployOperator.sh -i $(oc registry info)/cp4a-operator/icp4a-operator:19.0.3\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"If you are using IBM Cloud registry, change directory to ",Object(n.b)("inlineCode",{parentName:"li"},"./cert-kubernetes")," and run the ",Object(n.b)("inlineCode",{parentName:"li"},"deployOperator.sh")," script:")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"cd cert-kubernetes/\n./scripts/deployOperator.sh cp.icr.io/cp/cp4a/icp4a-operator:19.0.3 -p 'cp-entitlement'\n")),Object(n.b)("p",null,"where ",Object(n.b)("inlineCode",{parentName:"p"},"cp-entitlement")," is the name of the secret created to access to the remote registry."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Verify that the operator is running:")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"oc get pods\nNAME                                 READY     STATUS    RESTARTS   AGE\nibm-cp4a-operator-7db5cfbb64-mgb2c   2/2       Running   0          5h\n")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-automation-install-operator-index-mdx-ff46ef9459096c92c7ae.js.map