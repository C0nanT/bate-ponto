chrome.contextMenus.create({
  id: "fillInputs",
  title: "Preencher Inputs",
  contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "fillInputs") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        const empInput = document.querySelector('input[name="emp"]');
        const usuInput = document.querySelector('input[name="usu"]');
        const cpfInput = document.querySelector('input[name="cpf"]');

        if (empInput) {
          empInput.value = "codigodaempresa";
        }

        if (usuInput) {
          usuInput.value = "cpf";
        }

        if (cpfInput) {
          cpfInput.value = "cpf";
        }
      },
    });
  }
});
