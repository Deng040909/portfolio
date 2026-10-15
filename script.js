const modalContent = {
  tech: {
    title: "Tech Stack & Tools",
    body: `
      <p style="font-size: 12px; color: var(--text-secondary); margin-bottom: 6px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Frontend & UI</p>
      <div class="pill-row" style="margin-bottom: 14px;">
        <span class="pill">Java Swing</span>
        <span class="pill">Canva</span>
      </div>

      <p style="font-size: 12px; color: var(--text-secondary); margin-bottom: 6px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Backend</p>
      <div class="pill-row" style="margin-bottom: 14px;">
        <span class="pill">Java</span>
        <span class="pill">C#</span>
        <span class="pill">Python</span>
      </div>

      <p style="font-size: 12px; color: var(--text-secondary); margin-bottom: 6px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Databases</p>
      <div class="pill-row" style="margin-bottom: 14px;">
        <span class="pill">T-SQL</span>
        <span class="pill">MongoDB</span>
        <span class="pill">SQL</span>
      </div>

      <p style="font-size: 12px; color: var(--text-secondary); margin-bottom: 6px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Tools & Workflow</p>
      <div class="pill-row">
        <span class="pill">Git</span>
        <span class="pill">Docker</span>
        <span class="pill">VS Code</span>
        <span class="pill">Algorithm Analysis</span>
      </div>
    `
  },
  projects: {
    title: "Recent Projects",
    body: `
      <p><strong style="color:var(--text-primary);">StudyMate</strong> — Student productivity app proposal covering five modules: Dashboard, Schedule, Planner, Notes, and Grades.</p>
      <p style="margin-top:10px;"><strong style="color:var(--text-primary);">Instagram-Style Java Swing App</strong> — GUI built around for-loops, event listeners, and circular avatar rendering.</p>
      <p style="margin-top:10px;"><strong style="color:var(--text-primary);">Java Swing Calculator</strong> — Working calculator with cleaned-up number formatting and cross-platform rendering fixes.</p>
    `
  },
 experience: {
    title: "Experience",
    body: `
      <div style="margin-bottom: 16px;">
        <strong style="color: var(--text-primary); font-size: 15px;">Senior Backend Engineer</strong>
        <p style="font-size: 12px; color: var(--text-secondary); margin-top: 2px;">Nomad Finance · 2023 – Present</p>
        <p style="margin-top: 6px; font-size: 13.5px; line-height: 1.5;">Leading the payments infrastructure team across Lagos and Berlin.</p>
      </div>

      <div style="margin-bottom: 16px; border-top: 1px solid var(--border-color, rgba(255,255,255,0.1)); padding-top: 12px;">
        <strong style="color: var(--text-primary); font-size: 15px;">Backend Engineer</strong>
        <p style="font-size: 12px; color: var(--text-secondary); margin-top: 2px;">Cowrywise · 2021 – 2023</p>
        <p style="margin-top: 6px; font-size: 13.5px; line-height: 1.5;">Built the savings and investment ledger from the ground up.</p>
      </div>

      <div style="margin-bottom: 16px; border-top: 1px solid var(--border-color, rgba(255,255,255,0.1)); padding-top: 12px;">
        <strong style="color: var(--text-primary); font-size: 15px;">Software Engineer</strong>
        <p style="font-size: 12px; color: var(--text-secondary); margin-top: 2px;">Andela · 2019 – 2021</p>
        <p style="margin-top: 6px; font-size: 13.5px; line-height: 1.5;">Embedded with a US client team shipping logistics tooling.</p>
      </div>

      <div style="border-top: 1px solid var(--border-color, rgba(255,255,255,0.1)); padding-top: 12px;">
        <strong style="color: var(--text-primary); font-size: 15px;">Junior Developer</strong>
        <p style="font-size: 12px; color: var(--text-secondary); margin-top: 2px;">Freelance · 2018 – 2019</p>
        <p style="margin-top: 6px; font-size: 13.5px; line-height: 1.5;">Built small business websites and internal tools.</p>
      </div>
    `
  },
  certification: {
    title: "All Certifications",
    body: `
      <h4 style="color:var(--text-primary); margin-bottom:5px;">Associate Data Analyst</h4>
      <img src="datacamp-1.jpg" alt="Data Analyst" style="width: 100%; border-radius: 8px; margin-bottom: 20px;">
      
      <h4 style="color:var(--text-primary); margin-bottom:5px;">Intermediate SQL</h4>
      <img src="./arduino.jpg" alt="SQL" style="width: 100%; border-radius: 8px; margin-bottom: 20px;">
      
      <h4 style="color:var(--text-primary); margin-bottom:5px;">Intermediate Python</h4>
      <img src="./moba.jpg" alt="Python" style="width: 100%; border-radius: 8px;">
    `
  },
  recommendations: {
    title: "Recommendations",
    body: `<p>Nothing added yet — edit <code>modalContent.recommendations</code> in script.js with a quote.</p>`
  },
  proj1: {
    title: "Drake Album Store",
    body: `
      <img src="./drake.png" alt="Drake Album Store" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 14px; display: block;">
      <a href="https://deng040909.github.io/AlbumWebsite/" target="_blank" style="display: inline-block; background: var(--text-primary); color: var(--bg-top); padding: 8px 16px; border-radius: 8px; font-size: 13px; font-weight: 600; text-decoration: none;">Visit↗</a>
    `
  },
  proj2: {
    title: "Prototype Portfolio",
    body: `
      <img src="./prototype.png" alt="Prototype Portfolio" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 14px; display: block;">
      <a href="https://deng040909.github.io/page/" target="_blank" style="display: inline-block; background: var(--text-primary); color: var(--bg-top); padding: 8px 16px; border-radius: 8px; font-size: 13px; font-weight: 600; text-decoration: none;">Visit↗</a>
    `
  },
  proj3: {
    title: "Finding GOAT",
    body: `
      <img src="./goat.png" alt="Finding GOAT" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 14px; display: block;">
      <a href="https://deng040909.github.io/midterms/" target="_blank" style="display: inline-block; background: var(--text-primary); color: var(--bg-top); padding: 8px 16px; border-radius: 8px; font-size: 13px; font-weight: 600; text-decoration: none;">Visit↗</a>
    `
  },
  
  cert1: {
    body: `<img src="./HTMLFundamentals_certificateDaguisonAndrei.jpg" style="width: 100%; border-radius: 8px;">`
  },
  cert2: {
    body: `<img src="./arduino.jpg" style="width: 100%; border-radius: 8px;">`
  },
  cert3: {
    body: `<img src="./moba.jpg" style="width: 100%; border-radius: 8px;">`
  }
};

