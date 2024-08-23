chrome.contextMenus.create({
  id: "bateponto",
  title: "Bate Ponto",
  contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "bateponto") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        const empInput = document.querySelector('input[name="emp"]');
        const usuInput = document.querySelector('input[name="usu"]');
        const cpfInput = document.querySelector('input[name="cpf"]');
        const submitButton = document.querySelector('button[type="submit"]');

        if (empInput) {
          empInput.value = "codigodaempresa";
        }

        if (usuInput) {
          usuInput.value = "cpf";
        }

        if (cpfInput) {
          cpfInput.value = "cpf";
        }

        if (submitButton) {
          submitButton.click();
        }
      },
    });
  }
});
