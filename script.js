/* =========================================================
   BẢNG TUẦN HOÀN HÓA HỌC - 118 NGUYÊN TỐ
========================================================= */


/* =========================================================
   1. DỮ LIỆU BẢNG CHÍNH

   qr: ""  => chưa có QR
========================================================= */

const elements = [

    // ===== CHU KỲ 1 =====

    { number: 1, symbol: "H", name: "Hydrogen", row: 1, column: 1, category: "nonmetal", qr: "" },
    { number: 2, symbol: "He", name: "Helium", row: 1, column: 18, category: "noble", qr: "" },


    // ===== CHU KỲ 2 =====

    { number: 3, symbol: "Li", name: "Lithium", row: 2, column: 1, category: "alkali", qr: "" },
    { number: 4, symbol: "Be", name: "Beryllium", row: 2, column: 2, category: "alkaline", qr: "" },

    { number: 5, symbol: "B", name: "Boron", row: 2, column: 13, category: "metalloid", qr: "" },
    { number: 6, symbol: "C", name: "Carbon", row: 2, column: 14, category: "nonmetal", qr: "" },
    { number: 7, symbol: "N", name: "Nitrogen", row: 2, column: 15, category: "nonmetal", qr: "" },
    { number: 8, symbol: "O", name: "Oxygen", row: 2, column: 16, category: "nonmetal", qr: "" },
    { number: 9, symbol: "F", name: "Fluorine", row: 2, column: 17, category: "halogen", qr: "" },
    { number: 10, symbol: "Ne", name: "Neon", row: 2, column: 18, category: "noble", qr: "" },


    // ===== CHU KỲ 3 =====

    { number: 11, symbol: "Na", name: "Sodium", row: 3, column: 1, category: "alkali", qr: "" },
    { number: 12, symbol: "Mg", name: "Magnesium", row: 3, column: 2, category: "alkaline", qr: "" },

    { number: 13, symbol: "Al", name: "Aluminium", row: 3, column: 13, category: "post-transition", qr: "" },
    { number: 14, symbol: "Si", name: "Silicon", row: 3, column: 14, category: "metalloid", qr: "" },
    { number: 15, symbol: "P", name: "Phosphorus", row: 3, column: 15, category: "nonmetal", qr: "" },
    { number: 16, symbol: "S", name: "Sulfur", row: 3, column: 16, category: "nonmetal", qr: "" },
    { number: 17, symbol: "Cl", name: "Chlorine", row: 3, column: 17, category: "halogen", qr: "" },
    { number: 18, symbol: "Ar", name: "Argon", row: 3, column: 18, category: "noble", qr: "" },


    // ===== CHU KỲ 4 =====

    { number: 19, symbol: "K", name: "Potassium", row: 4, column: 1, category: "alkali", qr: "" },
    { number: 20, symbol: "Ca", name: "Calcium", row: 4, column: 2, category: "alkaline", qr: "" },

    { number: 21, symbol: "Sc", name: "Scandium", row: 4, column: 3, category: "transition", qr: "" },
    { number: 22, symbol: "Ti", name: "Titanium", row: 4, column: 4, category: "transition", qr: "" },
    { number: 23, symbol: "V", name: "Vanadium", row: 4, column: 5, category: "transition", qr: "" },
    { number: 24, symbol: "Cr", name: "Chromium", row: 4, column: 6, category: "transition", qr: "" },
    { number: 25, symbol: "Mn", name: "Manganese", row: 4, column: 7, category: "transition", qr: "" },
    { number: 26, symbol: "Fe", name: "Iron", row: 4, column: 8, category: "transition", qr: "" },
    { number: 27, symbol: "Co", name: "Cobalt", row: 4, column: 9, category: "transition", qr: "" },
    { number: 28, symbol: "Ni", name: "Nickel", row: 4, column: 10, category: "transition", qr: "" },
    { number: 29, symbol: "Cu", name: "Copper", row: 4, column: 11, category: "transition", qr: "" },
    { number: 30, symbol: "Zn", name: "Zinc", row: 4, column: 12, category: "transition", qr: "" },

    { number: 31, symbol: "Ga", name: "Gallium", row: 4, column: 13, category: "post-transition", qr: "" },
    { number: 32, symbol: "Ge", name: "Germanium", row: 4, column: 14, category: "metalloid", qr: "" },
    { number: 33, symbol: "As", name: "Arsenic", row: 4, column: 15, category: "metalloid", qr: "" },
    { number: 34, symbol: "Se", name: "Selenium", row: 4, column: 16, category: "nonmetal", qr: "" },
    { number: 35, symbol: "Br", name: "Bromine", row: 4, column: 17, category: "halogen", qr: "" },
    { number: 36, symbol: "Kr", name: "Krypton", row: 4, column: 18, category: "noble", qr: "" },


    // ===== CHU KỲ 5 =====

    { number: 37, symbol: "Rb", name: "Rubidium", row: 5, column: 1, category: "alkali", qr: "" },
    { number: 38, symbol: "Sr", name: "Strontium", row: 5, column: 2, category: "alkaline", qr: "" },

    { number: 39, symbol: "Y", name: "Yttrium", row: 5, column: 3, category: "transition", qr: "" },
    { number: 40, symbol: "Zr", name: "Zirconium", row: 5, column: 4, category: "transition", qr: "" },
    { number: 41, symbol: "Nb", name: "Niobium", row: 5, column: 5, category: "transition", qr: "" },
    { number: 42, symbol: "Mo", name: "Molybdenum", row: 5, column: 6, category: "transition", qr: "" },
    { number: 43, symbol: "Tc", name: "Technetium", row: 5, column: 7, category: "transition", qr: "" },
    { number: 44, symbol: "Ru", name: "Ruthenium", row: 5, column: 8, category: "transition", qr: "" },
    { number: 45, symbol: "Rh", name: "Rhodium", row: 5, column: 9, category: "transition", qr: "" },
    { number: 46, symbol: "Pd", name: "Palladium", row: 5, column: 10, category: "transition", qr: "" },
    { number: 47, symbol: "Ag", name: "Silver", row: 5, column: 11, category: "transition", qr: "" },
    { number: 48, symbol: "Cd", name: "Cadmium", row: 5, column: 12, category: "transition", qr: "" },

    { number: 49, symbol: "In", name: "Indium", row: 5, column: 13, category: "post-transition", qr: "" },
    { number: 50, symbol: "Sn", name: "Tin", row: 5, column: 14, category: "post-transition", qr: "" },
    { number: 51, symbol: "Sb", name: "Antimony", row: 5, column: 15, category: "metalloid", qr: "" },
    { number: 52, symbol: "Te", name: "Tellurium", row: 5, column: 16, category: "metalloid", qr: "" },
    { number: 53, symbol: "I", name: "Iodine", row: 5, column: 17, category: "halogen", qr: "" },
    { number: 54, symbol: "Xe", name: "Xenon", row: 5, column: 18, category: "noble", qr: "" },


    // ===== CHU KỲ 6 =====

    { number: 55, symbol: "Cs", name: "Caesium", row: 6, column: 1, category: "alkali", qr: "" },
    { number: 56, symbol: "Ba", name: "Barium", row: 6, column: 2, category: "alkaline", qr: "" },

    { number: 72, symbol: "Hf", name: "Hafnium", row: 6, column: 4, category: "transition", qr: "" },
    { number: 73, symbol: "Ta", name: "Tantalum", row: 6, column: 5, category: "transition", qr: "" },
    { number: 74, symbol: "W", name: "Tungsten", row: 6, column: 6, category: "transition", qr: "" },
    { number: 75, symbol: "Re", name: "Rhenium", row: 6, column: 7, category: "transition", qr: "" },
    { number: 76, symbol: "Os", name: "Osmium", row: 6, column: 8, category: "transition", qr: "" },
    { number: 77, symbol: "Ir", name: "Iridium", row: 6, column: 9, category: "transition", qr: "" },
    { number: 78, symbol: "Pt", name: "Platinum", row: 6, column: 10, category: "transition", qr: "" },
    { number: 79, symbol: "Au", name: "Gold", row: 6, column: 11, category: "transition", qr: "" },
    { number: 80, symbol: "Hg", name: "Mercury", row: 6, column: 12, category: "transition", qr: "" },

    { number: 81, symbol: "Tl", name: "Thallium", row: 6, column: 13, category: "post-transition", qr: "" },
    { number: 82, symbol: "Pb", name: "Lead", row: 6, column: 14, category: "post-transition", qr: "" },
    { number: 83, symbol: "Bi", name: "Bismuth", row: 6, column: 15, category: "post-transition", qr: "" },
    { number: 84, symbol: "Po", name: "Polonium", row: 6, column: 16, category: "post-transition", qr: "" },
    { number: 85, symbol: "At", name: "Astatine", row: 6, column: 17, category: "halogen", qr: "" },
    { number: 86, symbol: "Rn", name: "Radon", row: 6, column: 18, category: "noble", qr: "" },


    // ===== CHU KỲ 7 =====

    { number: 87, symbol: "Fr", name: "Francium", row: 7, column: 1, category: "alkali", qr: "" },
    { number: 88, symbol: "Ra", name: "Radium", row: 7, column: 2, category: "alkaline", qr: "" },

    { number: 104, symbol: "Rf", name: "Rutherfordium", row: 7, column: 4, category: "transition", qr: "" },
    { number: 105, symbol: "Db", name: "Dubnium", row: 7, column: 5, category: "transition", qr: "" },
    { number: 106, symbol: "Sg", name: "Seaborgium", row: 7, column: 6, category: "transition", qr: "" },
    { number: 107, symbol: "Bh", name: "Bohrium", row: 7, column: 7, category: "transition", qr: "" },
    { number: 108, symbol: "Hs", name: "Hassium", row: 7, column: 8, category: "transition", qr: "" },
    { number: 109, symbol: "Mt", name: "Meitnerium", row: 7, column: 9, category: "transition", qr: "" },
    { number: 110, symbol: "Ds", name: "Darmstadtium", row: 7, column: 10, category: "transition", qr: "" },
    { number: 111, symbol: "Rg", name: "Roentgenium", row: 7, column: 11, category: "transition", qr: "" },
    { number: 112, symbol: "Cn", name: "Copernicium", row: 7, column: 12, category: "transition", qr: "" },

    { number: 113, symbol: "Nh", name: "Nihonium", row: 7, column: 13, category: "post-transition", qr: "" },
    { number: 114, symbol: "Fl", name: "Flerovium", row: 7, column: 14, category: "post-transition", qr: "" },
    { number: 115, symbol: "Mc", name: "Moscovium", row: 7, column: 15, category: "post-transition", qr: "" },
    { number: 116, symbol: "Lv", name: "Livermorium", row: 7, column: 16, category: "post-transition", qr: "" },
    { number: 117, symbol: "Ts", name: "Tennessine", row: 7, column: 17, category: "halogen", qr: "" },
    { number: 118, symbol: "Og", name: "Oganesson", row: 7, column: 18, category: "noble", qr: "" }

];


