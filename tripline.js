TL = function() {
    //document functions
    //document.getElementById
    this.dgebi = function (id) {
        console.log(document.getElementById(id));
    };
    
    //document.getElementsByTagName
    this.dgebtn = function(name) {
        return document.getElementsByTagName(name);   
    };
    
    //document.getElementsByName
    this.dgebn = function(name) {
        return document.getElementsByName(name);   
    };
    
    //document.createAttribute
    this.dca = function(attname) {
        return document.createAttribute(attname);  
    };
    
    //document.createComment
    this.dcc = function(text) {
        return document.createComment(text);   
    };
    
    //document.createElement
    this.dce = function(elname) {
        return document.createElement(elname);   
    };
    
    //document.createTextNode
    this.dctn = function(text) {
        return document.createTextNode(text);    
    };
    
    //document.getElementsByClassName - No IE support
    this.dgebcn = function(clas) {
        return document.getElementsByClassName(clas);
    };
    
    //window functions
    
    //alert
    this.wa = function(str) {
       return alert(str);    
    };
    
    //setTimeout()
    this.wst = function(code, millisec) {
        return setTimeout(code, millisec);
    };
    
    //blur
    this.blr = function() {
        return b();   
    };
    
    //confirm
    this.cnfrm = function(msg) {
        return confirm(msg);   
    };
    
    //focus
    this.fcs = function() {
        return focus();   
    };
    
    //moveTo(x,y)
    this.mvt = function(x, y) {
        return moveTo(x,y);
    };
    
    //moveby
    this.mvb = function(dx, dy) {
        return moveBy(dx, dy);
    };
    
    //open
    this.opn = function(url) {
        return open(url);   
    };
    
    //print
    this.pr = function() {
        return print();
    };
    
    //prompt
    this.prpt = function(msg, input) {
         input = typeof(input) != 'undefined' ? b : '';
         return prompt(msg, input);
    };
    
    //scrollBy
    this.scllb = function(dx, dy) {
        return scllb(dx, dy);   
    };
    
};