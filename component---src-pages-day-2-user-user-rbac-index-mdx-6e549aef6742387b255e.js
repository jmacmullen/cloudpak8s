(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{khMg:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return c}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},p={_frontmatter:i},s=r.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(s,o({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",null,"Configure Groups and Cluster Role-Based Access Control"),Object(n.b)("p",null,"We will show you how to configure groups and cluster role-based access\ncontrol (RBAC) on your OpenShift Cluster.  We will cover the following items:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Create a cluster role binding to configure a group with direct\ncluster-admin access privileges"),Object(n.b)("li",{parentName:"ul"},"Configure a group with cluster-admin access through the ",Object(n.b)("strong",{parentName:"li"},"sudoer")," cluster role"),Object(n.b)("li",{parentName:"ul"},"Restrict project self-provisioning to specific user groups"),Object(n.b)("li",{parentName:"ul"},"Configure project request messages   ")),Object(n.b)("p",null,"The top two items tell you how to delegate the cluster administrative\nprivileges."),Object(n.b)("h2",null,"Create a cluster role binding to configure a group with direct cluster-admin access privileges"),Object(n.b)("p",null,"You assign the ",Object(n.b)("strong",{parentName:"p"},"cluster-admin")," access to a group called ",Object(n.b)("strong",{parentName:"p"},"local-admin")," which\nwe have already created in our environment.\nHere are steps to configure direct cluster-admin access."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Check the list of groups and associated users in each group as follows:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"$ oc --user=admin get groups\nNAME             USERS\nlocal-admin      alice\nocp-platform     david, admin1, admin2, admin\nocp-production   karla, prod1, prod2, admin, redhat\nocp-users        andrew, marina, karla, david, portal1, portal2, payment1, payment2, prod1, prod2, platform1, platform2, admin1, admin2, admin\npaymentapp       marina, payment1, payment2\nportalapp        andrew, portal1, portal2\n$ \n")),Object(n.b)("p",{parentName:"li"},"In our environment, there is a ",Object(n.b)("strong",{parentName:"p"},"local-admin")," group with an ",Object(n.b)("strong",{parentName:"p"},"alice")," user.  We\nwill use those in the following steps."),Object(n.b)("p",{parentName:"li"},"Note that we have disabled the ",Object(n.b)("strong",{parentName:"p"},"kubeadmin")," in your environment as described\nin the ",Object(n.b)("a",o({parentName:"p"},{href:"../User/UserVmware"}),"VMware User")," page. Therefore, the steps in\nthis page must be\nperformed using the ",Object(n.b)("strong",{parentName:"p"},"system:admin")," user account which means that we will\nadd the ",Object(n.b)("strong",{parentName:"p"},"—user=admin")," option with the ",Object(n.b)("inlineCode",{parentName:"p"},"oc")," command if necessary.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Create a cluster role binding to give ",Object(n.b)("strong",{parentName:"p"},"cluster-admin")," rights to members\nof the ",Object(n.b)("strong",{parentName:"p"},"local-admin")," group as follows:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),'$ oc --user=admin adm policy add-cluster-role-to-group cluster-admin local-admin \nclusterrole.rbac.authorization.k8s.io/cluster-admin added: "local-admin"\n$ \n'))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"To confirm that users who belong to the ",Object(n.b)("strong",{parentName:"p"},"local-admin")," group has the\nadministrative access, you login as the ",Object(n.b)("strong",{parentName:"p"},"alice")," user as follows:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"$ oc login -u alice -p 'p4ssw0rd'\nLogin successful.\n\n... OUTPUT OMITTED ...\n\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Then, confirm full administrative access with any verb to any resource\ntype such as “boo” and “bar” as follows:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"$ oc auth can-i foo bar\nWarning: the server doesn't have a resource type 'bar'\nyes\n$ \n")),Object(n.b)("p",{parentName:"li"},"   You see ",Object(n.b)("strong",{parentName:"p"},"yes")," as the command output which means that the user has the\nadministrative access. You can ignore the warning message above.\nThe ",Object(n.b)("strong",{parentName:"p"},"local-admin")," group now has the administrative access and the users\nthat belong to that group can run the command which requires the administrative\naccess without specifying the ",Object(n.b)("strong",{parentName:"p"},"—user=admin")," option.  "))),Object(n.b)("h2",null,"Configure a group with cluster-admin access through the sudoer cluster role"),Object(n.b)("p",null,"We will grant the ",Object(n.b)("strong",{parentName:"p"},"sudoer")," rights to the group and show you how to use the\nadministrative access with the users in that group.  "),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Check the list of groups and acciated users in each group as follows:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"$ oc --user=admin get groups\nNAME             USERS\nlocal-admin      alice\nocp-platform     david, admin1, admin2, admin\nocp-production   karla, prod1, prod2, admin, redhat\nocp-users        andrew, marina, karla, david, portal1, portal2, payment1, payment2, prod1, prod2, platform1, platform2, admin1, admin2, admin\npaymentapp       marina, payment1, payment2\nportalapp        andrew, portal1, portal2\n$ \n")),Object(n.b)("p",{parentName:"li"},"In our environment, there is ",Object(n.b)("strong",{parentName:"p"},"ocp-platform")," group with a ",Object(n.b)("strong",{parentName:"p"},"david")," user.  We will use those in the following steps.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Create a cluster role binding to grant ",Object(n.b)("strong",{parentName:"p"},"sudoer")," rights to members of\nthe ",Object(n.b)("strong",{parentName:"p"},"ocp-platform")," group:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),'$ oc adm policy add-cluster-role-to-group sudoer ocp-platform\nclusterrole.rbac.authorization.k8s.io/sudoer added: "ocp-platform"\n'))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Log in as user ",Object(n.b)("strong",{parentName:"p"},"david")," that belongs to the ",Object(n.b)("strong",{parentName:"p"},"ocp-platform")," group to\nconfirm cluster administrative privileges."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"$ oc login -u david -p 'r3dh4t1!'\nLogin successful.\n\nYou don't have any projects. You can try to create a new project, by running\n\noc new-project <projectname>\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Test direct cluster administrative access to confirm that it is not\navailable as follows:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"$ oc auth can-i foo bar\nWarning: the server doesn't have a resource type 'bar'\nno\n")),Object(n.b)("p",{parentName:"li"},"   You see ",Object(n.b)("strong",{parentName:"p"},"no")," as the command output which means that the user does not\nhave the aminitrative access. You can ignore the warning message above.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Repeat the same command with the ",Object(n.b)("strong",{parentName:"p"},"—as=system:admin")," option using the\n",Object(n.b)("strong",{parentName:"p"},"system:admin")," account as follows:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"$ oc --as=system:admin auth can-i foo bar\nWarning: the server doesn't have a resource type 'bar'\nyes\n")),Object(n.b)("p",{parentName:"li"},"   You see ",Object(n.b)("strong",{parentName:"p"},"yes")," as the command output which means that the user has the\nadministrative access. You can ignore the warning message above."),Object(n.b)("p",{parentName:"li"},"   As step 4 and 5 showed you, the ",Object(n.b)("strong",{parentName:"p"},"sudoer")," rights can provide the\nadministrative access by specifying the ",Object(n.b)("strong",{parentName:"p"},"—as=system:admin")," option.  "),Object(n.b)("p",{parentName:"li"},"   Now, you have delegated cluster administrative access to users such as\n",Object(n.b)("strong",{parentName:"p"},"alice")," and ",Object(n.b)("strong",{parentName:"p"},"david")," in our example. Therefore, it is no longer\nappropriate to continue using TLS certificates to access ",Object(n.b)("strong",{parentName:"p"},"system:admin"),".  "))),Object(n.b)("h3",null,"Remove Credentials for system:admin from Configuration File"),Object(n.b)("p",null,"Before we move to the next items which are “Restrict project\nself-provisioning to specific user groups” and “Configure project request\nmessages”, we will show you how to remove the ",Object(n.b)("strong",{parentName:"p"},"cluster-admin")," access from the\nuser to whom you previously delegated ",Object(n.b)("strong",{parentName:"p"},"cluster-admin")," access.  In our example,\nthe user ",Object(n.b)("strong",{parentName:"p"},"alice")," is the one.  "),Object(n.b)("p",null,"We remove the credentials for ",Object(n.b)("strong",{parentName:"p"},"system:admin")," from the configuration file as\nfollows:  "),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"You can get the API URL with oc command as follow."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"$oc whoami --show-server\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Remove your kube configuration file."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"$ rm -f $HOME/.kube/config\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Log in again as the ",Object(n.b)("strong",{parentName:"p"},"alice")," user.  Answer ",Object(n.b)("strong",{parentName:"p"},"y")," to the question\n“Use insecure connections?” which will reset your environment and\nauthenticate for the user ",Object(n.b)("strong",{parentName:"p"},"alice"),"."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"$ oc login -u alice -p 'p4ssw0rd' $API_URL\nThe server uses a certificate signed by an unknown authority.\nYou can bypass the certificate check, but any data you send to the server could be intercepted by others.\nUse insecure connections? (y/n): y\n\nLogin successful.\n\n... output omitted ...\n")))),Object(n.b)("h2",null,"Restrict Access for Project Self-Provisioning"),Object(n.b)("p",null,"We will cover two items such as “Restrict project self-provisioning to specific user groups” and “Configure project request messages” in this section. We will demonstrate 3 topics as folow:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You remove the user’s default permission to create their own projects and allow only production administrators to create projects."),Object(n.b)("li",{parentName:"ul"},"You set a message for users who attempt to create projects without appropriate permissions. "),Object(n.b)("li",{parentName:"ul"},"You allow users from the ocp-production group to create their own projects.  ")),Object(n.b)("h3",null,"Remove OAuth Authenticated Access to Role self-provisioner"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"View the ",Object(n.b)("strong",{parentName:"p"},"self-provisioners")," cluster role binding:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),'$ oc get clusterrolebinding self-provisioners -o yaml\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  annotations:\n    rbac.authorization.kubernetes.io/autoupdate: "true"\n  creationTimestamp: "2019-05-25T18:46:20Z"\n  name: self-provisioners\n  resourceVersion: "6265"\n  selfLink: /apis/rbac.authorization.k8s.io/v1/clusterrolebindings/self-provisioners\n  uid: 6304fb71-7f1d-11e9-a345-0624d0163962\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: self-provisioner\nsubjects:\n- apiGroup: rbac.authorization.k8s.io\n  kind: Group\n  name: system:authenticated:oauth\n')),Object(n.b)("p",{parentName:"li"},"This role binding has the ",Object(n.b)("strong",{parentName:"p"},"rbac.authorization.kubernetes.io/autoupdate: “true”"),"\nannotation."),Object(n.b)("p",{parentName:"li"},"Typically, you remove a cluster role binding with\n",Object(n.b)("inlineCode",{parentName:"p"},"oc adm policy remove-cluster-role-from-group")," or\n",Object(n.b)("inlineCode",{parentName:"p"},"oc adm policy remove-cluster-role-from-user"),".\nBecause the autoupdate process restores the access, you cannot use either\napproach with the ",Object(n.b)("strong",{parentName:"p"},"self-provisioners")," role binding yet.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Set the ",Object(n.b)("strong",{parentName:"p"},"rbac.authorization.kubernetes.io/autoupdate")," annotation on the\n",Object(n.b)("strong",{parentName:"p"},"self-provisioners")," cluster role binding to ",Object(n.b)("strong",{parentName:"p"},"false"),":"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"$ oc annotate clusterrolebinding self-provisioners --overwrite \\\n    'rbac.authorization.kubernetes.io/autoupdate=false'\nclusterrolebinding.rbac.authorization.k8s.io/self-provisioners annotated\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Remove the ",Object(n.b)("strong",{parentName:"p"},"system:authenticated:oauth")," group from the\n",Object(n.b)("strong",{parentName:"p"},"self-provisioners")," cluster role binding:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),'$ oc adm policy remove-cluster-role-from-group \\\n    self-provisioner system:authenticated:oauth\nclusterrole.rbac.authorization.k8s.io/self-provisioner removed: "system:authenticated:oauth"\n'))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Confirm that the ",Object(n.b)("strong",{parentName:"p"},"self-provisioners")," cluster role binding still exists\nand has the ",Object(n.b)("strong",{parentName:"p"},"rbac.authorization.kubernetes.io/autoupdate: “false”"),"\nannotation, but no subjects:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),'$ oc get clusterrolebinding self-provisioners -o yaml\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  annotations:\n    rbac.authorization.kubernetes.io/autoupdate: "false"\n  creationTimestamp: "2019-05-25T18:46:20Z"\n  name: self-provisioners\n  resourceVersion: "1773477"\n  selfLink: /apis/rbac.authorization.k8s.io/v1/clusterrolebindings/self-provisioners\n  uid: 6304fb71-7f1d-11e9-a345-0624d0163962\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: self-provisioner\n')))),Object(n.b)("h3",null,"Configure Message with Project Request Instructions"),Object(n.b)("p",null,"With project self-provisioning disabled, it is helpful to provide users with\na message to inform them of the correct way to request a new project in\nOpenShift."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Create a file called ",Object(n.b)("strong",{parentName:"p"},"projects-config.patch.json")," with the following\nJSON patch for the project request message:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),'{\n  "spec": {\n    "projectRequestMessage": "Please create projects using the portal http://portal.company.internal/provision or PaaS Support at paas-support@example.com"\n  }\n}\n'))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Patch the cluster resource of kind ",Object(n.b)("strong",{parentName:"p"},"projects.config.openshift.io")," with\nthe patch file:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),'$ oc patch projects.config.openshift.io cluster --type=merge \\\n    -p "$(cat projects-config.patch.json)"\nproject.config.openshift.io/cluster patched\n'))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Log in as the non-admin ",Object(n.b)("strong",{parentName:"p"},"andrew")," user and attempt to create a project\nto verify that the project request message is active:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"$ oc login -u andrew -p 'r3dh4t1!'\nLogin successful.\n\nYou don't have any projects. Contact your system administrator to request a project.\n$ oc new-project test\nError from server (Forbidden): Please create project using the portal http://portal.company.internal/provision or PaaS Support at paas-support@example.com\n")),Object(n.b)("p",{parentName:"li"},"   If you do not see the full error message, wait a minute or two and try\nagain. It takes a little while for the operator to update the configuration\nafter the patch is applied."))),Object(n.b)("h3",null,"Allow Production Administrators to Create Projects"),Object(n.b)("p",null,"You configure the ",Object(n.b)("strong",{parentName:"p"},"ocp-production")," group that the LDAP group sync created\nso that its members can create projects."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Log in as the ",Object(n.b)("strong",{parentName:"p"},"alice")," cluster-admin user:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"$ oc login -u alice -p 'p4ssw0rd'\n... output omitted ...\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Use ",Object(n.b)("inlineCode",{parentName:"p"},"oc adm policy")," again, but this time add the cluster role of\n",Object(n.b)("strong",{parentName:"p"},"self-provisioner")," to the ",Object(n.b)("strong",{parentName:"p"},"ocp-production")," group:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"$ oc adm policy add-cluster-role-to-group self-provisioner ocp-production\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Log in to the system as the ",Object(n.b)("strong",{parentName:"p"},"karla")," user, a member of the\n",Object(n.b)("strong",{parentName:"p"},"ocp-production")," group:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"$ oc login -u karla -p 'r3dh4t1!'\nLogin successful.\n")),Object(n.b)("p",{parentName:"li"},"   You don’t have any projects. You can try to create a new project, by\nrunning:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"oc new-project <projectname>\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Attempt to create a project as the ",Object(n.b)("strong",{parentName:"p"},"karla")," user and verify that this is\nnow successful:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),'$ oc new-project test\nNow using project "test" on server "https://api.cluster-7ae9.sandbox134.opentlc.com:6443".\n')),Object(n.b)("p",{parentName:"li"},"   You can add applications to this project with the ",Object(n.b)("inlineCode",{parentName:"p"},"new-app")," command.\nFor example, try:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"oc new-app django-psql-example\n")),Object(n.b)("p",{parentName:"li"},"   to build a new example application in Python. Or use ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl")," to deploy a\nsimple Kubernetes application:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"kubectl create deployment hello-node --image=gcr.io/hello-minikube-zero-install/hello-node\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Remove the ",Object(n.b)("strong",{parentName:"p"},"test")," project:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),'$ oc delete project test\nproject.project.openshift.io "test" deleted\n')))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-day-2-user-user-rbac-index-mdx-6e549aef6742387b255e.js.map