/* =========================================================
   2. HỌ LANTAN
========================================================= */

const lanthanides = [

    { number: 57, symbol: "La", name: "Lanthanum", category: "lanthanide", qr: "" },
    { number: 58, symbol: "Ce", name: "Cerium", category: "lanthanide", qr: "" },
    { number: 59, symbol: "Pr", name: "Praseodymium", category: "lanthanide", qr: "" },
    { number: 60, symbol: "Nd", name: "Neodymium", category: "lanthanide", qr: "" },
    { number: 61, symbol: "Pm", name: "Promethium", category: "lanthanide", qr: "" },
    { number: 62, symbol: "Sm", name: "Samarium", category: "lanthanide", qr: "" },
    { number: 63, symbol: "Eu", name: "Europium", category: "lanthanide", qr: "" },
    { number: 64, symbol: "Gd", name: "Gadolinium", category: "lanthanide", qr: "" },
    { number: 65, symbol: "Tb", name: "Terbium", category: "lanthanide", qr: "" },
    { number: 66, symbol: "Dy", name: "Dysprosium", category: "lanthanide", qr: "" },
    { number: 67, symbol: "Ho", name: "Holmium", category: "lanthanide", qr: "" },
    { number: 68, symbol: "Er", name: "Erbium", category: "lanthanide", qr: "" },
    { number: 69, symbol: "Tm", name: "Thulium", category: "lanthanide", qr: "" },
    { number: 70, symbol: "Yb", name: "Ytterbium", category: "lanthanide", qr: "" },
    { number: 71, symbol: "Lu", name: "Lutetium", category: "lanthanide", qr: "" }

];