const overlay = document.getElementById("modal-overlay");
const modalEl = document.querySelector(".modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.getElementById("modal-close");

function openModal(key) {
  const data = modalContent[key];
  if (!data) return;

  // Wider modal for the individual project previews (proj1, proj2, proj3)
  modalEl.classList.toggle("modal-wide", /^proj\d$/.test(key));

  modalTitle.textContent = data.title || "";
  modalBody.innerHTML = data.body;

  overlay.classList.add("open");
  requestAnimationFrame(() => overlay.classList.add("visible"));

  document.addEventListener("keydown", handleEscape);
}

function closeModal() {
  overlay.classList.remove("visible");
  document.removeEventListener("keydown", handleEscape);
  setTimeout(() => overlay.classList.remove("open"), 200);
}

function handleEscape(e) {
  if (e.key === "Escape") closeModal();
}

document.querySelectorAll("[data-modal-trigger]").forEach((btn) => {
  btn.addEventListener("click", () => {
    openModal(btn.dataset.modalTrigger);
  });
});

closeBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});

const GEMINI_API_KEY = "AQ.Ab8RN6KcLBFNbZ9Mm351x1dO-wqcptKljZbh1KFkcZsKuB2uFQ";
const GEMINI_MODEL = "gemini-3.8-flash";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

