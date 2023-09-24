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

    class Equation {
        static Premier(A, B, C) {
            let result;
            A = Number(A);
            B = Number(B);
            C = Number(C);

            let equa = C - B;

            result = equa / A;

            return result.toFixed(2);
        }

        static Second(A, B, C, D) {
            let c = C;
            A = Number(A);
            B = Number(B);
            C = Number(C);
            D = Number(D);

            if (D !== 0) {
                C = C - D;
            }

            let discr = B * B - 4 * A * C;

            if (discr > 0) {
                let x1 = (-B - Math.sqrt(discr)) / (2 * A);
                let x2 = (-B + Math.sqrt(discr)) / (2 * A);
                return `${A}x²+${B}x+${c}=${D}(${A}x²+${B}x+${C}=0)<br>x1=${x1} x2=${x2}<br>Discriminant: ${discr}`;
            } else if (discr == 0) {
                let x = -B / (2 * A);
                return `${A}x²+${B}x+${c}=${D}(${A}x²+${B}x+${C}=0)<br>x=${x}<br>Discriminant: ${discr}`;
            } else {
                return `${A}x²+${B}x+${c}=${D}<br>Pas de solution pour x`;
            }
        }
    }

    class Puissance {
        constructor(num) {
            return {
                expo: function(expo) {
                    return Math.pow(num, expo);
                }
            }
        }
        static Resolve(num, expo) {
            return new Puissance(num).expo(expo)
        }
    }

    class Systeme {
        static two(a1, b1, c1, a2, b2, c2) {
            a1=Number();b1=Number(b1);c1=Number(c1);a2=Number(a2);b2=Number(b2);c2=Number(c2);
            let x = (c2*b1-c1*b2) / (a1*b2-a2*b1);
            let y = (c1-a1*x) / b1;

            return `Solution<br>x=${x} ; y=${y}`;
        }
    }

    this.Convertor = Convertor;
    this.Resistor = Resistor;
    this.Equation = Equation;
    this.Puissance = Puissance;
    this.Systeme = Systeme;
})(this);