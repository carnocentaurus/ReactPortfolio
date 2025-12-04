// Calculator.tsx

import { type FC, useState } from "react";
import { type MathType, evaluate } from 'mathjs';
import { CalculatorBtn } from "../../layout/SharedStyles";


const Calculator: FC = () => {
    const [displayValue, setDisplayValue] = useState<string>("");

    function appendToDisplay(input: string): void {
        setDisplayValue(displayValue + input);
    }

    function pullFromDisplay(): void {
        // remove last digit
        setDisplayValue(String(displayValue).slice(0, -1));
    }

    function clearDisplay(): void {
        setDisplayValue("");
    }

    function calculate(): void {
        try {
            // MathType: (mathjs special types like Complex, BigNumber, etc.)
            const result: number | MathType = evaluate(displayValue);

            // make sure its a number and not infinite or NaN
            if (typeof result === "number" && isFinite(result)) {
                //  // if true: converts the number to a string and updates the display
                setDisplayValue(result.toString());
            }
            else {
                setDisplayValue("Error");
            }
        }
        catch (error) {
            setDisplayValue("Error");
        }
    }

    return(
        <main className="
            bg-[#a3a3a3]
            border-2 sm:border-3 lg:border-2
            border-[#333]
            py-8 sm:py-13 lg:py-8
            px-6 sm:px-9 lg:px-6
            mt-10 sm:mt-20 lg:mt-10
            rounded-2xl sm:rounded-3xl lg:rounded-2xl
        ">
            <input value={displayValue} readOnly className="
                font-poppins
                font-semibold
                tracking-widest
                bg-[lime]
                h-15 sm:h-20 lg:h-15
                w-60 sm:w-95 lg:w-60
                mb-7 sm:mb-10 lg:mb-7
                px-3 sm:px-5 lg:px-3
                text-2xl sm:text-4xl lg:text-2xl
                text-[#333]
                border-2 sm:border-3 lg:border-2
                border-[#333]
            "/>

            <div className="
                grid
                justify-between
                grid-rows-5
                grid-cols-4
                gap-y-3 sm:gap-y-5 lg:gap-y-3
                gap-x-3 sm:gap-x-5 lg:gap-x-3
                w-60 sm:w-95 lg:w-60
                max-w-60 sm:max-w-95 lg:max-w-60
            ">
                <CalculatorBtn onClick={() => appendToDisplay("+")} className="bg-[#710193]">+</CalculatorBtn>
                <CalculatorBtn onClick={() => appendToDisplay("0")} className="bg-[dodgerblue]">0</CalculatorBtn>
                <CalculatorBtn onClick={() => appendToDisplay("1")} className="bg-[dodgerblue]">1</CalculatorBtn>
                <CalculatorBtn onClick={() => appendToDisplay("2")} className="bg-[dodgerblue]">2</CalculatorBtn>
                <CalculatorBtn onClick={() => appendToDisplay("-")} className="bg-[#710193]">-</CalculatorBtn>
                <CalculatorBtn onClick={() => appendToDisplay("3")} className="bg-[dodgerblue]">3</CalculatorBtn>
                <CalculatorBtn onClick={() => appendToDisplay("4")} className="bg-[dodgerblue]">4</CalculatorBtn>
                <CalculatorBtn onClick={() => appendToDisplay("5")} className="bg-[dodgerblue]">5</CalculatorBtn>
                <CalculatorBtn onClick={() => appendToDisplay("*")} className="bg-[#710193]">x</CalculatorBtn>
                <CalculatorBtn onClick={() => appendToDisplay("6")} className="bg-[dodgerblue]">6</CalculatorBtn>
                <CalculatorBtn onClick={() => appendToDisplay("7")} className="bg-[dodgerblue]">7</CalculatorBtn>
                <CalculatorBtn onClick={() => appendToDisplay("8")} className="bg-[dodgerblue]">8</CalculatorBtn>
                <CalculatorBtn onClick={() => appendToDisplay("/")} className="bg-[#710193]">&divide;</CalculatorBtn>
                <CalculatorBtn onClick={() => appendToDisplay("9")} className="bg-[dodgerblue]">9</CalculatorBtn>

                <CalculatorBtn onClick={clearDisplay} className="bg-[crimson]">AC</CalculatorBtn>
                <CalculatorBtn onClick={pullFromDisplay} className="bg-[crimson]">&#x232B;</CalculatorBtn>

                <CalculatorBtn onClick={() => appendToDisplay("(")} className="bg-[orange]">(</CalculatorBtn>
                <CalculatorBtn onClick={() => appendToDisplay(")")} className="bg-[orange]">)</CalculatorBtn>
                <CalculatorBtn onClick={() => appendToDisplay(".")} className="bg-[brown]">.</CalculatorBtn>

                <CalculatorBtn onClick={calculate} className="bg-[#006400]">=</CalculatorBtn>
            </div>
        </main>
    );
}


export default Calculator;