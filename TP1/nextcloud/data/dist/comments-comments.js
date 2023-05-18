/*! For license information please see comments-comments.js.LICENSE.txt */
!function(){var e={4921:function(){OCA.Comments.ActivityTabViewPlugin={prepareModelForDisplay:function(e,n,t){if("comments"===e.get("app")&&"comments"===e.get("type")&&"ActivityTabView"===t&&(n.addClass("comment"),e.get("message")&&this._isLong(e.get("message")))){n.addClass("collapsed");var o=$("<div>").addClass("message-overlay");n.find(".activitymessage").after(o),n.on("click",this._onClickCollapsedComment)}},_onClickCollapsedComment:function(e){var n=$(e.target);n.is(".comment")||(n=n.closest(".comment")),n.removeClass("collapsed")},_isLong:function(e){return e.length>250||(e.match(/\n/g)||[]).length>1}},OC.Plugins.register("OCA.Activity.RenderingPlugins",OCA.Comments.ActivityTabViewPlugin)},75387:function(){OCA.Comments||(OCA.Comments={})},57702:function(){_.extend(OC.Files.Client,{PROPERTY_COMMENTS_UNREAD:"{"+OC.Files.Client.NS_OWNCLOUD+"}comments-unread"}),OCA.Comments=_.extend({},OCA.Comments),OCA.Comments||(OCA.Comments={}),OCA.Comments.FilesPlugin={ignoreLists:["trashbin","files.public"],_formatCommentCount:function(e){return OCA.Comments.Templates.filesplugin({count:e,countMessage:n("comments","%n unread comment","%n unread comments",e),iconUrl:OC.imagePath("core","actions/comment")})},attach:function(e){var o=this;if(!(this.ignoreLists.indexOf(e.id)>=0)){var i=e._getWebdavProperties;e._getWebdavProperties=function(){var e=i.apply(this,arguments);return e.push(OC.Files.Client.PROPERTY_COMMENTS_UNREAD),e},e.filesClient.addFileInfoParser((function(e){var n={},t=e.propStat[0].properties[OC.Files.Client.PROPERTY_COMMENTS_UNREAD];return _.isUndefined(t)||""===t||(n.commentsUnread=parseInt(t,10)),n})),e.$el.addClass("has-comments");var s=e._createRow;e._createRow=function(e){var n=s.apply(this,arguments);return e.commentsUnread&&n.attr("data-comments-unread",e.commentsUnread),n},e.fileActions.registerAction({name:"Comment",displayName:function(e){if(e&&e.$file){var o=parseInt(e.$file.data("comments-unread"),10);if(o>=0)return n("comments","1 new comment","{unread} new comments",o,{unread:o})}return t("comments","Comment")},mime:"all",order:-140,iconClass:"icon-comment",permissions:OC.PERMISSION_READ,type:OCA.Files.FileActions.TYPE_INLINE,render:function(e,n,t){var i=t.$file.data("comments-unread");if(i){var s=$(o._formatCommentCount(i));return t.$file.find("a.name>span.fileactions").append(s),s}return""},actionHandler:function(e,n){n.$file.find(".action-comment").tooltip("hide"),OCA.Files.Sidebar.setActiveTab("comments"),OCA.Files.Sidebar.open(n.dir+"/"+e)}});var r=e.elementToFile;e.elementToFile=function(e){var n=r.apply(this,arguments),t=e.data("comments-unread");return t&&(n.commentsUnread=t),n}}}},OC.Plugins.register("OCA.Files.FileList",OCA.Comments.FilesPlugin)},4543:function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}var n;n=Handlebars.template,(OCA.Comments.Templates=OCA.Comments.Templates||{}).filesplugin=n({compiler:[8,">= 4.3.0"],main:function(n,t,o,i,s){var r,a=null!=t?t:n.nullContext||{},m=n.hooks.helperMissing,l="function",c=n.escapeExpression,u=n.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<a class="action action-comment permanent" title="'+c(e(r=null!=(r=u(o,"countMessage")||(null!=t?u(t,"countMessage"):t))?r:m)===l?r.call(a,{name:"countMessage",hash:{},data:s,loc:{start:{line:1,column:50},end:{line:1,column:66}}}):r)+'" href="#">\n\t<img class="svg" src="'+c(e(r=null!=(r=u(o,"iconUrl")||(null!=t?u(t,"iconUrl"):t))?r:m)===l?r.call(a,{name:"iconUrl",hash:{},data:s,loc:{start:{line:2,column:23},end:{line:2,column:34}}}):r)+'"/>\n</a>\n'},useData:!0})}},o={};function i(n){var t=o[n];if(void 0!==t)return t.exports;var s=o[n]={exports:{}};return e[n](s,s.exports,i),s.exports}i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,{a:n}),n},i.d=function(e,n){for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){"use strict";i(75387),i(4543),i(57702),i(4921),window.OCA.Comments=OCA.Comments}()}();
//# sourceMappingURL=comments-comments.js.map?v=ed7ca60a903b1c84a833