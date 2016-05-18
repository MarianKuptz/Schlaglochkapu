<<<<<<< HEAD
Blank HTML App Designer Template for Building Mobile Cordova Web Apps
=====================================================================

Copyright © 2012-2015, Intel Corporation. All rights reserved.

See [LICENSE.md](<LICENSE.md>) for license terms and conditions.

Use this template as a starting point for an Intel XDK App Designer project that
will be distributed as a *mobile Cordova web app*. The file named `init-dev.js`
included as part of this project contains init code that generates an
`app.Ready` event; which is used as a way to normalize how App Designer starts
its own code. This technique allows App Designer to use a standard init sequence
regardless of the specific package type (a *packaged web app* or a *Cordova web
app*).

The `icon.png` and `screenshot.png` files are not required by your project. They
are included for use by the Intel XDK template/demo panel and have no use within
a real app. You can safely delete them from your project directory.

You can build a *Cordova web app* from this template that can be submitted to a
store using the "Cordova Hybrid Mobile App Platforms" build tiles (for
Crosswalk, Android, iOS and Windows). The `intelxdk.config.additions.xml` file
can be used to include options that control your *Cordova web app* builds. For
example, you can enable remote debug of an Android or Crosswalk Cordova app with
Chrome DevTools by adding the appropriate preferences to this file.

The Intel XDK does not include a mechanism to convert your "Standard HTML5 +
Cordova Project" into a "Standard HTML5 Project." The simplest way to convert a
Cordova project into a Standard project is to create a new "Standard" project
from the appropriate template and copy your files from this project into that
new project.

The `cordova.js` script is needed to provide your app with access to Cordova
APIs. To add Cordova APIs to your application you must add the corresponding
Cordova plugins. See the *Plugins* section on the **Projects** tab.

**IMPORTANT:** the `intelxdk.js` and `xhr.js` script files are not automatically
included in this template, as they have been in past versions. Those files are
only needed for apps built using the legacy AppMobi build containers on the
**Build** tab, which have been deprecated. We encourage you to use the Cordova
containers for all new applications. These script files can be added by hand, if
you require them, as follows:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<script src="intelxdk.js"></script>
<script src="cordova.js"></script>
<script src="xhr.js"></script>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `xhr.js` file's purpose was to provide external domain access to your mobile
web app. In a Cordova web app this is controlled via the *Domain Access
Whitelist* in the *Build Settings* section of the **Projects** tab. For details
regarding how to specify your domain whitelist see this Cordova doc page:
<http://cordova.apache.org/docs/en/4.0.0/guide_appdev_whitelist_index.md.html#Whitelist%20Guide>
=======
Single View App
====================
This template can be used for simple application that has just one view, this template can be used for creating applications similar to Flash light app or Calculator app.

This basic HTML5 mobile app template is created using [Intel App Framework](https://github.com/01org/appframework), which is a free and open source Javascript framework targeted at HTML5 Mobile browsers with a blazingly fast query selector library and Mobile UI framework for creating app with native like UI and performance.

You can use Intel AppFramework to create __mobile web apps__ or create __hybrid apps__ using tools like [_Intel XDK_](http://xdk-software.intel.com/) or _Adobe Phonegap build_ to build native packaged apps.

App Framework has UI themes which look and feel similar to _iPhone_, _iPad_, _Android_, _Windows Phone_, _Blackberry 10_ and _Tizen_, the UI theme will be automatically applied by default when opened on these devices. Notice the screenshots below, the app code is same but the look and feel changes to match the device's native style.

![SingleViewApp](https://raw.github.com/gomobile/template-single-view/master/screenshot.png)

Intel(R) XDK
-------------------------------------------
This template is part of the Intel(R) XDK. 
Download the Intel XDK at http://software.intel.com/en-us/html5.
To see the technical detail of the template, please visit the article page 
at http://software.intel.com/en-us/html5/articles/templates-to-get-started-with-html5-mobile-app-development. 

Application Files
-----------------
* app.json
* index.html
* README.md
* app_framework/


App Framework (formerly jQ.Mobi)
-----------------------------------------------------------------------------
**This template uses App Framework 2.2. The latest version is App Framework 3.0.**

* source:  https://github.com/01org/appframework
* license: https://github.com/01org/appframework/blob/master/license.txt

>>>>>>> SchlaglochKapu/master