const SYSTEM_INSTRUCTION = `You are the chat assistant embedded on Jan Andrei Daguison's personal portfolio site.
 Andrei is a third-year IT student whose technical skills and coursework cover Java, C#, Python, T-SQL, MongoDB, Git,
  Docker, and VS Code. His projects include a Drake Album Store, an early prototype portfolio, a Finding GOAT web page,
   a C# Student Profile App, StudyMate, an Instagram-style Java Swing GUI app, and a Java Swing calculator app. 
   His certifications include Associate Data Analyst, Intermediate SQL, and Intermediate Python. Keep all responses 
   strictly between 3 to 5 sentences long, and answer visitor questions about Andrei's background, skills, certifications,
    and projects in a friendly, concise way. If asked something unrelated, politely redirect back to the portfolio.
    CRITICAL RULE: Keep all responses strictly between 3 to 5 sentences long. You must ONLY answer questions directly related to Andrei's background, academic work, tech stack, certifications, and portfolio projects. If a user asks about anything else, general trivia, personal opinions, coding help unrelated to his projects, or off-topic subjects, you must refuse to answer and politely redirect them back to his portfolio.`;


const chatToggle = document.getElementById("chat-toggle");
const chatPanel = document.getElementById("chat-panel");
const chatClose = document.getElementById("chat-close");
const chatMessages = document.getElementById("chat-messages");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatSend = document.getElementById("chat-send");

let chatHistory = [];

function openChat() {
  chatPanel.classList.add("open");
  requestAnimationFrame(() => chatPanel.classList.add("visible"));
  if (chatMessages.children.length === 0) {
    addMessage("bot", "Hi! Ask me anything about Andrei's background, skills, or projects.");
  }
  chatInput.focus();
}

function closeChat() {
  chatPanel.classList.remove("visible");
  setTimeout(() => chatPanel.classList.remove("open"), 200);
}

chatToggle.addEventListener("click", () => {
  chatPanel.classList.contains("open") ? closeChat() : openChat();
});
chatClose.addEventListener("click", closeChat);

function addMessage(role, text) {
  const div = document.createElement("div");
  div.className = `chat-msg ${role}`;
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return div;
}

async function sendToGemini(userText) {
  chatHistory.push({ role: "user", parts: [{ text: userText }] });

  const res = await fetch(GEMINI_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": GEMINI_API_KEY
    },
    body: JSON.stringify({
      contents: chatHistory,
      systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] }
    })
  });

  if (!res.ok) {
    let detail = `HTTP ${res.status}`;
    try {
      const errBody = await res.json();
      if (errBody?.error?.message) detail = errBody.error.message;
    } catch (_) { /* body wasn't JSON */ }
    throw new Error(detail);
  }

  const data = await res.json();
  const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!reply) throw new Error("No response from Gemini.");

  chatHistory.push({ role: "model", parts: [{ text: reply }] });
  return reply;
}

chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;

  if (!GEMINI_API_KEY || GEMINI_API_KEY === "YOUR_API_KEY_HERE") {
    addMessage("user", text);
    addMessage("error", "Add your Gemini API key in script.js (GEMINI_API_KEY) to enable this chat.");
    chatInput.value = "";
    return;
  }

  addMessage("user", text);
  chatInput.value = "";
  chatSend.disabled = true;
  const thinkingMsg = addMessage("bot", "Thinking…");

  try {
    const reply = await sendToGemini(text);
    thinkingMsg.textContent = reply;
  } catch (err) {
    thinkingMsg.remove();
    addMessage("error", `Gemini error: ${err.message}`);
    console.error(err);
  } finally {
    chatSend.disabled = false;
    chatInput.focus();
  }
});

const themeToggleBtn = document.getElementById("theme-toggle");
const themeText = document.getElementById("theme-text");

// Check saved user preference on page load
if (localStorage.getItem("portfolio_theme") === "light") {
  document.body.classList.add("light-mode");
  if (themeText) themeText.textContent = "Dark Mode";
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");

    if (isLight) {
      if (themeText) themeText.textContent = "Dark Mode";
      localStorage.setItem("portfolio_theme", "light");
    } else {
      if (themeText) themeText.textContent = "Light Mode";
      localStorage.setItem("portfolio_theme", "dark");
    }
  });
}
