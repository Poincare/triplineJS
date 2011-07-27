TL = function() {
    //document functions
    //document.getElementById
    this.dgebi = function (id) {
        return document.getElementById(id);
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
        document.getElementsByClassName(clas);
    };
    
};