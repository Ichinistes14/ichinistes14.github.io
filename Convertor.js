(function(){
    var Convertor = function (num) {
        return {
            from: function(baseFrom) {
                return {
                    to: function(baseTo) {
                        return parseInt(num, baseFrom).toString(baseTo).toUpperCase();
                    }
                };
            }
        };
    };

    Convertor.BinToDec = function(num) {
        return Convertor(num).from(2).to(10);
    }

    Convertor.BinToHex = function(num) {
        return Convertor(num).from(2).to(16);
    }

    Convertor.DecToBin = function(num) {
        return Convertor(num).from(10).to(2);
    }

    Convertor.DecToHex = function(num) {
        return Convertor(num).from(10).to(16);
    }

    Convertor.HexToBin = function(num) {
        return Convertor(num).from(16).to(2);
    }

    Convertor.HexToDec = function(num) {
        return Convertor(num).from(16).to(10);
    }

    this.Convertor = Convertor;
})(this);