Handlebars.templates={};
Handlebars.templates.search = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "	<a href=\"/"
    + alias3(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"link","hash":{},"data":data}) : helper)))
    + "\">\r\n		<li>\r\n			<div class=\"left-result\">\r\n				<span class=\"title\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\r\n				<span class=\"page-title\">"
    + alias3(((helper = (helper = helpers.pageTitle || (depth0 != null ? depth0.pageTitle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"pageTitle","hash":{},"data":data}) : helper)))
    + "</span>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.device : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\r\n			<span class=\"tag "
    + alias3(((helper = (helper = helpers.collectionClass || (depth0 != null ? depth0.collectionClass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"collectionClass","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.collection || (depth0 != null ? depth0.collection : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"collection","hash":{},"data":data}) : helper)))
    + "</span>\r\n		</li>\r\n	</a>\r\n";
},"2":function(depth0,helpers,partials,data) {
    var helper;

  return "				<span class=\"device\">\r\n					<i class=\"im-devices-icon\"></i>\r\n					<span>"
    + this.escapeExpression(((helper = (helper = helpers.device || (depth0 != null ? depth0.device : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"device","hash":{},"data":data}) : helper)))
    + "</span>\r\n				</span>\r\n";
},"4":function(depth0,helpers,partials,data) {
    return "	<p class=\"no-results\">No results found :(</p>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"results\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.results : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "	<a>\r\n		<li>\r\n			<div class=\"left-note\">\r\n				<span class=\"note\">To narrow the search, preface your terms with section names like <b>faq:</b> or <b>guide:</b></span>\r\n			</div>\r\n		</li>\r\n	</a>\r\n</ul>";
},"useData":true});
