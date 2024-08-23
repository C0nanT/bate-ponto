document
  .getElementById("meuBotao")
  .addEventListener("click", async function () {
    const bateponto = () => {
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
    };

    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: bateponto,
    });
  });
