(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{OTyw:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return c}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("013z");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={},l={_frontmatter:i},s=r.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(s,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this section we describe the installation of Watson AIOps AI Manager on IBM RedHat OpenShift Kubernetes Service (ROKS).\nThis document was written based on our experience with installation on Red Hat OpenShift 4.3 running on x86 architecture."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Important"),": At the time of writing OpenShift 4.5 is the highest supported version for Watson AIOps."),Object(a.b)("h2",null,"Client Workstation Environment"),Object(a.b)("p",null,"It is recommended to use a Linux client environment to do the installation. There are some tools that will be necessary and/or useful during install and configuration. Use the following commands to install OpenShift client and Kubernetes client. Commands below are for CentOS 7 Linux client but should also work on RHEL 7 Linux and should be run as root."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"# install OpenShift 4 client and kubectl\ncurl -s -L -O https://mirror.openshift.com/pub/openshift-v4/clients/oc/latest/linux/oc.tar.gz\ngunzip oc.tar.gz\ntar -xf oc.tar && rm -f oc.tar\nmv oc /usr/local/bin\n\ncat <<EOF > /etc/yum.repos.d/kubernetes.repo\n[kubernetes]\nname=Kubernetes\nbaseurl=https://packages.cloud.google.com/yum/repos/kubernetes-el7-x86_64\nenabled=1\ngpgcheck=1\nrepo_gpgcheck=1\ngpgkey=https://packages.cloud.google.com/yum/doc/yum-key.gpg https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg\nEOF\n\nyum install -y kubectl\n")),Object(a.b)("h2",null,"Storage"),Object(a.b)("p",null,"Review the ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSQNUZ_3.0.1/cpd/plan/storage_considerations.html"}),"Storage considerations")," for CP4D. For AI Manager, only Portworx and IBM Cloud File Storage are supported. For production deployments, Portworx is recommended. The guide below uses IBM Cloud File Storage (ibmc-file-gold-gid storage class)."),Object(a.b)("h2",null,"Cloud Pak for Data (CP4D) Installation"),Object(a.b)("p",null,"AI Manager runs on Cloud Pak for Data v3.0.1 lite. The instructions below are based off of ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSQNUZ_3.0.1/cpd/install/install.html"}),"the instructions for CP4D in the knowledge center"),". The CP4D install must be done using the installer. You cannot use the cloud provisioned CP4D on IBM Cloud."),Object(a.b)("p",null,Object(a.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSQNUZ_3.0.1/cpd/install/node-settings.html"}),"Changing required node settings")," should not be necessary for AI Ops installation. This is good because these changes require root access to the cluster nodes which is very difficult on OCP 4.x."),Object(a.b)("h3",null,Object(a.b)("a",o({parentName:"h3"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSQNUZ_3.0.1/cpd/install/registry_server.html"}),"Setting up your registry server")),Object(a.b)("p",null,"Use the RHOCP internal registry. ",Object(a.b)("a",o({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/registry/securing-exposing-registry.html"}),"Expose the registry")," by running the following:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),'oc patch configs.imageregistry.operator.openshift.io/cluster --patch \'{"spec":{"defaultRoute":true}}\' --type=merge\n')),Object(a.b)("h3",null,Object(a.b)("a",o({parentName:"h3"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSQNUZ_3.0.1/cpd/install/installation-files.html"}),"Obtaining the installation files")),Object(a.b)("p",null,"Obtain your entitlement license API key from the ",Object(a.b)("a",o({parentName:"p"},{href:"https://myibm.ibm.com/products-services/containerlibrary"}),"Container software library on My IBM")," and your IBM ID."),Object(a.b)("p",null,"On the Get entitlement key tab, select Copy key to copy the entitlement key to the clipboard and save the API key in a text file for use in repo.yaml later during the install process."),Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"393px"}},"\n      ",Object(a.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"83.33333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAABJ0AAASdAHeZh94AAAB/ElEQVQ4y62US47aQBCGvUAB5Rg5xGi22ecCsATEnCAXSBZkRcQNcg2uEQUwxjYPT/yG4WF3Y7D5U2XwiEQTiRnR0ie63OXqn+6/rEwmE2iahsl0Ctu2YRoGPNeDZVkwTROqqmI0GmHK646Dfv8XVIoNQ4dumDgejyjGo/sExfM8OJTo+z48guer1YriIH/Gm7iOi8VigeVyCZ/yXdfN84IwzAsVRU3LhyJEjN1uh+02ghQin282G0RxjJg4HA4QQkLuEooFYnHKjWgeRRH2+/2zwsljAIV3KlQWO7MKr4CezZwNdFvA8iXGvwXmfoJ5mGGxEjhmKY6XBeOzEiklKREnKBYUF2vxWU2xnqYpXhp5wSRJcAn/RX7hX7KLOee8hDF3oWjaOL9ZneBfvgR+iRXzeV4LixlPbShsD4bPLwjC8/n5p4OProcFGHMPCm44fg7GUKrVKlqtFhqNxl/U6/WraDabqNVq6PV6mNkLKDRwC9rtNvwncSpYqVRQKpXeRLlczgt2u114y+h2CjudDhWMyTZqH7qmEkNooyGGw9fBH4/BYEAOCaDPyIebHbCWJ+Th7TfMxs59+K6Z4cPnFO8fMnz8dsA2knnPWoFEuCJz5y0pc5/9D27HhMytTx0od18yfPqe4f5rhocfKbk+QbBOEBLriNvxNZ3i4A/p6k/koimMYwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Figure 1",title:"Figure 1",src:"/static/7122e39fcedf41fe7c915ad41de18bfd/97443/entitlement.png",srcSet:["/static/7122e39fcedf41fe7c915ad41de18bfd/7fc1e/entitlement.png 288w","/static/7122e39fcedf41fe7c915ad41de18bfd/97443/entitlement.png 393w"],sizes:"(max-width: 393px) 100vw, 393px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(a.b)("p",null,"On the Linux workstation, download and extract the Enterprise installer from ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/IBM/cpd-cli/releases"}),"cpd-cli GitHub")," using the following command:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"curl -L -o cloudpak4data-ee-3.0.1.tgz https://github.com/IBM/cpd-cli/releases/download/cpd-3.0.1/cloudpak4data-ee-3.0.1.tgz\ntar -xvf cloudpak4data*.tgz\n")),Object(a.b)("p",null,"The OpenShift 4.x client install was already done above."),Object(a.b)("p",null,"Edit the extracted ",Object(a.b)("inlineCode",{parentName:"p"},"repo.yaml")," server definition file use the following values:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:"left"}),"Parameter"),Object(a.b)("th",o({parentName:"tr"},{align:"left"}),"Value"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"username"),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"Specify ",Object(a.b)("inlineCode",{parentName:"td"},"cp"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"apikey"),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"Specify your entitlement license API key")))),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"repo.yaml")," file should look similar to the sample below, with the ",Object(a.b)("inlineCode",{parentName:"p"},"apikey")," value reflecting the entitlement license key obtained above:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"registry:\n  - url: cp.icr.io/cp/cpd\n    username: cp\n    apikey: BsiVF7vsOjkgyu1lFngf.eyJrc3MiOiJJQk0gTWFya2V0cGxhY2yiLCJpYXQiOjE1OTQzOTI3MEcsImp0aSI6ImFhNWEwMTExMzQyMDRkMDk4YmY4NDM0MzE0OTFiMTJhIn0.ulLvxhYELQRhR54OKvYeSSoqN9oTradJh5ksGaWPXFA\n    name: base-registry\nfileservers:\n  - url: https://raw.github.com/IBM/cloud-pak/master/repo/cpd3\n")),Object(a.b)("h3",null,Object(a.b)("a",o({parentName:"h3"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSQNUZ_3.0.1/cpd/install/service_accts.html"}),"Setting up your environment")),Object(a.b)("p",null,"Log in to your Red Hat OpenShift cluster:",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"oc login OpenShift_URL:port")),Object(a.b)("p",null,"Set namespace environment variable, sample uses ",Object(a.b)("inlineCode",{parentName:"p"},"zen")," namespace:",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"export NAMESPACE=zen")),Object(a.b)("p",null,"Do not run the preview command leaving off the ",Object(a.b)("inlineCode",{parentName:"p"},"--apply")," parameter. There is a bug in the installer that will cause problems if the setup command is run without ",Object(a.b)("inlineCode",{parentName:"p"},"--apply"),"."),Object(a.b)("p",null,"Make the necessary changes to the cluster by running the following command:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"./bin/cpd-linux adm --repo repo.yaml \\\n--assembly lite \\\n--accept-all-licenses \\\n--namespace $NAMESPACE \\\n--apply\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Important"),": Run the following command to grant cpd-admin-role to the project administration user(s):"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"oc adm policy add-role-to-user cpd-admin-role $(oc whoami) --role-namespace=$NAMESPACE -n $NAMESPACE\n")),Object(a.b)("h3",null,Object(a.b)("a",o({parentName:"h3"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSQNUZ_3.0.1/cpd/install/rhos-install.html"}),"Installing on an OpenShift cluster")),Object(a.b)("p",null,"Change to the project where you will install the Cloud Pak for Data control plane, samples uses ",Object(a.b)("inlineCode",{parentName:"p"},"zen")," namespace:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"oc project zen\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Important"),": The documentation includes a “dry run” to preview the install command, but if you run the preview before running the install, then the install will hang. This is a known bug, so skip the preview “dry run”."),Object(a.b)("p",null,"Note that IBM Cloud File Storage (ibmc-file-gold-gid storage class) is used."),Object(a.b)("p",null,"Run the following command to install the Cloud Pack for Data control plane:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"bin/cpd-linux --repo ./repo.yaml \\\n--assembly lite \\\n--namespace $NAMESPACE \\\n--storageclass ibmc-file-gold-gid \\\n--transfer-image-to $(oc get route/default-route -n openshift-image-registry --template='{{ .spec.host }}')/$NAMESPACE \\\n--cluster-pull-prefix image-registry.openshift-image-registry.svc:5000/$NAMESPACE \\\n--target-registry-username $(oc whoami) \\\n--target-registry-password $(oc whoami -t) \\\n--accept-all-licenses \\\n--insecure-skip-tls-verify\n")),Object(a.b)("h3",null,"Updating the Nginx Certificate"),Object(a.b)("p",null,"The Nginx pods need the certificate updated or else there will be problems bringing up the UI and when configuring Slack integration. The following commands will take the valid certificate from OpenShift and apply it to the Nginx pods. Keep in mind that this certificate expires every 3 months, so this will need done again in the future."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"oc get secrets -n openshift-ingress | grep tls | grep -v router-metrics-certs-default | awk '{print $1}' | xargs oc get secret -n ibm-cert-store -o yaml > tmpcert.yaml\ncat tmpcert.yaml | grep tls.crt | awk '{print $2}' |base64 -d > cert.crt\ncat tmpcert.yaml | grep tls.key | awk '{print $2}' |base64 -d > cert.key\nibm_nginx_pod=$(oc get pods -l component=ibm-nginx -o jsonpath='{ .items[0].metadata.name }')\noc exec ${ibm_nginx_pod} -- mkdir -p \"/user-home/_global_/customer-certs\"\noc cp cert.crt ${ibm_nginx_pod}:/user-home/_global_/customer-certs/\noc cp cert.key ${ibm_nginx_pod}:/user-home/_global_/customer-certs/\nfor i in `oc get pods -l component=ibm-nginx -o jsonpath='{ .items[*].metadata.name }' `; do oc exec ${i} -- /scripts/reload.sh; done\nrm tmpcert.yaml cert.crt cert.key\n")),Object(a.b)("p",null,"Sample output from the above commands:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"reloading nginx conf\nsetting up ssl\nusing customer certs\nnginx: the configuration file /usr/local/openresty/nginx/conf/nginx.conf syntax is ok\nnginx: configuration file /usr/local/openresty/nginx/conf/nginx.conf test is successful\n2020/09/24 18:04:52 [notice] 211#211: signal process started\nreloading nginx conf\nnginx: the configuration file /usr/local/openresty/nginx/conf/nginx.conf syntax is ok\nnginx: configuration file /usr/local/openresty/nginx/conf/nginx.conf test is successful\nsetting up ssl\nusing customer certs\n2020/09/24 18:04:57 [notice] 112#112: signal process started\nreloading nginx conf\nsetting up ssl\nusing customer certs\nnginx: the configuration file /usr/local/openresty/nginx/conf/nginx.conf syntax is ok\nnginx: configuration file /usr/local/openresty/nginx/conf/nginx.conf test is successful\n2020/09/24 18:05:03 [notice] 44#44: signal process started\n")),Object(a.b)("h2",null,"AI Manager Installation"),Object(a.b)("h3",null,"Install Strimzi for Kafka"),Object(a.b)("p",null,"The ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSQNUZ_3.0.1/svc-aiops/aiops-prereqs.html"}),"documentation")," describes how to install the Strimzi operator in order to get Kafka. The install can be done via the command line using the following command:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"cat <<EOF | oc create -f -\napiVersion: operators.coreos.com/v1alpha1\nkind: Subscription\nmetadata:\n  name: strimzi-kafka-operator\n  namespace: openshift-operators\nspec:\n  channel: stable\n  name: strimzi-kafka-operator\n  source: community-operators\n  sourceNamespace: openshift-marketplace\nEOF\n")),Object(a.b)("h3",null,Object(a.b)("a",o({parentName:"h3"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSQNUZ_3.0.1/svc-aiops/aiops-svc-adm-cmd.html"}),"Preparing the cluster for Watson AIOps AI Manager")),Object(a.b)("p",null,"Label the namespace using the ",Object(a.b)("inlineCode",{parentName:"p"},"NAMESPACE")," environment variable set above:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"oc label --overwrite namespace $NAMESPACE ns=$NAMESPACE\n")),Object(a.b)("p",null,"Do not run the preview command leaving off the ",Object(a.b)("inlineCode",{parentName:"p"},"--apply")," parameter. There is a bug in the installer that will cause problems if the setup command is run without ",Object(a.b)("inlineCode",{parentName:"p"},"--apply"),"."),Object(a.b)("p",null,"Make the necessary changes to the cluster by running the following command:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"bin/cpd-linux adm --repo repo.yaml --accept-all-licenses --assembly watson-aiops --namespace $NAMESPACE --apply\n")),Object(a.b)("h3",null,Object(a.b)("a",o({parentName:"h3"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSQNUZ_3.0.1/svc-aiops/aiops-install.html"}),"Installing the Watson AIOps AI Manager service")),Object(a.b)("p",null,"Create an ",Object(a.b)("inlineCode",{parentName:"p"},"override.yaml")," file and configure it to turn on the Strimzi resources creation and include updates to tune up the liveness/readiness probes for Postgres because we are using slower IBM Cloud storage as opposed to Portworx."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),'global:\n  kafka:\n    strimzi:\n      enabled: true\npostgres:\n  livenessProbe:\n    initialDelaySeconds: 300\n    timeoutSeconds: 15\n    failureThreshold: 5\n    periodSeconds: 15\n    successThreshold: 1\n  readinessProbe:\n    initialDelaySeconds: 300\n    timeoutSeconds: 15\n    failureThreshold: 5\n    periodSeconds: 15\n    successThreshold: 1\n  keeper:\n    resources:\n      requests:\n        cpu: "100m"\n        memory: "256Mi"\n      limits:\n        cpu: "500m"\n        memory: "512Mi"\n  sentinel:\n    resources:\n      requests:\n        cpu: "100m"\n        memory: "256Mi"\n      limits:\n        cpu: "500m"\n        memory: "512Mi"\n')),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Important"),": The documentation includes a “dry run” to preview the install command, but if you run the preview before running the install, then the install will hang. This is a known bug, so skip the preview “dry run”."),Object(a.b)("p",null,"Note that IBM Cloud File Storage (",Object(a.b)("inlineCode",{parentName:"p"},"ibmc-file-gold-gid")," storage class) is used. Also note that ",Object(a.b)("inlineCode",{parentName:"p"},"--max-image-retry")," has been increased from the default of 5 to 25. This is due to the fact that the image transfers often fail, which requires a retry of the command. Increasing this value will hopefully save you from having to retry this command after an image transfer failure."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"bin/cpd-linux --repo ./repo.yaml \\\n--assembly watson-aiops \\\n--namespace $NAMESPACE \\\n--instance waiops \\\n--storageclass ibmc-file-gold-gid \\\n--transfer-image-to $(oc get route/default-route -n openshift-image-registry --template='{{ .spec.host }}')/$NAMESPACE \\\n--cluster-pull-prefix image-registry.openshift-image-registry.svc:5000/$NAMESPACE \\\n--target-registry-username $(oc whoami) \\\n--target-registry-password $(oc whoami -t) \\\n--accept-all-licenses \\\n--insecure-skip-tls-verify \\\n--max-image-retry 25 \\\n--override override.yaml\n")),Object(a.b)("p",null,"Congratulations, you have successfully installed Watson AIOps AI Manager."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-aiops-aimgr-install-index-mdx-6778c1f770031c39bf24.js.map