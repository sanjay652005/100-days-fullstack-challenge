
    let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [
      { question: "What is HTML?", answer: "A markup language for creating web pages." },
      { question: "What is CSS?", answer: "A style sheet language for designing web pages." },
      { question: "What is JavaScript?", answer: "A scripting language for web interactivity." },
    ];
    let current = 0;

    const card = document.getElementById("card");
    const questionEl = document.getElementById("question");
    const answerEl = document.getElementById("answer");
    const progressEl = document.getElementById("progress");

    const popup = document.getElementById("popup");
    const newQuestion = document.getElementById("newQuestion");
    const newAnswer = document.getElementById("newAnswer");

    function updateCard() {
      questionEl.textContent = flashcards[current].question;
      answerEl.textContent = flashcards[current].answer;
      progressEl.textContent = `Card ${current + 1} of ${flashcards.length}`;
    }

    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    document.getElementById("next").addEventListener("click", () => {
      current = (current + 1) % flashcards.length;
      card.classList.remove("flipped");
      updateCard();
    });

    document.getElementById("prev").addEventListener("click", () => {
      current = (current - 1 + flashcards.length) % flashcards.length;
      card.classList.remove("flipped");
      updateCard();
    });

    document.getElementById("shuffle").addEventListener("click", () => {
      flashcards.sort(() => Math.random() - 0.5);
      current = 0;
      updateCard();
    });

    document.getElementById("add").addEventListener("click", () => {
      popup.style.display = "flex";
    });

    document.getElementById("cancel").addEventListener("click", () => {
      popup.style.display = "none";
    });

    document.getElementById("save").addEventListener("click", () => {
      const q = newQuestion.value.trim();
      const a = newAnswer.value.trim();
      if (q && a) {
        flashcards.push({ question: q, answer: a });
        localStorage.setItem("flashcards", JSON.stringify(flashcards));
        newQuestion.value = "";
        newAnswer.value = "";
        popup.style.display = "none";
        updateCard();
      }
    });

    updateCard();
 