/* =========================================================
   3. HỌ ACTINI
========================================================= */

const actinides = [

    { number: 89, symbol: "Ac", name: "Actinium", category: "actinide", qr: "" },
    { number: 90, symbol: "Th", name: "Thorium", category: "actinide", qr: "" },
    { number: 91, symbol: "Pa", name: "Protactinium", category: "actinide", qr: "" },
    { number: 92, symbol: "U", name: "Uranium", category: "actinide", qr: "" },
    { number: 93, symbol: "Np", name: "Neptunium", category: "actinide", qr: "" },
    { number: 94, symbol: "Pu", name: "Plutonium", category: "actinide", qr: "" },
    { number: 95, symbol: "Am", name: "Americium", category: "actinide", qr: "" },
    { number: 96, symbol: "Cm", name: "Curium", category: "actinide", qr: "" },
    { number: 97, symbol: "Bk", name: "Berkelium", category: "actinide", qr: "" },
    { number: 98, symbol: "Cf", name: "Californium", category: "actinide", qr: "" },
    { number: 99, symbol: "Es", name: "Einsteinium", category: "actinide", qr: "" },
    { number: 100, symbol: "Fm", name: "Fermium", category: "actinide", qr: "" },
    { number: 101, symbol: "Md", name: "Mendelevium", category: "actinide", qr: "" },
    { number: 102, symbol: "No", name: "Nobelium", category: "actinide", qr: "" },
    { number: 103, symbol: "Lr", name: "Lawrencium", category: "actinide", qr: "" }

];


