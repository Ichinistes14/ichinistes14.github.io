(function(){
    class Convertor {
        constructor(num) {
            return {
                from: function (baseFrom) {
                    return {
                        to: function (baseTo) {
                            return parseInt(num, baseFrom).toString(baseTo).toUpperCase();
                        }
                    };
                }
            };
        }
        static BinToDec(num) {
            return new Convertor(num).from(2).to(10);
        }
        static BinToHex(num) {
            return new Convertor(num).from(2).to(16);
        }
        static DecToBin(num) {
            return new Convertor(num).from(10).to(2);
        }
        static DecToHex(num) {
            return new Convertor(num).from(10).to(16);
        }
        static HexToBin(num) {
            return new Convertor(num).from(16).to(2);
        }
        static HexToDec(num) {
            return new Convertor(num).from(16).to(10);
        }
    }

    class Resistor {
        static Resolve(R1, R2, R3) {
            let result;
            R1 = Number(R1);
            R2 = Number(R2);
            R3 = Number(R3);

            if (R1 > 0 && R2 > 0 && R3 > 0) {
                result = ((((R1*R2) / (R1 + R2)) * R3) / (((R1*R2) / (R1 + R2)) + R3));
            } else if (R1 > 0 && R2 > 0) {
                result = ((R1 * R2) / (R1 + R2));
            } else {
                return 0;
            }

            return result.toFixed(1);
        }
    }

    this.Convertor = Convertor;
    this.Resistor = Resistor;
})(this);