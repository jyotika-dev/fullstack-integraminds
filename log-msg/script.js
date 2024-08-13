const buttons = [
    { id: "log", message: "This is a log message.", method: "log" },
    { id: "warn", message: "This is a warning message.", method: "warn" },
    { id: "error", message: "This is an error message.", method: "error" },
    { id: "info", message: "This is an informational message.", method: "info" },
    { id: "clear", message: "Console was cleared.", method: "clear" },
    { id: "assert", message: "This assertion failed!", method: "assert", assertCondition: false },
    {
        id: "table", message: [
            { name: "John", age: 23, city: "New York" },
            { name: "Jane", age: 34, city: "Chicago" },
            { name: "Mike", age: 45, city: "Los Angeles" }
        ], method: "table"
    },
    { id: "group", message: ["Message 1 in group", "Message 2 in group"], method: "group" },
    { id: "custom", message: "%cThis is a custom warning box!", method: "warn", style: "background: yellow; color: red; font-size: 16px; font-weight: bold; padding: 10px; border: 2px solid red; border-radius: 5px;" },
    { id: "404", message: "404: Resource not found.", method: "log" },
    { id: "cause", message: "Root cause analysis initiated.", method: "log" },
    { id: "violation", message: "Violation detected!", method: "log" }
];

buttons.forEach(button => {
    const btn = document.getElementById(button.id);
    if (btn) {
        btn.addEventListener("click", () => {
            switch (button.method) {
                case "log":
                    console.log(button.message);
                    break;
                case "warn":
                    console.warn(button.message, button.style || "");
                    break;
                case "error":
                    console.error(button.message);
                    break;
                case "info":
                    console.info(button.message);
                    break;
                case "clear":
                    console.clear();
                    console.log(button.message);
                    break;
                case "assert":
                    console.assert(button.assertCondition, button.message);
                    break;
                case "table":
                    console.table(button.message);
                    break;
                case "group":
                    console.group("Grouped Messages");
                    button.message.forEach(msg => console.log(msg));
                    console.groupEnd();
                    break;
                default:
                    console.log("Unknown method");
            }
        });
    }
});










// const button1 = document.getElementById("log");
// button1.addEventListener("click", () => {
//     console.log("Log Message");
// })
// const button2 = document.getElementById("warn");
// button2.addEventListener("click", () => {
//     console.log("Warning Message");
// })
// const button3 = document.getElementById("error");
// button3.addEventListener("click", () => {
//     console.log("Error Message");
// })
// const button4 = document.getElementById("info");
// button4.addEventListener("click", () => {
//     console.log("This is informational message");
// })
// const button5 = document.getElementById("clear");
// button5.addEventListener("click", () => {
//     console.log("Console was cleared");
// })
// const button6 = document.getElementById("assert");
// button6.addEventListener("click", () => {
//     console.assert(false, "This assertion failed!");
// })
// const button7 = document.getElementById("table");
// button7.addEventListener("click", () => {
//     console.table(
//         [
//             { name: "John", age: 23, city: "New York" },
//             { name: "Jane", age: 34, city: "Chicago" },
//             { name: "Mike", age: 45, city: "Los Angeles" }
//         ]
//     )
// })
// const button8 = document.getElementById("group");
// button8.addEventListener("click", () => {
//     console.group("Group Message");
//     console.log("Message 1 in Group");
//     console.log("Message 2 in Group");
//     console.groupEnd();
// })
// const button9 = document.getElementById("custom");
// button9.addEventListener("click", () => {
//     console.warn(
//         "%c⚠️ WARNING: This is a custom warning box!",
//         "background: yellow; color: red; font-size: 16px; font-weight: bold; padding: 10px; border: 2px solid red; border-radius: 5px;"
//     );
// })
// const button10 = document.getElementById("404");
// button10.addEventListener("click", () => {
//     console.log("404: Resource not found.");
// })
// const button11 = document.getElementById("cause");
// button11.addEventListener("click", () => {
//     console.log("Root cause analysis initiated.");
// })
// const button12 = document.getElementById("violation");
// button12.addEventListener("click", () => {
//     console.log("Violation detected!");
// })