/* =========================================================
   4. LẤY CÁC THÀNH PHẦN HTML
========================================================= */

const table =
    document.getElementById("periodic-table");

const fBlock =
    document.getElementById("f-block");

const groupNumbers =
    document.getElementById("group-numbers");

const modal =
    document.getElementById("element-modal");

const modalNumber =
    document.getElementById("modal-number");

const modalSymbol =
    document.getElementById("modal-symbol");

const modalName =
    document.getElementById("modal-name");

const qrArea =
    document.getElementById("qr-area");

const closeModalButton =
    document.getElementById("close-modal");


/* =========================================================
   5. TẠO SỐ NHÓM 1 → 18
========================================================= */

for (let i = 1; i <= 18; i++) {

    const number =
        document.createElement("span");

    number.className =
        "group-number";

    number.textContent = i;

    groupNumbers.appendChild(number);

}


/* =========================================================
   6. HÀM TẠO Ô NGUYÊN TỐ
========================================================= */

function createElementBox(element) {

    const box =
        document.createElement("div");


    box.classList.add(
        "element",
        element.category
    );


    /*
       Cho phép dùng phím Tab
       và Enter trên máy tính.
    */

    box.setAttribute(
        "tabindex",
        "0"
    );


    box.setAttribute(
        "role",
        "button"
    );


    box.setAttribute(
        "aria-label",
        `${element.name}, ký hiệu ${element.symbol}, số hiệu nguyên tử ${element.number}`
    );


    box.innerHTML = `

        <span class="atomic-number">
            ${element.number}
        </span>

        <span class="symbol">
            ${element.symbol}
        </span>

        <span class="name">
            ${element.name}
        </span>

    `;


    /* CLICK / TAP */

    box.addEventListener(
        "click",
        () => openElement(element)
    );


    /* ENTER / SPACE */

    box.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                openElement(element);

            }

        }
    );


    return box;
}


