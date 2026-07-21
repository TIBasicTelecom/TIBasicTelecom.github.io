<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Basic Telecom — conexão simples, estável e próxima de você.">
  <title>Basic Telecom</title>
  <link rel="icon" href="assets/logo-icon.png" type="image/png">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="header">
    <div class="container topbar">
      <a class="brand" href="#inicio" aria-label="Basic Telecom — início">
        <img src="assets/logo.png" alt="Basic Telecom">
      </a>
      <div class="header-contact">
        <a href="https://wa.me/5519993309313"><small>WhatsApp</small><strong>+55 19 99330-9313</strong></a>
        <a href="mailto:administracao@basictelecom.com.br"><small>E-mail</small><strong>administracao@basictelecom.com.br</strong></a>
      </div>
    </div>
    <div class="nav-bar">
      <nav class="container nav" aria-label="Navegação principal">
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre nós</a>
        <a href="#diferenciais">Diferenciais</a>
        <a href="#contato">Fale com a Basic</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="container hero-grid">
        <div class="hero-copy">
          <span class="eyebrow">Internet do seu jeito</span>
          <h1>Conexão simples que aproxima pessoas e resultados.</h1>
          <p>Telecomunicação confiável para manter você, sua família e sua empresa sempre conectados.</p>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <div class="hero-mark">
            <img src="assets/logo.png" alt="">
            <strong>Conectando<br>possibilidades.</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="quick-contact">
      <div class="container quick-card">
        <h2>Procurando uma conexão <span>sem complicação?</span></h2>
        <a class="button" href="https://wa.me/5519993309313">Fale com nossa equipe <span aria-hidden="true">→</span></a>
      </div>
    </section>

    <section class="about" id="sobre">
      <div class="container about-grid">
        <div class="section-heading">
          <span class="section-label">Institucional</span>
          <h2>Sobre nós</h2>
        </div>
        <div class="about-copy">
          <p>A Basic Telecom nasceu para oferecer conexão de qualidade com atendimento próximo, transparente e sem complicação.</p>
          <p>Entendemos cada necessidade para entregar uma experiência simples, estável e feita para acompanhar sua rotina.</p>
          <a class="text-link" href="#contato">Converse com a Basic <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>

    <section class="performance" aria-label="Compromisso Basic Telecom">
      <div class="container">
        <span>Atendimento próximo</span>
        <h2>Conexão de qualidade para o que realmente importa.</h2>
      </div>
    </section>

    <section class="benefits" id="diferenciais">
      <div class="container">
        <div class="section-heading centered">
          <span class="section-label">Nossos diferenciais</span>
          <h2>Seu dia conectado. Do jeito certo.</h2>
        </div>
        <div class="benefit-grid">
          <article><strong>01</strong><h3>Qualidade</h3><p>Conexão estável para sua rotina continuar fluindo.</p></article>
          <article><strong>02</strong><h3>Proximidade</h3><p>Atendimento humano para entender o que você precisa.</p></article>
          <article><strong>03</strong><h3>Confiança</h3><p>Comunicação clara e compromisso em cada atendimento.</p></article>
          <article><strong>04</strong><h3>Simplicidade</h3><p>Soluções diretas, sem transformar conexão em problema.</p></article>
        </div>
      </div>
    </section>

    <section class="contact" id="contato">
      <div class="container contact-card">
        <div>
          <span class="section-label light">Fale com a Basic</span>
          <h2>Vamos conversar?</h2>
          <p>Nossa equipe está pronta para entender o que você precisa.</p>
        </div>
        <a class="button button-light" href="https://wa.me/5519993309313">Entrar em contato <span aria-hidden="true">→</span></a>
      </div>
    </section>
  </main>

  <footer>
    <div class="container footer-content">
      <img src="assets/logo.png" alt="Basic Telecom">
      <div class="footer-info">
        <p><span>E-mail</span><a href="mailto:administracao@basictelecom.com.br">administracao@basictelecom.com.br</a></p>
        <p><span>WhatsApp</span><a href="https://wa.me/5519993309313">+55 19 99330-9313</a></p>
        <p><span>CNPJ</span><strong>07.332.983/0001-02</strong></p>
      </div>
    </div>
    <div class="container copyright">© <span id="year"></span> Basic Telecom. Todos os direitos reservados. · <a href="privacidade.html">Política de Privacidade</a></div>
  </footer>

  <script>document.getElementById('year').textContent = new Date().getFullYear()</script>
</body>
</html>
