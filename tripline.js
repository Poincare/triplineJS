var TL = function() {
    //document functions
    this.d_gebi = document.getElementById;
    
    this.d_gebtn = document.getElementsByTagName;
    
    this.d_w = document.write;
    
    this.d_ce = document.createElement;
    
    this.d_ctn = document.createTextNode;
    
    this.d_ac = document.appendChild;
    
    this.d_o = document.open;
    
    this.d_ca = document.createAttribute;
    
    this.d_cdf = document.createDocumentFragment;
    
    this.d_efp = document.elementFromPoint;
    
    this.d_gebn = document.getElementsByName;
    
    //window functions
    this.a = alert;
    
    this.f = focus;
    
    this.o = open;
    
    this.pr = print;
    
    this.stin = setInterval;
    
    this.cnfm = confirm;
    
    this.fd = find;
    
    this.st = scrollTo;
    
    this.sb = scrollBy;
    
    this.stt = setTimeout;
    
    this.s = stop;
    
    //Array functions
    this.addArrayFunctions = function() {
        Array.prototype.cct = Array.prototype.concat;
        
        Array.prototype.jn = Array.prototype.join;
        
        Array.prototype.pp = Array.prototype.pop;
        
        Array.prototype.pu = Array.prototype.push;
        
        Array.prototype.rev = Array.prototype.reverse;
        
        Array.prototype.sh = Array.prototype.shift;
        
        Array.prototype.sl = Array.prototype.slice;
        
        Array.prototype.so = Array.prototype.sort;
        
        Array.prototype.spl = Array.prototype.splice;
        
        Array.prototype.toS = Array.prototype.toString;
        
        Array.prototype.unsh = Array.prototype.unshift;
        
        Array.prototype.valof = Array.prototype.valueOf;
    };
};

var _ = new TL();