/* =========================================================
   7. TẠO BẢNG CHÍNH
========================================================= */

elements.forEach(element => {

    const box =
        createElementBox(element);


    box.style.gridRow =
        element.row;


    box.style.gridColumn =
        element.column;


    table.appendChild(box);

});


/* =========================================================
   8. Ô 57–71 *
========================================================= */

const lanthanidePlaceholder =
    document.createElement("div");


lanthanidePlaceholder.classList.add(
    "series-placeholder",
    "lanthanide"
);


lanthanidePlaceholder.style.gridRow = 6;
lanthanidePlaceholder.style.gridColumn = 3;


lanthanidePlaceholder.innerHTML = `

    <strong>57–71</strong>

    <span>*</span>

`;


table.appendChild(
    lanthanidePlaceholder
);


/* =========================================================
   9. Ô 89–103 **
========================================================= */

const actinidePlaceholder =
    document.createElement("div");


actinidePlaceholder.classList.add(
    "series-placeholder",
    "actinide"
);


actinidePlaceholder.style.gridRow = 7;
actinidePlaceholder.style.gridColumn = 3;


actinidePlaceholder.innerHTML = `

    <strong>89–103</strong>

    <span>**</span>

`;


table.appendChild(
    actinidePlaceholder
);


/* =========================================================
   10. TẠO HỌ LANTAN
========================================================= */

lanthanides.forEach(
    (element, index) => {

        const box =
            createElementBox(element);


        box.style.gridRow = 1;

        box.style.gridColumn =
            index + 1;


        fBlock.appendChild(box);

    }
);


/* =========================================================
   11. TẠO HỌ ACTINI
========================================================= */

actinides.forEach(
    (element, index) => {

        const box =
            createElementBox(element);


        box.style.gridRow = 2;

        box.style.gridColumn =
            index + 1;


        fBlock.appendChild(box);

    }
);


/* =========================================================
   12. MỞ POPUP
========================================================= */

function openElement(element) {

    /*
       Đây chỉ là phần nhận biết
       nguyên tố đang được chọn.

       KHÔNG phải nội dung chi tiết.
    */

    modalNumber.textContent =
        element.number;

    modalSymbol.textContent =
        element.symbol;

    modalName.textContent =
        element.name;


    /*
       Xóa QR cũ trước.
    */

    qrArea.innerHTML = "";


    /*
       =============================================

       NẾU CHƯA CÓ QR:

       qr: ""

       => ô này để trống.


       NẾU CÓ QR:

       qr: "qr/O.png"

       => ảnh QR tự xuất hiện.

       =============================================
    */

    if (
        element.qr &&
        element.qr.trim() !== ""
    ) {

        const qrImage =
            document.createElement("img");


        qrImage.src =
            element.qr;


        qrImage.alt =
            `Mã QR của ${element.name}`;


        /*
           Nếu gõ sai tên ảnh QR,
           ảnh lỗi sẽ không hiện.
        */

        qrImage.addEventListener(
            "error",
            () => {

                qrImage.remove();

            }
        );


        qrArea.appendChild(
            qrImage
        );

    }


    modal.classList.add(
        "show"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    closeModalButton.focus();

}


/* =========================================================
   13. ĐÓNG POPUP
========================================================= */

function closeModal() {

    modal.classList.remove(
        "show"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* nút X */

closeModalButton.addEventListener(
    "click",
    closeModal
);


/* bấm vùng tối bên ngoài */

modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            closeModal();

        }

    }
);


/* phím ESC */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("show")
        ) {

            closeModal();

        }

    }
);