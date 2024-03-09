const PassInput = document.querySelector("#inputPassworld");
const LenInput = document.querySelector("#inputlengthId");
const InfoLength = document.querySelector('label[for="inputlengthId"]');
const btnGerar = document.querySelector("#btnGerar");

const chkLower = document.querySelector("#chkLowerId");
const chkUpper = document.querySelector("#chkUpperId");
const chkNumber = document.querySelector("#chkNumberId");
const chkSymbols = document.querySelector("#chkSymbolsId");

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%"];

const caracters = Array.from(Array(26)).map((_, i) => i + 97);
const LowercaseCaracters = caracters.map((item) => String.fromCharCode(item));
const UppercaseCaracters = LowercaseCaracters.map((item) => item.toUpperCase());

InfoLength.innerHTML = LenInput.value;

LenInput.addEventListener("change", () => {
    InfoLength.innerHTML = LenInput.value;
});

btnGerar.addEventListener("click", () => {
    generatePassword(
        chkNumber.checked,
        chkSymbols.checked,
        chkLower.checked,
        chkUpper.checked,
        LenInput.value
    );
});

const generatePassword = (
    hasNumbers,
    hasSymbols,
    hasLowercase,
    hasUppercase,
    length
) => {
    const newArray = [
        ...(hasNumbers ? numbers : []),
        ...(hasSymbols ? symbols : []),
        ...(hasLowercase ? LowercaseCaracters : []),
        ...(hasUppercase ? UppercaseCaracters : []),
    ];



    if (newArray.length === 0) return;

    let passWord = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * newArray.length);
        passWord += newArray[randomIndex];
    }
    PassInput.value = passWord;
};