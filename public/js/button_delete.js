const deleteButtons = document.getElementsByClassName("btn-delete");

const deleteTask = async function (taskId, removableTaskDeleteBtn) {
    const payload = {
        id: taskId,
    };
    const deletedFromDB = await fetch("/", {
        method: "DELETE",
        body: JSON.stringify(payload),
        headers: new Headers({ "Content-Type": "application/json" }),
    });
    console.log(deletedFromDB);
    location.reload();
};

Array.prototype.forEach.call(deleteButtons, (element) => {
    element.addEventListener("click", () => {
        deleteTask(element.parentNode.children[0].value, element);
    });
});
