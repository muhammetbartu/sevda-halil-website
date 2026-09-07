const header = document.getElementById("header");
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");

const setMenu = (open) => {
  nav.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Menüyü kapat" : "Menüyü aç");
};

navToggle.addEventListener("click", () => {
  setMenu(!nav.classList.contains("is-open"));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

const navLinks = [...nav.querySelectorAll('a[href^="#"]:not(.nav-cta)')];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) =>
        link.classList.toggle(
          "is-active",
          link.getAttribute("href") === `#${entry.target.id}`
        )
      );
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);

sections.forEach((section) => sectionObserver.observe(section));

const CONTACT_EMAIL = "merhaba@sevdahalil.com";

const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const submitBtn = document.getElementById("submitBtn");

const showNote = (text, isError = false) => {
  formNote.textContent = text;
  formNote.classList.toggle("is-error", isError);
};

const openMailClient = (data) => {
  const subject = encodeURIComponent(`Ön görüşme talebi — ${data.get("name")}`);
  const body = encodeURIComponent(
    `Ad: ${data.get("name")}\nE-posta: ${data.get("email")}\nGörüşme türü: ${data.get(
      "topic"
    )}\n\n${data.get("message")}`
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = (data.get("name") || "").trim();
  const email = (data.get("email") || "").trim();
  const message = (data.get("message") || "").trim();

  if (!name || !email.includes("@") || !message) {
    showNote("Lütfen ad, e-posta ve mesaj alanlarını doldurun.", true);
    return;
  }

  if (!data.get("consent")) {
    showNote("Devam etmek için bilgilerinizin işlenmesini onaylamanız gerekiyor.", true);
    return;
  }

  // Formspree form kimliği girilmediyse mesajı ziyaretçinin e-posta uygulamasına devret.
  if (form.action.includes("FORMSPREE_ID")) {
    showNote("Mesajınız e-posta uygulamanızda hazırlanıyor.");
    openMailClient(data);
    return;
  }

  submitBtn.disabled = true;
  showNote("Mesajınız gönderiliyor…");

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (!response.ok) throw new Error(`Sunucu ${response.status} yanıtı verdi`);

    form.reset();
    showNote("Teşekkürler, mesajınız iletildi. En kısa sürede dönüş yapacağım.");
  } catch (error) {
    showNote(
      `Mesaj gönderilemedi. Lütfen tekrar deneyin veya doğrudan ${CONTACT_EMAIL} adresine yazın.`,
      true
    );
  } finally {
    submitBtn.disabled = false;
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
